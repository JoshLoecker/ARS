input = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/alignment_summary/barcode01.guppy.alignment_summary.csv"
save = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/simple_statistics/barcode01/barcode01.guppy.simple_statistics.csv"
"""
----------------
"""

import csv

import numpy as np
import pandas as pd

id_classified = 0
id_unclassified = 0

data_frame = pd.read_csv(filepath_or_buffer=input,
                         sep="\t",
                         header=0,
                         dtype={
                             "read_id": np.str,
                             "alignment_genome": np.str,
                             "alignment_genome_start": np.int,
                             "alignment_genome_end": np.int,
                             "alignment_strand_start": np.int,
                             "alignment_strand_end": np.int,
                             "alignment_num_insertions": np.int,
                             "alignment_num_deletions": np.int,
                             "alignment_num_aligned": np.int,
                             "alignment_num_correct": np.int,
                             "alignment_identity": np.float,
                             "alignment_accuracy": np.float,
                             "alignment_score": np.int})

for row in data_frame['alignment_genome']:
    if row == "*":
        id_unclassified += 1
    else:
        id_classified += 1

barcode_reads = id_classified + id_unclassified
percent_classified = "{:.3f}".format( (id_classified / barcode_reads) * 100 )
percent_unclassified = "{:.3f}".format( (id_unclassified / barcode_reads) * 100 )

row_one = ["barcode_reads", "classified_reads", "unclassified_reads", "percent_classified", "percent_unclassified"]
row_two = [barcode_reads, id_classified, id_unclassified, percent_classified, percent_unclassified]

with open(save, 'w') as output_stream:
    csv_writer = csv.writer(output_stream, delimiter="\t")
    csv_writer.writerow(row_one)
    csv_writer.writerow(row_two)