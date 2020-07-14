import re
import os

class MergeFiles:
    def __init__(self, input_sample_folders, barcode_parent_folder):
        # we want to build a path to each of the parent directories
        #   this concatenates the barcode_parent_folder with one input_sample_folder
        self.input_sample_folders = input_sample_folders
        self.barcode_parent_folder = barcode_parent_folder
        self.barcode_parent_paths = []
        for item in self.input_sample_folders:
            self.barcode_parent_paths.append(self.barcode_parent_folder + item)

        # now, we want to get the path of each barcode directory from each of the barcode_parent_paths
        #   we will create a dictionary containing each barcode, along with each of their paths
        #   one path will exist for each basecall sample ran
        self.all_barcode_paths_dict = dict()
        for item in self.barcode_parent_paths:
            for root, directories, files in os.walk(item):

                # we want to add each barcode as a key one time to the dictionary
                for direc in directories:
                    if "barcode" in direc:
                        key = direc
                    elif "unclassified" in direc:
                        key = direc
                    else:
                        key = None

                    # we have found a barcode
                    if key is not None:
                        # key is not already present, add it to the dictionary
                        if key not in self.all_barcode_paths_dict.keys():
                            self.all_barcode_paths_dict[key] = ''

                # now we want to iterate through each file path and add its path to the appropriate barcode number
                for file in files:
                    full_file_path = os.path.join(root, file)


    def __find_keys(self):


    def add_values_to_dict(self, key):



if __name__ == '__main__':

    try:
        # list of folders (FAL03879_67a0761e_1055/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0/)
        input_sample_folders = snakemake.params.samples

        # results folder (/Users/joshl/PycharmProjects/ARS/Results/Barcode/)
        barcode_parent_folder = snakemake.params.barcode_folder
    except NameError:
        input_sample_folders = [
            'FAL03879_67a0761e_1055/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0',
            'FAL03879_67a0761e_806/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0',
            'FAL03879_67a0761e_11/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0',
            'FAL03879_67a0761e_539/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0',
            'FAL03879_67a0761e_163/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0',
            'FAL03879_67a0761e_1275/fastq_runid_67a0761ea992f55d7000e748e88761780ca1bb60_0_0'
        ]
        barcode_parent_folder = "/Users/joshl/PycharmProjects/ARS/Results/Barcode/"

    MergeFiles(input_sample_folders, barcode_parent_folder)


