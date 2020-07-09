from pathlib import Path
import os
import shutil


class CreateDuplicateInTempFolder:
    def __init__(self, input_file, temp_directory):
        """
        This class is responsible for creating a folder under the "/.temp" directory in the save location
        It will then copy the input_file into the folder it has created

        The input file must be the exact path to the file, including the file name
            Ex: /home/USERNAME/data/fast5_files/data_file_1.fast5
        The temp directory should be the exact directory where output files are located. A trailing slash should be appended
            Ex: /home/USERNAME/data/output_data/.temp/
        Args:
            input_file: This is the file path that is going to be analyzed
            temp_directory:  This is the save location of the output file. A trailing slash should be appended
        """

        self.input_file = input_file
        self.temp_directory = temp_directory

        # get the new file path (use the temp folder location and the file name from self.input_file)
        self.file_path = self.temp_directory + os.path.basename(self.input_file)

        # try to make the temporary directory top ensure it exists
        os.makedirs(self.temp_directory, exist_ok=True)

        # open the file in the temp folder so it can be written to
        try:
            open(self.file_path, 'r').close()
        except FileNotFoundError:
            open(self.file_path, 'w').close()

        # now, copy the input file into the temporary directory
        shutil.copy2(self.input_file, self.file_path)


if __name__ == '__main__':
    import sys
    args = sys.argv

    input_file = args[1]
    temp_folder = args[2]

    # input_file = "/Users/joshl/Desktop/input/file.txt"
    # temp_folder = "/Users/joshl/Desktop/output/.temp/"

    CreateDuplicateInTempFolder(input_file, temp_folder)