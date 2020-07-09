import os
import shutil
import subprocess
from Global import Log, Update, Files


class Barcode:
    def __init__(self, input_directory, save_directory):
        self.iteration = 1
        self.total_files = 0
        self.input_directory = input_directory
        self.save_directory = save_directory

        self.__count_files()
        self.__remove_old_files()
        self.__perform_barcode()

    def __count_files(self):
        collect_files = Files(input_directory=self.input_directory)
        self.total_files = collect_files.total_files

    def __remove_old_files(self):
        """
        This will remove all directories/files in the save_directory
        Returns: None
        """
        for root, directories, files in os.walk(self.save_directory):
            for directory in directories:
                shutil.rmtree( os.path.join(root, directory) )

    def __perform_barcode(self):
        """
        This function will call guppy_barcoder on the input_directory, and save files into the save_directory
        Returns: None

        """

        message = "guppy_barcoder " \
                  "--input_path {0} " \
                  "--save_path {1} " \
                  "--recursive " \
                  "--config configuration.cfg " \
                  "--worker_threads 12 " \
                  "--barcode_kits EXP-PBC096 " \
                  "--require_barcodes_both_ends".format(self.input_directory, self.save_directory)

        self.__write_logs_to_file(message)

        message = message.split(" ")
        subprocess.run(message)

        Files.move_log_files(save_directory=save_directory)

    def __write_logs_to_file(self, command):
        Log(program_name="Barcode",
            message=command)

    def __update_task(self):
        Update("Guppy basecaller", self.iteration, self.total_files)
        self.iteration += 1


if __name__ == '__main__':
    try:
        input_directory = str(snakemake.input.input_directory)
        save_directory = str(snakemake.output.save_directory)
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/Basecall/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Barcode/"

    Barcode(input_directory=input_directory,
            save_directory=save_directory)
