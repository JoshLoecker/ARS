[
    {
        "aggregation": "segment",
        "analysis_id": "c2b55e7d-eda8-4d73-ac9e-2994fe348d3d",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 690,
                "pass": 3310
            },
            "qscore_dist_temp": [
                {
                    "count": 5,
                    "mean_qscore": 3.0
                },
                {
                    "count": 31,
                    "mean_qscore": 3.5
                },
                {
                    "count": 57,
                    "mean_qscore": 4.0
                },
                {
                    "count": 74,
                    "mean_qscore": 4.5
                },
                {
                    "count": 98,
                    "mean_qscore": 5.0
                },
                {
                    "count": 162,
                    "mean_qscore": 5.5
                },
                {
                    "count": 138,
                    "mean_qscore": 6.0
                },
                {
                    "count": 125,
                    "mean_qscore": 6.5
                },
                {
                    "count": 140,
                    "mean_qscore": 7.0
                },
                {
                    "count": 199,
                    "mean_qscore": 7.5
                },
                {
                    "count": 241,
                    "mean_qscore": 8.0
                },
                {
                    "count": 276,
                    "mean_qscore": 8.5
                },
                {
                    "count": 358,
                    "mean_qscore": 9.0
                },
                {
                    "count": 425,
                    "mean_qscore": 9.5
                },
                {
                    "count": 430,
                    "mean_qscore": 10.0
                },
                {
                    "count": 525,
                    "mean_qscore": 10.5
                },
                {
                    "count": 386,
                    "mean_qscore": 11.0
                },
                {
                    "count": 200,
                    "mean_qscore": 11.5
                },
                {
                    "count": 95,
                    "mean_qscore": 12.0
                },
                {
                    "count": 27,
                    "mean_qscore": 12.5
                },
                {
                    "count": 5,
                    "mean_qscore": 13.0
                },
                {
                    "count": 2,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 15.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.16294288635254,
                "sum": 36651.7734375
            },
            "read_len_events_sum_temp": 20101609,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 86,
                    "length": 0.0
                },
                {
                    "count": 217,
                    "length": 1000.0
                },
                {
                    "count": 202,
                    "length": 2000.0
                },
                {
                    "count": 380,
                    "length": 3000.0
                },
                {
                    "count": 1708,
                    "length": 4000.0
                },
                {
                    "count": 658,
                    "length": 5000.0
                },
                {
                    "count": 143,
                    "length": 6000.0
                },
                {
                    "count": 115,
                    "length": 7000.0
                },
                {
                    "count": 169,
                    "length": 8000.0
                },
                {
                    "count": 196,
                    "length": 9000.0
                },
                {
                    "count": 86,
                    "length": 10000.0
                },
                {
                    "count": 20,
                    "length": 11000.0
                },
                {
                    "count": 4,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 4,
                    "length": 15000.0
                },
                {
                    "count": 3,
                    "length": 16000.0
                },
                {
                    "count": 2,
                    "length": 17000.0
                },
                {
                    "count": 2,
                    "length": 18000.0
                },
                {
                    "count": 2,
                    "length": 19000.0
                },
                {
                    "count": 2,
                    "length": 20000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4000,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4000,
                "mean": 79.3183670043945,
                "sum": 317273.46875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.22022914886475,
                "sum": 36880.91796875
            }
        },
        "channel_count": 397,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "4.3.12",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 63402.45703125,
        "levels_sums": {
            "count": 4000,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "2",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.130000",
            "qscore_scale": "0.905000",
            "quiet": "1",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "server_file_load_timeout": "30",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 4000,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 12
            },
            {
                "channel": 3,
                "count": 14
            },
            {
                "channel": 4,
                "count": 10
            },
            {
                "channel": 5,
                "count": 10
            },
            {
                "channel": 6,
                "count": 13
            },
            {
                "channel": 7,
                "count": 14
            },
            {
                "channel": 8,
                "count": 11
            },
            {
                "channel": 10,
                "count": 11
            },
            {
                "channel": 11,
                "count": 11
            },
            {
                "channel": 12,
                "count": 8
            },
            {
                "channel": 13,
                "count": 11
            },
            {
                "channel": 14,
                "count": 11
            },
            {
                "channel": 16,
                "count": 9
            },
            {
                "channel": 17,
                "count": 11
            },
            {
                "channel": 18,
                "count": 11
            },
            {
                "channel": 19,
                "count": 11
            },
            {
                "channel": 20,
                "count": 9
            },
            {
                "channel": 21,
                "count": 9
            },
            {
                "channel": 22,
                "count": 11
            },
            {
                "channel": 23,
                "count": 8
            },
            {
                "channel": 24,
                "count": 12
            },
            {
                "channel": 26,
                "count": 11
            },
            {
                "channel": 27,
                "count": 9
            },
            {
                "channel": 28,
                "count": 9
            },
            {
                "channel": 30,
                "count": 11
            },
            {
                "channel": 32,
                "count": 10
            },
            {
                "channel": 33,
                "count": 8
            },
            {
                "channel": 34,
                "count": 9
            },
            {
                "channel": 35,
                "count": 9
            },
            {
                "channel": 36,
                "count": 9
            },
            {
                "channel": 37,
                "count": 11
            },
            {
                "channel": 38,
                "count": 10
            },
            {
                "channel": 39,
                "count": 11
            },
            {
                "channel": 40,
                "count": 9
            },
            {
                "channel": 41,
                "count": 12
            },
            {
                "channel": 42,
                "count": 8
            },
            {
                "channel": 43,
                "count": 4
            },
            {
                "channel": 44,
                "count": 4
            },
            {
                "channel": 45,
                "count": 8
            },
            {
                "channel": 46,
                "count": 10
            },
            {
                "channel": 47,
                "count": 8
            },
            {
                "channel": 48,
                "count": 11
            },
            {
                "channel": 49,
                "count": 8
            },
            {
                "channel": 50,
                "count": 3
            },
            {
                "channel": 51,
                "count": 9
            },
            {
                "channel": 52,
                "count": 11
            },
            {
                "channel": 53,
                "count": 13
            },
            {
                "channel": 54,
                "count": 14
            },
            {
                "channel": 56,
                "count": 8
            },
            {
                "channel": 58,
                "count": 10
            },
            {
                "channel": 59,
                "count": 11
            },
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 61,
                "count": 9
            },
            {
                "channel": 62,
                "count": 10
            },
            {
                "channel": 63,
                "count": 9
            },
            {
                "channel": 64,
                "count": 9
            },
            {
                "channel": 66,
                "count": 12
            },
            {
                "channel": 68,
                "count": 15
            },
            {
                "channel": 69,
                "count": 12
            },
            {
                "channel": 70,
                "count": 13
            },
            {
                "channel": 71,
                "count": 10
            },
            {
                "channel": 72,
                "count": 11
            },
            {
                "channel": 74,
                "count": 11
            },
            {
                "channel": 75,
                "count": 11
            },
            {
                "channel": 76,
                "count": 9
            },
            {
                "channel": 77,
                "count": 11
            },
            {
                "channel": 78,
                "count": 12
            },
            {
                "channel": 80,
                "count": 14
            },
            {
                "channel": 82,
                "count": 11
            },
            {
                "channel": 83,
                "count": 11
            },
            {
                "channel": 84,
                "count": 11
            },
            {
                "channel": 85,
                "count": 11
            },
            {
                "channel": 86,
                "count": 14
            },
            {
                "channel": 88,
                "count": 13
            },
            {
                "channel": 90,
                "count": 10
            },
            {
                "channel": 92,
                "count": 13
            },
            {
                "channel": 93,
                "count": 12
            },
            {
                "channel": 94,
                "count": 12
            },
            {
                "channel": 95,
                "count": 11
            },
            {
                "channel": 96,
                "count": 9
            },
            {
                "channel": 97,
                "count": 12
            },
            {
                "channel": 98,
                "count": 9
            },
            {
                "channel": 99,
                "count": 7
            },
            {
                "channel": 100,
                "count": 9
            },
            {
                "channel": 101,
                "count": 12
            },
            {
                "channel": 102,
                "count": 11
            },
            {
                "channel": 103,
                "count": 8
            },
            {
                "channel": 104,
                "count": 13
            },
            {
                "channel": 105,
                "count": 12
            },
            {
                "channel": 106,
                "count": 12
            },
            {
                "channel": 107,
                "count": 10
            },
            {
                "channel": 108,
                "count": 9
            },
            {
                "channel": 109,
                "count": 14
            },
            {
                "channel": 110,
                "count": 12
            },
            {
                "channel": 112,
                "count": 12
            },
            {
                "channel": 113,
                "count": 11
            },
            {
                "channel": 114,
                "count": 9
            },
            {
                "channel": 115,
                "count": 8
            },
            {
                "channel": 116,
                "count": 11
            },
            {
                "channel": 117,
                "count": 11
            },
            {
                "channel": 118,
                "count": 15
            },
            {
                "channel": 120,
                "count": 13
            },
            {
                "channel": 122,
                "count": 9
            },
            {
                "channel": 123,
                "count": 11
            },
            {
                "channel": 125,
                "count": 10
            },
            {
                "channel": 126,
                "count": 12
            },
            {
                "channel": 127,
                "count": 12
            },
            {
                "channel": 128,
                "count": 12
            },
            {
                "channel": 130,
                "count": 12
            },
            {
                "channel": 133,
                "count": 12
            },
            {
                "channel": 134,
                "count": 11
            },
            {
                "channel": 135,
                "count": 10
            },
            {
                "channel": 136,
                "count": 13
            },
            {
                "channel": 140,
                "count": 9
            },
            {
                "channel": 141,
                "count": 11
            },
            {
                "channel": 142,
                "count": 15
            },
            {
                "channel": 143,
                "count": 11
            },
            {
                "channel": 144,
                "count": 10
            },
            {
                "channel": 147,
                "count": 11
            },
            {
                "channel": 148,
                "count": 11
            },
            {
                "channel": 150,
                "count": 10
            },
            {
                "channel": 151,
                "count": 13
            },
            {
                "channel": 152,
                "count": 15
            },
            {
                "channel": 154,
                "count": 12
            },
            {
                "channel": 155,
                "count": 10
            },
            {
                "channel": 156,
                "count": 12
            },
            {
                "channel": 158,
                "count": 10
            },
            {
                "channel": 159,
                "count": 13
            },
            {
                "channel": 160,
                "count": 13
            },
            {
                "channel": 161,
                "count": 8
            },
            {
                "channel": 162,
                "count": 12
            },
            {
                "channel": 163,
                "count": 13
            },
            {
                "channel": 164,
                "count": 8
            },
            {
                "channel": 165,
                "count": 12
            },
            {
                "channel": 166,
                "count": 4
            },
            {
                "channel": 167,
                "count": 10
            },
            {
                "channel": 168,
                "count": 13
            },
            {
                "channel": 169,
                "count": 10
            },
            {
                "channel": 170,
                "count": 7
            },
            {
                "channel": 171,
                "count": 9
            },
            {
                "channel": 172,
                "count": 10
            },
            {
                "channel": 173,
                "count": 10
            },
            {
                "channel": 174,
                "count": 11
            },
            {
                "channel": 175,
                "count": 8
            },
            {
                "channel": 176,
                "count": 10
            },
            {
                "channel": 177,
                "count": 8
            },
            {
                "channel": 178,
                "count": 12
            },
            {
                "channel": 179,
                "count": 11
            },
            {
                "channel": 180,
                "count": 10
            },
            {
                "channel": 181,
                "count": 13
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 183,
                "count": 12
            },
            {
                "channel": 184,
                "count": 12
            },
            {
                "channel": 185,
                "count": 9
            },
            {
                "channel": 186,
                "count": 12
            },
            {
                "channel": 187,
                "count": 11
            },
            {
                "channel": 188,
                "count": 9
            },
            {
                "channel": 189,
                "count": 11
            },
            {
                "channel": 190,
                "count": 7
            },
            {
                "channel": 191,
                "count": 10
            },
            {
                "channel": 192,
                "count": 10
            },
            {
                "channel": 196,
                "count": 9
            },
            {
                "channel": 197,
                "count": 11
            },
            {
                "channel": 198,
                "count": 14
            },
            {
                "channel": 202,
                "count": 10
            },
            {
                "channel": 204,
                "count": 13
            },
            {
                "channel": 205,
                "count": 12
            },
            {
                "channel": 207,
                "count": 13
            },
            {
                "channel": 208,
                "count": 13
            },
            {
                "channel": 212,
                "count": 12
            },
            {
                "channel": 213,
                "count": 11
            },
            {
                "channel": 214,
                "count": 12
            },
            {
                "channel": 215,
                "count": 11
            },
            {
                "channel": 216,
                "count": 14
            },
            {
                "channel": 222,
                "count": 11
            },
            {
                "channel": 223,
                "count": 11
            },
            {
                "channel": 224,
                "count": 14
            },
            {
                "channel": 225,
                "count": 7
            },
            {
                "channel": 226,
                "count": 4
            },
            {
                "channel": 227,
                "count": 10
            },
            {
                "channel": 228,
                "count": 10
            },
            {
                "channel": 229,
                "count": 12
            },
            {
                "channel": 230,
                "count": 11
            },
            {
                "channel": 231,
                "count": 13
            },
            {
                "channel": 232,
                "count": 15
            },
            {
                "channel": 233,
                "count": 9
            },
            {
                "channel": 234,
                "count": 9
            },
            {
                "channel": 235,
                "count": 4
            },
            {
                "channel": 237,
                "count": 12
            },
            {
                "channel": 238,
                "count": 13
            },
            {
                "channel": 239,
                "count": 9
            },
            {
                "channel": 240,
                "count": 11
            },
            {
                "channel": 241,
                "count": 9
            },
            {
                "channel": 242,
                "count": 9
            },
            {
                "channel": 243,
                "count": 10
            },
            {
                "channel": 245,
                "count": 12
            },
            {
                "channel": 246,
                "count": 12
            },
            {
                "channel": 247,
                "count": 11
            },
            {
                "channel": 249,
                "count": 8
            },
            {
                "channel": 250,
                "count": 9
            },
            {
                "channel": 251,
                "count": 10
            },
            {
                "channel": 252,
                "count": 6
            },
            {
                "channel": 253,
                "count": 9
            },
            {
                "channel": 254,
                "count": 9
            },
            {
                "channel": 255,
                "count": 13
            },
            {
                "channel": 256,
                "count": 13
            },
            {
                "channel": 258,
                "count": 10
            },
            {
                "channel": 259,
                "count": 12
            },
            {
                "channel": 261,
                "count": 10
            },
            {
                "channel": 262,
                "count": 12
            },
            {
                "channel": 265,
                "count": 10
            },
            {
                "channel": 268,
                "count": 11
            },
            {
                "channel": 271,
                "count": 11
            },
            {
                "channel": 272,
                "count": 11
            },
            {
                "channel": 274,
                "count": 7
            },
            {
                "channel": 276,
                "count": 9
            },
            {
                "channel": 278,
                "count": 11
            },
            {
                "channel": 280,
                "count": 9
            },
            {
                "channel": 284,
                "count": 7
            },
            {
                "channel": 285,
                "count": 11
            },
            {
                "channel": 287,
                "count": 13
            },
            {
                "channel": 288,
                "count": 10
            },
            {
                "channel": 289,
                "count": 6
            },
            {
                "channel": 290,
                "count": 6
            },
            {
                "channel": 291,
                "count": 11
            },
            {
                "channel": 292,
                "count": 10
            },
            {
                "channel": 293,
                "count": 9
            },
            {
                "channel": 294,
                "count": 15
            },
            {
                "channel": 296,
                "count": 11
            },
            {
                "channel": 297,
                "count": 9
            },
            {
                "channel": 298,
                "count": 8
            },
            {
                "channel": 299,
                "count": 8
            },
            {
                "channel": 300,
                "count": 12
            },
            {
                "channel": 301,
                "count": 9
            },
            {
                "channel": 302,
                "count": 14
            },
            {
                "channel": 303,
                "count": 13
            },
            {
                "channel": 304,
                "count": 12
            },
            {
                "channel": 305,
                "count": 7
            },
            {
                "channel": 306,
                "count": 10
            },
            {
                "channel": 307,
                "count": 7
            },
            {
                "channel": 308,
                "count": 11
            },
            {
                "channel": 309,
                "count": 9
            },
            {
                "channel": 310,
                "count": 15
            },
            {
                "channel": 312,
                "count": 13
            },
            {
                "channel": 313,
                "count": 5
            },
            {
                "channel": 314,
                "count": 7
            },
            {
                "channel": 315,
                "count": 3
            },
            {
                "channel": 316,
                "count": 8
            },
            {
                "channel": 317,
                "count": 7
            },
            {
                "channel": 318,
                "count": 8
            },
            {
                "channel": 319,
                "count": 11
            },
            {
                "channel": 320,
                "count": 13
            },
            {
                "channel": 323,
                "count": 13
            },
            {
                "channel": 324,
                "count": 11
            },
            {
                "channel": 334,
                "count": 13
            },
            {
                "channel": 335,
                "count": 14
            },
            {
                "channel": 336,
                "count": 10
            },
            {
                "channel": 337,
                "count": 6
            },
            {
                "channel": 338,
                "count": 10
            },
            {
                "channel": 340,
                "count": 9
            },
            {
                "channel": 341,
                "count": 1
            },
            {
                "channel": 342,
                "count": 12
            },
            {
                "channel": 343,
                "count": 13
            },
            {
                "channel": 344,
                "count": 12
            },
            {
                "channel": 345,
                "count": 10
            },
            {
                "channel": 347,
                "count": 9
            },
            {
                "channel": 350,
                "count": 12
            },
            {
                "channel": 351,
                "count": 13
            },
            {
                "channel": 353,
                "count": 9
            },
            {
                "channel": 354,
                "count": 10
            },
            {
                "channel": 355,
                "count": 10
            },
            {
                "channel": 356,
                "count": 1
            },
            {
                "channel": 357,
                "count": 5
            },
            {
                "channel": 358,
                "count": 13
            },
            {
                "channel": 359,
                "count": 9
            },
            {
                "channel": 360,
                "count": 11
            },
            {
                "channel": 361,
                "count": 7
            },
            {
                "channel": 362,
                "count": 9
            },
            {
                "channel": 364,
                "count": 5
            },
            {
                "channel": 365,
                "count": 5
            },
            {
                "channel": 366,
                "count": 15
            },
            {
                "channel": 367,
                "count": 12
            },
            {
                "channel": 369,
                "count": 6
            },
            {
                "channel": 370,
                "count": 7
            },
            {
                "channel": 371,
                "count": 10
            },
            {
                "channel": 373,
                "count": 11
            },
            {
                "channel": 374,
                "count": 10
            },
            {
                "channel": 376,
                "count": 12
            },
            {
                "channel": 377,
                "count": 5
            },
            {
                "channel": 378,
                "count": 8
            },
            {
                "channel": 379,
                "count": 10
            },
            {
                "channel": 380,
                "count": 2
            },
            {
                "channel": 381,
                "count": 8
            },
            {
                "channel": 382,
                "count": 7
            },
            {
                "channel": 383,
                "count": 10
            },
            {
                "channel": 384,
                "count": 10
            },
            {
                "channel": 388,
                "count": 11
            },
            {
                "channel": 389,
                "count": 12
            },
            {
                "channel": 390,
                "count": 9
            },
            {
                "channel": 392,
                "count": 10
            },
            {
                "channel": 393,
                "count": 5
            },
            {
                "channel": 394,
                "count": 7
            },
            {
                "channel": 397,
                "count": 10
            },
            {
                "channel": 398,
                "count": 10
            },
            {
                "channel": 399,
                "count": 11
            },
            {
                "channel": 400,
                "count": 12
            },
            {
                "channel": 401,
                "count": 1
            },
            {
                "channel": 406,
                "count": 11
            },
            {
                "channel": 408,
                "count": 12
            },
            {
                "channel": 410,
                "count": 13
            },
            {
                "channel": 413,
                "count": 9
            },
            {
                "channel": 414,
                "count": 12
            },
            {
                "channel": 415,
                "count": 16
            },
            {
                "channel": 416,
                "count": 11
            },
            {
                "channel": 417,
                "count": 8
            },
            {
                "channel": 418,
                "count": 9
            },
            {
                "channel": 419,
                "count": 8
            },
            {
                "channel": 420,
                "count": 12
            },
            {
                "channel": 421,
                "count": 11
            },
            {
                "channel": 422,
                "count": 14
            },
            {
                "channel": 423,
                "count": 11
            },
            {
                "channel": 424,
                "count": 4
            },
            {
                "channel": 425,
                "count": 7
            },
            {
                "channel": 426,
                "count": 16
            },
            {
                "channel": 427,
                "count": 9
            },
            {
                "channel": 428,
                "count": 10
            },
            {
                "channel": 429,
                "count": 11
            },
            {
                "channel": 430,
                "count": 8
            },
            {
                "channel": 431,
                "count": 8
            },
            {
                "channel": 432,
                "count": 10
            },
            {
                "channel": 433,
                "count": 6
            },
            {
                "channel": 434,
                "count": 10
            },
            {
                "channel": 435,
                "count": 11
            },
            {
                "channel": 436,
                "count": 8
            },
            {
                "channel": 437,
                "count": 11
            },
            {
                "channel": 438,
                "count": 9
            },
            {
                "channel": 439,
                "count": 12
            },
            {
                "channel": 440,
                "count": 12
            },
            {
                "channel": 441,
                "count": 8
            },
            {
                "channel": 442,
                "count": 10
            },
            {
                "channel": 443,
                "count": 9
            },
            {
                "channel": 444,
                "count": 9
            },
            {
                "channel": 447,
                "count": 13
            },
            {
                "channel": 448,
                "count": 8
            },
            {
                "channel": 449,
                "count": 11
            },
            {
                "channel": 450,
                "count": 8
            },
            {
                "channel": 451,
                "count": 8
            },
            {
                "channel": 452,
                "count": 10
            },
            {
                "channel": 453,
                "count": 10
            },
            {
                "channel": 454,
                "count": 9
            },
            {
                "channel": 455,
                "count": 10
            },
            {
                "channel": 456,
                "count": 14
            },
            {
                "channel": 458,
                "count": 8
            },
            {
                "channel": 461,
                "count": 11
            },
            {
                "channel": 462,
                "count": 12
            },
            {
                "channel": 463,
                "count": 11
            },
            {
                "channel": 464,
                "count": 8
            },
            {
                "channel": 466,
                "count": 7
            },
            {
                "channel": 468,
                "count": 10
            },
            {
                "channel": 469,
                "count": 15
            },
            {
                "channel": 470,
                "count": 7
            },
            {
                "channel": 471,
                "count": 11
            },
            {
                "channel": 472,
                "count": 11
            },
            {
                "channel": 473,
                "count": 10
            },
            {
                "channel": 476,
                "count": 9
            },
            {
                "channel": 478,
                "count": 12
            },
            {
                "channel": 479,
                "count": 11
            },
            {
                "channel": 480,
                "count": 10
            },
            {
                "channel": 481,
                "count": 6
            },
            {
                "channel": 482,
                "count": 8
            },
            {
                "channel": 483,
                "count": 8
            },
            {
                "channel": 484,
                "count": 7
            },
            {
                "channel": 485,
                "count": 13
            },
            {
                "channel": 486,
                "count": 8
            },
            {
                "channel": 487,
                "count": 12
            },
            {
                "channel": 488,
                "count": 11
            },
            {
                "channel": 489,
                "count": 9
            },
            {
                "channel": 490,
                "count": 9
            },
            {
                "channel": 491,
                "count": 13
            },
            {
                "channel": 492,
                "count": 11
            },
            {
                "channel": 493,
                "count": 10
            },
            {
                "channel": 494,
                "count": 3
            },
            {
                "channel": 495,
                "count": 10
            },
            {
                "channel": 496,
                "count": 10
            },
            {
                "channel": 497,
                "count": 5
            },
            {
                "channel": 498,
                "count": 8
            },
            {
                "channel": 499,
                "count": 8
            },
            {
                "channel": 501,
                "count": 10
            },
            {
                "channel": 503,
                "count": 11
            },
            {
                "channel": 504,
                "count": 11
            },
            {
                "channel": 505,
                "count": 1
            },
            {
                "channel": 506,
                "count": 9
            },
            {
                "channel": 507,
                "count": 8
            },
            {
                "channel": 508,
                "count": 8
            },
            {
                "channel": 509,
                "count": 11
            },
            {
                "channel": 510,
                "count": 12
            },
            {
                "channel": 512,
                "count": 12
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 18,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.11+f1071ce"
        },
        "tracking_id": {
            "asic_id": "4111609456",
            "asic_id_eeprom": "5319875",
            "asic_temp": "28.889151",
            "asic_version": "IA02C",
            "auto_update": "0",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "1.0.1",
            "device_id": "MN30569",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.12.2",
            "exp_script_name": "sequencing_MIN106_DNA:FLO-MIN106:SQK-LSK109:False",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2020-02-12T04:03:28Z",
            "flow_cell_id": "FAL03879",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "3.2.8+bd67289",
            "heatsink_temp": "34.015625",
            "hostname": "adminion-Precision-3630-Tower",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "6b88884c-6133-4a82-96c0-5a7604ac820a",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-13T21:45:53Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "c2b55e7d-eda8-4d73-ac9e-2994fe348d3d",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 690,
                "pass": 3310
            },
            "qscore_dist_temp": [
                {
                    "count": 5,
                    "mean_qscore": 3.0
                },
                {
                    "count": 31,
                    "mean_qscore": 3.5
                },
                {
                    "count": 57,
                    "mean_qscore": 4.0
                },
                {
                    "count": 74,
                    "mean_qscore": 4.5
                },
                {
                    "count": 98,
                    "mean_qscore": 5.0
                },
                {
                    "count": 162,
                    "mean_qscore": 5.5
                },
                {
                    "count": 138,
                    "mean_qscore": 6.0
                },
                {
                    "count": 125,
                    "mean_qscore": 6.5
                },
                {
                    "count": 140,
                    "mean_qscore": 7.0
                },
                {
                    "count": 199,
                    "mean_qscore": 7.5
                },
                {
                    "count": 241,
                    "mean_qscore": 8.0
                },
                {
                    "count": 276,
                    "mean_qscore": 8.5
                },
                {
                    "count": 358,
                    "mean_qscore": 9.0
                },
                {
                    "count": 425,
                    "mean_qscore": 9.5
                },
                {
                    "count": 430,
                    "mean_qscore": 10.0
                },
                {
                    "count": 525,
                    "mean_qscore": 10.5
                },
                {
                    "count": 386,
                    "mean_qscore": 11.0
                },
                {
                    "count": 200,
                    "mean_qscore": 11.5
                },
                {
                    "count": 95,
                    "mean_qscore": 12.0
                },
                {
                    "count": 27,
                    "mean_qscore": 12.5
                },
                {
                    "count": 5,
                    "mean_qscore": 13.0
                },
                {
                    "count": 2,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 15.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.16294288635254,
                "sum": 36651.7734375
            },
            "read_len_events_sum_temp": 20101609,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 86,
                    "length": 0.0
                },
                {
                    "count": 217,
                    "length": 1000.0
                },
                {
                    "count": 202,
                    "length": 2000.0
                },
                {
                    "count": 380,
                    "length": 3000.0
                },
                {
                    "count": 1708,
                    "length": 4000.0
                },
                {
                    "count": 658,
                    "length": 5000.0
                },
                {
                    "count": 143,
                    "length": 6000.0
                },
                {
                    "count": 115,
                    "length": 7000.0
                },
                {
                    "count": 169,
                    "length": 8000.0
                },
                {
                    "count": 196,
                    "length": 9000.0
                },
                {
                    "count": 86,
                    "length": 10000.0
                },
                {
                    "count": 20,
                    "length": 11000.0
                },
                {
                    "count": 4,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 13000.0
                },
                {
                    "count": 4,
                    "length": 15000.0
                },
                {
                    "count": 3,
                    "length": 16000.0
                },
                {
                    "count": 2,
                    "length": 17000.0
                },
                {
                    "count": 2,
                    "length": 18000.0
                },
                {
                    "count": 2,
                    "length": 19000.0
                },
                {
                    "count": 2,
                    "length": 20000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4000,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 4000,
                "mean": 79.3183670043945,
                "sum": 317273.46875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.22022914886475,
                "sum": 36880.91796875
            }
        },
        "channel_count": 397,
        "context_tags": {
            "barcoding_enabled": "0",
            "experiment_duration_set": "2880",
            "experiment_type": "genomic_dna",
            "local_basecalling": "0",
            "package": "bream4",
            "package_version": "4.3.12",
            "sample_frequency": "4000",
            "sequencing_kit": "sqk-lsk109"
        },
        "latest_run_time": 63402.45703125,
        "levels_sums": {
            "count": 4000,
            "mean": null,
            "open_pore_level_sum": null
        },
        "opts": {
            "adapter_pt_range_scale": "5.200000",
            "align_ref": "",
            "allow_inferior_barcodes": "0",
            "arrangements_files": "",
            "as_cpu_threads_per_scaler": "2",
            "as_gpu_runners_per_device": "2",
            "as_model_file": "adapter_scaling_dna_r9.4.1_min.jsn",
            "as_num_scalers": "1",
            "as_reads_per_runner": "32",
            "barcode_kits": "",
            "barcoding_config_file": "configuration.cfg",
            "bed_file": "",
            "builtin_scripts": "1",
            "calib_detect": "0",
            "calib_max_sequence_length": "3800",
            "calib_min_coverage": "0.600000",
            "calib_min_sequence_length": "3000",
            "calib_reference": "lambda_3.6kb.fasta",
            "chunk_size": "2000",
            "chunks_per_caller": "10000",
            "chunks_per_runner": "160",
            "client_id": "-1",
            "compress_fastq": "0",
            "cpu_threads_per_caller": "2",
            "detect_mid_strand_barcodes": "0",
            "device": "",
            "disable_events": "0",
            "disable_pings": "0",
            "dmean_threshold": "1.000000",
            "dmean_win_size": "2",
            "end_gap1": "40",
            "end_gap2": "40",
            "extend_gap1": "40",
            "extend_gap2": "160",
            "fast5_out": "0",
            "flowcell": "",
            "front_window_size": "150",
            "gpu_runners_per_device": "8",
            "high_priority_threshold": "10",
            "input_file_list": "",
            "jump_threshold": "1.000000",
            "kernel_path": "",
            "kit": "",
            "log_speed_frequency": "0",
            "max_block_size": "50000",
            "max_search_len": "1000",
            "medium_priority_threshold": "4",
            "min_qscore": "7.000000",
            "min_score": "60.000000",
            "min_score_mid_barcodes": "60.000000",
            "min_score_rear_override": "60.000000",
            "model_file": "template_r9.4.1_450bps_fast.jsn",
            "nested_output_folder": "0",
            "num_alignment_threads": "4",
            "num_barcode_threads": "4",
            "num_barcoding_buffers": "96",
            "num_callers": "1",
            "num_extra_bases_trim": "0",
            "open_gap1": "40",
            "open_gap2": "160",
            "overlap": "50",
            "override_scaling": "0",
            "ping_segment_duration": "60",
            "ping_url": "https://ping.oxfordnanoportal.com/basecall",
            "port": "",
            "post_out": "0",
            "print_workflows": "0",
            "progress_stats_frequency": "-1.000000",
            "pt_median_offset": "2.500000",
            "pt_minimum_read_start_index": "30",
            "pt_required_adapter_drop": "30.000000",
            "pt_scaling": "0",
            "qscore_filtering": "0",
            "qscore_offset": "-0.130000",
            "qscore_scale": "0.905000",
            "quiet": "1",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "0",
            "require_barcodes_both_ends": "0",
            "resume": "0",
            "reverse_sequence": "0",
            "scaling_mad": "1.000000",
            "scaling_med": "0.000000",
            "score_matrix_filename": "",
            "server_file_load_timeout": "30",
            "start_gap1": "40",
            "start_gap2": "40",
            "stay_penalty": "1.000000",
            "temp_bias": "1.000000",
            "temp_weight": "1.000000",
            "trace_categories_logs": "",
            "trace_domains_config": "",
            "trace_domains_log": "",
            "trim_barcodes": "0",
            "trim_min_events": "3",
            "trim_strategy": "dna",
            "trim_threshold": "2.500000",
            "u_substitution": "0",
            "verbose_logs": "0"
        },
        "read_count": 4000,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 12
            },
            {
                "channel": 3,
                "count": 14
            },
            {
                "channel": 4,
                "count": 10
            },
            {
                "channel": 5,
                "count": 10
            },
            {
                "channel": 6,
                "count": 13
            },
            {
                "channel": 7,
                "count": 14
            },
            {
                "channel": 8,
                "count": 11
            },
            {
                "channel": 10,
                "count": 11
            },
            {
                "channel": 11,
                "count": 11
            },
            {
                "channel": 12,
                "count": 8
            },
            {
                "channel": 13,
                "count": 11
            },
            {
                "channel": 14,
                "count": 11
            },
            {
                "channel": 16,
                "count": 9
            },
            {
                "channel": 17,
                "count": 11
            },
            {
                "channel": 18,
                "count": 11
            },
            {
                "channel": 19,
                "count": 11
            },
            {
                "channel": 20,
                "count": 9
            },
            {
                "channel": 21,
                "count": 9
            },
            {
                "channel": 22,
                "count": 11
            },
            {
                "channel": 23,
                "count": 8
            },
            {
                "channel": 24,
                "count": 12
            },
            {
                "channel": 26,
                "count": 11
            },
            {
                "channel": 27,
                "count": 9
            },
            {
                "channel": 28,
                "count": 9
            },
            {
                "channel": 30,
                "count": 11
            },
            {
                "channel": 32,
                "count": 10
            },
            {
                "channel": 33,
                "count": 8
            },
            {
                "channel": 34,
                "count": 9
            },
            {
                "channel": 35,
                "count": 9
            },
            {
                "channel": 36,
                "count": 9
            },
            {
                "channel": 37,
                "count": 11
            },
            {
                "channel": 38,
                "count": 10
            },
            {
                "channel": 39,
                "count": 11
            },
            {
                "channel": 40,
                "count": 9
            },
            {
                "channel": 41,
                "count": 12
            },
            {
                "channel": 42,
                "count": 8
            },
            {
                "channel": 43,
                "count": 4
            },
            {
                "channel": 44,
                "count": 4
            },
            {
                "channel": 45,
                "count": 8
            },
            {
                "channel": 46,
                "count": 10
            },
            {
                "channel": 47,
                "count": 8
            },
            {
                "channel": 48,
                "count": 11
            },
            {
                "channel": 49,
                "count": 8
            },
            {
                "channel": 50,
                "count": 3
            },
            {
                "channel": 51,
                "count": 9
            },
            {
                "channel": 52,
                "count": 11
            },
            {
                "channel": 53,
                "count": 13
            },
            {
                "channel": 54,
                "count": 14
            },
            {
                "channel": 56,
                "count": 8
            },
            {
                "channel": 58,
                "count": 10
            },
            {
                "channel": 59,
                "count": 11
            },
            {
                "channel": 60,
                "count": 1
            },
            {
                "channel": 61,
                "count": 9
            },
            {
                "channel": 62,
                "count": 10
            },
            {
                "channel": 63,
                "count": 9
            },
            {
                "channel": 64,
                "count": 9
            },
            {
                "channel": 66,
                "count": 12
            },
            {
                "channel": 68,
                "count": 15
            },
            {
                "channel": 69,
                "count": 12
            },
            {
                "channel": 70,
                "count": 13
            },
            {
                "channel": 71,
                "count": 10
            },
            {
                "channel": 72,
                "count": 11
            },
            {
                "channel": 74,
                "count": 11
            },
            {
                "channel": 75,
                "count": 11
            },
            {
                "channel": 76,
                "count": 9
            },
            {
                "channel": 77,
                "count": 11
            },
            {
                "channel": 78,
                "count": 12
            },
            {
                "channel": 80,
                "count": 14
            },
            {
                "channel": 82,
                "count": 11
            },
            {
                "channel": 83,
                "count": 11
            },
            {
                "channel": 84,
                "count": 11
            },
            {
                "channel": 85,
                "count": 11
            },
            {
                "channel": 86,
                "count": 14
            },
            {
                "channel": 88,
                "count": 13
            },
            {
                "channel": 90,
                "count": 10
            },
            {
                "channel": 92,
                "count": 13
            },
            {
                "channel": 93,
                "count": 12
            },
            {
                "channel": 94,
                "count": 12
            },
            {
                "channel": 95,
                "count": 11
            },
            {
                "channel": 96,
                "count": 9
            },
            {
                "channel": 97,
                "count": 12
            },
            {
                "channel": 98,
                "count": 9
            },
            {
                "channel": 99,
                "count": 7
            },
            {
                "channel": 100,
                "count": 9
            },
            {
                "channel": 101,
                "count": 12
            },
            {
                "channel": 102,
                "count": 11
            },
            {
                "channel": 103,
                "count": 8
            },
            {
                "channel": 104,
                "count": 13
            },
            {
                "channel": 105,
                "count": 12
            },
            {
                "channel": 106,
                "count": 12
            },
            {
                "channel": 107,
                "count": 10
            },
            {
                "channel": 108,
                "count": 9
            },
            {
                "channel": 109,
                "count": 14
            },
            {
                "channel": 110,
                "count": 12
            },
            {
                "channel": 112,
                "count": 12
            },
            {
                "channel": 113,
                "count": 11
            },
            {
                "channel": 114,
                "count": 9
            },
            {
                "channel": 115,
                "count": 8
            },
            {
                "channel": 116,
                "count": 11
            },
            {
                "channel": 117,
                "count": 11
            },
            {
                "channel": 118,
                "count": 15
            },
            {
                "channel": 120,
                "count": 13
            },
            {
                "channel": 122,
                "count": 9
            },
            {
                "channel": 123,
                "count": 11
            },
            {
                "channel": 125,
                "count": 10
            },
            {
                "channel": 126,
                "count": 12
            },
            {
                "channel": 127,
                "count": 12
            },
            {
                "channel": 128,
                "count": 12
            },
            {
                "channel": 130,
                "count": 12
            },
            {
                "channel": 133,
                "count": 12
            },
            {
                "channel": 134,
                "count": 11
            },
            {
                "channel": 135,
                "count": 10
            },
            {
                "channel": 136,
                "count": 13
            },
            {
                "channel": 140,
                "count": 9
            },
            {
                "channel": 141,
                "count": 11
            },
            {
                "channel": 142,
                "count": 15
            },
            {
                "channel": 143,
                "count": 11
            },
            {
                "channel": 144,
                "count": 10
            },
            {
                "channel": 147,
                "count": 11
            },
            {
                "channel": 148,
                "count": 11
            },
            {
                "channel": 150,
                "count": 10
            },
            {
                "channel": 151,
                "count": 13
            },
            {
                "channel": 152,
                "count": 15
            },
            {
                "channel": 154,
                "count": 12
            },
            {
                "channel": 155,
                "count": 10
            },
            {
                "channel": 156,
                "count": 12
            },
            {
                "channel": 158,
                "count": 10
            },
            {
                "channel": 159,
                "count": 13
            },
            {
                "channel": 160,
                "count": 13
            },
            {
                "channel": 161,
                "count": 8
            },
            {
                "channel": 162,
                "count": 12
            },
            {
                "channel": 163,
                "count": 13
            },
            {
                "channel": 164,
                "count": 8
            },
            {
                "channel": 165,
                "count": 12
            },
            {
                "channel": 166,
                "count": 4
            },
            {
                "channel": 167,
                "count": 10
            },
            {
                "channel": 168,
                "count": 13
            },
            {
                "channel": 169,
                "count": 10
            },
            {
                "channel": 170,
                "count": 7
            },
            {
                "channel": 171,
                "count": 9
            },
            {
                "channel": 172,
                "count": 10
            },
            {
                "channel": 173,
                "count": 10
            },
            {
                "channel": 174,
                "count": 11
            },
            {
                "channel": 175,
                "count": 8
            },
            {
                "channel": 176,
                "count": 10
            },
            {
                "channel": 177,
                "count": 8
            },
            {
                "channel": 178,
                "count": 12
            },
            {
                "channel": 179,
                "count": 11
            },
            {
                "channel": 180,
                "count": 10
            },
            {
                "channel": 181,
                "count": 13
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 183,
                "count": 12
            },
            {
                "channel": 184,
                "count": 12
            },
            {
                "channel": 185,
                "count": 9
            },
            {
                "channel": 186,
                "count": 12
            },
            {
                "channel": 187,
                "count": 11
            },
            {
                "channel": 188,
                "count": 9
            },
            {
                "channel": 189,
                "count": 11
            },
            {
                "channel": 190,
                "count": 7
            },
            {
                "channel": 191,
                "count": 10
            },
            {
                "channel": 192,
                "count": 10
            },
            {
                "channel": 196,
                "count": 9
            },
            {
                "channel": 197,
                "count": 11
            },
            {
                "channel": 198,
                "count": 14
            },
            {
                "channel": 202,
                "count": 10
            },
            {
                "channel": 204,
                "count": 13
            },
            {
                "channel": 205,
                "count": 12
            },
            {
                "channel": 207,
                "count": 13
            },
            {
                "channel": 208,
                "count": 13
            },
            {
                "channel": 212,
                "count": 12
            },
            {
                "channel": 213,
                "count": 11
            },
            {
                "channel": 214,
                "count": 12
            },
            {
                "channel": 215,
                "count": 11
            },
            {
                "channel": 216,
                "count": 14
            },
            {
                "channel": 222,
                "count": 11
            },
            {
                "channel": 223,
                "count": 11
            },
            {
                "channel": 224,
                "count": 14
            },
            {
                "channel": 225,
                "count": 7
            },
            {
                "channel": 226,
                "count": 4
            },
            {
                "channel": 227,
                "count": 10
            },
            {
                "channel": 228,
                "count": 10
            },
            {
                "channel": 229,
                "count": 12
            },
            {
                "channel": 230,
                "count": 11
            },
            {
                "channel": 231,
                "count": 13
            },
            {
                "channel": 232,
                "count": 15
            },
            {
                "channel": 233,
                "count": 9
            },
            {
                "channel": 234,
                "count": 9
            },
            {
                "channel": 235,
                "count": 4
            },
            {
                "channel": 237,
                "count": 12
            },
            {
                "channel": 238,
                "count": 13
            },
            {
                "channel": 239,
                "count": 9
            },
            {
                "channel": 240,
                "count": 11
            },
            {
                "channel": 241,
                "count": 9
            },
            {
                "channel": 242,
                "count": 9
            },
            {
                "channel": 243,
                "count": 10
            },
            {
                "channel": 245,
                "count": 12
            },
            {
                "channel": 246,
                "count": 12
            },
            {
                "channel": 247,
                "count": 11
            },
            {
                "channel": 249,
                "count": 8
            },
            {
                "channel": 250,
                "count": 9
            },
            {
                "channel": 251,
                "count": 10
            },
            {
                "channel": 252,
                "count": 6
            },
            {
                "channel": 253,
                "count": 9
            },
            {
                "channel": 254,
                "count": 9
            },
            {
                "channel": 255,
                "count": 13
            },
            {
                "channel": 256,
                "count": 13
            },
            {
                "channel": 258,
                "count": 10
            },
            {
                "channel": 259,
                "count": 12
            },
            {
                "channel": 261,
                "count": 10
            },
            {
                "channel": 262,
                "count": 12
            },
            {
                "channel": 265,
                "count": 10
            },
            {
                "channel": 268,
                "count": 11
            },
            {
                "channel": 271,
                "count": 11
            },
            {
                "channel": 272,
                "count": 11
            },
            {
                "channel": 274,
                "count": 7
            },
            {
                "channel": 276,
                "count": 9
            },
            {
                "channel": 278,
                "count": 11
            },
            {
                "channel": 280,
                "count": 9
            },
            {
                "channel": 284,
                "count": 7
            },
            {
                "channel": 285,
                "count": 11
            },
            {
                "channel": 287,
                "count": 13
            },
            {
                "channel": 288,
                "count": 10
            },
            {
                "channel": 289,
                "count": 6
            },
            {
                "channel": 290,
                "count": 6
            },
            {
                "channel": 291,
                "count": 11
            },
            {
                "channel": 292,
                "count": 10
            },
            {
                "channel": 293,
                "count": 9
            },
            {
                "channel": 294,
                "count": 15
            },
            {
                "channel": 296,
                "count": 11
            },
            {
                "channel": 297,
                "count": 9
            },
            {
                "channel": 298,
                "count": 8
            },
            {
                "channel": 299,
                "count": 8
            },
            {
                "channel": 300,
                "count": 12
            },
            {
                "channel": 301,
                "count": 9
            },
            {
                "channel": 302,
                "count": 14
            },
            {
                "channel": 303,
                "count": 13
            },
            {
                "channel": 304,
                "count": 12
            },
            {
                "channel": 305,
                "count": 7
            },
            {
                "channel": 306,
                "count": 10
            },
            {
                "channel": 307,
                "count": 7
            },
            {
                "channel": 308,
                "count": 11
            },
            {
                "channel": 309,
                "count": 9
            },
            {
                "channel": 310,
                "count": 15
            },
            {
                "channel": 312,
                "count": 13
            },
            {
                "channel": 313,
                "count": 5
            },
            {
                "channel": 314,
                "count": 7
            },
            {
                "channel": 315,
                "count": 3
            },
            {
                "channel": 316,
                "count": 8
            },
            {
                "channel": 317,
                "count": 7
            },
            {
                "channel": 318,
                "count": 8
            },
            {
                "channel": 319,
                "count": 11
            },
            {
                "channel": 320,
                "count": 13
            },
            {
                "channel": 323,
                "count": 13
            },
            {
                "channel": 324,
                "count": 11
            },
            {
                "channel": 334,
                "count": 13
            },
            {
                "channel": 335,
                "count": 14
            },
            {
                "channel": 336,
                "count": 10
            },
            {
                "channel": 337,
                "count": 6
            },
            {
                "channel": 338,
                "count": 10
            },
            {
                "channel": 340,
                "count": 9
            },
            {
                "channel": 341,
                "count": 1
            },
            {
                "channel": 342,
                "count": 12
            },
            {
                "channel": 343,
                "count": 13
            },
            {
                "channel": 344,
                "count": 12
            },
            {
                "channel": 345,
                "count": 10
            },
            {
                "channel": 347,
                "count": 9
            },
            {
                "channel": 350,
                "count": 12
            },
            {
                "channel": 351,
                "count": 13
            },
            {
                "channel": 353,
                "count": 9
            },
            {
                "channel": 354,
                "count": 10
            },
            {
                "channel": 355,
                "count": 10
            },
            {
                "channel": 356,
                "count": 1
            },
            {
                "channel": 357,
                "count": 5
            },
            {
                "channel": 358,
                "count": 13
            },
            {
                "channel": 359,
                "count": 9
            },
            {
                "channel": 360,
                "count": 11
            },
            {
                "channel": 361,
                "count": 7
            },
            {
                "channel": 362,
                "count": 9
            },
            {
                "channel": 364,
                "count": 5
            },
            {
                "channel": 365,
                "count": 5
            },
            {
                "channel": 366,
                "count": 15
            },
            {
                "channel": 367,
                "count": 12
            },
            {
                "channel": 369,
                "count": 6
            },
            {
                "channel": 370,
                "count": 7
            },
            {
                "channel": 371,
                "count": 10
            },
            {
                "channel": 373,
                "count": 11
            },
            {
                "channel": 374,
                "count": 10
            },
            {
                "channel": 376,
                "count": 12
            },
            {
                "channel": 377,
                "count": 5
            },
            {
                "channel": 378,
                "count": 8
            },
            {
                "channel": 379,
                "count": 10
            },
            {
                "channel": 380,
                "count": 2
            },
            {
                "channel": 381,
                "count": 8
            },
            {
                "channel": 382,
                "count": 7
            },
            {
                "channel": 383,
                "count": 10
            },
            {
                "channel": 384,
                "count": 10
            },
            {
                "channel": 388,
                "count": 11
            },
            {
                "channel": 389,
                "count": 12
            },
            {
                "channel": 390,
                "count": 9
            },
            {
                "channel": 392,
                "count": 10
            },
            {
                "channel": 393,
                "count": 5
            },
            {
                "channel": 394,
                "count": 7
            },
            {
                "channel": 397,
                "count": 10
            },
            {
                "channel": 398,
                "count": 10
            },
            {
                "channel": 399,
                "count": 11
            },
            {
                "channel": 400,
                "count": 12
            },
            {
                "channel": 401,
                "count": 1
            },
            {
                "channel": 406,
                "count": 11
            },
            {
                "channel": 408,
                "count": 12
            },
            {
                "channel": 410,
                "count": 13
            },
            {
                "channel": 413,
                "count": 9
            },
            {
                "channel": 414,
                "count": 12
            },
            {
                "channel": 415,
                "count": 16
            },
            {
                "channel": 416,
                "count": 11
            },
            {
                "channel": 417,
                "count": 8
            },
            {
                "channel": 418,
                "count": 9
            },
            {
                "channel": 419,
                "count": 8
            },
            {
                "channel": 420,
                "count": 12
            },
            {
                "channel": 421,
                "count": 11
            },
            {
                "channel": 422,
                "count": 14
            },
            {
                "channel": 423,
                "count": 11
            },
            {
                "channel": 424,
                "count": 4
            },
            {
                "channel": 425,
                "count": 7
            },
            {
                "channel": 426,
                "count": 16
            },
            {
                "channel": 427,
                "count": 9
            },
            {
                "channel": 428,
                "count": 10
            },
            {
                "channel": 429,
                "count": 11
            },
            {
                "channel": 430,
                "count": 8
            },
            {
                "channel": 431,
                "count": 8
            },
            {
                "channel": 432,
                "count": 10
            },
            {
                "channel": 433,
                "count": 6
            },
            {
                "channel": 434,
                "count": 10
            },
            {
                "channel": 435,
                "count": 11
            },
            {
                "channel": 436,
                "count": 8
            },
            {
                "channel": 437,
                "count": 11
            },
            {
                "channel": 438,
                "count": 9
            },
            {
                "channel": 439,
                "count": 12
            },
            {
                "channel": 440,
                "count": 12
            },
            {
                "channel": 441,
                "count": 8
            },
            {
                "channel": 442,
                "count": 10
            },
            {
                "channel": 443,
                "count": 9
            },
            {
                "channel": 444,
                "count": 9
            },
            {
                "channel": 447,
                "count": 13
            },
            {
                "channel": 448,
                "count": 8
            },
            {
                "channel": 449,
                "count": 11
            },
            {
                "channel": 450,
                "count": 8
            },
            {
                "channel": 451,
                "count": 8
            },
            {
                "channel": 452,
                "count": 10
            },
            {
                "channel": 453,
                "count": 10
            },
            {
                "channel": 454,
                "count": 9
            },
            {
                "channel": 455,
                "count": 10
            },
            {
                "channel": 456,
                "count": 14
            },
            {
                "channel": 458,
                "count": 8
            },
            {
                "channel": 461,
                "count": 11
            },
            {
                "channel": 462,
                "count": 12
            },
            {
                "channel": 463,
                "count": 11
            },
            {
                "channel": 464,
                "count": 8
            },
            {
                "channel": 466,
                "count": 7
            },
            {
                "channel": 468,
                "count": 10
            },
            {
                "channel": 469,
                "count": 15
            },
            {
                "channel": 470,
                "count": 7
            },
            {
                "channel": 471,
                "count": 11
            },
            {
                "channel": 472,
                "count": 11
            },
            {
                "channel": 473,
                "count": 10
            },
            {
                "channel": 476,
                "count": 9
            },
            {
                "channel": 478,
                "count": 12
            },
            {
                "channel": 479,
                "count": 11
            },
            {
                "channel": 480,
                "count": 10
            },
            {
                "channel": 481,
                "count": 6
            },
            {
                "channel": 482,
                "count": 8
            },
            {
                "channel": 483,
                "count": 8
            },
            {
                "channel": 484,
                "count": 7
            },
            {
                "channel": 485,
                "count": 13
            },
            {
                "channel": 486,
                "count": 8
            },
            {
                "channel": 487,
                "count": 12
            },
            {
                "channel": 488,
                "count": 11
            },
            {
                "channel": 489,
                "count": 9
            },
            {
                "channel": 490,
                "count": 9
            },
            {
                "channel": 491,
                "count": 13
            },
            {
                "channel": 492,
                "count": 11
            },
            {
                "channel": 493,
                "count": 10
            },
            {
                "channel": 494,
                "count": 3
            },
            {
                "channel": 495,
                "count": 10
            },
            {
                "channel": 496,
                "count": 10
            },
            {
                "channel": 497,
                "count": 5
            },
            {
                "channel": 498,
                "count": 8
            },
            {
                "channel": 499,
                "count": 8
            },
            {
                "channel": 501,
                "count": 10
            },
            {
                "channel": 503,
                "count": 11
            },
            {
                "channel": 504,
                "count": 11
            },
            {
                "channel": 505,
                "count": 1
            },
            {
                "channel": 506,
                "count": 9
            },
            {
                "channel": 507,
                "count": 8
            },
            {
                "channel": 508,
                "count": 8
            },
            {
                "channel": 509,
                "count": 11
            },
            {
                "channel": 510,
                "count": 12
            },
            {
                "channel": 512,
                "count": 12
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 1080,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.11+f1071ce"
        },
        "tracking_id": {
            "asic_id": "4111609456",
            "asic_id_eeprom": "5319875",
            "asic_temp": "28.889151",
            "asic_version": "IA02C",
            "auto_update": "0",
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/",
            "bream_is_standard": "0",
            "configuration_version": "1.0.1",
            "device_id": "MN30569",
            "device_type": "minion",
            "distribution_status": "stable",
            "distribution_version": "19.12.2",
            "exp_script_name": "sequencing_MIN106_DNA:FLO-MIN106:SQK-LSK109:False",
            "exp_script_purpose": "sequencing_run",
            "exp_start_time": "2020-02-12T04:03:28Z",
            "flow_cell_id": "FAL03879",
            "flow_cell_product_code": "FLO-MIN106",
            "guppy_version": "3.2.8+bd67289",
            "heatsink_temp": "34.015625",
            "hostname": "adminion-Precision-3630-Tower",
            "installation_type": "nc",
            "local_firmware_file": "1",
            "msg_id": "256af2aa-bc9a-481f-8bc2-cdf660d4846c",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-13T21:45:53Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    }
]