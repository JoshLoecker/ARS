#' convert quality score to probability of being wrong
#' Q = -10*log10(Pr Wrong)
#' 
#' Note that minimap Q scores may be unreliable

QtoPr = function(x) 10^(x/-10)