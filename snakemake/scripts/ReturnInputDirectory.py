"""
When using snakemake, guppy_basecaller is able to accept input with the following example:
    ls /my/input/directory/*.fast5 | guppy_basecaller --save_path [save_directory] --config [config]. . . .

This is what is currently done under the snakemake rule `basecall`.
However, guppy_barcoder does not have this ability. It requires input folders.
As a result of this, this folder will take the input file given, and remove the file name/extension from the end of the path.
Then, the folder path will be returned to snakemake.
I cannot figure out how to do this in bash, otherwise this would be in the snakemake file.
    This is the best solution I could come up with that is also short, readable, and maintainable.
"""

# import libraries needed for the script
import sys
import os

# get the file path from arguments passed in
file_path = sys.argv[1]

# split the file path
folder_path = os.path.split(file_path)

# os.path.split() returns a tuple of the folder path and the file name. We are going to get the folder path only
folder_path = folder_path[0]

# write the folder path to stdout, which is captured by snakemake and used in the Snakefile
sys.stdout.write(folder_path)