inputs = [
    "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/simple_statistics/barcode01.guppy.simple_statistics.csv",
    "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/simple_statistics/barcode02.guppy.simple_statistics.csv"
]
save = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/guppy/collated_simple_statistics.csv"
"""
----------------
"""

import csv

import pandas as pd

barcode_reads = 0
classified_reads = 0
unclassified_reads = 0

for file in inputs:
    data_frame = pd.read_csv(filepath_or_buffer=file,
                             sep="\t",
                             header=0,
                             dtype={
                                 "barcode_reads":int,
                                 "classified_reads":int,
                                 "unclassified_reads":int,
                                 "percent_classified":float,
                                 "percent_unclassified":float
                             })
    barcode_reads += data_frame['barcode_reads']
    classified_reads += data_frame['classified_reads']
    unclassified_reads += data_frame['unclassified_reads']

percent_classified = (classified_reads / barcode_reads) * 100
percent_unclassified = (unclassified_reads / barcode_reads) * 100

row_one = ["barcode_reads", "classified_reads", "unclassified_reads", "percent_classified", "percent_unclassified"]
row_two = [
    int(barcode_reads),
    int(classified_reads),
    int(unclassified_reads),
    "{:.3f}".format(float(percent_classified)),
    "{:.3f}".format(float(percent_unclassified))
]

with open(save, 'w') as output_stream:
    csv_writer = csv.writer(output_stream, delimiter="\t")
    csv_writer.writerow(row_one)
    csv_writer.writerow(row_two)