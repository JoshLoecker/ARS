import pandas as pd
import os
from pathlib import Path

"""
Merge this lookup table with $RESULTS/iso*/cluster_info.tsv, which should have read_id and cluster_id.
    The merge column in each is read_id.
    This will produce a 3-column table (read_id, barcode, and cluster_id).
    If read_ids or barcodes get deleted, then try using an outer join.
    I might call pd.DataFrame.merge(how=’outer’, on=’read_id’).
      
Merge this table with the $RESULTS/vsearch/results.uc. Here, the merge column is cluster_id in both.
    Again, make sure everything is kept.  
Save this output as a .tsv or .csv.
"""


# ----------------------------------------------------------
# | Getting barcode and read_id from filtered .fastq files |
# ----------------------------------------------------------

def filtered_lookup_table():
    # this is our path to data, along with the save location of our data frame
    # we are using relative paths to get the directory
    filtered_files = Path(__file__).parent / "../results/filter/"

    filtered_data = []

    # iterate through each file under the results/filter/ folder
    for file_name in os.listdir(filtered_files):

        # only look at the file if it is a .fastq file
        if ".fastq" in file_name:

            # get the full (relative) path to open
            # get the barcode number
            full_path = os.path.join(filtered_files, file_name)
            barcode_number = file_name.split(".")[0]

            with open(full_path, 'r') as input_stream:

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
    data_frame = pd.DataFrame(data=filtered_data, columns=["barcode", "read_id"])
    return data_frame

def cluster_lookup_table():
    # locate our input file
    cluster_input_file = Path(__file__).parent / "../results/isONclust/pipeline/final_clusters.tsv"
    cluster_data = []

    with open(cluster_input_file, 'r') as input_stream:

        # iterate through each line of the input file
        for line in input_stream:
            line_split = line.split("\t")   # split the line based on a tab to separate data (makes a list)
            cluster_id = line_split[0]      # the cluster id is the first item in the list
            read_id = line_split[1]         # the read id is located within the second item
            read_id = read_id.split("_")    # split the second list into a new list, based on underscores
            for item in read_id:            # iterate through each item in new list
                if "read=" in item:         # find the item that contains "read=". Will be in format read=1234
                    read_id = item[5:]      # removing `read=` leaves us with the numerical value only
                    break

            # create a 2D list of our items
            cluster_data.append([read_id, cluster_id])

    # sort our list based on read_id
    cluster_data = sorted(cluster_data, key=lambda value: value[0])
    data_frame = pd.DataFrame(data=cluster_data, columns=["cluster_id", "read_id"])
    return data_frame

def merge_lists(filter_list, cluster_list):
    merged_frame = pd.merge(cluster_list, filter_list, how="outer", left_on="read_id", right_on="read_id")
    print("Done")


filter_list = filtered_lookup_table()
cluster_list = cluster_lookup_table()
merge_lists(filter_list, cluster_list)
