import pandas as pd
import os
from pathlib import Path

# ----------------------------------------------------------
# | Getting barcode and read_id from filtered .fastq files |
# ----------------------------------------------------------
def filtered_lookup_table():
    # this is our path to data, along with the save location of our data frame
    # we are using relative paths to get the directory
    filtered_files = str(snakemake.input.filtering)

    filtered_data = []

    # iterate through each file under the results/filter/ folder
    for file_name in filtered_files:

        # only look at the file if it is a .fastq file
        if ".fastq" in file_name:

            # get the full (relative) path to open
            # get the barcode number
            barcode_number = file_name.split(".")[0]

            with open(file_name, 'r') as input_stream:

                # iterate through each line of the file
                for line in input_stream:

                    # try to find the string `read=`
                    read_id_index = line.find("read=")

                    # if we have found it, the resulting integer will not be -1; it will be greater than 0
                    if read_id_index != -1:
                        read_id = line[read_id_index + 5:]      # get everything after `read=`
                        read_id = read_id.split(" ")[0]         # split by spaces, and get the first item; this is the read_id
                        filtered_data.append([read_id, barcode_number])  # add barcode and read_id to the data for a DataFrame

    # sort our list based on read_id
    filtered_data = sorted(filtered_data, key=lambda value: value[0])
    data_frame = pd.DataFrame(data=filtered_data, columns=["read_id", "barcode"])
    return data_frame

# --------------------------------------------------
# Getting read_id and clustering_id from isONclust |
# --------------------------------------------------
def cluster_lookup_table():
    # locate our input file
    cluster_folder = str(snakemake.input.clustering)

    cluster_origins_file_paths = []
    for path in Path(cluster_folder).rglob("cluster_origins.csv"):
        cluster_origins_file_paths.append(path)

    cluster_data = []
    for file_path in cluster_origins_file_paths:
        with open(file_path, 'r') as input_stream:

            # iterate through each line of the input file
            for line in input_stream:
                line_split = line.split("\t")   # split the line based on a tab to separate data (makes a list)

                cluster_id = line_split[0]      # the cluster id is the first item in the list

                read_id = line_split[1]         # the read id is located within the second item
                read_id = read_id.split("_")    # split the second list into a new list, based on underscores
                read_id = read_id[4]            # get the fourth item from the new list (read=12345)
                read_id = read_id[5:]           # remove `read=` from `read=12345`

                # create a 2D list of our items
                cluster_data.append([read_id, cluster_id])

    # sort our list based on read_id
    cluster_data = sorted(cluster_data, key=lambda value: value[0])
    data_frame = pd.DataFrame(data=cluster_data, columns=["read_id", "cluster_id"])
    return data_frame

# ---------------------------------------------------------------
# Getting cluster_id, read_id, and barcode from vsearch results |
# ---------------------------------------------------------------
def vsearch_lookup_table():
    vsearch_files = str(snakemake.input.vsearch)
    vsearch_files = vsearch_files.split(" ")

    vsearch_data = []

    for file_path in vsearch_files:
        with open(file_path, 'r') as input_stream:
            for line in input_stream:
                line_split = line.split("\t")

                # format: 45
                cluster_id = line_split[1]

                read_id = line_split[8]         # read_id is a string, the 8th item in line_split
                read_id = read_id.split("_")    # read id is now in a list, split by underscores
                read_id = read_id[4]            # read_id is a string, we have taken the 4th item (ex: read=13245)
                read_id = read_id[5:]           # we have taken the `read=` portion off of the string. Left with number only

                # barcode follows the same pattern as read_id, but with different values at the end
                barcode = line_split[8]
                barcode = barcode.split("_")
                barcode = barcode[8]
                barcode = barcode[8:]

                vsearch_data.append([read_id, cluster_id, barcode])



    data_frame = pd.DataFrame(data=vsearch_data, columns=["read_id", "cluster_id", "barcode"])
    return data_frame

# --------------------------------------------------
# Merging filter data frame and cluster data frame |
# --------------------------------------------------
def merge_lists(filter_frame, cluster_frame, vsearch_frame):
    merged_frames = pd.merge(filter_frame, cluster_frame, how="outer", on="read_id", sort=True)
    merged_frames = pd.concat([merged_frames, vsearch_frame], join="outer", sort=True)
    return merged_frames

# -------------------------------------
# Write our data frame to a .tsv file |
# -------------------------------------
def write_merged_frame(frame):
    output_file = Path(__file__).parent / "../results/id_reads.tsv"
    frame.to_csv(path_or_buf=output_file,
                 sep="\t",
                 na_rep="*",
                 index=False,
                 header=["barcode", "cluster_id", "read_id"])


filter_frame = filtered_lookup_table()
cluster_frame = cluster_lookup_table()
vsearch_frame = vsearch_lookup_table()
merged_frames = merge_lists(filter_frame, cluster_frame, vsearch_frame)
write_merged_frame(merged_frames)
