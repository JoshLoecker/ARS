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
    is_secondary = sapply(sam, function(x) x[2] == 256)
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
                score = NA,
                chimeric = NA)
      } else {
        is_chimeric = grepl('SA:Z:', x) %>% 
          any
        divergence_type = grepl('de:f:', x) %>% 
          any %>% 
          ifelse('gap-compressed', 'approximate')
        out = c(
          seq_id = x[1],
          ref_id = x[3],
          bit_flag = x[2],
          seq_length = nchar(x[10]),
          quality = x[5],
          divergence = x[grepl('dv:f:', x)],
          score = x[grepl('AS:i:', x)],
          chimeric = ifelse(is_chimeric, x[grepl('SA:Z:', x)], NA)
        )
      }
      return(out)
    }) %>% 
    do.call(rbind, .) %>% 
    as.data.frame
  
  sam$divergence %<>% gsub('dv:f:', '', .)
  sam$score %<>% gsub('AS:i:', '', .)
  sam$chimeric %<>% gsub('SA:Z:', '', .) %>% 
    strsplit(',') %>% 
    sapply(extract, 1)
  sam %<>% type.convert(as.is=TRUE)
  return(sam)
}