import shutil
import os


class CleanTempFiles:
    def __init__(self, temp_folder_parent_directory):
        """
        This function will take the parent directory of a temporary folder (such as a save_directory) and remove the folder
        Args:
            temp_folder_parent_directory (str): This is the location of the PARENT folder of the temporary directory
        """

        self.temp_folder_parent_directory = temp_folder_parent_directory
        self.temp_folder_name = ".temp"

        for root, directory, files in os.walk(self.temp_folder_parent_directory):
            for direc in directory:
                if direc == self.temp_folder_name:
                    shutil.rmtree( os.path.join(root, direc) )

if __name__ == '__main__':
    import sys
    args = sys.argv

    # try to get arguments from items passed in (i.e. called from snakemake)
    # if this fails, assume a direct run (i.e. not from snakemake, testing purposes)
    try:
        temp_folder_parent = args[1]
    except IndexError:
        temp_folder_parent = "/Users/joshl/PycharmProjects/ARS/Results/Barcode"

    CleanTempFiles(temp_folder_parent)
