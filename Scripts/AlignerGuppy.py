import time
import re
import os
import shutil
import subprocess
from subprocess import PIPE
import numpy as np
import pandas as pd
from pathlib import Path
from Global import Update, Log, Files


class GuppyAlignment:

    def __init__(self, input_directory: str, save_directory: str, align_reference: str):
        """
        This class will be responsible for results pertaining to read alignments. This class uses the guppy_alignment tool.
        guppy_aligner MUST be added to your $PATH, otherwise it will not work

        @param input_directory: The location of input files (usually a directory)
        @param save_directory: The location of output files (usually a directory)
        @param align_reference: The location of the reference file to use (a file)
        @return None
        """

        self.input_directory = input_directory
        self.save_directory = save_directory
        self.alignment_reference = align_reference
        self.file_paths = []
        self.iteration = 1
        self.number_of_files = 0

        self.alignment_summary_path = self.save_directory + "AlignmentSummary"
        self.sam_files = self.save_directory + "SAM_Files"
        self.log_path = self.save_directory + "logs"
        self.temp_folder = self.save_directory + ".temp"

        # these lists will hold header information for writing to a new .csv file
        self.sequence_name = []
        self.alignment_genome = []
        self.alignment_score = []
        self.alignment_accuracy = []
        self.barcode_number = []
        self.csv_file_path = []
        self.alignment_tool = "guppy_aligner"

        self.__collect_files()
        self.__perform_alignment()
        self.__write_simple_statistics()

        self.__remove_temp_folder()

    def __collect_files(self):
        """
        This function will collect all fastq/fasta files to be analyzed by guppy_aligner.
        @param: None
        @return None
        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=[".fastq", ".fasta"])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __perform_alignment(self):
        """
        This function will iterate through self.file_paths and perform guppy_aligner on each file
        @return None
        """

        # we want to make a temporary folder. If it exists, no error will arise
        os.makedirs(self.temp_folder, exist_ok=True)

        for file in self.file_paths:
            # we want to remove all files in the .temp directory before running guppy_aligner
            self.__remove_temp_files()

            # copy our current file to the temporary folder
            # first, we want to get the barcode number so we can rename the file
            barcode_number = re.search("(barcode)[0-9]{2}", file)
            if barcode_number is None:
                # if we cannot find `barcode##`, search for unclassified
                barcode_number = re.search("(unclassified)", file)

            # create new file name and move a copy to the temp folder
            barcode_number = file[barcode_number.start():barcode_number.end()]
            new_file_name = "guppy_aligner_{0}.fastq".format(barcode_number)
            shutil.copy(src=file, dst=self.temp_folder + "/" + new_file_name)

            # create the command for guppy_aligner
            message = "guppy_aligner --input_path {input} --save_path {save} --align_ref {alignment} --verbose_logs".format(
                input=self.temp_folder, save=self.sam_files, alignment=self.alignment_reference )

            # write to logs the file we are running
            self.__write_log_to_file(file_path=self.input_directory + "/" + file)

            """
            We must split the message into a list before subprocess.run() will accept it
            Usually we would test if this is being run inside snakemake. However, since we use a workaround to get an alignment summary for each barcode,
                we are running guppy_aligner on a temporary folder that contains one barcode file. Because of this, we do not want guppy_aligner to show
                its own output each time it runs on the temp folder. As a result, we will print our own  update statement simply showing what iteration
                we are on out of the total number of files 
            """
            message = message.split(" ")
            self.__update_task()
            command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)

            # we need to move the alignment_summary.txt file into the appropriate place immediately after running guppy_aligner
            self.__move_summary_files(file)

    def __move_summary_files(self, file_name):
        """
        guppy_aligner creates a result file, log file, and a .sam file for every .fastq file used. I don't like these files
        in the same directory, as the result file is more useful.

        Because of this, all files are initially saved to the
        SAM_Files directory, then the result and log files are moved one level up.

        @return new_file_path: This is the path of the new file location. It can be used to modify files further (if needed)
        """

        # make the AlignmentSummary and logs folders
        os.makedirs(self.alignment_summary_path, exist_ok=True)
        os.makedirs(self.log_path, exist_ok=True)

        # get the barcode number from the file name. It will be the second to last item after splitting by `_` and `.`
        # get the barcode name by searching for `barcode##`. If this fails, search for `unclassified
        barcode_number = re.search("(barcode)[0-9]{2}", file_name)
        if barcode_number is None:
            barcode_number = re.search("(unclassified)", file_name)

        barcode_number = file_name[barcode_number.start():barcode_number.end()]

        # move the alignment_summary.txt and read_processor to the parent directory
        alignment_summary_found = False
        log_file_found = False
        for root, directory, files in os.walk(self.sam_files):
            for file in files:
                # only one alignment summary and log file will be produced for each run of guppy_aligner. We only need to search for each file one time,
                #   then we can exit this loop
                if alignment_summary_found == True and log_file_found == True:
                    break
                else:
                    # move alignments summary into the AlignmentSummary folder (located one folder up)
                    if "alignment_summary" in file:
                        shutil.move(src=self.sam_files + "/" + file,
                                    dst=self.alignment_summary_path + "/guppy_aligner_" + barcode_number + ".csv")
                        alignment_summary_found = True
                    elif "read_processor" in file:
                        # this will rename files to the current date/time and barcode number
                        file_name = self.__get_date_time(barcode_number=barcode_number)
                        shutil.move(src=self.sam_files + "/" + file,
                                    dst=self.log_path + "/" + file_name)
                        log_file_found = True

    def __write_simple_statistics(self):
        """
        This function will look at the alignment_summary.txt in the folder specified by self.save_directory.
        It will calculate the percentage of reads that have been classified, and save its own text file in the same location

        @return None
        """
        id_total_experiment = 0
        id_total_experiment_classified = 0
        id_total_experiment_unclassified = 0

        for root, directory, files in os.walk( self.alignment_summary_path ):
            for file in files:

                # iterate through each file the list that contains "guppy_aligner_"
                if "guppy_aligner_" in file:

                    # set up the data frame for reading
                    try:
                        current_path = os.path.join(root, file)
                        data_frame = pd.read_csv(filepath_or_buffer=current_path,
                                                 sep="\t",
                                                 header=0,
                                                 dtype={
                                                     "read_id": np.str,
                                                     "alignment_genome": np.str,
                                                     "alignment_genome_start": np.int,
                                                     "alignment_genome_end": np.int,
                                                     "alignment_strand_start": np.int,
                                                     "alignment_strand_end": np.int,
                                                     "alignment_num_insertions": np.int,
                                                     "alignment_num_deletions": np.int,
                                                     "alignment_num_aligned": np.int,
                                                     "alignment_num_correct": np.int,
                                                     "alignment_identity": np.float,
                                                     "alignment_accuracy": np.float,
                                                     "alignment_score": np.int
                                                 })
                    except FileNotFoundError:
                        print("File not found: {0}".format(file))
                        break  # file is not found, we should not continue

                    # set up our total reads, classified reads, and unclassified reads variables
                    id_classified = 0
                    id_unclassified = 0

                    for row in data_frame['alignment_genome']:

                        # if the item in `alignment_genome` has data not equal to an asterisk, it is classified
                        if row != "*":
                            id_classified += 1

                        # otherwise it is unclassified
                        else:
                            id_unclassified += 1

                    id_barcode = id_classified + id_unclassified

                    # we will be collecting ids about the entire experiment, across barcodes
                    id_total_experiment += id_barcode
                    id_total_experiment_classified += id_classified
                    id_total_experiment_unclassified += id_unclassified

                    # set up our output results
                    try:
                        percent_classified = "{:.3f}%".format( (id_classified / id_barcode) * 100 )
                    except ZeroDivisionError:
                        percent_classified = "No barcode ids. Divide by zero error"
                    try:
                        percent_unclassified = "{:.3f}%".format( (id_unclassified / id_barcode) * 100 )
                    except ZeroDivisionError:
                        percent_unclassified = "No barcode ids. Divide by zero error"
                    rows = [
                        "Total reads: {0}".format(id_barcode),
                        "Classified reads: {0}".format(id_classified),
                        "Unclassified reads: {0}".format(id_unclassified),
                        "Percent classified: {0}".format(percent_classified) ,    # percentage with 3 decimal places
                        "Percent unclassified: {0}".format(percent_unclassified)  # percentage with 3 decimal places
                    ]

                    # we want to make an new folder to hold the simple statistics that will be generated for each file
                    simple_statistics_folder = self.save_directory + "/SimpleStatistics"
                    Path.mkdir( self=Path(simple_statistics_folder), exist_ok=True )

                    barcode_number = re.split('[_.]', file)[-2]  # we want the second to last item in the path, the barcode number

                    # open the output file, and write our data from the `rows` list
                    with open(simple_statistics_folder + "/simple_statistics_{0}.txt".format(barcode_number), 'w') as output_stream:
                        for row in rows:
                            output_stream.write(row)
                            output_stream.write("\n")

        # write total_ids for the experiment
        with open(self.save_directory + "/collated_simple_statistics.txt", 'w') as output_stream:
            try:
                percent_total_classified = "{:.3f}%".format( (id_total_experiment_classified / id_total_experiment) * 100 )
            except ZeroDivisionError:
                percent_total_classified = "Total IDS not counted correctly. Divide by zero error"
            try:
                percent_total_uncassified = "{:.3f}%".format( (id_total_experiment_unclassified / id_total_experiment) * 100 )
            except ZeroDivisionError:
                percent_total_uncassified = "Total IDS not counted correctly. Divide by zero error"

            rows = [
                "Total reads: {0}".format(id_total_experiment),
                "Classified reads: {0}".format(id_total_experiment_classified),
                "Unclassified reads: {0}".format(id_total_experiment_unclassified),
                "Percent classified: {0}".format(percent_total_classified),
                "Percent unclassified: {0}".format(percent_total_uncassified)
            ]
            for row in rows:
                output_stream.write(row)
                output_stream.write("\n")

    def __remove_temp_files(self):
        """
        This function will remove temporary files/directories in the self.save_directory + "/temp" folder, if any are present.
        """

        for root, directory, files in os.walk(self.temp_folder):
            for temp_file in files:
                os.remove(self.temp_folder + "/" + temp_file)
            for direc in directory:
                os.rmdir(self.temp_folder + "/" + direc)

    def __remove_temp_folder(self):
        """
        This function will be called at the very end of the GuppyAligner class to remove the .temp folder.
        The folder is not needed for long term storage, and can be safely deleted
        """
        try:
            shutil.rmtree(self.temp_folder)
        except FileNotFoundError:
            pass

    def __get_date_time(self, barcode_number):
        """
        This function is simply responsible for getting the date in the following format
        YEAR_MONTH_DAY-HOUR-MINUTE-BARCODE##.txt

        Returns: None
        """
        return time.strftime("%Y_%m_%d-%H_%M-{0}.txt".format(barcode_number))

    def __update_task(self):
        """
        We only want to show our own output if we are not calling this from snakemake
        If the line `snakemake.input[0]` fails, we are not inside snakemake and it is safe to show our own output
        If we are inside snakemake, we don't want to print anything to output
        # TODO: Determine a better way of showing a progress report to the user
        Returns: None
        """
        try:
            temp_var = snakemake.input[0]
        except NameError:
            Update("Guppy", self.iteration, self.number_of_files)
            self.iteration += 1

    def __write_log_to_file(self, file_path):
        """
        This function will call the Log class to write a specific line to the log file named below
        Args:
            file_path: This is the exact line you would like written to logs
        """

        line = "guppy_aligner --input_path {input} --save_path {save} --align_ref {alignment}".format(
            input=file_path, save=self.save_directory, alignment=self.alignment_reference )

        Log(program_name="guppy_aligner",
            message=line)


if __name__ == '__main__':
    try:
        input_directory = str(snakemake.input.input_directory)
        save_directory = str(snakemake.output.save_directory)
        alignment_file = str(snakemake.params.alignment_file)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/NanoFilt/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/"
        alignment_file = "/Users/joshl/PycharmProjects/ARS/Results/DataFiles/zymogen_alignment_reference.fasta"

    print("Starting Guppy Aligner")

    GuppyAlignment(input_directory=input_directory,
                   save_directory=save_directory,
                   align_reference=alignment_file)
