import subprocess
from subprocess import PIPE
import re
import os
from Global import Log, Update, Files


class VSearch:
    def __init__(self, input_directory: str, save_directory: str, reference_file: str, match_rate: float = 0.90):
        """

        This class will handle alignments using vsearch (a cousin of usearch)
        match_rate is a percentage. If its value is between 0 and 1, it will be taken as a percent (i.e. 0.42 = 42%).
            If this value is between 1 and 100, it will be divided by 100 to create a percent (i.e. 57 -> 0.57 = 57%)

        Args:
            input_directory (str): This is the directory containing .fasta/.fastq files
            save_directory (str): This is the directory where results should be saved. DataFiles will have the barcode number of the input file
            match_rate (float): This is the `id` rate of vsearch. It specifies the specificity in percent that vsearch should use. By default, it is set to 0.90 (90%)

        Returns:
            None
        """
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.reference_file = reference_file
        self.match_rate = match_rate
        self.file_paths = []
        self.number_of_files = 0
        self.iteration = 1

        self.__check_match_rate()
        self.__collect_files()
        self.__perform_alignment()

    def __check_match_rate(self):
        """
        This function will check the match_input value.
        If it is greater than 1, it will divide by 100 to create a percentage (45 -> 0.45)
        If it is less than 0, it will break the script and give output that the match_rate is incorrect
        If it is between 0 and 1, it will do nothing
        Returns:
            None
        """
        # self.match rate greater than 1 and less than 100 (percent greater than 100 is not valid
        if 1.0 < self.match_rate < 100.0:
            self.match_rate /= 100
        elif self.match_rate <= 0:
            print("Sorry, your match_rate argument must be a percentage between 0 and 1.")
            exit(0)

    def __collect_files(self):
        """
        This will retrieve .fasta/.fastq files from the input_directory parameter.
        It will save entire file paths to self.file_paths, and add 1 to self.number_of_files in the process
        This will collect all .fasta/.fastq files in the input_directory, so be aware of where files are saved

        Returns:
            None
        """
        file_info = Files(input_directory=self.input_directory, file_extensions=[".fasta", ".fastq"])
        self.file_paths = file_info.file_paths
        self.number_of_files = file_info.total_files

    def __perform_alignment(self):
        """
        This function will perform vsearch on all files in the self.file_paths list.

        Returns:
            None
        """
        for file in self.file_paths:
            sam_save_path = self.__return_new_save_path(file, "sam")
            uc_save_path = self.__return_new_save_path(file, "uc")

            message = "vsearch --usearch_global {input_file} --db {reference_file} --acceptall --samout {sam_file_output} --ucout {uc_file_output}".format(
                input_file=file,
                reference_file=self.reference_file,
                sam_file_output=sam_save_path,
                uc_file_output=uc_save_path)

            message = message.split(" ")
            # we are going to clear out the output file so vsearch does not create duplicate results
            open(sam_save_path, 'w').close()
            open(uc_save_path, 'w').close()

            self.__update_task()
            command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)
            self.__log_to_file(message)

    def __return_new_save_path(self, file_path: str, sam_or_uc_file: str):
        """
        This function will take one a file input path and extract its barcode from the name (i.e. barcode45). It will then concatenate this number to
            self.save_directory, and return the new string. This provides the new save path.

        The new file will be created by this function to ensure it can be written to.
        Args:
            file_path: The file path that is going to be analyzed
            sam_or_uc_file (str): This should be "sam" or "uc" to generate a .sam file, or a .uc file. Files will be placed in appropriate folders under Results/Alignments/vsearch

        Returns:
            new_path: This is a file path that points to a valid file. The file will be created.
        """

        # use regex to search for `barcode##`. If we cannot find it, try to search for `unclassified`
        barcode_number = re.search("(barcode[0-9]{2})", file_path)
        if barcode_number is None:
            barcode_number = re.search("(unclassified)", file_path)
        barcode_number = file_path[barcode_number.start():barcode_number.end()]

        if sam_or_uc_file == "sam":
            folder_path = self.save_directory + "SAM_Files"
            new_file_name = folder_path + "/vsearch_{0}.sam".format(barcode_number)
        else:  # sam_ur_uc_file == uc
            folder_path = self.save_directory + "UC_Files"
            new_file_name = folder_path + "/vsearch_{0}.uc".format(barcode_number)

        # make the folders
        os.makedirs(folder_path, exist_ok=True)

        # open the file path to ensure it exists
        try:
            open(new_file_name, 'r').close()
        except FileNotFoundError:
            open(new_file_name, 'w').close()

        return new_file_name

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
            Update("VSearch", self.iteration, self.number_of_files)
            self.iteration += 1

    @staticmethod
    def __log_to_file(message):
        Log(program_name="vsearch_aligner",
            message=message)


if __name__ == '__main__':

    try:
        input_directory = str(snakemake.input.input_directory)
        save_directory = str(snakemake.output.save_directory)
        reference_file = str(snakemake.params.alignment_file)
        match_rate = float(snakemake.params.match_rate)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/NanoFilt/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/vsearch/"
        reference_file = "/Users/joshl/PycharmProjects/ARS/Results/DataFiles/zymogen_alignment_reference.fasta"
        match_rate = 0.90

    print("Starting VSearch Aligner")

    VSearch(input_directory=input_directory,
            save_directory=save_directory,
            reference_file=reference_file,
            match_rate=match_rate)
