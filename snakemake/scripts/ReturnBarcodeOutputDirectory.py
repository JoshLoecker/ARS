"""
guppy_barcoder outputs in the current fashion:
|-- Results
    |-- Barcode
        |-- BASECALL_ID_1
            |-- fastq_runid_RUN-ID-NUMBER.fastq
                |-- barcode01
                |-- barcode02
                |-- barcode03
                |-- barcode04
                etc. . .
        |-- BASECALL_ID_2
            |-- fastq_runid_RUN-ID-NUMBER.fastq
                |-- barcode01
                |-- barcode02
                |-- barcode03
                |-- barcode04
                etc. . .
        |-- BASECALL_ID_3
            |-- fastq_runid_RUN-ID-NUMBER.fastq
                |-- barcode01
                |-- barcode02
                |-- barcode03
                |-- barcode04
                etc. . .
        |-- BASECALL_ID_4
            |-- fastq_runid_RUN-ID-NUMBER.fastq
                |-- barcode01
                |-- barcode02
                |-- barcode03
                |-- barcode04
                etc. . .
        etc. . .
 If I am able to return the BASeCALL_ID_#, thn it will be more feasable to have an output in the following format:
|-- Results
    |-- Barcode
        |-- BASECALL_ID_1
            |-- barcode01
            |-- barcode02
            |-- barcode03
            |-- barcode04
            etc. . .
        |-- BASECALL_ID_2
            |-- barcode01
            |-- barcode02
            |-- barcode03
            |-- barcode04
            etc. . .
        |-- BASECALL_ID_3
            |-- barcode01
            |-- barcode02
            |-- barcode03
            |-- barcode04
            etc. . .
        |-- BASECALL_ID_4
            |-- barcode01
            |-- barcode02
            |-- barcode03
            |-- barcode04
            etc. . .
        etc. . .

This will be useful to do in the barcode rule instead of another one because it would make more sense if guppy_barcoder accepted a file path as input
"""

# import needed libraries
import sys
import os

# get the folder name from arguments passed in
file_path = sys.argv[1]

# get the folder directories only (remove file name/extension)
folder_path = os.path.split(file_path)

# os.path.split returns the folders and file name in a tuple. We only need the folders
folder_path = folder_path[0]

# return the string to snakemake
sys.stdout.write(folder_path)
