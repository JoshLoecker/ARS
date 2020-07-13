# ZYMO FULL

File created from the zymogen mock community 16S/18S database (D6305, version 2, [manual](https://files.zymoresearch.com/protocols/_d6305_d6306_zymobiomics_microbial_community_dna_standard.pdf)). This is a bunch of .fasta files for each taxa, available [here](https://s3.amazonaws.com/zymo-files/BioPool/ZymoBIOMICS.STD.refseq.v2.zip).

The taxa are:

*Kingdom Bacteria*

1. Pseudomonas aeruginosa - Pseudomonaceae, gram-negative Gammaproteobacteria
2. Escheria coli - Enterobacteriaceae, gram-negative Gammaproteobacteria
3. Salmonella enterica - Enterobacteriaceae, gram-negative Gammaproteobacteria
4. Lactobacillus fermentum - Lactobacillaceae, gram-positive Bacilli (Lactobacillales)
5. Enterococcus faecalis - Enterococcaceae, gram-positive Bacilli (Lactobacillales)
6. Staphylococcus aureus - Staphylococcaeae, gram-positive Bacilli (Bacillales)
7. Listeria monocytogenes - Listeraceae, gram-positive Bacilli (Bacillales)
8. Bacillus subtilis - Bacillaceae, gram-positive bacilli (Bacillales)

*Kingdom Fungi*

1. Saccharomyces cerevisiae
2. Cryptococcus neoformans

I pushed them into a single file using:

`cat *.fasta > zymo_full.fasta`

# ZYMO STRAIN REDUCED
File created from zymo_full.fasta by manually deleting the first n/2 entries for each taxa (where n = number of strains). This is a separate file because strain-level resolution is not expected.

# ZYMO REDUCED
File created from zymo_full.fasta by manually deleting the following bacteria:

1. Pseudomonas aeruginosa. Tests genus-level resolution with E. coli
4. Lactobacillus fermentum. Tests order-level resolution with E. faecalis.
6. Staphylococcus aureus. Tests family-level resolution with L. monocytogenes and B. subtilis

