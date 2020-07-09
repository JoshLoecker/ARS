from typing import TextIO
import re
import csv
import os  # os.walk(), os.join.path()
import pickle
import subprocess
import sys

sys.path.append("../")
from Scripts.Global import Log, Files


class Count:
    """
    This class is responsible for counting the number of barcodes present in the output of guppy_barcode
    """

    def __init__(self, input_directory, save_directory, file_name=None):
        """
        this is the main driver function, and will be ran when a Count() class is implemented
        Creates a file in the directory selected containing which barcode folders
        This will only work on .fastq/.fasta files

        :param str input_directory: The input location of .fastx files that you would like to count the number of reads of
        :param str save_directory: This is where the resulting .csv file will be saved
        :param str file_name: An optional parameter of the name of the file. A `.csv` extension will automatically be added at the end of your file name
        :return: None
        """

        self.save_directory = save_directory
        self.input_directory = input_directory
        self.file_name = file_name
        self.unclassified_folder_duplicate_value = 0
        self.barcode_correlations = { }
        self.number_of_files = 0
        self.total_barcodes = -1  # no barcodes found

        #  get locations of all barcode files
        self.file_paths = []

        # we want to check the output of paths, and ensure that the argument input is correct
        # self.__validate_file_argument_input()

        #  count barcodes
        self.__collect_file_paths()
        self.total_barcodes = self.__count_barcodes(self.file_paths)
        self.__write_correlations_to_file()

    def __collect_file_paths(self):
        """
        This method calls the Global.Files class to collect file paths and total number of files.
        It will place the list of file paths in the self.file_paths class member variable.
        It will place the total number of files in self.number_of_files

        Returns: None
        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=['.fastq', '.fasta'])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __validate_file_argument_input(self):
        correct_input = True

        # try to clear the screen
        try:
            subprocess.run("clear")
        except FileNotFoundError:
            subprocess.run("cls")

        if len(self.file_paths) == 0:
            print("")
            print("No files were returned from your input path")
            print("If your path contains spaces, please place quotations around them when calling CountReads.py")
            print("Input path: {0}".format(self.input_directory))
            correct_input = False

        if not os.path.isdir(self.input_directory):
            print("")
            print("Your input path is not a directory")
            print("If your path contains spaces, please place quotations around them when calling CountReads.py")
            print("Input path: {0}".format(self.save_directory))
            correct_input = False

        if not os.path.isdir(self.save_directory):
            print("")
            print("Your save path is not a directory")
            print("Save path: {0}".format(self.save_directory))
            correct_input = False

        # if `/` or `\` in self.file_name, tell user they cannot do this
        if self.file_name is not None and any(x in "\\/" for x in self.file_name):
            print("")
            print("You cannot have a slash (forward or backward) in your file name")
            print("File name: {0}".format(self.file_name))
            correct_input = False

        if not correct_input:
            exit(0)

    def __count_barcodes(self, barcode_file_path):
        """
        This function will take an iterable as its parameter and count the number of barcodes present in each file
        It does this by finding the .fasta (>) or .fastq (@) 'identifier' at the beginning of each line. If it finds one if these,
            then it will count the line as one sequence
        It will return an integer containing the total number of barcodes found throughout the files passed in

        ------------------------------- LIST EXAMPLE -------------------------------
        barcode_file_path = [
            "/Users/USERNAME/minknow_data/2020-02-15/barcode01/text_file_with_barcodes_01.txt",
            "/Users/USERNAME/minknow_data/2020-02-15/barcode01/text_file_with_barcodes_02.txt",
            "/Users/USERNAME/minknow_data/2020-02-15/barcode01/text_file_with_barcodes_03.txt"
        ]

        :param list barcode_file_path: iterable (list, tuple)
        :return: int total_barcodes
        """

        # this will be returned
        total_barcodes = 0

        # create a simple progress bar
        # iterate over each barcode file
        for barcode_file in barcode_file_path:

            # open each `barcode_file` as `file`
            with open(barcode_file, 'r') as input_stream:
                file_barcodes = 0
                # set the identifier for FASTQ ("@") or FASTA (">") files
                identifier = ""
                if ".fastq" in str(input_stream):
                    identifier = "@"
                elif ".fasta" in str(input_stream):
                    identifier = ">"

                # we only want to use files that have .fastq/.fasta in their file name
                # `identifier` is reset after opening each file. If identifier == "", .fastq/.fasta has not been found in the file name
                if identifier != "":
                    # iterate over each line in the barcode file
                    for line in input_stream:
                        # test if the beginning of a line has the identifier (`@` or `>`)
                        if line[0] == identifier:
                            total_barcodes += 1
                            file_barcodes += 1

                    self.__correlate_barcodes(file_barcodes, input_stream)

        return total_barcodes

    def __correlate_barcodes(self, reads_in_file: int, file_path: TextIO):
        """
        This function will correlate the number of barcodes to each barcode folder
        It will do this by adding a key/value pair to the dictionary self.barcode_correlations in __init__()
        This dictionary can be used in other class methods

        Args:
            reads_in_file: the number of barcodes in the current file
            file_path _io.TextIO: the current file path

        Returns: None

        """

        # These lines will find the match "barcode##"
        barocde_index = re.search("(barcode)[0-9]{2}", str(file_path).lower())
        unclassified_index = re.search("(unclassified)", str(file_path).lower())
        folder_number = ""

        """
        Barcodes are written in the format of `barcode##`, where ## are two integers. Alternatively, if the barcode is not matched,
            it will be `unclassified`.
        When trying to search for the barcode## or unclassified location in the file path, a .start() and .end() location will
            be returned if the location was found. If it was not found, the object will be None (i.e. barcode_index = None)
        We can use this to determine if the current path is a barcode## or unclassified
        """
        # we have found a barcode## in the file path
        if barocde_index is not None:
            folder_number = str(file_path)[barocde_index.start(): barocde_index.end()]
        # we have not found a barcode##, see if we have found unclassified
        elif unclassified_index is not None:
            folder_number = str(file_path)[unclassified_index.start(): unclassified_index.end()]

        # we want to make sure we have found barcode## or unclassified in folder_number
        # if folder_number == "", we will simply pass over this section
        if folder_number != "":
            # we want to add a new entry if the current barcode has not been added
            if folder_number not in self.barcode_correlations.keys():
                self.barcode_correlations[folder_number] = reads_in_file

            # if the entry is already present, we want to add reads_in_file to the current value
            else:
                self.barcode_correlations[folder_number] += reads_in_file

    def __write_correlations_to_file(self):
        """
        This function will write the dictionary self.barcode_correlations to a text file. This file can be specified by
        the user. For now, this will be saved in the same directory as the barcode folders under the name
        "barcode_counts.txt".

        :param: None
        :return: None
        """

        if self.file_name is None:
            pickle_file_name = self.save_directory + "/barcode_pickle_dump.pkl"
            save_directory = self.save_directory + "/barcode_counts.csv"
        else:
            pickle_file_name = self.save_directory + "/{0}.pkl".format(self.file_name)
            save_directory = self.save_directory + "/{0}.csv".format(self.file_name)

        sorted_keys = sorted(self.barcode_correlations)

        # make the directory to write files. The directory may exist, so move on if it does
        try:
            os.mkdir(self.save_directory)
        except FileExistsError:
            pass

        with open(save_directory, 'w') as output_stream:
            csv_writer = csv.writer(output_stream)

            # write a header row
            csv_writer.writerow(['barcode_number', 'reads_in_barcode'])

            # using each key
            for key in sorted_keys:
                # write data to file
                csv_writer.writerow([key, '%d' % self.barcode_correlations[key]])
                self.__write_log_to_file(key)

        """
        Serialization is a process that saves data to a file so it can be used in its exact state at a later time
        Python's `pickle` module does this very easily
        I am using this on the self.barcode_correlations dictionary in case its data is needed again later
        """
        output_file = open(pickle_file_name, 'wb')
        pickle.dump(self.barcode_correlations, output_file)
        output_file.close()

        """
        Reading a pickle file can be done below
        This will result in the same exact variable type as self.barcode_correlations
        
        self.barcode_correlations = { 'barcode01': [123,
                                                    FILE_NAME_01],

                                      'barcode02': [456,
                                                    FILE_NAME_02]
                                      } etc.
            
        pickle_read = r"/Users/joshl/minknow_data/CLC_2020-02-11/demultiplex_dual/barcode_pickle_dump.pkl"
        infile = open(pickle_read, 'rb')
        new_dict = pickle.load(infile)
        infile.close()

        for key in new_dict:
            print(key, new_dict[key])
        """

    def __write_log_to_file(self, barcode_number: str):
        """
        This function will write to a log file stating what barcode is being counted

        It will write logs in the following format: YEAR-MONTH-DAY HOUR:MINUTE -- COMMAND LINE
                                                    2020-06-01 09:35 | barcode03 completed counting
                                                    2020-06-01 15:05 | barcode45 completed counting

        :param str barcode_number: This is the current file path that is being counted
        """

        # find the barcode index to know that it has been counted
        barcode_index = -1
        for index in range(len(self.file_paths)):
            if barcode_number in self.file_paths[index]:
                barcode_index = index

        # the barcode has NOT been found
        if barcode_index == -1:
            message = "Unknown Barcode: {0}".format(barcode_number)
        # the barcode HAS been found
        else:
            message = "Completed count on: {0}".format(self.file_paths[barcode_index])

        Log(program_name="CountReads",
            message=message)


if __name__ == '__main__':

    barcode_directories = [snakemake.input.count_barcode,
                           snakemake.output.save_barcode,
                           snakemake.params.barcode_file_name]

    trim_directories = [snakemake.input.count_trim,
                        snakemake.output.save_trim,
                        snakemake.params.trim_file_name]

    quality_filter_directories = [snakemake.input.count_nano_filt,
                                  snakemake.output.save_nano_filt,
                                  snakemake.params.nano_filt_file_name]

    # count barcodes
    Count(
        input_directory=barcode_directories[0],
        save_directory=barcode_directories[1],
        file_name=barcode_directories[2]
    )

    # count trimmed
    Count(
        input_directory=trim_directories[0],
        save_directory=trim_directories[1],
        file_name=trim_directories[2]
    )

    # count quality filtered
    Count(
        input_directory=quality_filter_directories[0],
        save_directory=quality_filter_directories[1],
        file_name=quality_filter_directories[2]
    )
