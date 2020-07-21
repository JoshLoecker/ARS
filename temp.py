import os

path = "/Users/joshl/PycharmProjects/ARS/Results/Barcode"
file_name = ""
index = 0
break_loop = False
for root, directory, files in os.walk(path):
    for file in files:
        index += 1
        if ".fastq" in file:
            file_name = file
            break_loop = True
    if break_loop:
        break
