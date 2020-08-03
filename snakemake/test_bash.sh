# move input files to our temp folder
# this is required because guppy_aligner wants folders as input
temp_input=/Users/joshl/Documents/snakemake_output/.temp/guppy/input/barcode76
temp_output=/Users/joshl/Documents/snakemake_output/.temp/guppy/output/barcode76
mkdir -p $temp_input
cp /Users/joshl/Documents/snakemake_output/Filtering/barcode76.nanofilt.fastq $temp_input

# run alignment
guppy_aligner \
--input_path $temp_input \
--save_path $temp_output \
--align_ref ../Results/DataFiles/zymogen_alignment_reference.fasta \
--verbose_logs

if [ -f $temp_output/barcode76.nanofilt.sam ]; then
    cp $temp_output/barcode76.nanofilt.sam /Users/joshl/Documents/snakemake_output/Alignment/guppy/sam_files/barcode76.guppy.sam
    cp $temp_output/alignment_summary.txt /Users/joshl/Documents/snakemake_output/Alignment/guppy/alignment_summary/barcode76.alignment.summary.csv
    cp $temp_output/read_processor_log*.log /Users/joshl/Documents/snakemake_output/Alignment/guppy/logs/barcode76.guppy.log
fi
