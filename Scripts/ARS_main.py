# this file is empty as we have transitioned to Snakefile. This is located in snakemake/Snakefile

from Basecall import Basecall
from CountReads import Count
from Barcode import Barcode
from MergeFiles import Merge
from TrimReads import Trim
from NanoQC import NanoQCAnalysis
from AlignerGuppy import GuppyAlignment
from AlignerMiniMap import MiniMap2
from AlignerVSearch import VSearch
import glob
import re
import subprocess


def NanoFilt(input_directory, output_directory):
    # NanoFilt
    file_path = "{path}*.{extension}".format(path=trim_output, extension=".fastq")
    for file in glob.glob(file_path):
        file_name = re.search("(trimmed_reads_barcode)[0-9]{2", file)
        if file_name is None:
            file_name = re.search("(trimmed_reads_unclassified)", file)
        name = file[file_name.start():file_name.end()] + ".fastq"
        name = output_directory + name
        message = "NanoFilt {input_file} > {output_file}".format(input_file=file, output_file=name)
        subprocess.call(message.split(" "))


if __name__ == '__main__':
    trim_output = "/Users/joshl/PycharmProjects/ARS/Results/Trim/"
    guppy_aligner_output = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/"
    alignment_reference_file = "/Users/joshl/PycharmProjects/ARS/Results/DataFiles/zymogen_alignment_reference.fasta"

    GuppyAlignment(input_directory=trim_output, save_directory=guppy_aligner_output, align_reference=alignment_reference_file)