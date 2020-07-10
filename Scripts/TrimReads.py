import re
import os
import subprocess
from subprocess import PIPE
from Global import Update, Log, Files


class Trim:
    def __init__(self, input_directory: str, save_directory: str, error_rate: float):
        """
        This class is responsible for orienting and trimming reads using the cutadapt program
        Analysis will be performed on initiating class instance

        Args:
            input_directory: Where to read files from
            save_directory: Where to save program results
        Returns: None
        """

        self.input_directory = input_directory
        self.save_directory = save_directory
        self.file_paths = []
        self.unknown_files = []

        self.number_of_files = 0
        self.iteration = 1

        self.primer_5 = "TTTCTGTTGGTGCTGATATTGCAGRGTTYGATYMTGGCTCAG"
        self.primer_3 = "ACTTGCCTGTCGCTCTATCTTCTACCTTGTTACGACTT"
        self.primer_5_no_adapter = "AGRGTTYGATYMTGGCTCAG"
        self.primer_3_no_adapter = "TACCTTGTTACGACTT"
        self.error_rate = error_rate

        self.__collect_files()
        self.__trim_reads()
        self.__print_unknown_files()

    def __collect_files(self):
        """
        This will call DataFiles, which is responsible for collecting all files with the extension file_extensions and returning a list
        Returns: None
        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=[".fastq", ".fasta"])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __trim_reads(self):
        """
        This function will iterate through the files found in self.file_paths and perform cutadapt analysis on them.
        Returns: None
        """
        for file in self.file_paths:
            output_file = self.__create_output_files(file)
            message = "cutadapt --revcomp --quiet --cores 0 --adapter {primer_3} --front {primer_5} --error-rate {error_rate} --output {out_file_path} {in_file_path}".format(
                primer_3=self.primer_3,
                primer_5=self.primer_5,
                error_rate=self.error_rate,
                out_file_path=output_file,
                in_file_path=file
            )
            self.__write_logs_to_file(message)
            message = message.split(" ")

            # we want to write our own output only if we are not running snakemake
            try:
                temp_var = snakemake.input[0]
            except NameError:
                self.__update_task()
            command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)

            if "input file format" in command.stderr.lower():
                self.unknown_files.append(file)

    def __create_output_files(self, file_path: str):
        """
        Cutadapt needs the output file to be created before it is able to write to it.
        This function will create the appropriate directories/files needed for cutadapt
        Args:
            file_path: This is the name of the file to be analyzed by cutadapt. The directory will be pulled from self.save_directory
        Returns:
            new_save_directory: This is where the output data should be saved
        """
        # split the file path by '/' and get the last item (the file name)
        # use re.split() to split by '_' and '.', which will separate the barcode number from the rest of the file name.
        # the barcode number is the second to last item

        # we will use regex to search for barcode##
        # if this doesn't work, we will try to search for unclassified
        # one of these two should work as we have already searched for .fasta/.fastq files with the Files() class
        # when splitting by `.`, the very last thing is going to be the file extension
        barcode_index = re.search("(barcode)[0-9]{2}", file_path)
        file_extension = file_path.split(".")[-1]

        # we have found something that follows barcode##
        if barcode_index:
            barcode_number = file_path[barcode_index.start():barcode_index.end()]
            new_save_directory = self.save_directory + "/trimmed_reads_{0}.{1}".format(barcode_number, file_extension)
        # we have found unclassified instead
        # we don't need to find `unclassified` in the string because there is no associated barcode
        else:
            new_save_directory = self.save_directory + "/trimmed_reads_unclassified.{0}".format(file_extension)

        # create the necessary folders and open the output file so it can be written to
        os.makedirs(self.save_directory, exist_ok=True)
        open(new_save_directory, 'w').close()
        return new_save_directory

    def __print_unknown_files(self):
        """
        This will print some simple updates to the command line at the end of the process if items were unable to be processed by cutadapt.
        It is most likely that these files are csv files, log files, etc. and not .fastq files, but it doesn't hurt to let the user know that something went wrong
        This will happen if we are running in snakemake or not
        """
        if len(self.unknown_files) > 1:
            print("\rCutadapt did not know how to process the following files:")
            for file in self.unknown_files:
                print("\t%s" % file)
        elif len(self.unknown_files) == 1:
            print("\rCutadapt did not know how to process the following file: %s" % self.unknown_files[0])

    def __write_logs_to_file(self, command: str):
        """
        This function will output logs to the location below after trimming reads
        Args:
            command: This is the exact line that should be written to the log file
        """

        Log(program_name="TrimReads",
            message=command)

    def __update_task(self):
        """
        This function will simply over-write the current line and print and update statement
        """
        Update("Cutadapt", self.iteration, self.number_of_files)
        self.iteration += 1


if __name__ == '__main__':

    try:
        input_directory = str(snakemake.params.barcode_input)
        save_directory = str(snakemake.output)
        error_rate = float(snakemake.params.error_rate)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/Barcode/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Trim/"
        error_rate = 0.15


    print("Starting cutadapt to trim barcodes. . .")
    Trim(input_directory=input_directory,
         save_directory=save_directory,
         error_rate=error_rate)
