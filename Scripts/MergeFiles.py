import re
import os
from Global import Log


class Merge:
    def __init__(self, input_directory: str, save_directory: str):
        """

        This class is responsible for methods that will combine multiple text files in one folder to create one file
        self.__create_merged_file will coordinate the creating of a new file to place contents in
        self.__concatenate_files will perform the actual concatenation of files
        self.__folder_controller oversees these two actions

        Args:
            input_directory: This is the input location for files to merge
            save_directory: This is where concatenated files will be saved
        Returns: None
        """
        self.input_directory = input_directory
        self.save_directory = save_directory
        self.file_paths = []
        self.number_of_files = 0

        self.__folder_controller()
        self.__delete_non_merge_files()

    def __folder_controller(self):
        """
        This function will call self.__create_merged_file() and self.__concatenate_files to assist in controlling the creation of merged files
        Returns: None
        """
        for root, directory, files in os.walk(self.input_directory):
            for direc in directory:
                directory_path = os.path.join(root, direc)
                merged_file_path, barcode_value = self.__create_merged_file(direc=directory_path)

                # we only want to concatenate files if we are able to return a valid file path
                if merged_file_path != "" and barcode_value != "":
                    self.__concatenate_files(direc=directory_path, merged_file_path=merged_file_path, barcode_value=barcode_value)

    def __create_merged_file(self, direc):
        """
        This method will create the new file that is needed by self.__concatenate_files() to place files into
        It will return the merged_file path
        Args:
            direc: This is the current folder being acted upon
        Returns:
            merged_file_path: The path of the file that concatenated data should be placed into
            barcode_value: This is the barcode currently being acted upon
        """

        merged_file_path = ""
        barcode_value = ""

        # we are wrapping this in a try/except block in case there are no files in the directory we are working on
        try:
            # get the barcode name
            barcode_value = direc.split("/")[-1]

            # get the file extension and runid
            file_names = os.listdir(direc)
            extension = file_names[0].split(".")[-1]
            runid = file_names[0].split("_")[2]

            # make a new file called `barcode##_merged_files_runid_{ID NUMBER}.fastq` in the directory
            merged_file_path = direc + "/{barcode}_merged_reads_runid_{runid}.{extension}".format(barcode=barcode_value,
                                                                                                  runid=runid,
                                                                                                  extension=extension)

            # we only want to make a new file if the runid is not equal to `reads`
            # if runid equals `reads`, we have already created a merge_file for this barcode
            if runid != "reads":
                # create the file for writing
                open(merged_file_path, 'w').close()
        except IndexError:
            pass
        return merged_file_path, barcode_value

    def __concatenate_files(self, direc, merged_file_path: str, barcode_value: str):
        """
        This function will take a directory with more than one file inside.
        It will concatenate all files into a new file, with the name of the barcode on it, and delete the old files.
        Args:
            direc: This is the directory containing files to be concatenated
        Returns: None

        """
        # get the barcode name
        for root, directory, files in os.walk(direc):
            for file in files:

                input_path = os.path.join(root, file)

                # we only want to get files we have not created
                if barcode_value not in file:

                    # open the file for reading
                    with open(input_path, 'r') as input_stream:

                        # open merge file for writing
                        with open(merged_file_path, 'a') as output_stream:
                            for line in input_stream:
                                output_stream.write(line)

                    # log file
                    self.__write_logs_to_file(merged_file_path)

    def __delete_non_merge_files(self):
        """
        If the user does not want to move the merged files, we need to delete the non-merged files located in the input_directory
        Returns: None
        """

        # we want to iterate through all directories and only collect those that match the filter `barcode##` or `unclassified`
        directories = []
        for root, directory, files in os.walk(self.input_directory):
            for direc in directory:
                if re.search("(barcode)[0-9]{2}", direc) is not None:
                    directories.append(os.path.join(root, direc))
                elif re.search("(unclassified)", direc) is not None:
                    directories.append(os.path.join(root, direc))

        # we now want to iterate through each of these directories and only remove files that do not contain `merged_reads`
        for location in directories:
            for root, directory, files in os.walk(location):
                for file in files:

                    # we have found a file that does not contain `merged_reads`, delete it
                    if file.find("merged_reads") == -1:
                        delete_file_path = os.path.join(root, file)
                        os.remove(delete_file_path)

    def __write_logs_to_file(self, file_path):
        """
        This function will write logs to the log file specified when a successful merge has been completed

        :param str file_path: This is the name of the file path that has just been merged
        """

        """
        The following options are used to format the date/time of logs
        %Y  Year with century as a decimal number.
        %m  Month as a decimal number [01,12].
        %d  Day of the month as a decimal number [01,31].

        %H  Hour (24-hour clock) as a decimal number [00,23].
        %M  Minute as a decimal number [00,59].
        """

        Log(program_name="MergeFiles",
            message="Merged files to: {0}".format(file_path))


if __name__ == '__main__':
    try:
        input_directory = snakemake.input.input_directory
        save_directory = snakemake.output.save_directory
    except NameError:
        input_directory = "/Users/joshl/PycharmProjects/ARS/Results/Barcode/"
        save_directory = "/Users/joshl/PycharmProjects/ARS/Results/BarcodeMergeFiles/"

    Merge(input_directory=input_directory, save_directory=save_directory)
