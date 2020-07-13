"""
This file is responsible for holding methods that many other files currently execute.
Examples:
    Collecting files
    Writing to logs
    Updating Tasks

Import statements are located in the class that requires the library
As a result, to access these libraries, the class name must be prepended to the call
For example, using the `time` library within the `Log` class looks like this: Log.time.FUNCTION()
And using the `os` library within the Files class, like this: Files.os.FUNCTION

"""
import time
import os
import csv
import shutil
import re


class Log:
    def __init__(self, program_name: str, message: str):
        """
        This class will be used to write a specified log line to a certain file. The date and time will be calculated.
        The only input needed is the name of the program that is writing to logs, and the exact line to write

        Data written to the log file will be appended to the end of the path.
        If you would like to erase the log path and start fresh, pass `True` for erase_file


        The following options are used to format the date/time of logs
        %Y  Year with century as a decimal number.
        %m  Month as a decimal number [01,12].
        %d  Day of the month as a decimal number [01,31].
        %H  Hour (24-hour clock) as a decimal number [00,23].
        %M  Minute as a decimal number [00,59].


        Args:
            program_name: This is the program that is writing to logs. This exact name will show up in the logs
            message: This is the exact line that should be written to the file
        """

        self.program = program_name
        self.message = message
        self.date = time.strftime("%Y-%m-%d %H:%M")

        try:
            self.log_path = snakemake.config['log_path']
        except NameError:  # if we are not calling from snakemake, account for errors
            self.log_path = os.path.abspath("../Results/logs.csv")

        self.__write_header()

        with open(self.log_path, 'a') as output_stream:
            output_stream.write("{0},{1},{2}\n".format(self.program, self.date, message))

    def __write_header(self):
        """
        This method will write a header line to logs.csv if the header line is not present
        Returns: None
        """

        header_data = ["program", "date", "message"]
        header_data_as_string = "\t".join(header_data)
        try:
            header_line = open(self.log_path, 'r').readlines()[0]
        except IndexError:
            header_line = ""
        except FileNotFoundError:
            open(self.log_path, 'w').close()
            header_line = ""

        if header_data_as_string not in header_line:  # the header data is not present
            input_data = open(self.log_path, 'r').readlines()  # collect all input data
            with open(self.log_path, 'w') as output_stream:  # open file as 'w' to clear contents
                csv_writer = csv.writer(output_stream, delimiter="\t")

                # write the header line
                csv_writer.writerow(header_data)

                # write all data back to file
                for line in input_data:
                    csv_writer.writerow(line)


class Update:
    def __init__(self, program, current, total):
        """
        This method is responsible for writing a line to stdout stating the progress of programs (guppy_aligner, minimap, etc).
        It will overwrite the current line
        Args:
            program: The program that is running
            current: The index of the current file (i.e. file 4 / 10)
            total: The total number of files to process
        """
        print("\r{program} has started file {current} / {total}".format(
            program=program,
            current=current,
            total=total), end="")


class Files:
    def __init__(self, input_directory: str, file_extensions: list = None):
        """
        This class will collect all files in input_directory containing the file_extensions.
        If no file_extensions argument is provided, the following list will be used: [".fastq", ".fasta"]



        Warnings:
            This class will iterate through all folders in the input_directory, not just the top-level folder, and return ANY matching file extension.
            Do not create an instance of this class using only Files(). Instead, call Files().return_file_paths, passing in appropriate arguments
        Args:
            input_directory: The directory that should be examined for files
            file_extensions: The extension(s) that should be matched
        Returns:
            file_paths: A list of file paths that match any extension in the argument file_extensions list
        """

        self.input_directory = input_directory
        self.file_extensions = file_extensions
        self.__file_paths = []
        self.__total_files = 0

        self.__collect_files()

    def __collect_files(self):
        """
        This method is responsible for collecting files from self.input_directory.
        I am creating a second method here instead of inside __init__ simply to separate the tasks each method is doing
        Returns: None
        """

        # Unfortunately, this is O(n^2) complexity. This is the most simple, yet most intensive, method of finding files.
        # I am unsure if there is a better method of matching file extensions

        for root, directory, files in os.walk(self.input_directory):

            # if no extension is passed in, collect and count all files
            if self.file_extensions is None:
                for file in files:
                    self.__file_paths.append( os.path.join(root, file) )
                    self.__total_files += 1

            # otherwise we want to collect specific files
            else:
                for file in files:
                    for extension in self.file_extensions:
                        if extension.lower() in file.lower():
                            self.__file_paths.append( os.path.join(root, file) )
                            self.__total_files += 1

    @property
    def file_paths(self):
        """
        Use the dot operator after creating a Files instance to return file paths inside self.input_directory
        Returns: A list of file paths
        """
        self.__file_paths = sorted(self.__file_paths)
        return self.__file_paths

    @property
    def total_files(self):
        """
        This function will return the total number of files found in the directory you specified
        Returns: An integer of the total number of files in the file path
        """
        return self.__total_files

    @staticmethod
    def move_log_files(save_directory):
        """
        This function will be called by Basecall.py and Barcode.py
        This function will move log files to their own folder within the save_directory parameter
        It can be used by both files since their outputs are very similar
        Args:
            save_directory: This is the parent folder where files are to be saved

        Returns: None

        """
        # these lines will move log files into their own folder within the save_directory
        new_path = save_directory + "/logs"
        for root, directory, files in os.walk(save_directory):
            for file in files:
                if ".log" in file:
                    # the output files may not be created. Try to move files. If they cannot be moved, create them
                    try:
                        shutil.move(os.path.join(root, file),
                                    os.path.join(new_path, file))
                    except FileNotFoundError:
                        os.mkdir(new_path)
                        shutil.move(os.path.join(root, file),
                                    os.path.join(new_path, file))


class FilePathConvertSlash:
    def __init__(self, path):
        """
        This class will be responsible for converting backslashes (`\`) to forward slashes (`/`).
        Args:
            path (str): This is the current file path that should be tested for a forward slash (`/`)
        Returns:
            file_path (str): The new file path that contains a trailing slash
        """
        self.path = path
        self._new_path = ""
        self.last_character = self.path[-1]

        for character in self.path:
            if character == "\\":
                self._new_path += "/"
            else:
                self._new_path += character

        if self.last_character != "/":
            self._new_path += "/"

    @property
    def new_path(self):
        return self._new_path


class BarcodeNumber:
    def __init__(self, input_file_path):
        """
        This function will get the barcode number from the incoming file path
        Args:
            input_file_path (str): This is the file path that should be searched for a barcode number
        """


        self._barcode_number = re.search("(barcode)[0-9]{2}", input_file_path)
        # could not find `barcode##`, search for `unclassified` instead
        if self._barcode_number is None:
            self._barcode_number = re.search("(unclassified)", input_file_path)

    @property
    def return_barcode_number(self):
        return self._barcode_number
