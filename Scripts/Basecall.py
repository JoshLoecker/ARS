import subprocess
from subprocess import PIPE
import os
from Global import Update, Log, Files


class Basecall:
    def __init__(self, input_directory, save_directory):
        self.iteration = 1
        self.total_files = 0
        self.input_directory = input_directory
        self.save_directory = save_directory

        self.__count_files()
        self.__remove_files()
        self.__basecall()

    def __count_files(self):
        collect_files = Files(input_directory=self.input_directory)
        self.total_files = collect_files.total_files

    def __remove_files(self):
        """
        This function will remove any .fastq files in the save_directory
        Returns: None
        """
        for root, directory, files in os.walk(self.save_directory):
            for file in files:
                if ".fastq" in file:
                    os.remove( os.path.join(root, file) )

    def __basecall(self):
        """
        This is a direct copy-paste from the bash script provided by patrick
        Basecall using the fast neural network.
        Two underscores on this function classifies this as a private function

        Returns: None
        """

        message = "guppy_basecaller " \
                  "--recursive " \
                  "--input_path {0} " \
                  "--save_path {1} " \
                  "--config dna_r9.4.1_450bps_fast.cfg " \
                  "--num_callers 1 " \
                  "--cpu_threads_per_caller 12".format(self.input_directory, self.save_directory)

        self.__write_logs_to_file(command=message)

        message = message.split(" ")
        subprocess.run(message)

        Files.move_log_files(save_directory=save_directory)

    def __write_logs_to_file(self, command):
        Log(program_name="Basecall",
            message=command)

    def __update_task(self):
        Update("Guppy basecaller", self.iteration, self.total_files)
        self.iteration += 1


if __name__ == '__main__':

    try:
        input_directory = str(snakemake.input)
        save_directory = str(snakemake.output.save_directory)
    except NameError:
        input_directory = "/Users/joshl/OneDrive/ARS/DataFiles/fast5/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/Basecall/"

    Basecall(input_directory=input_directory, save_directory=save_directory)
