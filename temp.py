expand(config['results_folder'] + ".barcodeTempOutput/{fast5_files}/{{barcode_number}}",
       fast5_files=glob_wildcards(config['results_folder'] + ".barcodeTempOutput/{fast5_folders}/barcode*/.fastq").fast5_folders)
output:
config['results_folder'] + "Barcode/{barcode_number}.merged.fastq"
params:
temp_barcode_folder = config['results_folder'] + ".barcodeTempOutput",
barcoding_save_path = config['results_folder'] + "Barcode/barcoding_summary.txt",
read_log_save_path = config['results_folder'] + "Barcode/"
shell:
r"""
# run all files in our input through a `for` loop
for FILE in `ls {input}`
do
    # for each file in the folder, create its file path
    FILE_PATH={input}/$FILE

    # place our old file into the new file. This will run for each file in the folder
    #   effectively concatenates all files per barcode to a new file
    cat $FILE_PATH > {output}
done

# remove our input folder as it is no longer needed
# rm -r {input}
# 
# # we are going to move the barcoding summary and read processor log as well
# BARCODING_SUMMARY={params.temp_barcode_folder}/barcoding_summary.txt
# READ_LOG={params.temp_barcode_folder}/read_*.log
# 
# 
# # this will test if the barcoding summary file exists. If it does, we can assume that both files are present
# # if the file does not exist, there is no need to try to move them
# if [ -f $BARCODING_SUMMARY ]; then
#     mv $BARCODING_SUMMARY {params.barcoding_save_path}
#     mv $READ_LOG {params.read_log_save_path}
# fi
"""
