# import libraries needed to find files, search for names, and move files
import os
import shutil
import re

# get our parent folder so we don't have to type `rules.merge_files.input` every time
parent_folder = "/Users/joshl/Desktop/BarcodeTest"

# iterate through each directory in our parent folder
for root, directories, files in os.walk(parent_folder):
    for directory in directories:

        # get the number of files in the directory
        current_dir_path = os.path.join(root, directory)
        number_of_files = len(os.listdir(current_dir_path))

        # get the old file path
        old_file_path = current_dir_path + "/" + str(os.listdir(current_dir_path)[0])

        # find its barcode number (to set a new name)
        barcode_number = re.search("(barcode)[0-9]{2}", old_file_path)
        if barcode_number is None:
            barcode_number = re.search("(unclassified)", old_file_path)
        barcode_number = old_file_path[barcode_number.start():barcode_number.end()]

        # create our new file path
        new_file_path = current_dir_path + "/{0}.merged.fastq".format(barcode_number)

        # we only need to rename the file (technically move it) from the old path to the new path
        # both paths are in the same folder, just different names
        if number_of_files < 2:

            # move the file to its new location
            shutil.copy2(old_file_path, new_file_path)
            os.remove(old_file_path)

        # we need to concatenate if there are 2 or more files in the directory
        else:
            # first get the files we need to concatenate
            files_to_concatenate = os.listdir(current_dir_path)

            try:
                open(new_file_path, 'r').close()
            # we did not find the file, create one instead
            except FileNotFoundError:
                open(new_file_path, 'w').close()

            # now open the new file as output_stream to write data
            with open(new_file_path, 'a') as output_stream:

                # iterate through each of our files to concatenate
                for file in files_to_concatenate:

                    # create our input file path
                    input_file_path = current_dir_path + "/" + file

                    # now open our input file path as input_stream so we can read data
                    with open(input_file_path, 'r') as input_stream:

                        # iterate through each line in the file and write it to our new file
                        for each_line in input_stream:
                            output_stream.write(each_line)

            # we can now delete the old files
            for file in files_to_concatenate:
                delete_file_path = current_dir_path + "/" + file
                os.remove(delete_file_path)