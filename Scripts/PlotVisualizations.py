import plotly.express as px
import pathlib
import re
import pandas as pd
import numpy as np
import os
import subprocess
from subprocess import PIPE
from Global import Update, Log, Files


class Plotly:
    def __init__(self, data_file: str, save_directory: str, grouped_file_name=None, individual_file_name=None):
        """
        This will optionally create two plots: The first is a NanoPlot graph, which requires a fastq file.
        The second is a plotly graph, which requires the csv file generated from CountReads

        :param str data_file: This is the csv file generated from CountReads
        :param str save_directory: This is where the output should be saved
        :param str grouped_file_name: If you would like to set a name for the plotly graph that contains all data points of the same color, set a file name here. This is not required
        :param str individual_file_name: If you would like to set a name for the plotly graph separating the data points by color, specify a file name here. This is not required
        :return: None
        """
        self.data_file = data_file
        self.save_directory = save_directory
        self.grouped_file_name = grouped_file_name
        self.individual_file_name = individual_file_name

        # Histogram data
        self.unclassified_count = "Unknown"  # set the variable so it can be modified later
        self.plot_data = None
        self.gruoped_histogram = None
        self.individual_histogram = None

        # title row in data_file
        self.barcode_number = 'barcode_number'
        self.read_count = 'reads_in_barcode'

        # file name variables
        self.grouped_data_file_name = ""
        self.individual_data_file_name = ""

        # call functions
        self.__create_plotly_histogram()
        self.__update_layout()
        self.__modify_html_title()
        self.__change_html_title_page()
        self.__write_logs_to_file(file_path=self.grouped_data_file_name)
        self.__write_logs_to_file(file_path=self.individual_data_file_name)

    def __create_plotly_histogram(self):
        """
        This function will create a plotly density graph using the self.data_file paramater from __init__
        It will attempt to exclude outliers from showing on the graph, and instead show them as an overlay on the side

        Returns: None

        """

        # load csv file
        csv_path = self.data_file
        self.plot_data = pd.read_csv(filepath_or_buffer=csv_path,
                                     delimiter=",",
                                     header=0,  # first row
                                     dtype={ self.barcode_number: str,
                                             self.read_count    : int })

        # attempt to find the number of unclassified reads
        # if we cannot find the `unclassified` row, set it to "Unknown"
        for row in range(len(self.plot_data[self.barcode_number])):
            if self.plot_data[self.barcode_number][row] == "unclassified":
                self.unclassified_count = self.plot_data[self.read_count][row]
        self.plot_data = self.plot_data[:-1]

        # create the single-color histogram
        self.grouped_histogram = px.histogram(data_frame=self.plot_data,
                                              x=self.read_count,
                                              y=self.barcode_number,
                                              hover_name=self.plot_data[self.barcode_number],
                                              hover_data=[self.plot_data[self.read_count]],
                                              labels={'reads_in_barcode': 'Reads in barcode'},
                                              marginal="box"  # rug: data points above graph; box: boxplot above graph
                                              )

        # TODO: The same color will appear right next to itself on some occations; see if this can be changed
        #   so every color is surrounded by a different color. Colors may still be repeated.
        # Create the individual-color histogram
        self.individual_histogram = px.histogram(data_frame=self.plot_data,
                                                 x=self.read_count,
                                                 y=self.barcode_number,
                                                 hover_name=self.plot_data[self.barcode_number],
                                                 hover_data=[self.plot_data[self.read_count]],
                                                 color=self.barcode_number,
                                                 labels={'reads_in_barcode': 'Reads in barcode'}
                                                 )

    def __update_layout(self):
        """
        This function is responsible for modifying the look and feel of each histogram.
        Returns: None
        """

        # set info for hovering over data points
        hover_label_data = dict(
                bgcolor="white",
                font_size=16,
                font_family="Rockwell"
            )

        # Set a title, location, size
        title_data = {
                'text'   : 'Comparison between read length and barcode number',
                'x'      : 0.5,
                'xanchor': 'center',
                'font'     : dict(size=25)
            }

        # This will set a small annotation specifying when this step was complete
        annotation_data = [dict(xref='paper',
                                yref='paper',
                                x=0.5,
                                y=1.035,
                                showarrow=False,
                                text='Performed after filtering barcodes',
                                font=dict(
                                    size=18
                                )),
                           # add unclassified annotation
                           dict(xref='paper',
                                yref='paper',
                                x=1.00,
                                y=1.03,
                                showarrow=False,
                                text="Unclassified Reads: %s" % self.unclassified_count,
                                font=dict(
                                    size=18
                                )),
                           # average reads (excludes unclassified)
                           dict(xref='paper',
                                yref='paper',
                                x=1.00,
                                y=1.00,
                                showarrow=False,
                                text="Average reads (excluding unclassified): %.0f" % np.average(self.plot_data[str(self.read_count)][:-1]),
                                font=dict(
                                    size=18
                                ))
                           ]

        xaxis_title_data = "Reads in Barcode"
        yaxis_title_data = "Frequency"
        font_data = dict( size=17 )

        self.grouped_histogram.update_layout(
            # format data when hovering over points
            hoverlabel=hover_label_data,
            # format the title
            title=title_data,
            # format extra info (will appear right below title)
            annotations=annotation_data,
            # set axis titles and size
            xaxis_title=xaxis_title_data,
            yaxis_title=yaxis_title_data,
            font=font_data
        )

        self.individual_histogram.update_layout(
            # format data when hovering over points
            hoverlabel=hover_label_data,
            # format the title
            title=title_data,
            # format extra info (will appear right below title)
            annotations=annotation_data,
            # set axis titles and size
            xaxis_title=xaxis_title_data,
            yaxis_title=yaxis_title_data,
            font=font_data
        )

    def __modify_html_title(self):
        """
        This function will modify the title name within the HTML file so it is easier to reference when viewing in a browser
        Returns: None
        """

        # set grouped-graph file name (if one is present)
        if self.grouped_file_name is None:
            self.grouped_data_file_name = self.save_directory + "/grouped_plot.html"
        else:
            self.grouped_data_file_name = self.save_directory + "/{0}.html".format(self.grouped_file_name)

        # set individual-graph file name (if one is present)
        if self.individual_file_name is None:
            self.individual_data_file_name = self.save_directory + "/individual_plot.html"
        else:
            self.individual_data_file_name = self.save_directory + "/{0}.html".format(self.individual_file_name)

        # first we must get the html file path so the location(s) can be created
        html_file_path = self.grouped_data_file_name.split("/")[:-1]
        html_file_path = "/".join(html_file_path)

        os.makedirs(html_file_path, exist_ok=True)

        # then, we are going to clear the data so new info can be written
        open(self.grouped_data_file_name, 'w').close()
        open(self.individual_data_file_name, 'w').close()

        self.grouped_histogram.write_html(self.grouped_data_file_name)
        self.individual_histogram.write_html(self.individual_data_file_name)

    def __change_html_title_page(self):
        # read data from grouped_html into grouped_data
        with open(self.grouped_data_file_name, 'r') as grouped_original_input_stream:
            grouped_data = grouped_original_input_stream.read()

        # read data from individual_html into individual_data
        with open(self.individual_data_file_name, 'r') as individual_original_input_stream:
            individual_data = individual_original_input_stream.read()

        # write new data to grouped_html, then to individual_html
        # this will add a title to the html file (on the first line)
        with open(self.grouped_data_file_name, 'w') as grouped_modified_output_stream:
            if self.grouped_file_name is None:
                grouped_modified_output_stream.write("<title>Grouped Plot</title>\n")
                grouped_modified_output_stream.write(grouped_data)

            else:
                grouped_modified_output_stream.write( "<title>{0}</title>\n".format(self.grouped_file_name) )
                grouped_modified_output_stream.write(grouped_data)

        with open(self.individual_data_file_name, 'w') as individual_modified_output_stream:
            if self.individual_file_name is None:
                individual_modified_output_stream.write("<title>Individual Plot</title>\n")
                individual_modified_output_stream.write(individual_data)
            else:
                individual_modified_output_stream.write( "<title>{0}</title>\n".format(self.individual_file_name) )
                individual_modified_output_stream.write(individual_data)

    def __write_logs_to_file(self, file_path):
        """
        This function will write the time that a plotly graph was created. It will be ran for each graph that is created
        :param str file_path: This is where the file will be saved
        """

        Log(program_name="Plotly",
            message="output saved to: {0}".format(file_path))


