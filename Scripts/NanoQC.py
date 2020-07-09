import re
import subprocess
from subprocess import PIPE
import os
import shutil
from Global import Update, Log, Files


class NanoQCAnalysis:
    def __init__(self, input_directory, save_directory):
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.iteration = 1
        self.number_of_files = 0
        self.file_paths = []
        self.unknown_files = []

        self.__collect_files()
        self.__perform_analysis()

    def __collect_files(self):
        collect_files = Files(input_directory=self.input_directory, file_extensions=['.fastq', '.fasta'])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __perform_analysis(self):
        """
        This function will perform QualityControl analysis on all files in the _merged_files folder. It does not work at the
            moment, but it will eventually

         :return: None
        """

        # make sure the output folder is created
        os.makedirs(self.save_directory, exist_ok=True)

        for file_path in self.file_paths:
            message = "nanoQC -o {0} {1}".format(self.save_directory, file_path)
            message = message.split(" ")

            self.__update_task()
            command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)

            # if a file was not able to be analyzed, show it on the screen
            if "input error" in command.stderr.lower():
                # we only want to bring the last item with us (the file name) to show on screen
                self.unknown_files.append(file_path.split("/")[-1])

            self.rename_files(file_path)

    def rename_files(self, file_path):
        """
        This function will rename the generic `nanoQC.html` file into an html file with the barcode name
        i.e. nanoQC_barcode01_results.html
        """

        # The following series of commands will extract the barcode number from the file path
        barcode_index = re.search("(barcode)[0-9]{2}", file_path)

        # we have found `barcode##` in the file_path
        if barcode_index:
            barcode_number = file_path[barcode_index.start():barcode_index.end()]
            new_file_name = "nanoQC_{0}.html".format(barcode_number)
            new_log_path = "{save_direc}/logs/nanoqc_{barcode_num}.log".format(save_direc=self.save_directory, barcode_num=barcode_number)

        # we did not find a barcode number, assume this is unclassified
        else:
            new_file_name = "nanoQC_unclassified.html"
            new_log_path = "{save_direc}/logs/nanoqc_unclassified.log".format(save_direc=self.save_directory)

        new_file_path = "{save_direc}/{file_name}".format(save_direc=self.save_directory, file_name=new_file_name)

        os.makedirs(self.save_directory + "/logs", exist_ok=True)

        for root, directory, files in os.walk(self.save_directory):
            for file in files:

                # this will move nanoQC.html to nanoQC_barcode##.html
                # it will also remove the old nanoQC.html file
                if file.lower() == "nanoqc.html":
                    # the file needs to exist before we can move a new item into it
                    nano_qc_file = os.path.join(root, file)
                    open(new_file_path, 'w').close()
                    shutil.move(nano_qc_file, new_file_path)

                    # we are writing logs at this point in the program so we can use the new file path in the log message
                    self.__write_logs_to_file("NanoQC performed on output file: {0}".format(new_file_path))

                # this will move NanoQC.log to nanoQC_barcode##.log, inside the log directory
                elif file.lower() == "nanoqc.log":
                    # the file needs to exist before we can move a new item into it
                    open(new_log_path, 'w').close()
                    shutil.move(self.save_directory + "/NanoQC.log", new_log_path)

    def __write_logs_to_file(self, log_message):
        """
        This function will write log files to the location specified below after running NanoQC
        """
        Log(program_name="NanoQC.py",
            message=log_message)

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
            Update("NanoQC", self.iteration, self.number_of_files)
            self.iteration += 1


if __name__ == '__main__':
    try:
        input_directory = str(snakemake.input.input_directory)
        save_directory = str(snakemake.output.save_directory)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/Trim/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/NanoQC/"

    print("Starting NanoQC")

    NanoQCAnalysis(input_directory=input_directory,
                   save_directory=save_directory)
