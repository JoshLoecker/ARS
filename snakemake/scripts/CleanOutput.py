"""
I cannot figure out how to move output files from guppy_barcoder up one parent directory.
Their current folder format is as follows:

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

I want to move the `barcode##` files UP one parent folder, so the resulting output is as follows:

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

"""