class NanoPlot:
    def __init__(self, input_directory, save_directory):
        """
        This function will run NanoPlot on an input folder. Enter the directory of multiple .fastq/.fasta files as input, and the results will be saved into the save_directory
        :param str input_directory: This is the parent folder of the .fastq/.fasta files
        :param str save_directory: This is where you would like to save the output files of NanoPlot; NanoPlot creates many files per .fastq/.fastsa, so they will be placed in their own barcode folder
        """
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.file_paths = []
        self.invalid_files = []
        self.iteration = 0
        self.number_of_files = 0

        self.__collect_files()
        for file in self.file_paths:
            self.__create_nanoplot(file)
        self.__print_invalid_files()

    def __collect_files(self):
        """
        This function will collect .fastq/.fasta files and append them to the self.file_paths variable.

        :returns: None
        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=[".fastq", ".fasta"])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __create_nanoplot(self, file_path):
        """
        This function will take a file path as input and execute NanoPlot on the file
        Args:
            file_path: This is the exact file path that NanoPlot should execute on
        Returns: None

        """
        self.__update_task()
        save_folder = self.__get_new_folder_name(file_path)

        # try to make the output directory
        try:
            pathlib.Path.mkdir( self=pathlib.Path(self.save_directory), exist_ok=True )
        except FileExistsError:
            pass

        message = "NanoPlot --fastq {0} --outdir {1}".format( file_path, save_folder )
        try:
            self.__write_logs_to_file(message)
            message = message.split(" ")
            command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)

        except FileNotFoundError:
            self.invalid_files.append(file_path)

    def __get_new_folder_name(self, file):
        barcode_number = re.split('[_.]', file)[-2]  # get the second to last item after splitting by underscores and periods
        new_save_path = self.save_directory + "/{0}".format(barcode_number)
        pathlib.Path.mkdir(pathlib.Path(new_save_path), exist_ok=True)
        return new_save_path

    def __print_invalid_files(self):
        if len(self.invalid_files) > 1:
            print("\rThe following files could not be found. If you are trying to procedss a large number of files and they do not appear,")
            print("\tensure your input and output directories are correct.")
            for file in self.invalid_files:
                print(file)
        elif len(self.invalid_files) == 1:
            print("\rThe following file could not be found.")
            print(self.invalid_files[0])
        else:
            print("\rNanoPlot has successfully processed {0} of {0} files.".format(self.iteration, len(self.file_paths)))


    def __write_logs_to_file(self, command):
        """
        This will call the Log function to write a line to the specified log path.

        :param str command: This is the line that will be written to the log. Its parameters can be found in self.__create_nanoplot
        """

        Log(program_name="NanoPlot",
            message=command)

    def __update_task(self):
        Update("NanoPlot", self.iteration, self.number_of_files)
        self.iteration += 1


if __name__ == '__main__':
    try:
        # Plotly
        data_file = snakemake.input.data_file
        plotly_save_directory = snakemake.input.plotly_save_directory
        grouped_file_name = snakemake.input.grouped_file_name
        individual_file_name = snakemake.input.individual_file_name

        # NanoPlot
        nanoplot_input_directory = snakemake.input.nanoplot_input_directory
        nanoplot_save_directory = snakemake.input.nanoplot_save_directory

    except NameError:
        # Plotly
        data_file = "/Users/joshl/PycharmProjects/ARS/Results/CountReads/nanofilt/nanofilt_count_reads.csv"
        plotly_save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Visuals/Plotly"
        grouped_file_name = None
        individual_file_name = None

        # NanoPlot
        nanoplot_input_directory = "/Users/joshl/PycharmProjects/ARS/Results/NanoFilt/"
        nanoplot_save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Visuals/NanoPlot"


    print("Starting plotly visualizations. . .")
    # Plotly(data_file=data_file, save_directory=plotly_save_directory, grouped_file_name=grouped_file_name, individual_file_name=individual_file_name)

    print("Starting NanoPlot visualizations. . .")
    NanoPlot(input_directory=nanoplot_input_directory,
             save_directory=nanoplot_input_directory)
