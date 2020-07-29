library(magrittr)
library(reshape2)
library(ggplot2)
library(here)

out_dir = "Example Diagnostic Figures"

set.seed(4453)

nbarcodes = 10
barcodes = seq_len(nbarcodes) %>% 
  sprintf("%02d", .) %>% 
  paste0('BC', .)

start_reads = rnorm(nbarcodes, 1E3, 100) %>% 
  set_names(barcodes)
start_reads[1] = start_reads[1] + 400

effects = c(barcode = 0.9,
            cutadapt = 0.9,
            filtering = 0.7,
            mapping = 0.8) %>% 
  sapply(function(x) rnorm(nbarcodes, x, 0.03)) 

out = matrix(nrow=nbarcodes, 
             ncol=ncol(effects) + 1) %>% 
  set_rownames(barcodes) %>% 
  set_colnames(c('basecall', colnames(effects)))

out[, 'basecall'] = start_reads

for (i in 2:ncol(out)) {
  out[, i] = out[, i-1] * effects[, i-1]
}

Rplt = melt(out) %>% 
  ggplot(aes(x=Var2,
             y=value)) +
  scale_color_brewer(palette='Paired') + 
  geom_point(aes(color=Var1),
             size=3) +
  geom_boxplot(width=0.3,
               fill='white',
               outlier.shape=1,
               outlier.color='red',
               outlier.size=3) +
  labs(x='Process',
       y='Total Reads',
       color='Barcode') +
  theme_minimal()

here('Results', out_dir, 'Read Counts.png') %>% 
  png(width=4.5, height=3, units='in', res=100)
Rplt
dev.off()

here('Results', out_dir, 'WIDE Read Counts.csv') %>% 
  write.csv(out, ., row.names=FALSE)

out_tall = melt(out) %>% 
  set_names(c('Barcode', 'Process', 'Value'))
here('Results', out_dir, 'TALL Read Counts.csv') %>% 
  write.csv(out_tall, ., row.names=FALSE)


# Median quality scores
start_reads = rnorm(nbarcodes, 15, 2) %>% 
  set_names(barcodes)

effects = c(barcode = 0.9,
            cutadapt = 0.9,
            filtering = 0.7,
            mapping = 0.8) %>% 
  sapply(function(x) rnorm(nbarcodes, x, 0.03)) 

out = matrix(nrow=nbarcodes, 
             ncol=ncol(effects) + 1) %>% 
  set_rownames(barcodes) %>% 
  set_colnames(c('basecall', colnames(effects)))

out[, 'basecall'] = start_reads

for (i in 2:ncol(out)) {
  out[, i] = out[, i-1] * effects[, i-1]
}

Qplt = melt(out) %>% 
  ggplot(aes(x=Var2,
             y=value)) +
  scale_color_brewer(palette='Paired') + 
  geom_point(aes(color=Var1),
             size=3) +
  geom_boxplot(width=0.3,
               fill='white',
               outlier.shape=1,
               outlier.color='red',
               outlier.size=3) +
  labs(x='Process',
       y='Total Reads',
       color='Barcode') +
  theme_minimal()

here('Results', out_dir, 'Median Quality.png') %>% 
  png(width=4.5, height=3, units='in', res=100)
Qplt
dev.off()
