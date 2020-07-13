import re
import sys
import os
import shutil

args = sys.argv

class Merge:
    def __init__(self, paths):
        """
        This method will merge barcode files found in the path
        Args:
            paths (list): A list containing all paths. TODO: This list is only temporary, and for development purposes only. Snakemake will give a single path
        """
        path = paths[0]
        for root, directory, files in os.walk(path):
            for direc in directory:

                # find what barcode number we are working with
                barcode_number = re.search("(barcode)[0-9]{2}", direc)
                if barcode_number is None:
                    barcode_number = re.search("(unclassified)", direc)
                barcode_number = direc[barcode_number.start():barcode_number.end()]

                # only continue if we have found `barcode##` or `unclassified`
                if barcode_number is not None:
                    new_file_path = os.path.join(root, direc)  # get the current directory path (/Users/joshl/PycharmProjects/ARS/Results/Barcode/SOME_DATA/fastq_runid/barcode##/
                    new_file_path = new_file_path.split("/")[:-3]   # remove the last three directories, we are now under Results/Barcode
                    new_file_path = "/".join(new_file_path)         # rejoin the list to make the path
                    new_file_path = new_file_path + "/{0}".format(barcode_number)

                    file_directory = new_file_path  # get the directory before making the file path

                    new_file_path = new_file_path + "/merged_{0}.fastq".format(barcode_number)

                    # make the directory for the file
                    os.makedirs(file_directory, exist_ok=True)

                    # the directory under Results/Barcode/barcode##/merged_FILE.fastq exists, concatenate files instead of move
                    try:
                        open(new_file_path, 'r').close()
                    except FileNotFoundError:
                        open(new_file_path, 'w').close()

                    print(os.path.abspath(direc))
                    exit(0)

                    with open(new_file_path, 'a') as output_stream:
                        for sub_root, sub_directory, sub_files in os.walk( os.path.abspath(direc) ):
                            for sub_file in sub_files:
                                with open(os.path.join(sub_root, sub_file), 'r') as input_stream:
                                    for line in input_stream:
                                        output_stream.write(line)




if __name__ == '__main__':

    paths = [
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_11/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0",
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_163/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0",
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_539/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0",
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_806/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0",
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_1055/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0",
            "/Users/joshl/PycharmProjects/ARS/Results/Barcode/FAL03879_67a0761e_1275/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0"
    ]

    Merge(paths)