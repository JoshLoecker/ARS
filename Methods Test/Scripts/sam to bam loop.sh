for i in *.sam; do 
  fname=${i%%.sam}
  samtools view -bS ${i} > ${fname}.bam; #-bS for when a header is present. -bT reference.fasta otherwise.
done


