import re
from pathlib import Path

from Global import Log, Update, Files


class MiniMap2:
    def __init__(self, input_directory, save_directory, align_reference):
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.alignment_reference = align_reference
        self.file_paths = []
        self.iteration = 1
        self.number_of_files = 0

        # these variables are used to collect data for creating a new .csv file containing our own header values
        self.sequence_name = []         # Found at index 0 (column 1)
        self.alignment_name = []        # Found at index 2 (column 3)
        self.mapping_quality = []       # Found at index 10 (column 11)
        self.alignment_score = []       # Found at index 13 (column 14, if all data present)
        self.per_base_divergence = []   # Found at index 19 (column 20, if all data present)
        self.barcode_number = []        # the barcode the sequence comes from
        self.file_name = []             # the file path

        self.__collect_files()
        self.__perform_alignment()

    def __collect_files(self):
        """
        This function will collect .fastq/.fasta files from the self.input_directory and save their file path to the self.file_paths list.

        @return None
        """
        collect_files = Files(input_directory=self.input_directory,
                                                      file_extensions=['.fasta', '.fastq'])

        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __perform_alignment(self):
        """
        This function will perform MiniMap2 alignments on the file paths located in self.file_paths using the self.alignment_reference as the reference file

        @return None
        """
        for file in self.file_paths:
            file_save_path = self.__return_save_path(file)
            file_directory = file_save_path.split("/")[:-1]  # we want to collect everything except for the file name so we can make the path
            file_directory = "/".join(file_directory) + "/"

            # try to make the output path to ensure it exists
            Path.mkdir(self=Path(file_directory), exist_ok=True)

            # -a: output in SAM format
            # -x: use map-ont for mapping results
            message = "minimap2 -ax map-ont {reference} {input} > {output}".format(
                reference=self.alignment_reference,
                input=file,
                output=file_save_path)

            print(message)

            self.__write_logs_to_file(message)

            message = message.split(" ")
            # I am collecting all output from the MiniMap2 commands because it is not needed. If it is needed in the future, remove the PIPE commands from here
            # alternatively, print the results with print(command.stdout) and print(command.
            #self.__update_task()
            open(file_save_path, 'w').close()
            # command = subprocess.run(message, stdout=PIPE, stderr=PIPE, universal_newlines=True)


    def __return_save_path(self, input_file):
        """
        This function will extract the barcode number of the file MiniMap2 is going to analyze. It will return the full file path of where this output should be stored.
        MiniMap2 will create the files as needed
        Args:
            input_file: The full file path of the new file
        Returns: None
        """

        barcode_number = re.split('[_.]', input_file)[-2]  # we want the second to last item in the list, the barcode number
        save_path = self.save_directory + "csv_results/minimap_{0}.csv".format(barcode_number)
        return save_path

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
            Update("MiniMap2", self.iteration, self.number_of_files)
            self.iteration += 1

    def __write_logs_to_file(self, message):
        """
        This function will use the Log class to write logs to the file specified below.

        Args:
            message: This is the exact message that should be written to the log file
        """

        Log(program_name="minimap_aligner",
            message=message)


if __name__ == '__main__':

    try:
        input_directory = str(snakemake.input.input_directory)
        alignment_file = str(snakemake.params.alignment_file)
        save_directory = str(snakemake.output.save_directory)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/NanoFilt/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/minimap/"
        alignment_file = "/Users/joshl/PycharmProjects/ARS/Results/DataFiles/silva_alignment_reference.fasta"

    print("Starting MiniMap2 Aligner")

    MiniMap2(input_directory=input_directory, save_directory=save_directory, align_reference=alignment_file)
