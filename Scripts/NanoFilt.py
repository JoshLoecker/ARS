import re
import subprocess
from subprocess import PIPE
from Global import Files, Update

class NanoFilt:
    def __init__(self, input_directory, save_directory):
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.file_paths = []
        self.total_files = 0
        self.iteration = 1

        self.__collect_files()
        for file in self.file_paths:
            self.__update_task(self.iteration)
            self.__perform_filtering(input_file=file)
            self.iteration += 1

    def __collect_files(self):
        """
        This method will use Global.Files() to collect file paths with the extension `.fastq` in the input_directory.
        File paths and total number of files will be collected
        Returns: None
        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=[".fastq"])
        self.file_paths = collect_files.file_paths
        self.total_files = collect_files.total_files

    def __perform_filtering(self, input_file):
        """
        This function will use the file paths in self.file_paths. It will iterate over each file nad process them using NanoFilt.
        Returns: None
        """
        barcode_number = re.search("(barcode)[0-9]{2}", input_file)
        if barcode_number is None:
            barcode_number = re.search("(unclassified)", input_file)

        barcode_number = input_file[barcode_number.start():barcode_number.end()]

        output_file = self.save_directory + "NanoFilt_{barcode}.fastq".format(barcode=barcode_number)
        message = "NanoFilt {input_file}".format(input_file=input_file)
        message = message.split(" ")
        command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)

        # `command` is a string, not a series of lines. We can write it out in one command
        with open(output_file, 'w') as output_stream:
            output_stream.write(command.stdout)

    def __update_task(self, iteration):
        """
        This function is simply a wrapper for the Global.Update class. It will print an updated output to the screen
        Args:
            iteration: This is the current file iteration that NanoFilt is processing
        Returns: None
        """
        Update("NanoFilt", iteration, self.total_files)


if __name__ == '__main__':
    try:
        input = str(snakemake.input.input_directory)
        save = str(snakemake.output.save_directory)

    except NameError:
        input = r"/Users/joshl/PycharmProjects/ARS/Results/Trim/"
        save = r"/Users/joshl/PycharmProjects/ARS/Results/NanoFilt/"

    print("Starting NanoFilt. . .")

    NanoFilt(input_directory=input, save_directory=save)
