import os
from pathlib import Path
from pprint import pprint


def aggregate_barcode_folder_names():
    checkpoint_output = "/Users/joshl/PycharmProjects/ARS/Results/Basecall/"
    folder_names = []
    for item in os.scandir(checkpoint_output):
        if Path(item).is_dir():
            folder_names.append(item.name)
    return folder_names



x = aggregate_barcode_folder_names()
pprint(x)
