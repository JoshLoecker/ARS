.strip_tag = function(string) {
  require(magrittr)
  
  string %<>%
    as.character %>% 
    strsplit(':') %>% 
    sapply(extract, 3) %>% 
    type.convert(as.is=TRUE)
  return(string)
}

#' load_sam to load a sam file from minimap2 and extract useful information from it.
#' currently extracts sequence ID, match, length, 
#'
#' @Parameters
#' @param path: character. full path to .sam file.
#' @param drop_secondary: logical. Skip secondary alignments?
#'
#' @Returns
#' A data.frame with columns:
#' `seq_id`: character. unique sequence identifier.
#' `ref_id`: character. sequence ID of the primary match in the reference database
#' `bit_flag`: integer. bitwise flag. See https://samtools.github.io/hts-specs/SAMv1.pdf and 'Notes'
#' `seq_length`: integer. Length in bp of the aligned sequence.
#' `quality`: integer. Q = -10*log10(prob wrong). Note this is dependent on the database, as well as the sequence.
#' `divergence`: float. per-base divergence of seq from match
#' `score`: integer. smith-waterman alignment score of the entire sequence.
#' `chimeric`: character. sequence ID of a chimeric match. 
#'
#' @Notes
#' Common bitwise flags are: 0 = primary alignment, no problems; 4 = segment unmapped; 
#' 16 = sequence is being reverse-complimented; 256 = secondary alignment; 
#' 2048 = supplementary alignment (i.e. chimeric)


load_sam = function(path, drop_secondary=TRUE) {

  require(magrittr)
  
  sam = readLines(path)
  
  is_header = substr(sam, 1, 1) == '@'
  sam %<>% 
    .[!is_header] %>% 
    strsplit('\t') 
  
  if (drop_secondary) {
    is_secondary = sapply(sam, function(x) x[2] >= 256 & x[2] < 512)
    sam %<>% .[!is_secondary]
  }
  
  sam %<>%
    lapply(function(x) {
      if (x[2] == 4) { # was not aligned
        out = c(seq_id = x[1],
                ref_id = NA,
                bit_flag = 4,
                seq_length = NA,
                quality = 0,
                divergence = NA,
                divergence_type = NA,
                score = NA,
                chimeric = NA)
      } else {
        is_chimeric = grepl('SA:Z:', x) %>% 
          any
        if (any(grepl('de:f:', x))) {
          divergence_type = 'gap_compressed'
        } else if (any(grepl('dv:f:', x))) {
          divergence_type = 'approximate'
        } else {
          divergence_type = 'unknown'
        }
        divergence = switch(divergence_type,
                            'gap_compressed' = x[grepl('de:f:', x)],
                            'approximate' = x[grepl('dv:f:', x)],
                            'unknown' = NA)
          
        # divergence_type = grepl('de:f:', x) %>% 
        #   any %>% 
        #   ifelse('gap-compressed', 'approximate')
        out = c(
          seq_id = x[1],
          ref_id = x[3],
          bit_flag = x[2],
          seq_length = nchar(x[10]),
          quality = x[5],
          divergence = divergence,
          divergence_type = divergence_type,
          score = x[grepl('AS:i:', x)],
          chimeric = ifelse(is_chimeric, x[grepl('SA:Z:', x)], NA)
        )
      }
      return(out)
    }) %>% 
    do.call(rbind, .) %>% 
    as.data.frame
  
  strip_tags = c('divergence', 'score', 'chimeric')
  sam[, strip_tags] %<>% lapply(.strip_tag)
  sam[, 'chimeric'] %<>% 
    as.character %>% 
    strsplit(',') %>% 
    sapply(extract, 1)
  
  sam %<>% type.convert(as.is=TRUE)
  return(sam)
}

load_uc = function(path) {
  uc = read.table(path, sep='\t', na.strings='*', stringsAsFactors=FALSE)
  
  colnames(uc) = c('record_type', 'seq_number', 'seq_length', 'similarity', 'orientation', 'X1', 'X2', 'CGIAR', 'seq_id', 'ref_id')
  
  uc$divergence = 1-(uc$similarity/100)
  uc$divergence_type = 'basewise'
  uc$bit_flag = sapply(uc$record_type,
                       switch,
                       'N' = 4,
                       'H' = 0)
  
  keep_cols = c('seq_id',
                'ref_id',
                'bit_flag',
                'seq_length',
                'divergence',
                'divergence_type')
  uc = uc[keep_cols]
  
  return(uc)
}
