[
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 415,
                "pass": 3585
            },
            "qscore_dist_temp": [
                {
                    "count": 3,
                    "mean_qscore": 3.0
                },
                {
                    "count": 13,
                    "mean_qscore": 3.5
                },
                {
                    "count": 24,
                    "mean_qscore": 4.0
                },
                {
                    "count": 28,
                    "mean_qscore": 4.5
                },
                {
                    "count": 61,
                    "mean_qscore": 5.0
                },
                {
                    "count": 88,
                    "mean_qscore": 5.5
                },
                {
                    "count": 86,
                    "mean_qscore": 6.0
                },
                {
                    "count": 112,
                    "mean_qscore": 6.5
                },
                {
                    "count": 180,
                    "mean_qscore": 7.0
                },
                {
                    "count": 289,
                    "mean_qscore": 7.5
                },
                {
                    "count": 398,
                    "mean_qscore": 8.0
                },
                {
                    "count": 267,
                    "mean_qscore": 8.5
                },
                {
                    "count": 247,
                    "mean_qscore": 9.0
                },
                {
                    "count": 274,
                    "mean_qscore": 9.5
                },
                {
                    "count": 367,
                    "mean_qscore": 10.0
                },
                {
                    "count": 457,
                    "mean_qscore": 10.5
                },
                {
                    "count": 480,
                    "mean_qscore": 11.0
                },
                {
                    "count": 348,
                    "mean_qscore": 11.5
                },
                {
                    "count": 191,
                    "mean_qscore": 12.0
                },
                {
                    "count": 65,
                    "mean_qscore": 12.5
                },
                {
                    "count": 15,
                    "mean_qscore": 13.0
                },
                {
                    "count": 6,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 14.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.538893699646,
                "sum": 38155.57421875
            },
            "read_len_events_sum_temp": 15721890,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 81,
                    "length": 0.0
                },
                {
                    "count": 509,
                    "length": 1000.0
                },
                {
                    "count": 568,
                    "length": 2000.0
                },
                {
                    "count": 819,
                    "length": 3000.0
                },
                {
                    "count": 1465,
                    "length": 4000.0
                },
                {
                    "count": 175,
                    "length": 5000.0
                },
                {
                    "count": 95,
                    "length": 6000.0
                },
                {
                    "count": 116,
                    "length": 7000.0
                },
                {
                    "count": 93,
                    "length": 8000.0
                },
                {
                    "count": 46,
                    "length": 9000.0
                },
                {
                    "count": 18,
                    "length": 10000.0
                },
                {
                    "count": 4,
                    "length": 11000.0
                },
                {
                    "count": 3,
                    "length": 12000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 2,
                    "length": 16000.0
                },
                {
                    "count": 2,
                    "length": 17000.0
                },
                {
                    "count": 1,
                    "length": 18000.0
                },
                {
                    "count": 1,
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
                "mean": 86.8871994018555,
                "sum": 347548.8125
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.73663139343262,
                "sum": 38946.52734375
            }
        },
        "channel_count": 450,
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
        "latest_run_time": 661.101257324219,
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
                "count": 7
            },
            {
                "channel": 3,
                "count": 11
            },
            {
                "channel": 4,
                "count": 4
            },
            {
                "channel": 5,
                "count": 11
            },
            {
                "channel": 6,
                "count": 10
            },
            {
                "channel": 7,
                "count": 9
            },
            {
                "channel": 8,
                "count": 9
            },
            {
                "channel": 9,
                "count": 6
            },
            {
                "channel": 10,
                "count": 11
            },
            {
                "channel": 11,
                "count": 9
            },
            {
                "channel": 12,
                "count": 5
            },
            {
                "channel": 13,
                "count": 11
            },
            {
                "channel": 15,
                "count": 10
            },
            {
                "channel": 16,
                "count": 9
            },
            {
                "channel": 17,
                "count": 8
            },
            {
                "channel": 18,
                "count": 10
            },
            {
                "channel": 19,
                "count": 9
            },
            {
                "channel": 20,
                "count": 9
            },
            {
                "channel": 21,
                "count": 11
            },
            {
                "channel": 22,
                "count": 10
            },
            {
                "channel": 23,
                "count": 10
            },
            {
                "channel": 24,
                "count": 7
            },
            {
                "channel": 25,
                "count": 9
            },
            {
                "channel": 26,
                "count": 7
            },
            {
                "channel": 28,
                "count": 9
            },
            {
                "channel": 29,
                "count": 5
            },
            {
                "channel": 31,
                "count": 10
            },
            {
                "channel": 32,
                "count": 11
            },
            {
                "channel": 33,
                "count": 11
            },
            {
                "channel": 34,
                "count": 7
            },
            {
                "channel": 35,
                "count": 10
            },
            {
                "channel": 36,
                "count": 9
            },
            {
                "channel": 37,
                "count": 8
            },
            {
                "channel": 38,
                "count": 10
            },
            {
                "channel": 39,
                "count": 10
            },
            {
                "channel": 40,
                "count": 11
            },
            {
                "channel": 41,
                "count": 9
            },
            {
                "channel": 42,
                "count": 8
            },
            {
                "channel": 43,
                "count": 8
            },
            {
                "channel": 44,
                "count": 7
            },
            {
                "channel": 45,
                "count": 9
            },
            {
                "channel": 46,
                "count": 6
            },
            {
                "channel": 47,
                "count": 7
            },
            {
                "channel": 48,
                "count": 6
            },
            {
                "channel": 49,
                "count": 10
            },
            {
                "channel": 50,
                "count": 8
            },
            {
                "channel": 51,
                "count": 8
            },
            {
                "channel": 52,
                "count": 10
            },
            {
                "channel": 53,
                "count": 10
            },
            {
                "channel": 54,
                "count": 10
            },
            {
                "channel": 55,
                "count": 9
            },
            {
                "channel": 56,
                "count": 9
            },
            {
                "channel": 57,
                "count": 1
            },
            {
                "channel": 58,
                "count": 10
            },
            {
                "channel": 59,
                "count": 8
            },
            {
                "channel": 60,
                "count": 8
            },
            {
                "channel": 61,
                "count": 12
            },
            {
                "channel": 62,
                "count": 9
            },
            {
                "channel": 63,
                "count": 9
            },
            {
                "channel": 64,
                "count": 8
            },
            {
                "channel": 65,
                "count": 7
            },
            {
                "channel": 66,
                "count": 9
            },
            {
                "channel": 67,
                "count": 12
            },
            {
                "channel": 68,
                "count": 9
            },
            {
                "channel": 69,
                "count": 13
            },
            {
                "channel": 70,
                "count": 10
            },
            {
                "channel": 71,
                "count": 13
            },
            {
                "channel": 72,
                "count": 14
            },
            {
                "channel": 73,
                "count": 8
            },
            {
                "channel": 74,
                "count": 8
            },
            {
                "channel": 75,
                "count": 12
            },
            {
                "channel": 76,
                "count": 9
            },
            {
                "channel": 77,
                "count": 9
            },
            {
                "channel": 78,
                "count": 11
            },
            {
                "channel": 80,
                "count": 11
            },
            {
                "channel": 82,
                "count": 12
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
                "count": 10
            },
            {
                "channel": 86,
                "count": 9
            },
            {
                "channel": 88,
                "count": 9
            },
            {
                "channel": 89,
                "count": 10
            },
            {
                "channel": 90,
                "count": 9
            },
            {
                "channel": 92,
                "count": 7
            },
            {
                "channel": 93,
                "count": 9
            },
            {
                "channel": 94,
                "count": 8
            },
            {
                "channel": 95,
                "count": 13
            },
            {
                "channel": 96,
                "count": 9
            },
            {
                "channel": 97,
                "count": 9
            },
            {
                "channel": 98,
                "count": 8
            },
            {
                "channel": 99,
                "count": 6
            },
            {
                "channel": 100,
                "count": 8
            },
            {
                "channel": 101,
                "count": 10
            },
            {
                "channel": 102,
                "count": 6
            },
            {
                "channel": 103,
                "count": 11
            },
            {
                "channel": 104,
                "count": 11
            },
            {
                "channel": 105,
                "count": 9
            },
            {
                "channel": 106,
                "count": 8
            },
            {
                "channel": 107,
                "count": 10
            },
            {
                "channel": 108,
                "count": 11
            },
            {
                "channel": 109,
                "count": 10
            },
            {
                "channel": 110,
                "count": 9
            },
            {
                "channel": 112,
                "count": 8
            },
            {
                "channel": 113,
                "count": 12
            },
            {
                "channel": 114,
                "count": 9
            },
            {
                "channel": 115,
                "count": 9
            },
            {
                "channel": 116,
                "count": 9
            },
            {
                "channel": 117,
                "count": 9
            },
            {
                "channel": 118,
                "count": 9
            },
            {
                "channel": 120,
                "count": 9
            },
            {
                "channel": 121,
                "count": 7
            },
            {
                "channel": 122,
                "count": 8
            },
            {
                "channel": 123,
                "count": 7
            },
            {
                "channel": 124,
                "count": 11
            },
            {
                "channel": 125,
                "count": 7
            },
            {
                "channel": 126,
                "count": 9
            },
            {
                "channel": 127,
                "count": 7
            },
            {
                "channel": 128,
                "count": 7
            },
            {
                "channel": 130,
                "count": 9
            },
            {
                "channel": 132,
                "count": 9
            },
            {
                "channel": 133,
                "count": 11
            },
            {
                "channel": 134,
                "count": 11
            },
            {
                "channel": 136,
                "count": 6
            },
            {
                "channel": 137,
                "count": 11
            },
            {
                "channel": 138,
                "count": 10
            },
            {
                "channel": 140,
                "count": 8
            },
            {
                "channel": 141,
                "count": 9
            },
            {
                "channel": 142,
                "count": 12
            },
            {
                "channel": 143,
                "count": 9
            },
            {
                "channel": 144,
                "count": 9
            },
            {
                "channel": 147,
                "count": 11
            },
            {
                "channel": 148,
                "count": 10
            },
            {
                "channel": 149,
                "count": 10
            },
            {
                "channel": 150,
                "count": 9
            },
            {
                "channel": 151,
                "count": 10
            },
            {
                "channel": 152,
                "count": 12
            },
            {
                "channel": 153,
                "count": 10
            },
            {
                "channel": 154,
                "count": 8
            },
            {
                "channel": 155,
                "count": 10
            },
            {
                "channel": 156,
                "count": 10
            },
            {
                "channel": 157,
                "count": 11
            },
            {
                "channel": 158,
                "count": 9
            },
            {
                "channel": 159,
                "count": 12
            },
            {
                "channel": 160,
                "count": 9
            },
            {
                "channel": 161,
                "count": 7
            },
            {
                "channel": 162,
                "count": 8
            },
            {
                "channel": 163,
                "count": 9
            },
            {
                "channel": 164,
                "count": 7
            },
            {
                "channel": 165,
                "count": 6
            },
            {
                "channel": 166,
                "count": 9
            },
            {
                "channel": 167,
                "count": 9
            },
            {
                "channel": 168,
                "count": 8
            },
            {
                "channel": 169,
                "count": 9
            },
            {
                "channel": 170,
                "count": 7
            },
            {
                "channel": 171,
                "count": 6
            },
            {
                "channel": 172,
                "count": 12
            },
            {
                "channel": 173,
                "count": 8
            },
            {
                "channel": 174,
                "count": 8
            },
            {
                "channel": 175,
                "count": 10
            },
            {
                "channel": 176,
                "count": 10
            },
            {
                "channel": 177,
                "count": 9
            },
            {
                "channel": 178,
                "count": 7
            },
            {
                "channel": 179,
                "count": 15
            },
            {
                "channel": 180,
                "count": 8
            },
            {
                "channel": 181,
                "count": 7
            },
            {
                "channel": 183,
                "count": 9
            },
            {
                "channel": 184,
                "count": 10
            },
            {
                "channel": 185,
                "count": 7
            },
            {
                "channel": 186,
                "count": 7
            },
            {
                "channel": 187,
                "count": 8
            },
            {
                "channel": 188,
                "count": 9
            },
            {
                "channel": 189,
                "count": 9
            },
            {
                "channel": 190,
                "count": 11
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
                "channel": 194,
                "count": 8
            },
            {
                "channel": 195,
                "count": 12
            },
            {
                "channel": 196,
                "count": 8
            },
            {
                "channel": 197,
                "count": 9
            },
            {
                "channel": 198,
                "count": 10
            },
            {
                "channel": 200,
                "count": 9
            },
            {
                "channel": 201,
                "count": 9
            },
            {
                "channel": 202,
                "count": 9
            },
            {
                "channel": 203,
                "count": 9
            },
            {
                "channel": 204,
                "count": 10
            },
            {
                "channel": 205,
                "count": 10
            },
            {
                "channel": 206,
                "count": 10
            },
            {
                "channel": 207,
                "count": 12
            },
            {
                "channel": 208,
                "count": 12
            },
            {
                "channel": 210,
                "count": 4
            },
            {
                "channel": 212,
                "count": 10
            },
            {
                "channel": 213,
                "count": 8
            },
            {
                "channel": 214,
                "count": 10
            },
            {
                "channel": 215,
                "count": 9
            },
            {
                "channel": 216,
                "count": 9
            },
            {
                "channel": 218,
                "count": 3
            },
            {
                "channel": 222,
                "count": 11
            },
            {
                "channel": 223,
                "count": 8
            },
            {
                "channel": 224,
                "count": 8
            },
            {
                "channel": 225,
                "count": 6
            },
            {
                "channel": 226,
                "count": 4
            },
            {
                "channel": 227,
                "count": 6
            },
            {
                "channel": 228,
                "count": 10
            },
            {
                "channel": 229,
                "count": 10
            },
            {
                "channel": 230,
                "count": 8
            },
            {
                "channel": 231,
                "count": 8
            },
            {
                "channel": 232,
                "count": 10
            },
            {
                "channel": 233,
                "count": 7
            },
            {
                "channel": 234,
                "count": 3
            },
            {
                "channel": 235,
                "count": 9
            },
            {
                "channel": 237,
                "count": 11
            },
            {
                "channel": 238,
                "count": 5
            },
            {
                "channel": 239,
                "count": 12
            },
            {
                "channel": 240,
                "count": 9
            },
            {
                "channel": 241,
                "count": 6
            },
            {
                "channel": 243,
                "count": 8
            },
            {
                "channel": 245,
                "count": 10
            },
            {
                "channel": 246,
                "count": 9
            },
            {
                "channel": 247,
                "count": 8
            },
            {
                "channel": 248,
                "count": 12
            },
            {
                "channel": 249,
                "count": 8
            },
            {
                "channel": 250,
                "count": 8
            },
            {
                "channel": 251,
                "count": 5
            },
            {
                "channel": 252,
                "count": 7
            },
            {
                "channel": 253,
                "count": 8
            },
            {
                "channel": 254,
                "count": 11
            },
            {
                "channel": 255,
                "count": 10
            },
            {
                "channel": 256,
                "count": 8
            },
            {
                "channel": 258,
                "count": 10
            },
            {
                "channel": 259,
                "count": 9
            },
            {
                "channel": 260,
                "count": 10
            },
            {
                "channel": 261,
                "count": 8
            },
            {
                "channel": 262,
                "count": 13
            },
            {
                "channel": 263,
                "count": 9
            },
            {
                "channel": 264,
                "count": 14
            },
            {
                "channel": 265,
                "count": 6
            },
            {
                "channel": 267,
                "count": 9
            },
            {
                "channel": 268,
                "count": 9
            },
            {
                "channel": 271,
                "count": 10
            },
            {
                "channel": 272,
                "count": 11
            },
            {
                "channel": 274,
                "count": 9
            },
            {
                "channel": 276,
                "count": 12
            },
            {
                "channel": 277,
                "count": 9
            },
            {
                "channel": 278,
                "count": 8
            },
            {
                "channel": 279,
                "count": 10
            },
            {
                "channel": 280,
                "count": 11
            },
            {
                "channel": 282,
                "count": 11
            },
            {
                "channel": 283,
                "count": 6
            },
            {
                "channel": 284,
                "count": 8
            },
            {
                "channel": 285,
                "count": 8
            },
            {
                "channel": 286,
                "count": 10
            },
            {
                "channel": 287,
                "count": 9
            },
            {
                "channel": 288,
                "count": 10
            },
            {
                "channel": 289,
                "count": 5
            },
            {
                "channel": 290,
                "count": 6
            },
            {
                "channel": 291,
                "count": 6
            },
            {
                "channel": 292,
                "count": 6
            },
            {
                "channel": 293,
                "count": 10
            },
            {
                "channel": 294,
                "count": 7
            },
            {
                "channel": 296,
                "count": 11
            },
            {
                "channel": 297,
                "count": 1
            },
            {
                "channel": 298,
                "count": 4
            },
            {
                "channel": 299,
                "count": 5
            },
            {
                "channel": 300,
                "count": 7
            },
            {
                "channel": 301,
                "count": 7
            },
            {
                "channel": 302,
                "count": 12
            },
            {
                "channel": 303,
                "count": 11
            },
            {
                "channel": 304,
                "count": 11
            },
            {
                "channel": 305,
                "count": 5
            },
            {
                "channel": 306,
                "count": 5
            },
            {
                "channel": 307,
                "count": 8
            },
            {
                "channel": 308,
                "count": 7
            },
            {
                "channel": 309,
                "count": 11
            },
            {
                "channel": 310,
                "count": 11
            },
            {
                "channel": 312,
                "count": 9
            },
            {
                "channel": 313,
                "count": 7
            },
            {
                "channel": 314,
                "count": 6
            },
            {
                "channel": 315,
                "count": 7
            },
            {
                "channel": 316,
                "count": 10
            },
            {
                "channel": 317,
                "count": 8
            },
            {
                "channel": 318,
                "count": 7
            },
            {
                "channel": 319,
                "count": 10
            },
            {
                "channel": 320,
                "count": 9
            },
            {
                "channel": 322,
                "count": 8
            },
            {
                "channel": 323,
                "count": 11
            },
            {
                "channel": 324,
                "count": 10
            },
            {
                "channel": 327,
                "count": 11
            },
            {
                "channel": 328,
                "count": 11
            },
            {
                "channel": 334,
                "count": 9
            },
            {
                "channel": 335,
                "count": 9
            },
            {
                "channel": 336,
                "count": 11
            },
            {
                "channel": 337,
                "count": 9
            },
            {
                "channel": 338,
                "count": 8
            },
            {
                "channel": 339,
                "count": 10
            },
            {
                "channel": 340,
                "count": 9
            },
            {
                "channel": 341,
                "count": 10
            },
            {
                "channel": 342,
                "count": 13
            },
            {
                "channel": 343,
                "count": 11
            },
            {
                "channel": 344,
                "count": 9
            },
            {
                "channel": 345,
                "count": 9
            },
            {
                "channel": 346,
                "count": 10
            },
            {
                "channel": 347,
                "count": 11
            },
            {
                "channel": 350,
                "count": 12
            },
            {
                "channel": 351,
                "count": 8
            },
            {
                "channel": 352,
                "count": 10
            },
            {
                "channel": 353,
                "count": 2
            },
            {
                "channel": 354,
                "count": 7
            },
            {
                "channel": 355,
                "count": 7
            },
            {
                "channel": 357,
                "count": 8
            },
            {
                "channel": 358,
                "count": 10
            },
            {
                "channel": 359,
                "count": 11
            },
            {
                "channel": 360,
                "count": 9
            },
            {
                "channel": 361,
                "count": 5
            },
            {
                "channel": 362,
                "count": 5
            },
            {
                "channel": 364,
                "count": 7
            },
            {
                "channel": 365,
                "count": 11
            },
            {
                "channel": 366,
                "count": 10
            },
            {
                "channel": 367,
                "count": 10
            },
            {
                "channel": 369,
                "count": 3
            },
            {
                "channel": 370,
                "count": 7
            },
            {
                "channel": 371,
                "count": 7
            },
            {
                "channel": 372,
                "count": 10
            },
            {
                "channel": 373,
                "count": 9
            },
            {
                "channel": 374,
                "count": 9
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
                "count": 5
            },
            {
                "channel": 379,
                "count": 4
            },
            {
                "channel": 380,
                "count": 7
            },
            {
                "channel": 381,
                "count": 6
            },
            {
                "channel": 382,
                "count": 5
            },
            {
                "channel": 383,
                "count": 4
            },
            {
                "channel": 384,
                "count": 9
            },
            {
                "channel": 387,
                "count": 8
            },
            {
                "channel": 388,
                "count": 10
            },
            {
                "channel": 389,
                "count": 7
            },
            {
                "channel": 390,
                "count": 10
            },
            {
                "channel": 391,
                "count": 9
            },
            {
                "channel": 392,
                "count": 12
            },
            {
                "channel": 393,
                "count": 10
            },
            {
                "channel": 394,
                "count": 12
            },
            {
                "channel": 395,
                "count": 10
            },
            {
                "channel": 397,
                "count": 12
            },
            {
                "channel": 398,
                "count": 11
            },
            {
                "channel": 399,
                "count": 8
            },
            {
                "channel": 400,
                "count": 11
            },
            {
                "channel": 401,
                "count": 11
            },
            {
                "channel": 403,
                "count": 13
            },
            {
                "channel": 405,
                "count": 10
            },
            {
                "channel": 406,
                "count": 11
            },
            {
                "channel": 407,
                "count": 11
            },
            {
                "channel": 408,
                "count": 11
            },
            {
                "channel": 409,
                "count": 9
            },
            {
                "channel": 410,
                "count": 11
            },
            {
                "channel": 413,
                "count": 9
            },
            {
                "channel": 414,
                "count": 10
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
                "count": 4
            },
            {
                "channel": 418,
                "count": 7
            },
            {
                "channel": 419,
                "count": 10
            },
            {
                "channel": 420,
                "count": 9
            },
            {
                "channel": 421,
                "count": 8
            },
            {
                "channel": 422,
                "count": 13
            },
            {
                "channel": 423,
                "count": 11
            },
            {
                "channel": 424,
                "count": 9
            },
            {
                "channel": 425,
                "count": 7
            },
            {
                "channel": 426,
                "count": 6
            },
            {
                "channel": 427,
                "count": 2
            },
            {
                "channel": 428,
                "count": 10
            },
            {
                "channel": 429,
                "count": 9
            },
            {
                "channel": 430,
                "count": 10
            },
            {
                "channel": 431,
                "count": 11
            },
            {
                "channel": 432,
                "count": 8
            },
            {
                "channel": 433,
                "count": 2
            },
            {
                "channel": 434,
                "count": 5
            },
            {
                "channel": 435,
                "count": 7
            },
            {
                "channel": 436,
                "count": 11
            },
            {
                "channel": 437,
                "count": 6
            },
            {
                "channel": 438,
                "count": 10
            },
            {
                "channel": 439,
                "count": 7
            },
            {
                "channel": 440,
                "count": 10
            },
            {
                "channel": 441,
                "count": 5
            },
            {
                "channel": 442,
                "count": 4
            },
            {
                "channel": 443,
                "count": 7
            },
            {
                "channel": 444,
                "count": 8
            },
            {
                "channel": 445,
                "count": 3
            },
            {
                "channel": 446,
                "count": 3
            },
            {
                "channel": 447,
                "count": 9
            },
            {
                "channel": 448,
                "count": 6
            },
            {
                "channel": 449,
                "count": 8
            },
            {
                "channel": 450,
                "count": 15
            },
            {
                "channel": 451,
                "count": 11
            },
            {
                "channel": 452,
                "count": 10
            },
            {
                "channel": 453,
                "count": 8
            },
            {
                "channel": 454,
                "count": 9
            },
            {
                "channel": 455,
                "count": 7
            },
            {
                "channel": 456,
                "count": 11
            },
            {
                "channel": 457,
                "count": 9
            },
            {
                "channel": 458,
                "count": 11
            },
            {
                "channel": 460,
                "count": 8
            },
            {
                "channel": 461,
                "count": 9
            },
            {
                "channel": 462,
                "count": 8
            },
            {
                "channel": 463,
                "count": 10
            },
            {
                "channel": 464,
                "count": 12
            },
            {
                "channel": 465,
                "count": 9
            },
            {
                "channel": 466,
                "count": 8
            },
            {
                "channel": 468,
                "count": 12
            },
            {
                "channel": 470,
                "count": 13
            },
            {
                "channel": 471,
                "count": 11
            },
            {
                "channel": 472,
                "count": 8
            },
            {
                "channel": 473,
                "count": 10
            },
            {
                "channel": 475,
                "count": 9
            },
            {
                "channel": 476,
                "count": 10
            },
            {
                "channel": 477,
                "count": 9
            },
            {
                "channel": 478,
                "count": 9
            },
            {
                "channel": 479,
                "count": 10
            },
            {
                "channel": 480,
                "count": 10
            },
            {
                "channel": 481,
                "count": 8
            },
            {
                "channel": 482,
                "count": 7
            },
            {
                "channel": 483,
                "count": 8
            },
            {
                "channel": 484,
                "count": 12
            },
            {
                "channel": 485,
                "count": 10
            },
            {
                "channel": 486,
                "count": 13
            },
            {
                "channel": 487,
                "count": 11
            },
            {
                "channel": 488,
                "count": 8
            },
            {
                "channel": 489,
                "count": 8
            },
            {
                "channel": 490,
                "count": 10
            },
            {
                "channel": 491,
                "count": 8
            },
            {
                "channel": 492,
                "count": 10
            },
            {
                "channel": 493,
                "count": 10
            },
            {
                "channel": 494,
                "count": 8
            },
            {
                "channel": 495,
                "count": 9
            },
            {
                "channel": 496,
                "count": 11
            },
            {
                "channel": 497,
                "count": 8
            },
            {
                "channel": 498,
                "count": 4
            },
            {
                "channel": 499,
                "count": 8
            },
            {
                "channel": 500,
                "count": 9
            },
            {
                "channel": 501,
                "count": 7
            },
            {
                "channel": 502,
                "count": 10
            },
            {
                "channel": 503,
                "count": 9
            },
            {
                "channel": 504,
                "count": 11
            },
            {
                "channel": 505,
                "count": 10
            },
            {
                "channel": 506,
                "count": 10
            },
            {
                "channel": 507,
                "count": 6
            },
            {
                "channel": 508,
                "count": 9
            },
            {
                "channel": 509,
                "count": 9
            },
            {
                "channel": 510,
                "count": 9
            },
            {
                "channel": 511,
                "count": 12
            },
            {
                "channel": 512,
                "count": 9
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "4783da22-ff96-4eba-a684-60968ce7f193",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 583,
                "pass": 3417
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 2.5
                },
                {
                    "count": 17,
                    "mean_qscore": 3.0
                },
                {
                    "count": 49,
                    "mean_qscore": 3.5
                },
                {
                    "count": 63,
                    "mean_qscore": 4.0
                },
                {
                    "count": 71,
                    "mean_qscore": 4.5
                },
                {
                    "count": 108,
                    "mean_qscore": 5.0
                },
                {
                    "count": 124,
                    "mean_qscore": 5.5
                },
                {
                    "count": 69,
                    "mean_qscore": 6.0
                },
                {
                    "count": 81,
                    "mean_qscore": 6.5
                },
                {
                    "count": 135,
                    "mean_qscore": 7.0
                },
                {
                    "count": 219,
                    "mean_qscore": 7.5
                },
                {
                    "count": 281,
                    "mean_qscore": 8.0
                },
                {
                    "count": 208,
                    "mean_qscore": 8.5
                },
                {
                    "count": 285,
                    "mean_qscore": 9.0
                },
                {
                    "count": 379,
                    "mean_qscore": 9.5
                },
                {
                    "count": 504,
                    "mean_qscore": 10.0
                },
                {
                    "count": 537,
                    "mean_qscore": 10.5
                },
                {
                    "count": 457,
                    "mean_qscore": 11.0
                },
                {
                    "count": 261,
                    "mean_qscore": 11.5
                },
                {
                    "count": 107,
                    "mean_qscore": 12.0
                },
                {
                    "count": 31,
                    "mean_qscore": 12.5
                },
                {
                    "count": 8,
                    "mean_qscore": 13.0
                },
                {
                    "count": 4,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 14.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.31971740722656,
                "sum": 37278.87109375
            },
            "read_len_events_sum_temp": 17081350,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 85,
                    "length": 0.0
                },
                {
                    "count": 332,
                    "length": 1000.0
                },
                {
                    "count": 394,
                    "length": 2000.0
                },
                {
                    "count": 752,
                    "length": 3000.0
                },
                {
                    "count": 1746,
                    "length": 4000.0
                },
                {
                    "count": 197,
                    "length": 5000.0
                },
                {
                    "count": 86,
                    "length": 6000.0
                },
                {
                    "count": 155,
                    "length": 7000.0
                },
                {
                    "count": 158,
                    "length": 8000.0
                },
                {
                    "count": 69,
                    "length": 9000.0
                },
                {
                    "count": 14,
                    "length": 10000.0
                },
                {
                    "count": 5,
                    "length": 11000.0
                },
                {
                    "count": 1,
                    "length": 12000.0
                },
                {
                    "count": 4,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 17000.0
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
                "mean": 80.6472396850586,
                "sum": 322588.96875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.26276111602783,
                "sum": 37051.04296875
            }
        },
        "channel_count": 434,
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
        "latest_run_time": 8388.1171875,
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
                "count": 9
            },
            {
                "channel": 3,
                "count": 6
            },
            {
                "channel": 4,
                "count": 10
            },
            {
                "channel": 5,
                "count": 12
            },
            {
                "channel": 6,
                "count": 8
            },
            {
                "channel": 7,
                "count": 7
            },
            {
                "channel": 8,
                "count": 8
            },
            {
                "channel": 9,
                "count": 10
            },
            {
                "channel": 10,
                "count": 8
            },
            {
                "channel": 11,
                "count": 12
            },
            {
                "channel": 12,
                "count": 8
            },
            {
                "channel": 13,
                "count": 10
            },
            {
                "channel": 14,
                "count": 9
            },
            {
                "channel": 15,
                "count": 9
            },
            {
                "channel": 16,
                "count": 8
            },
            {
                "channel": 17,
                "count": 10
            },
            {
                "channel": 18,
                "count": 8
            },
            {
                "channel": 19,
                "count": 10
            },
            {
                "channel": 20,
                "count": 12
            },
            {
                "channel": 21,
                "count": 11
            },
            {
                "channel": 22,
                "count": 10
            },
            {
                "channel": 23,
                "count": 8
            },
            {
                "channel": 24,
                "count": 8
            },
            {
                "channel": 25,
                "count": 8
            },
            {
                "channel": 26,
                "count": 9
            },
            {
                "channel": 27,
                "count": 10
            },
            {
                "channel": 28,
                "count": 7
            },
            {
                "channel": 29,
                "count": 11
            },
            {
                "channel": 30,
                "count": 10
            },
            {
                "channel": 31,
                "count": 11
            },
            {
                "channel": 32,
                "count": 9
            },
            {
                "channel": 33,
                "count": 9
            },
            {
                "channel": 34,
                "count": 11
            },
            {
                "channel": 35,
                "count": 11
            },
            {
                "channel": 36,
                "count": 8
            },
            {
                "channel": 37,
                "count": 5
            },
            {
                "channel": 38,
                "count": 8
            },
            {
                "channel": 39,
                "count": 10
            },
            {
                "channel": 40,
                "count": 11
            },
            {
                "channel": 41,
                "count": 11
            },
            {
                "channel": 42,
                "count": 8
            },
            {
                "channel": 43,
                "count": 8
            },
            {
                "channel": 44,
                "count": 9
            },
            {
                "channel": 45,
                "count": 9
            },
            {
                "channel": 46,
                "count": 9
            },
            {
                "channel": 47,
                "count": 10
            },
            {
                "channel": 48,
                "count": 8
            },
            {
                "channel": 49,
                "count": 9
            },
            {
                "channel": 50,
                "count": 9
            },
            {
                "channel": 51,
                "count": 2
            },
            {
                "channel": 52,
                "count": 9
            },
            {
                "channel": 53,
                "count": 8
            },
            {
                "channel": 54,
                "count": 7
            },
            {
                "channel": 55,
                "count": 8
            },
            {
                "channel": 56,
                "count": 10
            },
            {
                "channel": 58,
                "count": 6
            },
            {
                "channel": 59,
                "count": 8
            },
            {
                "channel": 60,
                "count": 9
            },
            {
                "channel": 61,
                "count": 10
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
                "count": 11
            },
            {
                "channel": 66,
                "count": 12
            },
            {
                "channel": 67,
                "count": 3
            },
            {
                "channel": 68,
                "count": 9
            },
            {
                "channel": 69,
                "count": 9
            },
            {
                "channel": 70,
                "count": 10
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
                "channel": 73,
                "count": 9
            },
            {
                "channel": 74,
                "count": 6
            },
            {
                "channel": 75,
                "count": 10
            },
            {
                "channel": 76,
                "count": 12
            },
            {
                "channel": 77,
                "count": 8
            },
            {
                "channel": 78,
                "count": 2
            },
            {
                "channel": 80,
                "count": 10
            },
            {
                "channel": 82,
                "count": 3
            },
            {
                "channel": 83,
                "count": 9
            },
            {
                "channel": 84,
                "count": 9
            },
            {
                "channel": 85,
                "count": 11
            },
            {
                "channel": 86,
                "count": 8
            },
            {
                "channel": 88,
                "count": 10
            },
            {
                "channel": 89,
                "count": 6
            },
            {
                "channel": 90,
                "count": 8
            },
            {
                "channel": 92,
                "count": 10
            },
            {
                "channel": 93,
                "count": 9
            },
            {
                "channel": 94,
                "count": 9
            },
            {
                "channel": 95,
                "count": 9
            },
            {
                "channel": 96,
                "count": 11
            },
            {
                "channel": 97,
                "count": 9
            },
            {
                "channel": 98,
                "count": 10
            },
            {
                "channel": 99,
                "count": 9
            },
            {
                "channel": 100,
                "count": 9
            },
            {
                "channel": 101,
                "count": 11
            },
            {
                "channel": 102,
                "count": 10
            },
            {
                "channel": 103,
                "count": 10
            },
            {
                "channel": 104,
                "count": 14
            },
            {
                "channel": 105,
                "count": 2
            },
            {
                "channel": 106,
                "count": 9
            },
            {
                "channel": 107,
                "count": 8
            },
            {
                "channel": 108,
                "count": 10
            },
            {
                "channel": 109,
                "count": 10
            },
            {
                "channel": 110,
                "count": 11
            },
            {
                "channel": 112,
                "count": 12
            },
            {
                "channel": 113,
                "count": 10
            },
            {
                "channel": 114,
                "count": 7
            },
            {
                "channel": 115,
                "count": 8
            },
            {
                "channel": 116,
                "count": 10
            },
            {
                "channel": 117,
                "count": 9
            },
            {
                "channel": 118,
                "count": 9
            },
            {
                "channel": 121,
                "count": 10
            },
            {
                "channel": 122,
                "count": 10
            },
            {
                "channel": 123,
                "count": 10
            },
            {
                "channel": 124,
                "count": 10
            },
            {
                "channel": 125,
                "count": 14
            },
            {
                "channel": 126,
                "count": 9
            },
            {
                "channel": 127,
                "count": 10
            },
            {
                "channel": 128,
                "count": 10
            },
            {
                "channel": 130,
                "count": 10
            },
            {
                "channel": 132,
                "count": 8
            },
            {
                "channel": 133,
                "count": 10
            },
            {
                "channel": 134,
                "count": 10
            },
            {
                "channel": 135,
                "count": 12
            },
            {
                "channel": 136,
                "count": 15
            },
            {
                "channel": 138,
                "count": 11
            },
            {
                "channel": 140,
                "count": 10
            },
            {
                "channel": 141,
                "count": 12
            },
            {
                "channel": 142,
                "count": 10
            },
            {
                "channel": 143,
                "count": 8
            },
            {
                "channel": 144,
                "count": 9
            },
            {
                "channel": 147,
                "count": 10
            },
            {
                "channel": 148,
                "count": 10
            },
            {
                "channel": 149,
                "count": 11
            },
            {
                "channel": 150,
                "count": 11
            },
            {
                "channel": 151,
                "count": 1
            },
            {
                "channel": 152,
                "count": 10
            },
            {
                "channel": 153,
                "count": 10
            },
            {
                "channel": 154,
                "count": 9
            },
            {
                "channel": 155,
                "count": 7
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
                "count": 10
            },
            {
                "channel": 160,
                "count": 9
            },
            {
                "channel": 161,
                "count": 10
            },
            {
                "channel": 162,
                "count": 8
            },
            {
                "channel": 163,
                "count": 12
            },
            {
                "channel": 164,
                "count": 11
            },
            {
                "channel": 165,
                "count": 8
            },
            {
                "channel": 166,
                "count": 3
            },
            {
                "channel": 167,
                "count": 12
            },
            {
                "channel": 168,
                "count": 10
            },
            {
                "channel": 169,
                "count": 10
            },
            {
                "channel": 170,
                "count": 6
            },
            {
                "channel": 171,
                "count": 12
            },
            {
                "channel": 172,
                "count": 7
            },
            {
                "channel": 173,
                "count": 10
            },
            {
                "channel": 174,
                "count": 9
            },
            {
                "channel": 175,
                "count": 12
            },
            {
                "channel": 176,
                "count": 11
            },
            {
                "channel": 177,
                "count": 6
            },
            {
                "channel": 178,
                "count": 9
            },
            {
                "channel": 179,
                "count": 11
            },
            {
                "channel": 180,
                "count": 8
            },
            {
                "channel": 181,
                "count": 9
            },
            {
                "channel": 183,
                "count": 9
            },
            {
                "channel": 184,
                "count": 7
            },
            {
                "channel": 185,
                "count": 10
            },
            {
                "channel": 186,
                "count": 8
            },
            {
                "channel": 187,
                "count": 10
            },
            {
                "channel": 188,
                "count": 8
            },
            {
                "channel": 189,
                "count": 9
            },
            {
                "channel": 190,
                "count": 10
            },
            {
                "channel": 191,
                "count": 7
            },
            {
                "channel": 192,
                "count": 10
            },
            {
                "channel": 195,
                "count": 9
            },
            {
                "channel": 196,
                "count": 11
            },
            {
                "channel": 197,
                "count": 12
            },
            {
                "channel": 198,
                "count": 13
            },
            {
                "channel": 200,
                "count": 11
            },
            {
                "channel": 202,
                "count": 5
            },
            {
                "channel": 203,
                "count": 11
            },
            {
                "channel": 204,
                "count": 12
            },
            {
                "channel": 205,
                "count": 12
            },
            {
                "channel": 206,
                "count": 11
            },
            {
                "channel": 207,
                "count": 10
            },
            {
                "channel": 208,
                "count": 9
            },
            {
                "channel": 210,
                "count": 11
            },
            {
                "channel": 212,
                "count": 10
            },
            {
                "channel": 213,
                "count": 9
            },
            {
                "channel": 214,
                "count": 9
            },
            {
                "channel": 215,
                "count": 12
            },
            {
                "channel": 216,
                "count": 11
            },
            {
                "channel": 219,
                "count": 3
            },
            {
                "channel": 222,
                "count": 12
            },
            {
                "channel": 223,
                "count": 10
            },
            {
                "channel": 224,
                "count": 10
            },
            {
                "channel": 225,
                "count": 8
            },
            {
                "channel": 226,
                "count": 8
            },
            {
                "channel": 227,
                "count": 6
            },
            {
                "channel": 228,
                "count": 10
            },
            {
                "channel": 229,
                "count": 10
            },
            {
                "channel": 230,
                "count": 7
            },
            {
                "channel": 231,
                "count": 9
            },
            {
                "channel": 232,
                "count": 13
            },
            {
                "channel": 233,
                "count": 7
            },
            {
                "channel": 234,
                "count": 10
            },
            {
                "channel": 235,
                "count": 9
            },
            {
                "channel": 237,
                "count": 8
            },
            {
                "channel": 238,
                "count": 9
            },
            {
                "channel": 239,
                "count": 11
            },
            {
                "channel": 240,
                "count": 10
            },
            {
                "channel": 241,
                "count": 8
            },
            {
                "channel": 242,
                "count": 7
            },
            {
                "channel": 243,
                "count": 9
            },
            {
                "channel": 245,
                "count": 10
            },
            {
                "channel": 246,
                "count": 10
            },
            {
                "channel": 247,
                "count": 11
            },
            {
                "channel": 248,
                "count": 11
            },
            {
                "channel": 249,
                "count": 9
            },
            {
                "channel": 250,
                "count": 3
            },
            {
                "channel": 251,
                "count": 6
            },
            {
                "channel": 252,
                "count": 9
            },
            {
                "channel": 253,
                "count": 8
            },
            {
                "channel": 254,
                "count": 12
            },
            {
                "channel": 255,
                "count": 2
            },
            {
                "channel": 256,
                "count": 11
            },
            {
                "channel": 258,
                "count": 13
            },
            {
                "channel": 259,
                "count": 9
            },
            {
                "channel": 260,
                "count": 9
            },
            {
                "channel": 261,
                "count": 5
            },
            {
                "channel": 262,
                "count": 9
            },
            {
                "channel": 263,
                "count": 12
            },
            {
                "channel": 264,
                "count": 10
            },
            {
                "channel": 265,
                "count": 11
            },
            {
                "channel": 267,
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
                "count": 8
            },
            {
                "channel": 274,
                "count": 10
            },
            {
                "channel": 276,
                "count": 8
            },
            {
                "channel": 277,
                "count": 11
            },
            {
                "channel": 278,
                "count": 7
            },
            {
                "channel": 280,
                "count": 11
            },
            {
                "channel": 284,
                "count": 9
            },
            {
                "channel": 285,
                "count": 11
            },
            {
                "channel": 286,
                "count": 8
            },
            {
                "channel": 287,
                "count": 1
            },
            {
                "channel": 288,
                "count": 10
            },
            {
                "channel": 289,
                "count": 11
            },
            {
                "channel": 290,
                "count": 8
            },
            {
                "channel": 291,
                "count": 8
            },
            {
                "channel": 292,
                "count": 2
            },
            {
                "channel": 293,
                "count": 8
            },
            {
                "channel": 294,
                "count": 13
            },
            {
                "channel": 296,
                "count": 9
            },
            {
                "channel": 297,
                "count": 6
            },
            {
                "channel": 298,
                "count": 8
            },
            {
                "channel": 299,
                "count": 6
            },
            {
                "channel": 300,
                "count": 9
            },
            {
                "channel": 301,
                "count": 11
            },
            {
                "channel": 302,
                "count": 13
            },
            {
                "channel": 303,
                "count": 5
            },
            {
                "channel": 304,
                "count": 10
            },
            {
                "channel": 305,
                "count": 7
            },
            {
                "channel": 306,
                "count": 9
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
                "count": 11
            },
            {
                "channel": 312,
                "count": 9
            },
            {
                "channel": 314,
                "count": 9
            },
            {
                "channel": 315,
                "count": 9
            },
            {
                "channel": 316,
                "count": 10
            },
            {
                "channel": 317,
                "count": 8
            },
            {
                "channel": 318,
                "count": 11
            },
            {
                "channel": 319,
                "count": 10
            },
            {
                "channel": 320,
                "count": 9
            },
            {
                "channel": 323,
                "count": 10
            },
            {
                "channel": 324,
                "count": 9
            },
            {
                "channel": 326,
                "count": 13
            },
            {
                "channel": 327,
                "count": 10
            },
            {
                "channel": 328,
                "count": 6
            },
            {
                "channel": 334,
                "count": 10
            },
            {
                "channel": 335,
                "count": 9
            },
            {
                "channel": 336,
                "count": 10
            },
            {
                "channel": 337,
                "count": 9
            },
            {
                "channel": 338,
                "count": 9
            },
            {
                "channel": 339,
                "count": 10
            },
            {
                "channel": 340,
                "count": 10
            },
            {
                "channel": 342,
                "count": 9
            },
            {
                "channel": 343,
                "count": 9
            },
            {
                "channel": 344,
                "count": 8
            },
            {
                "channel": 347,
                "count": 10
            },
            {
                "channel": 350,
                "count": 12
            },
            {
                "channel": 351,
                "count": 12
            },
            {
                "channel": 352,
                "count": 13
            },
            {
                "channel": 353,
                "count": 7
            },
            {
                "channel": 354,
                "count": 6
            },
            {
                "channel": 355,
                "count": 9
            },
            {
                "channel": 357,
                "count": 10
            },
            {
                "channel": 358,
                "count": 11
            },
            {
                "channel": 359,
                "count": 10
            },
            {
                "channel": 360,
                "count": 11
            },
            {
                "channel": 361,
                "count": 5
            },
            {
                "channel": 362,
                "count": 11
            },
            {
                "channel": 364,
                "count": 12
            },
            {
                "channel": 365,
                "count": 9
            },
            {
                "channel": 366,
                "count": 9
            },
            {
                "channel": 367,
                "count": 10
            },
            {
                "channel": 369,
                "count": 7
            },
            {
                "channel": 370,
                "count": 6
            },
            {
                "channel": 371,
                "count": 9
            },
            {
                "channel": 372,
                "count": 9
            },
            {
                "channel": 373,
                "count": 9
            },
            {
                "channel": 374,
                "count": 12
            },
            {
                "channel": 376,
                "count": 17
            },
            {
                "channel": 377,
                "count": 6
            },
            {
                "channel": 378,
                "count": 6
            },
            {
                "channel": 379,
                "count": 7
            },
            {
                "channel": 380,
                "count": 7
            },
            {
                "channel": 381,
                "count": 7
            },
            {
                "channel": 382,
                "count": 11
            },
            {
                "channel": 383,
                "count": 9
            },
            {
                "channel": 384,
                "count": 9
            },
            {
                "channel": 387,
                "count": 9
            },
            {
                "channel": 389,
                "count": 13
            },
            {
                "channel": 390,
                "count": 11
            },
            {
                "channel": 391,
                "count": 12
            },
            {
                "channel": 392,
                "count": 12
            },
            {
                "channel": 393,
                "count": 11
            },
            {
                "channel": 394,
                "count": 9
            },
            {
                "channel": 395,
                "count": 13
            },
            {
                "channel": 397,
                "count": 10
            },
            {
                "channel": 398,
                "count": 9
            },
            {
                "channel": 399,
                "count": 11
            },
            {
                "channel": 400,
                "count": 9
            },
            {
                "channel": 401,
                "count": 10
            },
            {
                "channel": 403,
                "count": 8
            },
            {
                "channel": 405,
                "count": 10
            },
            {
                "channel": 406,
                "count": 10
            },
            {
                "channel": 407,
                "count": 10
            },
            {
                "channel": 408,
                "count": 10
            },
            {
                "channel": 410,
                "count": 11
            },
            {
                "channel": 413,
                "count": 7
            },
            {
                "channel": 414,
                "count": 10
            },
            {
                "channel": 415,
                "count": 12
            },
            {
                "channel": 416,
                "count": 9
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
                "count": 9
            },
            {
                "channel": 420,
                "count": 9
            },
            {
                "channel": 421,
                "count": 10
            },
            {
                "channel": 422,
                "count": 9
            },
            {
                "channel": 423,
                "count": 10
            },
            {
                "channel": 424,
                "count": 8
            },
            {
                "channel": 425,
                "count": 9
            },
            {
                "channel": 426,
                "count": 11
            },
            {
                "channel": 427,
                "count": 10
            },
            {
                "channel": 428,
                "count": 8
            },
            {
                "channel": 429,
                "count": 10
            },
            {
                "channel": 430,
                "count": 9
            },
            {
                "channel": 431,
                "count": 10
            },
            {
                "channel": 432,
                "count": 10
            },
            {
                "channel": 433,
                "count": 10
            },
            {
                "channel": 434,
                "count": 9
            },
            {
                "channel": 435,
                "count": 10
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
                "count": 10
            },
            {
                "channel": 440,
                "count": 7
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
                "count": 4
            },
            {
                "channel": 445,
                "count": 4
            },
            {
                "channel": 446,
                "count": 2
            },
            {
                "channel": 447,
                "count": 10
            },
            {
                "channel": 448,
                "count": 8
            },
            {
                "channel": 449,
                "count": 10
            },
            {
                "channel": 450,
                "count": 10
            },
            {
                "channel": 451,
                "count": 8
            },
            {
                "channel": 452,
                "count": 9
            },
            {
                "channel": 453,
                "count": 10
            },
            {
                "channel": 454,
                "count": 10
            },
            {
                "channel": 455,
                "count": 8
            },
            {
                "channel": 456,
                "count": 9
            },
            {
                "channel": 458,
                "count": 9
            },
            {
                "channel": 461,
                "count": 13
            },
            {
                "channel": 462,
                "count": 11
            },
            {
                "channel": 463,
                "count": 11
            },
            {
                "channel": 464,
                "count": 11
            },
            {
                "channel": 465,
                "count": 7
            },
            {
                "channel": 466,
                "count": 11
            },
            {
                "channel": 468,
                "count": 9
            },
            {
                "channel": 470,
                "count": 12
            },
            {
                "channel": 471,
                "count": 9
            },
            {
                "channel": 472,
                "count": 13
            },
            {
                "channel": 473,
                "count": 10
            },
            {
                "channel": 475,
                "count": 10
            },
            {
                "channel": 476,
                "count": 3
            },
            {
                "channel": 477,
                "count": 9
            },
            {
                "channel": 478,
                "count": 9
            },
            {
                "channel": 479,
                "count": 3
            },
            {
                "channel": 480,
                "count": 12
            },
            {
                "channel": 481,
                "count": 8
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
                "count": 8
            },
            {
                "channel": 486,
                "count": 9
            },
            {
                "channel": 487,
                "count": 13
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
                "count": 11
            },
            {
                "channel": 492,
                "count": 10
            },
            {
                "channel": 493,
                "count": 10
            },
            {
                "channel": 494,
                "count": 7
            },
            {
                "channel": 495,
                "count": 9
            },
            {
                "channel": 496,
                "count": 8
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
                "channel": 500,
                "count": 10
            },
            {
                "channel": 501,
                "count": 8
            },
            {
                "channel": 503,
                "count": 10
            },
            {
                "channel": 504,
                "count": 9
            },
            {
                "channel": 505,
                "count": 5
            },
            {
                "channel": 506,
                "count": 8
            },
            {
                "channel": 507,
                "count": 7
            },
            {
                "channel": 508,
                "count": 9
            },
            {
                "channel": 509,
                "count": 9
            },
            {
                "channel": 510,
                "count": 14
            },
            {
                "channel": 511,
                "count": 9
            },
            {
                "channel": 512,
                "count": 11
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 3,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "8dd7ee40-6c30-48db-8373-5d1442817f96",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 536,
                "pass": 3464
            },
            "qscore_dist_temp": [
                {
                    "count": 7,
                    "mean_qscore": 3.0
                },
                {
                    "count": 40,
                    "mean_qscore": 3.5
                },
                {
                    "count": 50,
                    "mean_qscore": 4.0
                },
                {
                    "count": 65,
                    "mean_qscore": 4.5
                },
                {
                    "count": 70,
                    "mean_qscore": 5.0
                },
                {
                    "count": 122,
                    "mean_qscore": 5.5
                },
                {
                    "count": 90,
                    "mean_qscore": 6.0
                },
                {
                    "count": 92,
                    "mean_qscore": 6.5
                },
                {
                    "count": 127,
                    "mean_qscore": 7.0
                },
                {
                    "count": 179,
                    "mean_qscore": 7.5
                },
                {
                    "count": 269,
                    "mean_qscore": 8.0
                },
                {
                    "count": 218,
                    "mean_qscore": 8.5
                },
                {
                    "count": 257,
                    "mean_qscore": 9.0
                },
                {
                    "count": 404,
                    "mean_qscore": 9.5
                },
                {
                    "count": 462,
                    "mean_qscore": 10.0
                },
                {
                    "count": 569,
                    "mean_qscore": 10.5
                },
                {
                    "count": 486,
                    "mean_qscore": 11.0
                },
                {
                    "count": 315,
                    "mean_qscore": 11.5
                },
                {
                    "count": 123,
                    "mean_qscore": 12.0
                },
                {
                    "count": 40,
                    "mean_qscore": 12.5
                },
                {
                    "count": 12,
                    "mean_qscore": 13.0
                },
                {
                    "count": 2,
                    "mean_qscore": 13.5
                },
                {
                    "count": 1,
                    "mean_qscore": 14.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.48215293884277,
                "sum": 37928.61328125
            },
            "read_len_events_sum_temp": 18899246,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 80,
                    "length": 0.0
                },
                {
                    "count": 260,
                    "length": 1000.0
                },
                {
                    "count": 273,
                    "length": 2000.0
                },
                {
                    "count": 482,
                    "length": 3000.0
                },
                {
                    "count": 1909,
                    "length": 4000.0
                },
                {
                    "count": 373,
                    "length": 5000.0
                },
                {
                    "count": 75,
                    "length": 6000.0
                },
                {
                    "count": 124,
                    "length": 7000.0
                },
                {
                    "count": 204,
                    "length": 8000.0
                },
                {
                    "count": 150,
                    "length": 9000.0
                },
                {
                    "count": 45,
                    "length": 10000.0
                },
                {
                    "count": 7,
                    "length": 11000.0
                },
                {
                    "count": 3,
                    "length": 12000.0
                },
                {
                    "count": 4,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 15000.0
                },
                {
                    "count": 4,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                },
                {
                    "count": 2,
                    "length": 18000.0
                },
                {
                    "count": 2,
                    "length": 19000.0
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
                "mean": 81.1853179931641,
                "sum": 324741.28125
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.35348415374756,
                "sum": 37413.9375
            }
        },
        "channel_count": 421,
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
        "latest_run_time": 29507.927734375,
        "levels_sums": {
            "count": 4000,
            "mean": 209.117202758789,
            "open_pore_level_sum": 836468.8125
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
                "count": 8
            },
            {
                "channel": 3,
                "count": 8
            },
            {
                "channel": 4,
                "count": 5
            },
            {
                "channel": 5,
                "count": 12
            },
            {
                "channel": 6,
                "count": 10
            },
            {
                "channel": 7,
                "count": 10
            },
            {
                "channel": 8,
                "count": 11
            },
            {
                "channel": 10,
                "count": 9
            },
            {
                "channel": 11,
                "count": 9
            },
            {
                "channel": 12,
                "count": 10
            },
            {
                "channel": 13,
                "count": 9
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
                "count": 8
            },
            {
                "channel": 18,
                "count": 10
            },
            {
                "channel": 19,
                "count": 8
            },
            {
                "channel": 20,
                "count": 9
            },
            {
                "channel": 21,
                "count": 8
            },
            {
                "channel": 22,
                "count": 16
            },
            {
                "channel": 23,
                "count": 8
            },
            {
                "channel": 24,
                "count": 9
            },
            {
                "channel": 25,
                "count": 8
            },
            {
                "channel": 26,
                "count": 11
            },
            {
                "channel": 27,
                "count": 1
            },
            {
                "channel": 28,
                "count": 10
            },
            {
                "channel": 29,
                "count": 11
            },
            {
                "channel": 30,
                "count": 9
            },
            {
                "channel": 31,
                "count": 9
            },
            {
                "channel": 32,
                "count": 9
            },
            {
                "channel": 33,
                "count": 10
            },
            {
                "channel": 34,
                "count": 8
            },
            {
                "channel": 35,
                "count": 9
            },
            {
                "channel": 36,
                "count": 10
            },
            {
                "channel": 37,
                "count": 9
            },
            {
                "channel": 38,
                "count": 9
            },
            {
                "channel": 39,
                "count": 12
            },
            {
                "channel": 40,
                "count": 11
            },
            {
                "channel": 41,
                "count": 11
            },
            {
                "channel": 42,
                "count": 11
            },
            {
                "channel": 43,
                "count": 8
            },
            {
                "channel": 44,
                "count": 8
            },
            {
                "channel": 45,
                "count": 12
            },
            {
                "channel": 46,
                "count": 12
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
                "count": 9
            },
            {
                "channel": 50,
                "count": 7
            },
            {
                "channel": 51,
                "count": 10
            },
            {
                "channel": 52,
                "count": 11
            },
            {
                "channel": 53,
                "count": 12
            },
            {
                "channel": 54,
                "count": 10
            },
            {
                "channel": 55,
                "count": 11
            },
            {
                "channel": 56,
                "count": 9
            },
            {
                "channel": 58,
                "count": 6
            },
            {
                "channel": 59,
                "count": 9
            },
            {
                "channel": 60,
                "count": 12
            },
            {
                "channel": 61,
                "count": 9
            },
            {
                "channel": 62,
                "count": 9
            },
            {
                "channel": 63,
                "count": 8
            },
            {
                "channel": 64,
                "count": 11
            },
            {
                "channel": 65,
                "count": 7
            },
            {
                "channel": 66,
                "count": 12
            },
            {
                "channel": 67,
                "count": 2
            },
            {
                "channel": 68,
                "count": 12
            },
            {
                "channel": 69,
                "count": 11
            },
            {
                "channel": 70,
                "count": 12
            },
            {
                "channel": 72,
                "count": 12
            },
            {
                "channel": 73,
                "count": 10
            },
            {
                "channel": 74,
                "count": 5
            },
            {
                "channel": 75,
                "count": 10
            },
            {
                "channel": 76,
                "count": 9
            },
            {
                "channel": 77,
                "count": 9
            },
            {
                "channel": 78,
                "count": 13
            },
            {
                "channel": 80,
                "count": 9
            },
            {
                "channel": 82,
                "count": 7
            },
            {
                "channel": 83,
                "count": 10
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
                "count": 9
            },
            {
                "channel": 88,
                "count": 13
            },
            {
                "channel": 89,
                "count": 9
            },
            {
                "channel": 90,
                "count": 11
            },
            {
                "channel": 92,
                "count": 11
            },
            {
                "channel": 93,
                "count": 10
            },
            {
                "channel": 94,
                "count": 11
            },
            {
                "channel": 95,
                "count": 11
            },
            {
                "channel": 96,
                "count": 10
            },
            {
                "channel": 97,
                "count": 9
            },
            {
                "channel": 98,
                "count": 9
            },
            {
                "channel": 100,
                "count": 9
            },
            {
                "channel": 101,
                "count": 10
            },
            {
                "channel": 102,
                "count": 11
            },
            {
                "channel": 103,
                "count": 10
            },
            {
                "channel": 104,
                "count": 15
            },
            {
                "channel": 105,
                "count": 8
            },
            {
                "channel": 106,
                "count": 9
            },
            {
                "channel": 107,
                "count": 9
            },
            {
                "channel": 108,
                "count": 10
            },
            {
                "channel": 109,
                "count": 13
            },
            {
                "channel": 110,
                "count": 10
            },
            {
                "channel": 112,
                "count": 10
            },
            {
                "channel": 113,
                "count": 11
            },
            {
                "channel": 114,
                "count": 10
            },
            {
                "channel": 115,
                "count": 9
            },
            {
                "channel": 116,
                "count": 11
            },
            {
                "channel": 117,
                "count": 13
            },
            {
                "channel": 118,
                "count": 11
            },
            {
                "channel": 120,
                "count": 15
            },
            {
                "channel": 121,
                "count": 8
            },
            {
                "channel": 122,
                "count": 11
            },
            {
                "channel": 123,
                "count": 7
            },
            {
                "channel": 124,
                "count": 12
            },
            {
                "channel": 125,
                "count": 10
            },
            {
                "channel": 126,
                "count": 10
            },
            {
                "channel": 127,
                "count": 12
            },
            {
                "channel": 128,
                "count": 10
            },
            {
                "channel": 130,
                "count": 9
            },
            {
                "channel": 133,
                "count": 10
            },
            {
                "channel": 134,
                "count": 10
            },
            {
                "channel": 135,
                "count": 11
            },
            {
                "channel": 136,
                "count": 11
            },
            {
                "channel": 138,
                "count": 8
            },
            {
                "channel": 139,
                "count": 4
            },
            {
                "channel": 141,
                "count": 10
            },
            {
                "channel": 143,
                "count": 9
            },
            {
                "channel": 144,
                "count": 10
            },
            {
                "channel": 147,
                "count": 10
            },
            {
                "channel": 148,
                "count": 10
            },
            {
                "channel": 150,
                "count": 11
            },
            {
                "channel": 151,
                "count": 11
            },
            {
                "channel": 152,
                "count": 10
            },
            {
                "channel": 154,
                "count": 8
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
                "channel": 157,
                "count": 8
            },
            {
                "channel": 158,
                "count": 12
            },
            {
                "channel": 159,
                "count": 9
            },
            {
                "channel": 160,
                "count": 14
            },
            {
                "channel": 161,
                "count": 4
            },
            {
                "channel": 162,
                "count": 9
            },
            {
                "channel": 163,
                "count": 9
            },
            {
                "channel": 164,
                "count": 9
            },
            {
                "channel": 165,
                "count": 10
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
                "count": 8
            },
            {
                "channel": 169,
                "count": 8
            },
            {
                "channel": 170,
                "count": 3
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
                "count": 11
            },
            {
                "channel": 176,
                "count": 13
            },
            {
                "channel": 177,
                "count": 6
            },
            {
                "channel": 178,
                "count": 8
            },
            {
                "channel": 179,
                "count": 12
            },
            {
                "channel": 180,
                "count": 11
            },
            {
                "channel": 181,
                "count": 10
            },
            {
                "channel": 183,
                "count": 12
            },
            {
                "channel": 184,
                "count": 13
            },
            {
                "channel": 185,
                "count": 9
            },
            {
                "channel": 186,
                "count": 11
            },
            {
                "channel": 187,
                "count": 11
            },
            {
                "channel": 188,
                "count": 8
            },
            {
                "channel": 189,
                "count": 10
            },
            {
                "channel": 190,
                "count": 9
            },
            {
                "channel": 191,
                "count": 10
            },
            {
                "channel": 192,
                "count": 9
            },
            {
                "channel": 196,
                "count": 9
            },
            {
                "channel": 197,
                "count": 10
            },
            {
                "channel": 198,
                "count": 13
            },
            {
                "channel": 202,
                "count": 9
            },
            {
                "channel": 204,
                "count": 7
            },
            {
                "channel": 205,
                "count": 11
            },
            {
                "channel": 207,
                "count": 16
            },
            {
                "channel": 208,
                "count": 11
            },
            {
                "channel": 210,
                "count": 12
            },
            {
                "channel": 212,
                "count": 10
            },
            {
                "channel": 213,
                "count": 10
            },
            {
                "channel": 214,
                "count": 10
            },
            {
                "channel": 215,
                "count": 9
            },
            {
                "channel": 216,
                "count": 9
            },
            {
                "channel": 222,
                "count": 12
            },
            {
                "channel": 223,
                "count": 12
            },
            {
                "channel": 224,
                "count": 10
            },
            {
                "channel": 225,
                "count": 10
            },
            {
                "channel": 226,
                "count": 8
            },
            {
                "channel": 227,
                "count": 6
            },
            {
                "channel": 228,
                "count": 11
            },
            {
                "channel": 229,
                "count": 10
            },
            {
                "channel": 230,
                "count": 10
            },
            {
                "channel": 231,
                "count": 13
            },
            {
                "channel": 232,
                "count": 9
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
                "count": 6
            },
            {
                "channel": 237,
                "count": 9
            },
            {
                "channel": 238,
                "count": 9
            },
            {
                "channel": 239,
                "count": 1
            },
            {
                "channel": 240,
                "count": 9
            },
            {
                "channel": 241,
                "count": 9
            },
            {
                "channel": 242,
                "count": 1
            },
            {
                "channel": 243,
                "count": 11
            },
            {
                "channel": 245,
                "count": 10
            },
            {
                "channel": 246,
                "count": 10
            },
            {
                "channel": 247,
                "count": 13
            },
            {
                "channel": 248,
                "count": 7
            },
            {
                "channel": 249,
                "count": 8
            },
            {
                "channel": 250,
                "count": 4
            },
            {
                "channel": 251,
                "count": 8
            },
            {
                "channel": 252,
                "count": 7
            },
            {
                "channel": 253,
                "count": 9
            },
            {
                "channel": 254,
                "count": 10
            },
            {
                "channel": 255,
                "count": 10
            },
            {
                "channel": 256,
                "count": 12
            },
            {
                "channel": 258,
                "count": 2
            },
            {
                "channel": 259,
                "count": 13
            },
            {
                "channel": 261,
                "count": 5
            },
            {
                "channel": 262,
                "count": 11
            },
            {
                "channel": 263,
                "count": 10
            },
            {
                "channel": 264,
                "count": 11
            },
            {
                "channel": 265,
                "count": 11
            },
            {
                "channel": 267,
                "count": 9
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
                "count": 12
            },
            {
                "channel": 274,
                "count": 9
            },
            {
                "channel": 277,
                "count": 7
            },
            {
                "channel": 278,
                "count": 12
            },
            {
                "channel": 280,
                "count": 10
            },
            {
                "channel": 283,
                "count": 3
            },
            {
                "channel": 284,
                "count": 9
            },
            {
                "channel": 285,
                "count": 11
            },
            {
                "channel": 286,
                "count": 12
            },
            {
                "channel": 287,
                "count": 12
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
                "count": 9
            },
            {
                "channel": 291,
                "count": 8
            },
            {
                "channel": 292,
                "count": 11
            },
            {
                "channel": 293,
                "count": 10
            },
            {
                "channel": 294,
                "count": 9
            },
            {
                "channel": 296,
                "count": 10
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
                "count": 10
            },
            {
                "channel": 301,
                "count": 5
            },
            {
                "channel": 302,
                "count": 12
            },
            {
                "channel": 304,
                "count": 11
            },
            {
                "channel": 305,
                "count": 8
            },
            {
                "channel": 306,
                "count": 9
            },
            {
                "channel": 307,
                "count": 7
            },
            {
                "channel": 308,
                "count": 8
            },
            {
                "channel": 309,
                "count": 11
            },
            {
                "channel": 310,
                "count": 11
            },
            {
                "channel": 312,
                "count": 11
            },
            {
                "channel": 313,
                "count": 5
            },
            {
                "channel": 314,
                "count": 8
            },
            {
                "channel": 315,
                "count": 7
            },
            {
                "channel": 316,
                "count": 10
            },
            {
                "channel": 317,
                "count": 10
            },
            {
                "channel": 318,
                "count": 12
            },
            {
                "channel": 319,
                "count": 12
            },
            {
                "channel": 320,
                "count": 10
            },
            {
                "channel": 323,
                "count": 11
            },
            {
                "channel": 324,
                "count": 8
            },
            {
                "channel": 326,
                "count": 5
            },
            {
                "channel": 327,
                "count": 11
            },
            {
                "channel": 328,
                "count": 11
            },
            {
                "channel": 334,
                "count": 11
            },
            {
                "channel": 335,
                "count": 9
            },
            {
                "channel": 336,
                "count": 10
            },
            {
                "channel": 338,
                "count": 10
            },
            {
                "channel": 339,
                "count": 8
            },
            {
                "channel": 340,
                "count": 14
            },
            {
                "channel": 342,
                "count": 11
            },
            {
                "channel": 343,
                "count": 12
            },
            {
                "channel": 344,
                "count": 12
            },
            {
                "channel": 347,
                "count": 13
            },
            {
                "channel": 350,
                "count": 9
            },
            {
                "channel": 351,
                "count": 11
            },
            {
                "channel": 352,
                "count": 12
            },
            {
                "channel": 353,
                "count": 8
            },
            {
                "channel": 354,
                "count": 8
            },
            {
                "channel": 355,
                "count": 8
            },
            {
                "channel": 357,
                "count": 2
            },
            {
                "channel": 358,
                "count": 11
            },
            {
                "channel": 359,
                "count": 11
            },
            {
                "channel": 360,
                "count": 11
            },
            {
                "channel": 361,
                "count": 9
            },
            {
                "channel": 362,
                "count": 9
            },
            {
                "channel": 364,
                "count": 6
            },
            {
                "channel": 365,
                "count": 11
            },
            {
                "channel": 366,
                "count": 9
            },
            {
                "channel": 367,
                "count": 8
            },
            {
                "channel": 369,
                "count": 7
            },
            {
                "channel": 370,
                "count": 7
            },
            {
                "channel": 371,
                "count": 7
            },
            {
                "channel": 372,
                "count": 8
            },
            {
                "channel": 373,
                "count": 9
            },
            {
                "channel": 374,
                "count": 11
            },
            {
                "channel": 376,
                "count": 9
            },
            {
                "channel": 377,
                "count": 6
            },
            {
                "channel": 378,
                "count": 8
            },
            {
                "channel": 379,
                "count": 7
            },
            {
                "channel": 380,
                "count": 10
            },
            {
                "channel": 381,
                "count": 10
            },
            {
                "channel": 383,
                "count": 9
            },
            {
                "channel": 384,
                "count": 12
            },
            {
                "channel": 387,
                "count": 8
            },
            {
                "channel": 388,
                "count": 12
            },
            {
                "channel": 389,
                "count": 10
            },
            {
                "channel": 390,
                "count": 9
            },
            {
                "channel": 391,
                "count": 10
            },
            {
                "channel": 392,
                "count": 11
            },
            {
                "channel": 393,
                "count": 9
            },
            {
                "channel": 394,
                "count": 6
            },
            {
                "channel": 395,
                "count": 10
            },
            {
                "channel": 398,
                "count": 10
            },
            {
                "channel": 399,
                "count": 10
            },
            {
                "channel": 400,
                "count": 11
            },
            {
                "channel": 401,
                "count": 10
            },
            {
                "channel": 403,
                "count": 13
            },
            {
                "channel": 405,
                "count": 12
            },
            {
                "channel": 406,
                "count": 12
            },
            {
                "channel": 407,
                "count": 11
            },
            {
                "channel": 408,
                "count": 9
            },
            {
                "channel": 410,
                "count": 7
            },
            {
                "channel": 413,
                "count": 13
            },
            {
                "channel": 414,
                "count": 11
            },
            {
                "channel": 416,
                "count": 9
            },
            {
                "channel": 417,
                "count": 10
            },
            {
                "channel": 418,
                "count": 9
            },
            {
                "channel": 419,
                "count": 11
            },
            {
                "channel": 420,
                "count": 10
            },
            {
                "channel": 421,
                "count": 9
            },
            {
                "channel": 422,
                "count": 11
            },
            {
                "channel": 423,
                "count": 10
            },
            {
                "channel": 424,
                "count": 10
            },
            {
                "channel": 425,
                "count": 9
            },
            {
                "channel": 426,
                "count": 12
            },
            {
                "channel": 427,
                "count": 9
            },
            {
                "channel": 428,
                "count": 8
            },
            {
                "channel": 429,
                "count": 12
            },
            {
                "channel": 430,
                "count": 11
            },
            {
                "channel": 431,
                "count": 9
            },
            {
                "channel": 433,
                "count": 7
            },
            {
                "channel": 434,
                "count": 7
            },
            {
                "channel": 435,
                "count": 11
            },
            {
                "channel": 436,
                "count": 9
            },
            {
                "channel": 437,
                "count": 10
            },
            {
                "channel": 438,
                "count": 12
            },
            {
                "channel": 439,
                "count": 9
            },
            {
                "channel": 440,
                "count": 10
            },
            {
                "channel": 441,
                "count": 7
            },
            {
                "channel": 442,
                "count": 8
            },
            {
                "channel": 443,
                "count": 11
            },
            {
                "channel": 444,
                "count": 2
            },
            {
                "channel": 445,
                "count": 1
            },
            {
                "channel": 446,
                "count": 4
            },
            {
                "channel": 447,
                "count": 10
            },
            {
                "channel": 448,
                "count": 12
            },
            {
                "channel": 449,
                "count": 8
            },
            {
                "channel": 450,
                "count": 9
            },
            {
                "channel": 451,
                "count": 8
            },
            {
                "channel": 452,
                "count": 12
            },
            {
                "channel": 453,
                "count": 8
            },
            {
                "channel": 454,
                "count": 8
            },
            {
                "channel": 455,
                "count": 11
            },
            {
                "channel": 456,
                "count": 7
            },
            {
                "channel": 457,
                "count": 8
            },
            {
                "channel": 458,
                "count": 8
            },
            {
                "channel": 460,
                "count": 8
            },
            {
                "channel": 461,
                "count": 10
            },
            {
                "channel": 462,
                "count": 9
            },
            {
                "channel": 463,
                "count": 11
            },
            {
                "channel": 464,
                "count": 9
            },
            {
                "channel": 465,
                "count": 8
            },
            {
                "channel": 466,
                "count": 10
            },
            {
                "channel": 468,
                "count": 9
            },
            {
                "channel": 470,
                "count": 9
            },
            {
                "channel": 471,
                "count": 11
            },
            {
                "channel": 472,
                "count": 9
            },
            {
                "channel": 473,
                "count": 8
            },
            {
                "channel": 475,
                "count": 9
            },
            {
                "channel": 476,
                "count": 10
            },
            {
                "channel": 477,
                "count": 10
            },
            {
                "channel": 478,
                "count": 10
            },
            {
                "channel": 479,
                "count": 11
            },
            {
                "channel": 480,
                "count": 11
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
                "count": 11
            },
            {
                "channel": 484,
                "count": 6
            },
            {
                "channel": 485,
                "count": 12
            },
            {
                "channel": 486,
                "count": 10
            },
            {
                "channel": 487,
                "count": 10
            },
            {
                "channel": 488,
                "count": 10
            },
            {
                "channel": 489,
                "count": 8
            },
            {
                "channel": 491,
                "count": 8
            },
            {
                "channel": 492,
                "count": 13
            },
            {
                "channel": 493,
                "count": 10
            },
            {
                "channel": 494,
                "count": 10
            },
            {
                "channel": 495,
                "count": 11
            },
            {
                "channel": 496,
                "count": 10
            },
            {
                "channel": 497,
                "count": 7
            },
            {
                "channel": 498,
                "count": 9
            },
            {
                "channel": 499,
                "count": 8
            },
            {
                "channel": 500,
                "count": 7
            },
            {
                "channel": 501,
                "count": 9
            },
            {
                "channel": 504,
                "count": 13
            },
            {
                "channel": 505,
                "count": 10
            },
            {
                "channel": 506,
                "count": 9
            },
            {
                "channel": 507,
                "count": 7
            },
            {
                "channel": 508,
                "count": 10
            },
            {
                "channel": 509,
                "count": 10
            },
            {
                "channel": 510,
                "count": 10
            },
            {
                "channel": 511,
                "count": 9
            },
            {
                "channel": 512,
                "count": 14
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 9,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "120b44d9-c0e7-4072-8e2a-65c05c7e1e95",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 595,
                "pass": 3405
            },
            "qscore_dist_temp": [
                {
                    "count": 8,
                    "mean_qscore": 3.0
                },
                {
                    "count": 29,
                    "mean_qscore": 3.5
                },
                {
                    "count": 53,
                    "mean_qscore": 4.0
                },
                {
                    "count": 68,
                    "mean_qscore": 4.5
                },
                {
                    "count": 115,
                    "mean_qscore": 5.0
                },
                {
                    "count": 121,
                    "mean_qscore": 5.5
                },
                {
                    "count": 87,
                    "mean_qscore": 6.0
                },
                {
                    "count": 114,
                    "mean_qscore": 6.5
                },
                {
                    "count": 143,
                    "mean_qscore": 7.0
                },
                {
                    "count": 191,
                    "mean_qscore": 7.5
                },
                {
                    "count": 230,
                    "mean_qscore": 8.0
                },
                {
                    "count": 234,
                    "mean_qscore": 8.5
                },
                {
                    "count": 325,
                    "mean_qscore": 9.0
                },
                {
                    "count": 384,
                    "mean_qscore": 9.5
                },
                {
                    "count": 488,
                    "mean_qscore": 10.0
                },
                {
                    "count": 603,
                    "mean_qscore": 10.5
                },
                {
                    "count": 467,
                    "mean_qscore": 11.0
                },
                {
                    "count": 225,
                    "mean_qscore": 11.5
                },
                {
                    "count": 82,
                    "mean_qscore": 12.0
                },
                {
                    "count": 25,
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
                    "mean_qscore": 14.5
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.32944583892822,
                "sum": 37317.78515625
            },
            "read_len_events_sum_temp": 19743552,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 72,
                    "length": 0.0
                },
                {
                    "count": 216,
                    "length": 1000.0
                },
                {
                    "count": 226,
                    "length": 2000.0
                },
                {
                    "count": 395,
                    "length": 3000.0
                },
                {
                    "count": 1839,
                    "length": 4000.0
                },
                {
                    "count": 559,
                    "length": 5000.0
                },
                {
                    "count": 112,
                    "length": 6000.0
                },
                {
                    "count": 113,
                    "length": 7000.0
                },
                {
                    "count": 185,
                    "length": 8000.0
                },
                {
                    "count": 169,
                    "length": 9000.0
                },
                {
                    "count": 77,
                    "length": 10000.0
                },
                {
                    "count": 19,
                    "length": 11000.0
                },
                {
                    "count": 3,
                    "length": 12000.0
                },
                {
                    "count": 3,
                    "length": 13000.0
                },
                {
                    "count": 1,
                    "length": 14000.0
                },
                {
                    "count": 4,
                    "length": 15000.0
                },
                {
                    "count": 4,
                    "length": 17000.0
                },
                {
                    "count": 2,
                    "length": 18000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
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
                "mean": 79.1923675537109,
                "sum": 316769.46875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.16500663757324,
                "sum": 36660.02734375
            }
        },
        "channel_count": 416,
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
        "latest_run_time": 46240.47265625,
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
                "count": 11
            },
            {
                "channel": 4,
                "count": 11
            },
            {
                "channel": 5,
                "count": 11
            },
            {
                "channel": 6,
                "count": 11
            },
            {
                "channel": 7,
                "count": 11
            },
            {
                "channel": 8,
                "count": 9
            },
            {
                "channel": 9,
                "count": 10
            },
            {
                "channel": 10,
                "count": 10
            },
            {
                "channel": 11,
                "count": 10
            },
            {
                "channel": 12,
                "count": 10
            },
            {
                "channel": 13,
                "count": 10
            },
            {
                "channel": 14,
                "count": 3
            },
            {
                "channel": 15,
                "count": 11
            },
            {
                "channel": 16,
                "count": 11
            },
            {
                "channel": 17,
                "count": 11
            },
            {
                "channel": 18,
                "count": 8
            },
            {
                "channel": 19,
                "count": 13
            },
            {
                "channel": 20,
                "count": 10
            },
            {
                "channel": 21,
                "count": 9
            },
            {
                "channel": 22,
                "count": 10
            },
            {
                "channel": 23,
                "count": 10
            },
            {
                "channel": 24,
                "count": 7
            },
            {
                "channel": 25,
                "count": 7
            },
            {
                "channel": 26,
                "count": 9
            },
            {
                "channel": 27,
                "count": 10
            },
            {
                "channel": 28,
                "count": 3
            },
            {
                "channel": 29,
                "count": 9
            },
            {
                "channel": 30,
                "count": 12
            },
            {
                "channel": 32,
                "count": 11
            },
            {
                "channel": 33,
                "count": 12
            },
            {
                "channel": 34,
                "count": 9
            },
            {
                "channel": 35,
                "count": 6
            },
            {
                "channel": 36,
                "count": 10
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
                "count": 10
            },
            {
                "channel": 40,
                "count": 10
            },
            {
                "channel": 41,
                "count": 9
            },
            {
                "channel": 42,
                "count": 10
            },
            {
                "channel": 43,
                "count": 8
            },
            {
                "channel": 45,
                "count": 9
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
                "count": 9
            },
            {
                "channel": 49,
                "count": 5
            },
            {
                "channel": 50,
                "count": 5
            },
            {
                "channel": 51,
                "count": 8
            },
            {
                "channel": 52,
                "count": 8
            },
            {
                "channel": 53,
                "count": 12
            },
            {
                "channel": 54,
                "count": 9
            },
            {
                "channel": 55,
                "count": 9
            },
            {
                "channel": 56,
                "count": 10
            },
            {
                "channel": 57,
                "count": 7
            },
            {
                "channel": 58,
                "count": 13
            },
            {
                "channel": 59,
                "count": 7
            },
            {
                "channel": 60,
                "count": 4
            },
            {
                "channel": 61,
                "count": 9
            },
            {
                "channel": 62,
                "count": 12
            },
            {
                "channel": 63,
                "count": 11
            },
            {
                "channel": 64,
                "count": 10
            },
            {
                "channel": 66,
                "count": 12
            },
            {
                "channel": 67,
                "count": 3
            },
            {
                "channel": 68,
                "count": 11
            },
            {
                "channel": 69,
                "count": 11
            },
            {
                "channel": 70,
                "count": 12
            },
            {
                "channel": 71,
                "count": 7
            },
            {
                "channel": 72,
                "count": 9
            },
            {
                "channel": 74,
                "count": 12
            },
            {
                "channel": 75,
                "count": 11
            },
            {
                "channel": 76,
                "count": 11
            },
            {
                "channel": 77,
                "count": 12
            },
            {
                "channel": 78,
                "count": 12
            },
            {
                "channel": 80,
                "count": 11
            },
            {
                "channel": 82,
                "count": 4
            },
            {
                "channel": 83,
                "count": 12
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
                "count": 12
            },
            {
                "channel": 88,
                "count": 12
            },
            {
                "channel": 90,
                "count": 11
            },
            {
                "channel": 92,
                "count": 14
            },
            {
                "channel": 93,
                "count": 8
            },
            {
                "channel": 94,
                "count": 12
            },
            {
                "channel": 95,
                "count": 13
            },
            {
                "channel": 96,
                "count": 10
            },
            {
                "channel": 97,
                "count": 10
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
                "count": 10
            },
            {
                "channel": 101,
                "count": 11
            },
            {
                "channel": 102,
                "count": 10
            },
            {
                "channel": 103,
                "count": 10
            },
            {
                "channel": 104,
                "count": 13
            },
            {
                "channel": 105,
                "count": 10
            },
            {
                "channel": 106,
                "count": 8
            },
            {
                "channel": 107,
                "count": 8
            },
            {
                "channel": 108,
                "count": 9
            },
            {
                "channel": 109,
                "count": 7
            },
            {
                "channel": 110,
                "count": 10
            },
            {
                "channel": 112,
                "count": 11
            },
            {
                "channel": 114,
                "count": 10
            },
            {
                "channel": 115,
                "count": 11
            },
            {
                "channel": 116,
                "count": 8
            },
            {
                "channel": 117,
                "count": 12
            },
            {
                "channel": 118,
                "count": 12
            },
            {
                "channel": 120,
                "count": 1
            },
            {
                "channel": 121,
                "count": 11
            },
            {
                "channel": 122,
                "count": 12
            },
            {
                "channel": 123,
                "count": 7
            },
            {
                "channel": 124,
                "count": 9
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
                "count": 13
            },
            {
                "channel": 130,
                "count": 9
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
                "count": 11
            },
            {
                "channel": 136,
                "count": 1
            },
            {
                "channel": 140,
                "count": 13
            },
            {
                "channel": 141,
                "count": 13
            },
            {
                "channel": 142,
                "count": 10
            },
            {
                "channel": 143,
                "count": 12
            },
            {
                "channel": 144,
                "count": 10
            },
            {
                "channel": 147,
                "count": 12
            },
            {
                "channel": 148,
                "count": 14
            },
            {
                "channel": 150,
                "count": 12
            },
            {
                "channel": 151,
                "count": 8
            },
            {
                "channel": 152,
                "count": 13
            },
            {
                "channel": 154,
                "count": 11
            },
            {
                "channel": 155,
                "count": 13
            },
            {
                "channel": 156,
                "count": 12
            },
            {
                "channel": 157,
                "count": 9
            },
            {
                "channel": 158,
                "count": 11
            },
            {
                "channel": 159,
                "count": 12
            },
            {
                "channel": 160,
                "count": 9
            },
            {
                "channel": 161,
                "count": 7
            },
            {
                "channel": 162,
                "count": 9
            },
            {
                "channel": 163,
                "count": 9
            },
            {
                "channel": 164,
                "count": 10
            },
            {
                "channel": 165,
                "count": 10
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
                "count": 12
            },
            {
                "channel": 169,
                "count": 8
            },
            {
                "channel": 170,
                "count": 10
            },
            {
                "channel": 171,
                "count": 9
            },
            {
                "channel": 172,
                "count": 11
            },
            {
                "channel": 173,
                "count": 9
            },
            {
                "channel": 174,
                "count": 11
            },
            {
                "channel": 175,
                "count": 10
            },
            {
                "channel": 176,
                "count": 14
            },
            {
                "channel": 177,
                "count": 5
            },
            {
                "channel": 178,
                "count": 11
            },
            {
                "channel": 179,
                "count": 11
            },
            {
                "channel": 180,
                "count": 8
            },
            {
                "channel": 181,
                "count": 9
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
                "count": 12
            },
            {
                "channel": 186,
                "count": 13
            },
            {
                "channel": 187,
                "count": 10
            },
            {
                "channel": 188,
                "count": 9
            },
            {
                "channel": 189,
                "count": 9
            },
            {
                "channel": 190,
                "count": 6
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
                "count": 11
            },
            {
                "channel": 197,
                "count": 10
            },
            {
                "channel": 198,
                "count": 14
            },
            {
                "channel": 202,
                "count": 12
            },
            {
                "channel": 203,
                "count": 10
            },
            {
                "channel": 204,
                "count": 9
            },
            {
                "channel": 205,
                "count": 11
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
                "channel": 210,
                "count": 7
            },
            {
                "channel": 212,
                "count": 11
            },
            {
                "channel": 213,
                "count": 10
            },
            {
                "channel": 214,
                "count": 13
            },
            {
                "channel": 215,
                "count": 11
            },
            {
                "channel": 216,
                "count": 8
            },
            {
                "channel": 222,
                "count": 7
            },
            {
                "channel": 223,
                "count": 7
            },
            {
                "channel": 224,
                "count": 11
            },
            {
                "channel": 225,
                "count": 5
            },
            {
                "channel": 226,
                "count": 10
            },
            {
                "channel": 227,
                "count": 9
            },
            {
                "channel": 228,
                "count": 10
            },
            {
                "channel": 229,
                "count": 9
            },
            {
                "channel": 230,
                "count": 11
            },
            {
                "channel": 231,
                "count": 9
            },
            {
                "channel": 232,
                "count": 2
            },
            {
                "channel": 233,
                "count": 9
            },
            {
                "channel": 234,
                "count": 4
            },
            {
                "channel": 235,
                "count": 8
            },
            {
                "channel": 237,
                "count": 10
            },
            {
                "channel": 238,
                "count": 9
            },
            {
                "channel": 239,
                "count": 12
            },
            {
                "channel": 240,
                "count": 12
            },
            {
                "channel": 241,
                "count": 8
            },
            {
                "channel": 242,
                "count": 9
            },
            {
                "channel": 243,
                "count": 11
            },
            {
                "channel": 245,
                "count": 10
            },
            {
                "channel": 246,
                "count": 13
            },
            {
                "channel": 247,
                "count": 13
            },
            {
                "channel": 249,
                "count": 10
            },
            {
                "channel": 250,
                "count": 5
            },
            {
                "channel": 251,
                "count": 8
            },
            {
                "channel": 252,
                "count": 6
            },
            {
                "channel": 253,
                "count": 10
            },
            {
                "channel": 254,
                "count": 12
            },
            {
                "channel": 255,
                "count": 8
            },
            {
                "channel": 256,
                "count": 12
            },
            {
                "channel": 258,
                "count": 12
            },
            {
                "channel": 259,
                "count": 12
            },
            {
                "channel": 260,
                "count": 8
            },
            {
                "channel": 261,
                "count": 1
            },
            {
                "channel": 262,
                "count": 11
            },
            {
                "channel": 263,
                "count": 12
            },
            {
                "channel": 264,
                "count": 14
            },
            {
                "channel": 265,
                "count": 9
            },
            {
                "channel": 268,
                "count": 11
            },
            {
                "channel": 271,
                "count": 9
            },
            {
                "channel": 272,
                "count": 12
            },
            {
                "channel": 274,
                "count": 10
            },
            {
                "channel": 276,
                "count": 11
            },
            {
                "channel": 278,
                "count": 13
            },
            {
                "channel": 280,
                "count": 12
            },
            {
                "channel": 284,
                "count": 8
            },
            {
                "channel": 285,
                "count": 11
            },
            {
                "channel": 287,
                "count": 11
            },
            {
                "channel": 288,
                "count": 12
            },
            {
                "channel": 289,
                "count": 6
            },
            {
                "channel": 290,
                "count": 8
            },
            {
                "channel": 291,
                "count": 9
            },
            {
                "channel": 292,
                "count": 3
            },
            {
                "channel": 293,
                "count": 11
            },
            {
                "channel": 294,
                "count": 11
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
                "count": 8
            },
            {
                "channel": 301,
                "count": 9
            },
            {
                "channel": 302,
                "count": 13
            },
            {
                "channel": 303,
                "count": 12
            },
            {
                "channel": 304,
                "count": 12
            },
            {
                "channel": 305,
                "count": 6
            },
            {
                "channel": 306,
                "count": 9
            },
            {
                "channel": 308,
                "count": 12
            },
            {
                "channel": 309,
                "count": 11
            },
            {
                "channel": 310,
                "count": 8
            },
            {
                "channel": 312,
                "count": 14
            },
            {
                "channel": 313,
                "count": 6
            },
            {
                "channel": 314,
                "count": 8
            },
            {
                "channel": 315,
                "count": 7
            },
            {
                "channel": 316,
                "count": 9
            },
            {
                "channel": 317,
                "count": 6
            },
            {
                "channel": 318,
                "count": 11
            },
            {
                "channel": 319,
                "count": 10
            },
            {
                "channel": 320,
                "count": 9
            },
            {
                "channel": 322,
                "count": 4
            },
            {
                "channel": 323,
                "count": 9
            },
            {
                "channel": 324,
                "count": 8
            },
            {
                "channel": 326,
                "count": 13
            },
            {
                "channel": 328,
                "count": 11
            },
            {
                "channel": 334,
                "count": 11
            },
            {
                "channel": 335,
                "count": 11
            },
            {
                "channel": 336,
                "count": 8
            },
            {
                "channel": 337,
                "count": 9
            },
            {
                "channel": 338,
                "count": 11
            },
            {
                "channel": 339,
                "count": 10
            },
            {
                "channel": 340,
                "count": 12
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
                "count": 11
            },
            {
                "channel": 344,
                "count": 12
            },
            {
                "channel": 347,
                "count": 11
            },
            {
                "channel": 350,
                "count": 11
            },
            {
                "channel": 351,
                "count": 11
            },
            {
                "channel": 352,
                "count": 13
            },
            {
                "channel": 353,
                "count": 6
            },
            {
                "channel": 354,
                "count": 9
            },
            {
                "channel": 355,
                "count": 11
            },
            {
                "channel": 357,
                "count": 3
            },
            {
                "channel": 358,
                "count": 11
            },
            {
                "channel": 359,
                "count": 11
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
                "count": 11
            },
            {
                "channel": 364,
                "count": 7
            },
            {
                "channel": 365,
                "count": 9
            },
            {
                "channel": 366,
                "count": 9
            },
            {
                "channel": 367,
                "count": 16
            },
            {
                "channel": 369,
                "count": 7
            },
            {
                "channel": 370,
                "count": 9
            },
            {
                "channel": 371,
                "count": 10
            },
            {
                "channel": 372,
                "count": 8
            },
            {
                "channel": 373,
                "count": 9
            },
            {
                "channel": 374,
                "count": 12
            },
            {
                "channel": 376,
                "count": 12
            },
            {
                "channel": 377,
                "count": 9
            },
            {
                "channel": 378,
                "count": 5
            },
            {
                "channel": 379,
                "count": 7
            },
            {
                "channel": 380,
                "count": 7
            },
            {
                "channel": 381,
                "count": 7
            },
            {
                "channel": 382,
                "count": 10
            },
            {
                "channel": 383,
                "count": 11
            },
            {
                "channel": 384,
                "count": 13
            },
            {
                "channel": 387,
                "count": 11
            },
            {
                "channel": 388,
                "count": 10
            },
            {
                "channel": 389,
                "count": 10
            },
            {
                "channel": 390,
                "count": 7
            },
            {
                "channel": 392,
                "count": 10
            },
            {
                "channel": 394,
                "count": 7
            },
            {
                "channel": 395,
                "count": 11
            },
            {
                "channel": 397,
                "count": 1
            },
            {
                "channel": 398,
                "count": 11
            },
            {
                "channel": 399,
                "count": 7
            },
            {
                "channel": 400,
                "count": 11
            },
            {
                "channel": 401,
                "count": 10
            },
            {
                "channel": 403,
                "count": 12
            },
            {
                "channel": 406,
                "count": 3
            },
            {
                "channel": 407,
                "count": 8
            },
            {
                "channel": 408,
                "count": 12
            },
            {
                "channel": 409,
                "count": 8
            },
            {
                "channel": 410,
                "count": 11
            },
            {
                "channel": 413,
                "count": 10
            },
            {
                "channel": 414,
                "count": 11
            },
            {
                "channel": 415,
                "count": 12
            },
            {
                "channel": 416,
                "count": 9
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
                "count": 10
            },
            {
                "channel": 420,
                "count": 13
            },
            {
                "channel": 421,
                "count": 12
            },
            {
                "channel": 422,
                "count": 12
            },
            {
                "channel": 423,
                "count": 8
            },
            {
                "channel": 424,
                "count": 10
            },
            {
                "channel": 425,
                "count": 10
            },
            {
                "channel": 426,
                "count": 13
            },
            {
                "channel": 427,
                "count": 4
            },
            {
                "channel": 428,
                "count": 10
            },
            {
                "channel": 429,
                "count": 10
            },
            {
                "channel": 430,
                "count": 9
            },
            {
                "channel": 431,
                "count": 9
            },
            {
                "channel": 432,
                "count": 9
            },
            {
                "channel": 433,
                "count": 10
            },
            {
                "channel": 434,
                "count": 9
            },
            {
                "channel": 435,
                "count": 9
            },
            {
                "channel": 436,
                "count": 9
            },
            {
                "channel": 437,
                "count": 11
            },
            {
                "channel": 438,
                "count": 13
            },
            {
                "channel": 439,
                "count": 11
            },
            {
                "channel": 440,
                "count": 2
            },
            {
                "channel": 441,
                "count": 9
            },
            {
                "channel": 442,
                "count": 8
            },
            {
                "channel": 443,
                "count": 11
            },
            {
                "channel": 444,
                "count": 7
            },
            {
                "channel": 446,
                "count": 1
            },
            {
                "channel": 447,
                "count": 13
            },
            {
                "channel": 448,
                "count": 9
            },
            {
                "channel": 449,
                "count": 10
            },
            {
                "channel": 450,
                "count": 7
            },
            {
                "channel": 451,
                "count": 10
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
                "count": 7
            },
            {
                "channel": 455,
                "count": 8
            },
            {
                "channel": 456,
                "count": 7
            },
            {
                "channel": 457,
                "count": 7
            },
            {
                "channel": 458,
                "count": 13
            },
            {
                "channel": 461,
                "count": 7
            },
            {
                "channel": 462,
                "count": 10
            },
            {
                "channel": 463,
                "count": 11
            },
            {
                "channel": 465,
                "count": 6
            },
            {
                "channel": 466,
                "count": 9
            },
            {
                "channel": 468,
                "count": 10
            },
            {
                "channel": 470,
                "count": 9
            },
            {
                "channel": 471,
                "count": 13
            },
            {
                "channel": 476,
                "count": 9
            },
            {
                "channel": 477,
                "count": 9
            },
            {
                "channel": 478,
                "count": 11
            },
            {
                "channel": 480,
                "count": 12
            },
            {
                "channel": 481,
                "count": 10
            },
            {
                "channel": 482,
                "count": 7
            },
            {
                "channel": 483,
                "count": 9
            },
            {
                "channel": 484,
                "count": 10
            },
            {
                "channel": 485,
                "count": 8
            },
            {
                "channel": 486,
                "count": 12
            },
            {
                "channel": 487,
                "count": 9
            },
            {
                "channel": 488,
                "count": 11
            },
            {
                "channel": 489,
                "count": 7
            },
            {
                "channel": 490,
                "count": 9
            },
            {
                "channel": 491,
                "count": 10
            },
            {
                "channel": 492,
                "count": 12
            },
            {
                "channel": 493,
                "count": 11
            },
            {
                "channel": 494,
                "count": 7
            },
            {
                "channel": 495,
                "count": 14
            },
            {
                "channel": 496,
                "count": 10
            },
            {
                "channel": 497,
                "count": 8
            },
            {
                "channel": 498,
                "count": 5
            },
            {
                "channel": 499,
                "count": 7
            },
            {
                "channel": 500,
                "count": 9
            },
            {
                "channel": 501,
                "count": 9
            },
            {
                "channel": 503,
                "count": 10
            },
            {
                "channel": 504,
                "count": 14
            },
            {
                "channel": 505,
                "count": 5
            },
            {
                "channel": 506,
                "count": 6
            },
            {
                "channel": 507,
                "count": 10
            },
            {
                "channel": 508,
                "count": 8
            },
            {
                "channel": 509,
                "count": 12
            },
            {
                "channel": 510,
                "count": 11
            },
            {
                "channel": 512,
                "count": 9
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 13,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "d31c5988-bfb6-4bd3-bfbd-3f76dc3e38c1",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
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
                "mean": 9.16295623779297,
                "sum": 36651.82421875
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
                "mean": 79.3183212280273,
                "sum": 317273.28125
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.22023010253906,
                "sum": 36880.921875
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
            "version": "4.0.14+8d3226e"
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
            "msg_id": "06425f46-80fc-4b3a-af4a-80f5bede0ef6",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "segment",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 626,
                "pass": 3374
            },
            "qscore_dist_temp": [
                {
                    "count": 1,
                    "mean_qscore": 2.5
                },
                {
                    "count": 17,
                    "mean_qscore": 3.0
                },
                {
                    "count": 38,
                    "mean_qscore": 3.5
                },
                {
                    "count": 75,
                    "mean_qscore": 4.0
                },
                {
                    "count": 80,
                    "mean_qscore": 4.5
                },
                {
                    "count": 95,
                    "mean_qscore": 5.0
                },
                {
                    "count": 120,
                    "mean_qscore": 5.5
                },
                {
                    "count": 104,
                    "mean_qscore": 6.0
                },
                {
                    "count": 96,
                    "mean_qscore": 6.5
                },
                {
                    "count": 153,
                    "mean_qscore": 7.0
                },
                {
                    "count": 197,
                    "mean_qscore": 7.5
                },
                {
                    "count": 295,
                    "mean_qscore": 8.0
                },
                {
                    "count": 289,
                    "mean_qscore": 8.5
                },
                {
                    "count": 336,
                    "mean_qscore": 9.0
                },
                {
                    "count": 387,
                    "mean_qscore": 9.5
                },
                {
                    "count": 506,
                    "mean_qscore": 10.0
                },
                {
                    "count": 521,
                    "mean_qscore": 10.5
                },
                {
                    "count": 379,
                    "mean_qscore": 11.0
                },
                {
                    "count": 214,
                    "mean_qscore": 11.5
                },
                {
                    "count": 69,
                    "mean_qscore": 12.0
                },
                {
                    "count": 22,
                    "mean_qscore": 12.5
                },
                {
                    "count": 6,
                    "mean_qscore": 13.0
                }
            ],
            "qscore_sum_temp": {
                "count": 4000,
                "mean": 9.16029739379883,
                "sum": 36641.19140625
            },
            "read_len_events_sum_temp": 20504341,
            "seq_len_bases_dist_temp": [
                {
                    "count": 4000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 4000,
            "seq_len_events_dist_temp": [
                {
                    "count": 80,
                    "length": 0.0
                },
                {
                    "count": 204,
                    "length": 1000.0
                },
                {
                    "count": 200,
                    "length": 2000.0
                },
                {
                    "count": 291,
                    "length": 3000.0
                },
                {
                    "count": 1647,
                    "length": 4000.0
                },
                {
                    "count": 829,
                    "length": 5000.0
                },
                {
                    "count": 142,
                    "length": 6000.0
                },
                {
                    "count": 90,
                    "length": 7000.0
                },
                {
                    "count": 163,
                    "length": 8000.0
                },
                {
                    "count": 205,
                    "length": 9000.0
                },
                {
                    "count": 103,
                    "length": 10000.0
                },
                {
                    "count": 21,
                    "length": 11000.0
                },
                {
                    "count": 9,
                    "length": 12000.0
                },
                {
                    "count": 2,
                    "length": 13000.0
                },
                {
                    "count": 2,
                    "length": 14000.0
                },
                {
                    "count": 1,
                    "length": 15000.0
                },
                {
                    "count": 1,
                    "length": 16000.0
                },
                {
                    "count": 1,
                    "length": 17000.0
                },
                {
                    "count": 2,
                    "length": 18000.0
                },
                {
                    "count": 3,
                    "length": 19000.0
                },
                {
                    "count": 1,
                    "length": 20000.0
                },
                {
                    "count": 1,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
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
                "mean": 79.6603317260742,
                "sum": 318641.3125
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.23649120330811,
                "sum": 36945.96484375
            }
        },
        "channel_count": 356,
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
        "latest_run_time": 80382.46875,
        "levels_sums": {
            "count": 4000,
            "mean": 208.217712402344,
            "open_pore_level_sum": 832870.875
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
                "count": 17
            },
            {
                "channel": 3,
                "count": 14
            },
            {
                "channel": 4,
                "count": 16
            },
            {
                "channel": 5,
                "count": 11
            },
            {
                "channel": 6,
                "count": 14
            },
            {
                "channel": 7,
                "count": 15
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
                "count": 13
            },
            {
                "channel": 12,
                "count": 11
            },
            {
                "channel": 13,
                "count": 16
            },
            {
                "channel": 14,
                "count": 12
            },
            {
                "channel": 16,
                "count": 12
            },
            {
                "channel": 17,
                "count": 12
            },
            {
                "channel": 18,
                "count": 15
            },
            {
                "channel": 19,
                "count": 13
            },
            {
                "channel": 20,
                "count": 13
            },
            {
                "channel": 21,
                "count": 12
            },
            {
                "channel": 22,
                "count": 10
            },
            {
                "channel": 24,
                "count": 15
            },
            {
                "channel": 26,
                "count": 14
            },
            {
                "channel": 27,
                "count": 10
            },
            {
                "channel": 28,
                "count": 12
            },
            {
                "channel": 29,
                "count": 12
            },
            {
                "channel": 32,
                "count": 12
            },
            {
                "channel": 33,
                "count": 11
            },
            {
                "channel": 34,
                "count": 7
            },
            {
                "channel": 35,
                "count": 8
            },
            {
                "channel": 36,
                "count": 14
            },
            {
                "channel": 37,
                "count": 13
            },
            {
                "channel": 38,
                "count": 12
            },
            {
                "channel": 39,
                "count": 13
            },
            {
                "channel": 40,
                "count": 14
            },
            {
                "channel": 41,
                "count": 13
            },
            {
                "channel": 43,
                "count": 8
            },
            {
                "channel": 45,
                "count": 2
            },
            {
                "channel": 46,
                "count": 12
            },
            {
                "channel": 47,
                "count": 9
            },
            {
                "channel": 48,
                "count": 14
            },
            {
                "channel": 50,
                "count": 5
            },
            {
                "channel": 51,
                "count": 9
            },
            {
                "channel": 52,
                "count": 10
            },
            {
                "channel": 53,
                "count": 15
            },
            {
                "channel": 54,
                "count": 10
            },
            {
                "channel": 55,
                "count": 13
            },
            {
                "channel": 56,
                "count": 10
            },
            {
                "channel": 57,
                "count": 12
            },
            {
                "channel": 58,
                "count": 11
            },
            {
                "channel": 59,
                "count": 10
            },
            {
                "channel": 61,
                "count": 11
            },
            {
                "channel": 62,
                "count": 11
            },
            {
                "channel": 63,
                "count": 14
            },
            {
                "channel": 64,
                "count": 14
            },
            {
                "channel": 66,
                "count": 13
            },
            {
                "channel": 68,
                "count": 12
            },
            {
                "channel": 69,
                "count": 13
            },
            {
                "channel": 70,
                "count": 14
            },
            {
                "channel": 71,
                "count": 14
            },
            {
                "channel": 73,
                "count": 10
            },
            {
                "channel": 74,
                "count": 11
            },
            {
                "channel": 76,
                "count": 12
            },
            {
                "channel": 77,
                "count": 14
            },
            {
                "channel": 78,
                "count": 13
            },
            {
                "channel": 80,
                "count": 13
            },
            {
                "channel": 82,
                "count": 3
            },
            {
                "channel": 83,
                "count": 14
            },
            {
                "channel": 84,
                "count": 12
            },
            {
                "channel": 85,
                "count": 14
            },
            {
                "channel": 86,
                "count": 16
            },
            {
                "channel": 88,
                "count": 14
            },
            {
                "channel": 92,
                "count": 12
            },
            {
                "channel": 93,
                "count": 12
            },
            {
                "channel": 94,
                "count": 13
            },
            {
                "channel": 95,
                "count": 13
            },
            {
                "channel": 97,
                "count": 1
            },
            {
                "channel": 98,
                "count": 12
            },
            {
                "channel": 99,
                "count": 12
            },
            {
                "channel": 100,
                "count": 11
            },
            {
                "channel": 101,
                "count": 12
            },
            {
                "channel": 102,
                "count": 13
            },
            {
                "channel": 104,
                "count": 14
            },
            {
                "channel": 105,
                "count": 11
            },
            {
                "channel": 106,
                "count": 12
            },
            {
                "channel": 107,
                "count": 12
            },
            {
                "channel": 108,
                "count": 13
            },
            {
                "channel": 109,
                "count": 13
            },
            {
                "channel": 110,
                "count": 15
            },
            {
                "channel": 112,
                "count": 15
            },
            {
                "channel": 113,
                "count": 12
            },
            {
                "channel": 114,
                "count": 10
            },
            {
                "channel": 115,
                "count": 11
            },
            {
                "channel": 116,
                "count": 13
            },
            {
                "channel": 117,
                "count": 13
            },
            {
                "channel": 118,
                "count": 13
            },
            {
                "channel": 120,
                "count": 13
            },
            {
                "channel": 121,
                "count": 11
            },
            {
                "channel": 122,
                "count": 10
            },
            {
                "channel": 123,
                "count": 15
            },
            {
                "channel": 124,
                "count": 3
            },
            {
                "channel": 125,
                "count": 14
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
                "count": 11
            },
            {
                "channel": 132,
                "count": 16
            },
            {
                "channel": 133,
                "count": 12
            },
            {
                "channel": 134,
                "count": 14
            },
            {
                "channel": 135,
                "count": 14
            },
            {
                "channel": 136,
                "count": 16
            },
            {
                "channel": 140,
                "count": 7
            },
            {
                "channel": 141,
                "count": 16
            },
            {
                "channel": 142,
                "count": 16
            },
            {
                "channel": 143,
                "count": 13
            },
            {
                "channel": 147,
                "count": 11
            },
            {
                "channel": 148,
                "count": 16
            },
            {
                "channel": 150,
                "count": 14
            },
            {
                "channel": 151,
                "count": 8
            },
            {
                "channel": 152,
                "count": 17
            },
            {
                "channel": 154,
                "count": 12
            },
            {
                "channel": 155,
                "count": 14
            },
            {
                "channel": 156,
                "count": 14
            },
            {
                "channel": 157,
                "count": 13
            },
            {
                "channel": 158,
                "count": 14
            },
            {
                "channel": 159,
                "count": 14
            },
            {
                "channel": 160,
                "count": 11
            },
            {
                "channel": 161,
                "count": 8
            },
            {
                "channel": 163,
                "count": 8
            },
            {
                "channel": 164,
                "count": 9
            },
            {
                "channel": 165,
                "count": 14
            },
            {
                "channel": 167,
                "count": 3
            },
            {
                "channel": 168,
                "count": 11
            },
            {
                "channel": 169,
                "count": 13
            },
            {
                "channel": 170,
                "count": 9
            },
            {
                "channel": 171,
                "count": 12
            },
            {
                "channel": 172,
                "count": 14
            },
            {
                "channel": 173,
                "count": 10
            },
            {
                "channel": 174,
                "count": 13
            },
            {
                "channel": 175,
                "count": 5
            },
            {
                "channel": 176,
                "count": 13
            },
            {
                "channel": 177,
                "count": 12
            },
            {
                "channel": 178,
                "count": 12
            },
            {
                "channel": 179,
                "count": 10
            },
            {
                "channel": 180,
                "count": 11
            },
            {
                "channel": 181,
                "count": 14
            },
            {
                "channel": 183,
                "count": 12
            },
            {
                "channel": 184,
                "count": 14
            },
            {
                "channel": 185,
                "count": 12
            },
            {
                "channel": 186,
                "count": 11
            },
            {
                "channel": 187,
                "count": 8
            },
            {
                "channel": 188,
                "count": 11
            },
            {
                "channel": 189,
                "count": 14
            },
            {
                "channel": 197,
                "count": 13
            },
            {
                "channel": 202,
                "count": 8
            },
            {
                "channel": 203,
                "count": 15
            },
            {
                "channel": 204,
                "count": 13
            },
            {
                "channel": 205,
                "count": 11
            },
            {
                "channel": 207,
                "count": 17
            },
            {
                "channel": 208,
                "count": 16
            },
            {
                "channel": 212,
                "count": 10
            },
            {
                "channel": 213,
                "count": 6
            },
            {
                "channel": 214,
                "count": 14
            },
            {
                "channel": 215,
                "count": 14
            },
            {
                "channel": 216,
                "count": 17
            },
            {
                "channel": 222,
                "count": 11
            },
            {
                "channel": 223,
                "count": 13
            },
            {
                "channel": 224,
                "count": 15
            },
            {
                "channel": 225,
                "count": 5
            },
            {
                "channel": 226,
                "count": 7
            },
            {
                "channel": 227,
                "count": 7
            },
            {
                "channel": 228,
                "count": 8
            },
            {
                "channel": 229,
                "count": 11
            },
            {
                "channel": 230,
                "count": 12
            },
            {
                "channel": 231,
                "count": 12
            },
            {
                "channel": 232,
                "count": 13
            },
            {
                "channel": 233,
                "count": 9
            },
            {
                "channel": 234,
                "count": 8
            },
            {
                "channel": 237,
                "count": 14
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
                "channel": 241,
                "count": 7
            },
            {
                "channel": 242,
                "count": 13
            },
            {
                "channel": 243,
                "count": 8
            },
            {
                "channel": 245,
                "count": 10
            },
            {
                "channel": 246,
                "count": 14
            },
            {
                "channel": 247,
                "count": 18
            },
            {
                "channel": 249,
                "count": 6
            },
            {
                "channel": 250,
                "count": 2
            },
            {
                "channel": 254,
                "count": 10
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
                "count": 17
            },
            {
                "channel": 259,
                "count": 4
            },
            {
                "channel": 262,
                "count": 12
            },
            {
                "channel": 263,
                "count": 16
            },
            {
                "channel": 265,
                "count": 11
            },
            {
                "channel": 268,
                "count": 9
            },
            {
                "channel": 271,
                "count": 14
            },
            {
                "channel": 272,
                "count": 15
            },
            {
                "channel": 274,
                "count": 12
            },
            {
                "channel": 276,
                "count": 15
            },
            {
                "channel": 278,
                "count": 14
            },
            {
                "channel": 280,
                "count": 15
            },
            {
                "channel": 285,
                "count": 13
            },
            {
                "channel": 287,
                "count": 14
            },
            {
                "channel": 288,
                "count": 15
            },
            {
                "channel": 289,
                "count": 4
            },
            {
                "channel": 290,
                "count": 6
            },
            {
                "channel": 291,
                "count": 9
            },
            {
                "channel": 292,
                "count": 5
            },
            {
                "channel": 293,
                "count": 13
            },
            {
                "channel": 296,
                "count": 12
            },
            {
                "channel": 297,
                "count": 6
            },
            {
                "channel": 298,
                "count": 9
            },
            {
                "channel": 299,
                "count": 1
            },
            {
                "channel": 300,
                "count": 12
            },
            {
                "channel": 302,
                "count": 16
            },
            {
                "channel": 303,
                "count": 4
            },
            {
                "channel": 304,
                "count": 17
            },
            {
                "channel": 305,
                "count": 5
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
                "count": 9
            },
            {
                "channel": 309,
                "count": 13
            },
            {
                "channel": 310,
                "count": 10
            },
            {
                "channel": 312,
                "count": 13
            },
            {
                "channel": 313,
                "count": 9
            },
            {
                "channel": 314,
                "count": 7
            },
            {
                "channel": 316,
                "count": 11
            },
            {
                "channel": 318,
                "count": 16
            },
            {
                "channel": 323,
                "count": 15
            },
            {
                "channel": 324,
                "count": 9
            },
            {
                "channel": 326,
                "count": 11
            },
            {
                "channel": 335,
                "count": 13
            },
            {
                "channel": 336,
                "count": 14
            },
            {
                "channel": 337,
                "count": 6
            },
            {
                "channel": 338,
                "count": 11
            },
            {
                "channel": 340,
                "count": 11
            },
            {
                "channel": 342,
                "count": 15
            },
            {
                "channel": 343,
                "count": 14
            },
            {
                "channel": 344,
                "count": 13
            },
            {
                "channel": 347,
                "count": 12
            },
            {
                "channel": 350,
                "count": 10
            },
            {
                "channel": 351,
                "count": 13
            },
            {
                "channel": 353,
                "count": 7
            },
            {
                "channel": 354,
                "count": 9
            },
            {
                "channel": 355,
                "count": 10
            },
            {
                "channel": 357,
                "count": 7
            },
            {
                "channel": 358,
                "count": 11
            },
            {
                "channel": 360,
                "count": 16
            },
            {
                "channel": 361,
                "count": 5
            },
            {
                "channel": 362,
                "count": 8
            },
            {
                "channel": 366,
                "count": 9
            },
            {
                "channel": 367,
                "count": 11
            },
            {
                "channel": 369,
                "count": 9
            },
            {
                "channel": 370,
                "count": 10
            },
            {
                "channel": 371,
                "count": 11
            },
            {
                "channel": 373,
                "count": 8
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
                "count": 7
            },
            {
                "channel": 378,
                "count": 6
            },
            {
                "channel": 379,
                "count": 10
            },
            {
                "channel": 382,
                "count": 11
            },
            {
                "channel": 383,
                "count": 15
            },
            {
                "channel": 384,
                "count": 13
            },
            {
                "channel": 388,
                "count": 11
            },
            {
                "channel": 389,
                "count": 14
            },
            {
                "channel": 390,
                "count": 14
            },
            {
                "channel": 391,
                "count": 10
            },
            {
                "channel": 392,
                "count": 12
            },
            {
                "channel": 394,
                "count": 2
            },
            {
                "channel": 398,
                "count": 12
            },
            {
                "channel": 399,
                "count": 17
            },
            {
                "channel": 400,
                "count": 11
            },
            {
                "channel": 406,
                "count": 1
            },
            {
                "channel": 410,
                "count": 8
            },
            {
                "channel": 413,
                "count": 12
            },
            {
                "channel": 414,
                "count": 14
            },
            {
                "channel": 415,
                "count": 19
            },
            {
                "channel": 416,
                "count": 12
            },
            {
                "channel": 417,
                "count": 8
            },
            {
                "channel": 418,
                "count": 12
            },
            {
                "channel": 420,
                "count": 9
            },
            {
                "channel": 421,
                "count": 14
            },
            {
                "channel": 422,
                "count": 12
            },
            {
                "channel": 423,
                "count": 15
            },
            {
                "channel": 424,
                "count": 9
            },
            {
                "channel": 425,
                "count": 10
            },
            {
                "channel": 426,
                "count": 13
            },
            {
                "channel": 427,
                "count": 9
            },
            {
                "channel": 428,
                "count": 11
            },
            {
                "channel": 429,
                "count": 13
            },
            {
                "channel": 431,
                "count": 9
            },
            {
                "channel": 432,
                "count": 5
            },
            {
                "channel": 433,
                "count": 10
            },
            {
                "channel": 434,
                "count": 13
            },
            {
                "channel": 435,
                "count": 10
            },
            {
                "channel": 436,
                "count": 11
            },
            {
                "channel": 437,
                "count": 11
            },
            {
                "channel": 438,
                "count": 7
            },
            {
                "channel": 439,
                "count": 11
            },
            {
                "channel": 440,
                "count": 11
            },
            {
                "channel": 441,
                "count": 7
            },
            {
                "channel": 442,
                "count": 12
            },
            {
                "channel": 443,
                "count": 8
            },
            {
                "channel": 444,
                "count": 4
            },
            {
                "channel": 447,
                "count": 13
            },
            {
                "channel": 449,
                "count": 11
            },
            {
                "channel": 450,
                "count": 11
            },
            {
                "channel": 451,
                "count": 10
            },
            {
                "channel": 453,
                "count": 14
            },
            {
                "channel": 455,
                "count": 13
            },
            {
                "channel": 461,
                "count": 13
            },
            {
                "channel": 462,
                "count": 14
            },
            {
                "channel": 463,
                "count": 12
            },
            {
                "channel": 464,
                "count": 2
            },
            {
                "channel": 465,
                "count": 4
            },
            {
                "channel": 466,
                "count": 8
            },
            {
                "channel": 469,
                "count": 8
            },
            {
                "channel": 471,
                "count": 10
            },
            {
                "channel": 472,
                "count": 11
            },
            {
                "channel": 473,
                "count": 12
            },
            {
                "channel": 475,
                "count": 12
            },
            {
                "channel": 476,
                "count": 8
            },
            {
                "channel": 477,
                "count": 13
            },
            {
                "channel": 478,
                "count": 11
            },
            {
                "channel": 479,
                "count": 12
            },
            {
                "channel": 480,
                "count": 12
            },
            {
                "channel": 481,
                "count": 7
            },
            {
                "channel": 482,
                "count": 4
            },
            {
                "channel": 483,
                "count": 9
            },
            {
                "channel": 484,
                "count": 11
            },
            {
                "channel": 485,
                "count": 12
            },
            {
                "channel": 486,
                "count": 15
            },
            {
                "channel": 487,
                "count": 13
            },
            {
                "channel": 488,
                "count": 12
            },
            {
                "channel": 489,
                "count": 11
            },
            {
                "channel": 490,
                "count": 6
            },
            {
                "channel": 491,
                "count": 11
            },
            {
                "channel": 492,
                "count": 13
            },
            {
                "channel": 493,
                "count": 12
            },
            {
                "channel": 495,
                "count": 13
            },
            {
                "channel": 496,
                "count": 11
            },
            {
                "channel": 497,
                "count": 5
            },
            {
                "channel": 498,
                "count": 11
            },
            {
                "channel": 500,
                "count": 3
            },
            {
                "channel": 501,
                "count": 10
            },
            {
                "channel": 503,
                "count": 12
            },
            {
                "channel": 504,
                "count": 13
            },
            {
                "channel": 505,
                "count": 7
            },
            {
                "channel": 506,
                "count": 8
            },
            {
                "channel": 507,
                "count": 13
            },
            {
                "channel": 508,
                "count": 11
            },
            {
                "channel": 509,
                "count": 10
            },
            {
                "channel": 510,
                "count": 13
            },
            {
                "channel": 511,
                "count": 12
            },
            {
                "channel": 512,
                "count": 14
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 60,
        "segment_number": 23,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "6755edf7-0839-400f-a899-104ad78b4e4d",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "79dcb7a2-a3d6-4d80-9b85-7b38feaea5d2",
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3445,
                "pass": 20555
            },
            "qscore_dist_temp": [
                {
                    "count": 2,
                    "mean_qscore": 2.5
                },
                {
                    "count": 57,
                    "mean_qscore": 3.0
                },
                {
                    "count": 200,
                    "mean_qscore": 3.5
                },
                {
                    "count": 322,
                    "mean_qscore": 4.0
                },
                {
                    "count": 386,
                    "mean_qscore": 4.5
                },
                {
                    "count": 547,
                    "mean_qscore": 5.0
                },
                {
                    "count": 737,
                    "mean_qscore": 5.5
                },
                {
                    "count": 574,
                    "mean_qscore": 6.0
                },
                {
                    "count": 620,
                    "mean_qscore": 6.5
                },
                {
                    "count": 878,
                    "mean_qscore": 7.0
                },
                {
                    "count": 1274,
                    "mean_qscore": 7.5
                },
                {
                    "count": 1714,
                    "mean_qscore": 8.0
                },
                {
                    "count": 1492,
                    "mean_qscore": 8.5
                },
                {
                    "count": 1808,
                    "mean_qscore": 9.0
                },
                {
                    "count": 2253,
                    "mean_qscore": 9.5
                },
                {
                    "count": 2757,
                    "mean_qscore": 10.0
                },
                {
                    "count": 3212,
                    "mean_qscore": 10.5
                },
                {
                    "count": 2655,
                    "mean_qscore": 11.0
                },
                {
                    "count": 1563,
                    "mean_qscore": 11.5
                },
                {
                    "count": 667,
                    "mean_qscore": 12.0
                },
                {
                    "count": 210,
                    "mean_qscore": 12.5
                },
                {
                    "count": 51,
                    "mean_qscore": 13.0
                },
                {
                    "count": 16,
                    "mean_qscore": 13.5
                },
                {
                    "count": 2,
                    "mean_qscore": 14.0
                },
                {
                    "count": 2,
                    "mean_qscore": 14.5
                },
                {
                    "count": 1,
                    "mean_qscore": 15.5
                }
            ],
            "qscore_sum_temp": {
                "count": 24000,
                "mean": 9.33225631713867,
                "sum": 223974.15625
            },
            "read_len_events_sum_temp": 112051988,
            "seq_len_bases_dist_temp": [
                {
                    "count": 24000,
                    "length": 0.0
                }
            ],
            "seq_len_bases_sum_temp": 24000,
            "seq_len_events_dist_temp": [
                {
                    "count": 484,
                    "length": 0.0
                },
                {
                    "count": 1738,
                    "length": 1000.0
                },
                {
                    "count": 1863,
                    "length": 2000.0
                },
                {
                    "count": 3119,
                    "length": 3000.0
                },
                {
                    "count": 10314,
                    "length": 4000.0
                },
                {
                    "count": 2791,
                    "length": 5000.0
                },
                {
                    "count": 653,
                    "length": 6000.0
                },
                {
                    "count": 713,
                    "length": 7000.0
                },
                {
                    "count": 972,
                    "length": 8000.0
                },
                {
                    "count": 835,
                    "length": 9000.0
                },
                {
                    "count": 343,
                    "length": 10000.0
                },
                {
                    "count": 76,
                    "length": 11000.0
                },
                {
                    "count": 23,
                    "length": 12000.0
                },
                {
                    "count": 14,
                    "length": 13000.0
                },
                {
                    "count": 4,
                    "length": 14000.0
                },
                {
                    "count": 12,
                    "length": 15000.0
                },
                {
                    "count": 10,
                    "length": 16000.0
                },
                {
                    "count": 12,
                    "length": 17000.0
                },
                {
                    "count": 9,
                    "length": 18000.0
                },
                {
                    "count": 7,
                    "length": 19000.0
                },
                {
                    "count": 4,
                    "length": 20000.0
                },
                {
                    "count": 2,
                    "length": 21000.0
                },
                {
                    "count": 1,
                    "length": 22000.0
                },
                {
                    "count": 1,
                    "length": 29000.0
                }
            ],
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 24000,
                    "speed": 1.0
                }
            ],
            "strand_median_pa": {
                "count": 24000,
                "mean": 81.1471633911133,
                "sum": 1947531.875
            },
            "strand_sd_pa": {
                "count": 24000,
                "mean": 9.3284387588501,
                "sum": 223882.53125
            }
        },
        "channel_count": 461,
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
        "latest_run_time": 80382.46875,
        "levels_sums": {
            "count": 24000,
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
            "cpu_threads_per_caller": "6",
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
            "num_callers": "6",
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
            "quiet": "0",
            "read_batch_size": "4000",
            "read_id_list": "",
            "rear_window_size": "150",
            "records_per_fastq": "4000",
            "recursive": "1",
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
        "read_count": 24000,
        "reads_per_channel_dist": [
            {
                "channel": 2,
                "count": 65
            },
            {
                "channel": 3,
                "count": 64
            },
            {
                "channel": 4,
                "count": 56
            },
            {
                "channel": 5,
                "count": 67
            },
            {
                "channel": 6,
                "count": 66
            },
            {
                "channel": 7,
                "count": 66
            },
            {
                "channel": 8,
                "count": 59
            },
            {
                "channel": 9,
                "count": 26
            },
            {
                "channel": 10,
                "count": 60
            },
            {
                "channel": 11,
                "count": 64
            },
            {
                "channel": 12,
                "count": 52
            },
            {
                "channel": 13,
                "count": 67
            },
            {
                "channel": 14,
                "count": 46
            },
            {
                "channel": 15,
                "count": 30
            },
            {
                "channel": 16,
                "count": 58
            },
            {
                "channel": 17,
                "count": 60
            },
            {
                "channel": 18,
                "count": 62
            },
            {
                "channel": 19,
                "count": 64
            },
            {
                "channel": 20,
                "count": 62
            },
            {
                "channel": 21,
                "count": 60
            },
            {
                "channel": 22,
                "count": 67
            },
            {
                "channel": 23,
                "count": 44
            },
            {
                "channel": 24,
                "count": 58
            },
            {
                "channel": 25,
                "count": 32
            },
            {
                "channel": 26,
                "count": 61
            },
            {
                "channel": 27,
                "count": 40
            },
            {
                "channel": 28,
                "count": 50
            },
            {
                "channel": 29,
                "count": 48
            },
            {
                "channel": 30,
                "count": 42
            },
            {
                "channel": 31,
                "count": 30
            },
            {
                "channel": 32,
                "count": 62
            },
            {
                "channel": 33,
                "count": 61
            },
            {
                "channel": 34,
                "count": 51
            },
            {
                "channel": 35,
                "count": 53
            },
            {
                "channel": 36,
                "count": 60
            },
            {
                "channel": 37,
                "count": 57
            },
            {
                "channel": 38,
                "count": 59
            },
            {
                "channel": 39,
                "count": 66
            },
            {
                "channel": 40,
                "count": 66
            },
            {
                "channel": 41,
                "count": 65
            },
            {
                "channel": 42,
                "count": 45
            },
            {
                "channel": 43,
                "count": 44
            },
            {
                "channel": 44,
                "count": 28
            },
            {
                "channel": 45,
                "count": 49
            },
            {
                "channel": 46,
                "count": 59
            },
            {
                "channel": 47,
                "count": 50
            },
            {
                "channel": 48,
                "count": 59
            },
            {
                "channel": 49,
                "count": 41
            },
            {
                "channel": 50,
                "count": 37
            },
            {
                "channel": 51,
                "count": 46
            },
            {
                "channel": 52,
                "count": 59
            },
            {
                "channel": 53,
                "count": 70
            },
            {
                "channel": 54,
                "count": 60
            },
            {
                "channel": 55,
                "count": 50
            },
            {
                "channel": 56,
                "count": 56
            },
            {
                "channel": 57,
                "count": 20
            },
            {
                "channel": 58,
                "count": 56
            },
            {
                "channel": 59,
                "count": 53
            },
            {
                "channel": 60,
                "count": 34
            },
            {
                "channel": 61,
                "count": 60
            },
            {
                "channel": 62,
                "count": 61
            },
            {
                "channel": 63,
                "count": 60
            },
            {
                "channel": 64,
                "count": 63
            },
            {
                "channel": 65,
                "count": 14
            },
            {
                "channel": 66,
                "count": 70
            },
            {
                "channel": 67,
                "count": 20
            },
            {
                "channel": 68,
                "count": 68
            },
            {
                "channel": 69,
                "count": 69
            },
            {
                "channel": 70,
                "count": 71
            },
            {
                "channel": 71,
                "count": 54
            },
            {
                "channel": 72,
                "count": 57
            },
            {
                "channel": 73,
                "count": 37
            },
            {
                "channel": 74,
                "count": 53
            },
            {
                "channel": 75,
                "count": 54
            },
            {
                "channel": 76,
                "count": 62
            },
            {
                "channel": 77,
                "count": 63
            },
            {
                "channel": 78,
                "count": 63
            },
            {
                "channel": 80,
                "count": 68
            },
            {
                "channel": 82,
                "count": 40
            },
            {
                "channel": 83,
                "count": 67
            },
            {
                "channel": 84,
                "count": 65
            },
            {
                "channel": 85,
                "count": 68
            },
            {
                "channel": 86,
                "count": 68
            },
            {
                "channel": 88,
                "count": 71
            },
            {
                "channel": 89,
                "count": 25
            },
            {
                "channel": 90,
                "count": 49
            },
            {
                "channel": 92,
                "count": 67
            },
            {
                "channel": 93,
                "count": 60
            },
            {
                "channel": 94,
                "count": 65
            },
            {
                "channel": 95,
                "count": 70
            },
            {
                "channel": 96,
                "count": 49
            },
            {
                "channel": 97,
                "count": 50
            },
            {
                "channel": 98,
                "count": 57
            },
            {
                "channel": 99,
                "count": 41
            },
            {
                "channel": 100,
                "count": 56
            },
            {
                "channel": 101,
                "count": 66
            },
            {
                "channel": 102,
                "count": 61
            },
            {
                "channel": 103,
                "count": 49
            },
            {
                "channel": 104,
                "count": 80
            },
            {
                "channel": 105,
                "count": 52
            },
            {
                "channel": 106,
                "count": 58
            },
            {
                "channel": 107,
                "count": 57
            },
            {
                "channel": 108,
                "count": 62
            },
            {
                "channel": 109,
                "count": 67
            },
            {
                "channel": 110,
                "count": 67
            },
            {
                "channel": 112,
                "count": 68
            },
            {
                "channel": 113,
                "count": 56
            },
            {
                "channel": 114,
                "count": 55
            },
            {
                "channel": 115,
                "count": 56
            },
            {
                "channel": 116,
                "count": 62
            },
            {
                "channel": 117,
                "count": 67
            },
            {
                "channel": 118,
                "count": 69
            },
            {
                "channel": 120,
                "count": 51
            },
            {
                "channel": 121,
                "count": 47
            },
            {
                "channel": 122,
                "count": 60
            },
            {
                "channel": 123,
                "count": 57
            },
            {
                "channel": 124,
                "count": 45
            },
            {
                "channel": 125,
                "count": 65
            },
            {
                "channel": 126,
                "count": 64
            },
            {
                "channel": 127,
                "count": 65
            },
            {
                "channel": 128,
                "count": 63
            },
            {
                "channel": 130,
                "count": 49
            },
            {
                "channel": 132,
                "count": 33
            },
            {
                "channel": 133,
                "count": 67
            },
            {
                "channel": 134,
                "count": 67
            },
            {
                "channel": 135,
                "count": 58
            },
            {
                "channel": 136,
                "count": 62
            },
            {
                "channel": 137,
                "count": 11
            },
            {
                "channel": 138,
                "count": 29
            },
            {
                "channel": 139,
                "count": 4
            },
            {
                "channel": 140,
                "count": 47
            },
            {
                "channel": 141,
                "count": 71
            },
            {
                "channel": 142,
                "count": 63
            },
            {
                "channel": 143,
                "count": 62
            },
            {
                "channel": 144,
                "count": 48
            },
            {
                "channel": 147,
                "count": 65
            },
            {
                "channel": 148,
                "count": 71
            },
            {
                "channel": 149,
                "count": 21
            },
            {
                "channel": 150,
                "count": 67
            },
            {
                "channel": 151,
                "count": 51
            },
            {
                "channel": 152,
                "count": 77
            },
            {
                "channel": 153,
                "count": 20
            },
            {
                "channel": 154,
                "count": 60
            },
            {
                "channel": 155,
                "count": 64
            },
            {
                "channel": 156,
                "count": 72
            },
            {
                "channel": 157,
                "count": 41
            },
            {
                "channel": 158,
                "count": 66
            },
            {
                "channel": 159,
                "count": 70
            },
            {
                "channel": 160,
                "count": 65
            },
            {
                "channel": 161,
                "count": 44
            },
            {
                "channel": 162,
                "count": 46
            },
            {
                "channel": 163,
                "count": 60
            },
            {
                "channel": 164,
                "count": 54
            },
            {
                "channel": 165,
                "count": 60
            },
            {
                "channel": 166,
                "count": 24
            },
            {
                "channel": 167,
                "count": 54
            },
            {
                "channel": 168,
                "count": 62
            },
            {
                "channel": 169,
                "count": 58
            },
            {
                "channel": 170,
                "count": 42
            },
            {
                "channel": 171,
                "count": 57
            },
            {
                "channel": 172,
                "count": 64
            },
            {
                "channel": 173,
                "count": 57
            },
            {
                "channel": 174,
                "count": 63
            },
            {
                "channel": 175,
                "count": 56
            },
            {
                "channel": 176,
                "count": 71
            },
            {
                "channel": 177,
                "count": 46
            },
            {
                "channel": 178,
                "count": 59
            },
            {
                "channel": 179,
                "count": 70
            },
            {
                "channel": 180,
                "count": 56
            },
            {
                "channel": 181,
                "count": 62
            },
            {
                "channel": 182,
                "count": 1
            },
            {
                "channel": 183,
                "count": 66
            },
            {
                "channel": 184,
                "count": 68
            },
            {
                "channel": 185,
                "count": 59
            },
            {
                "channel": 186,
                "count": 62
            },
            {
                "channel": 187,
                "count": 58
            },
            {
                "channel": 188,
                "count": 54
            },
            {
                "channel": 189,
                "count": 62
            },
            {
                "channel": 190,
                "count": 43
            },
            {
                "channel": 191,
                "count": 47
            },
            {
                "channel": 192,
                "count": 49
            },
            {
                "channel": 194,
                "count": 8
            },
            {
                "channel": 195,
                "count": 21
            },
            {
                "channel": 196,
                "count": 48
            },
            {
                "channel": 197,
                "count": 65
            },
            {
                "channel": 198,
                "count": 64
            },
            {
                "channel": 200,
                "count": 20
            },
            {
                "channel": 201,
                "count": 9
            },
            {
                "channel": 202,
                "count": 53
            },
            {
                "channel": 203,
                "count": 45
            },
            {
                "channel": 204,
                "count": 64
            },
            {
                "channel": 205,
                "count": 67
            },
            {
                "channel": 206,
                "count": 21
            },
            {
                "channel": 207,
                "count": 81
            },
            {
                "channel": 208,
                "count": 74
            },
            {
                "channel": 210,
                "count": 34
            },
            {
                "channel": 212,
                "count": 63
            },
            {
                "channel": 213,
                "count": 54
            },
            {
                "channel": 214,
                "count": 68
            },
            {
                "channel": 215,
                "count": 66
            },
            {
                "channel": 216,
                "count": 68
            },
            {
                "channel": 218,
                "count": 3
            },
            {
                "channel": 219,
                "count": 3
            },
            {
                "channel": 222,
                "count": 64
            },
            {
                "channel": 223,
                "count": 61
            },
            {
                "channel": 224,
                "count": 68
            },
            {
                "channel": 225,
                "count": 41
            },
            {
                "channel": 226,
                "count": 41
            },
            {
                "channel": 227,
                "count": 44
            },
            {
                "channel": 228,
                "count": 59
            },
            {
                "channel": 229,
                "count": 62
            },
            {
                "channel": 230,
                "count": 59
            },
            {
                "channel": 231,
                "count": 64
            },
            {
                "channel": 232,
                "count": 62
            },
            {
                "channel": 233,
                "count": 50
            },
            {
                "channel": 234,
                "count": 43
            },
            {
                "channel": 235,
                "count": 36
            },
            {
                "channel": 237,
                "count": 64
            },
            {
                "channel": 238,
                "count": 58
            },
            {
                "channel": 239,
                "count": 54
            },
            {
                "channel": 240,
                "count": 51
            },
            {
                "channel": 241,
                "count": 47
            },
            {
                "channel": 242,
                "count": 39
            },
            {
                "channel": 243,
                "count": 57
            },
            {
                "channel": 245,
                "count": 62
            },
            {
                "channel": 246,
                "count": 68
            },
            {
                "channel": 247,
                "count": 74
            },
            {
                "channel": 248,
                "count": 30
            },
            {
                "channel": 249,
                "count": 49
            },
            {
                "channel": 250,
                "count": 31
            },
            {
                "channel": 251,
                "count": 37
            },
            {
                "channel": 252,
                "count": 35
            },
            {
                "channel": 253,
                "count": 44
            },
            {
                "channel": 254,
                "count": 64
            },
            {
                "channel": 255,
                "count": 56
            },
            {
                "channel": 256,
                "count": 69
            },
            {
                "channel": 258,
                "count": 64
            },
            {
                "channel": 259,
                "count": 59
            },
            {
                "channel": 260,
                "count": 27
            },
            {
                "channel": 261,
                "count": 29
            },
            {
                "channel": 262,
                "count": 68
            },
            {
                "channel": 263,
                "count": 59
            },
            {
                "channel": 264,
                "count": 49
            },
            {
                "channel": 265,
                "count": 58
            },
            {
                "channel": 267,
                "count": 28
            },
            {
                "channel": 268,
                "count": 62
            },
            {
                "channel": 271,
                "count": 66
            },
            {
                "channel": 272,
                "count": 69
            },
            {
                "channel": 274,
                "count": 57
            },
            {
                "channel": 276,
                "count": 55
            },
            {
                "channel": 277,
                "count": 27
            },
            {
                "channel": 278,
                "count": 65
            },
            {
                "channel": 279,
                "count": 10
            },
            {
                "channel": 280,
                "count": 68
            },
            {
                "channel": 282,
                "count": 11
            },
            {
                "channel": 283,
                "count": 9
            },
            {
                "channel": 284,
                "count": 41
            },
            {
                "channel": 285,
                "count": 65
            },
            {
                "channel": 286,
                "count": 30
            },
            {
                "channel": 287,
                "count": 60
            },
            {
                "channel": 288,
                "count": 67
            },
            {
                "channel": 289,
                "count": 38
            },
            {
                "channel": 290,
                "count": 43
            },
            {
                "channel": 291,
                "count": 51
            },
            {
                "channel": 292,
                "count": 37
            },
            {
                "channel": 293,
                "count": 61
            },
            {
                "channel": 294,
                "count": 55
            },
            {
                "channel": 296,
                "count": 64
            },
            {
                "channel": 297,
                "count": 40
            },
            {
                "channel": 298,
                "count": 45
            },
            {
                "channel": 299,
                "count": 36
            },
            {
                "channel": 300,
                "count": 58
            },
            {
                "channel": 301,
                "count": 41
            },
            {
                "channel": 302,
                "count": 80
            },
            {
                "channel": 303,
                "count": 45
            },
            {
                "channel": 304,
                "count": 73
            },
            {
                "channel": 305,
                "count": 38
            },
            {
                "channel": 306,
                "count": 52
            },
            {
                "channel": 307,
                "count": 36
            },
            {
                "channel": 308,
                "count": 58
            },
            {
                "channel": 309,
                "count": 64
            },
            {
                "channel": 310,
                "count": 66
            },
            {
                "channel": 312,
                "count": 69
            },
            {
                "channel": 313,
                "count": 32
            },
            {
                "channel": 314,
                "count": 45
            },
            {
                "channel": 315,
                "count": 33
            },
            {
                "channel": 316,
                "count": 58
            },
            {
                "channel": 317,
                "count": 39
            },
            {
                "channel": 318,
                "count": 65
            },
            {
                "channel": 319,
                "count": 53
            },
            {
                "channel": 320,
                "count": 50
            },
            {
                "channel": 322,
                "count": 12
            },
            {
                "channel": 323,
                "count": 69
            },
            {
                "channel": 324,
                "count": 55
            },
            {
                "channel": 326,
                "count": 42
            },
            {
                "channel": 327,
                "count": 32
            },
            {
                "channel": 328,
                "count": 39
            },
            {
                "channel": 334,
                "count": 54
            },
            {
                "channel": 335,
                "count": 65
            },
            {
                "channel": 336,
                "count": 63
            },
            {
                "channel": 337,
                "count": 39
            },
            {
                "channel": 338,
                "count": 59
            },
            {
                "channel": 339,
                "count": 38
            },
            {
                "channel": 340,
                "count": 65
            },
            {
                "channel": 341,
                "count": 12
            },
            {
                "channel": 342,
                "count": 72
            },
            {
                "channel": 343,
                "count": 70
            },
            {
                "channel": 344,
                "count": 66
            },
            {
                "channel": 345,
                "count": 19
            },
            {
                "channel": 346,
                "count": 10
            },
            {
                "channel": 347,
                "count": 66
            },
            {
                "channel": 350,
                "count": 66
            },
            {
                "channel": 351,
                "count": 68
            },
            {
                "channel": 352,
                "count": 48
            },
            {
                "channel": 353,
                "count": 39
            },
            {
                "channel": 354,
                "count": 49
            },
            {
                "channel": 355,
                "count": 55
            },
            {
                "channel": 356,
                "count": 1
            },
            {
                "channel": 357,
                "count": 35
            },
            {
                "channel": 358,
                "count": 67
            },
            {
                "channel": 359,
                "count": 52
            },
            {
                "channel": 360,
                "count": 69
            },
            {
                "channel": 361,
                "count": 38
            },
            {
                "channel": 362,
                "count": 53
            },
            {
                "channel": 364,
                "count": 37
            },
            {
                "channel": 365,
                "count": 45
            },
            {
                "channel": 366,
                "count": 61
            },
            {
                "channel": 367,
                "count": 67
            },
            {
                "channel": 369,
                "count": 39
            },
            {
                "channel": 370,
                "count": 46
            },
            {
                "channel": 371,
                "count": 54
            },
            {
                "channel": 372,
                "count": 35
            },
            {
                "channel": 373,
                "count": 55
            },
            {
                "channel": 374,
                "count": 64
            },
            {
                "channel": 376,
                "count": 74
            },
            {
                "channel": 377,
                "count": 38
            },
            {
                "channel": 378,
                "count": 38
            },
            {
                "channel": 379,
                "count": 45
            },
            {
                "channel": 380,
                "count": 33
            },
            {
                "channel": 381,
                "count": 38
            },
            {
                "channel": 382,
                "count": 44
            },
            {
                "channel": 383,
                "count": 58
            },
            {
                "channel": 384,
                "count": 66
            },
            {
                "channel": 387,
                "count": 36
            },
            {
                "channel": 388,
                "count": 54
            },
            {
                "channel": 389,
                "count": 66
            },
            {
                "channel": 390,
                "count": 60
            },
            {
                "channel": 391,
                "count": 41
            },
            {
                "channel": 392,
                "count": 67
            },
            {
                "channel": 393,
                "count": 35
            },
            {
                "channel": 394,
                "count": 43
            },
            {
                "channel": 395,
                "count": 44
            },
            {
                "channel": 397,
                "count": 33
            },
            {
                "channel": 398,
                "count": 63
            },
            {
                "channel": 399,
                "count": 64
            },
            {
                "channel": 400,
                "count": 65
            },
            {
                "channel": 401,
                "count": 42
            },
            {
                "channel": 403,
                "count": 46
            },
            {
                "channel": 405,
                "count": 32
            },
            {
                "channel": 406,
                "count": 48
            },
            {
                "channel": 407,
                "count": 40
            },
            {
                "channel": 408,
                "count": 54
            },
            {
                "channel": 409,
                "count": 17
            },
            {
                "channel": 410,
                "count": 61
            },
            {
                "channel": 413,
                "count": 60
            },
            {
                "channel": 414,
                "count": 68
            },
            {
                "channel": 415,
                "count": 75
            },
            {
                "channel": 416,
                "count": 61
            },
            {
                "channel": 417,
                "count": 46
            },
            {
                "channel": 418,
                "count": 55
            },
            {
                "channel": 419,
                "count": 48
            },
            {
                "channel": 420,
                "count": 62
            },
            {
                "channel": 421,
                "count": 64
            },
            {
                "channel": 422,
                "count": 71
            },
            {
                "channel": 423,
                "count": 65
            },
            {
                "channel": 424,
                "count": 50
            },
            {
                "channel": 425,
                "count": 52
            },
            {
                "channel": 426,
                "count": 71
            },
            {
                "channel": 427,
                "count": 43
            },
            {
                "channel": 428,
                "count": 57
            },
            {
                "channel": 429,
                "count": 65
            },
            {
                "channel": 430,
                "count": 47
            },
            {
                "channel": 431,
                "count": 56
            },
            {
                "channel": 432,
                "count": 42
            },
            {
                "channel": 433,
                "count": 45
            },
            {
                "channel": 434,
                "count": 53
            },
            {
                "channel": 435,
                "count": 58
            },
            {
                "channel": 436,
                "count": 56
            },
            {
                "channel": 437,
                "count": 60
            },
            {
                "channel": 438,
                "count": 61
            },
            {
                "channel": 439,
                "count": 50
            },
            {
                "channel": 440,
                "count": 52
            },
            {
                "channel": 441,
                "count": 44
            },
            {
                "channel": 442,
                "count": 52
            },
            {
                "channel": 443,
                "count": 55
            },
            {
                "channel": 444,
                "count": 34
            },
            {
                "channel": 445,
                "count": 8
            },
            {
                "channel": 446,
                "count": 10
            },
            {
                "channel": 447,
                "count": 68
            },
            {
                "channel": 448,
                "count": 43
            },
            {
                "channel": 449,
                "count": 58
            },
            {
                "channel": 450,
                "count": 60
            },
            {
                "channel": 451,
                "count": 55
            },
            {
                "channel": 452,
                "count": 51
            },
            {
                "channel": 453,
                "count": 60
            },
            {
                "channel": 454,
                "count": 43
            },
            {
                "channel": 455,
                "count": 57
            },
            {
                "channel": 456,
                "count": 48
            },
            {
                "channel": 457,
                "count": 24
            },
            {
                "channel": 458,
                "count": 49
            },
            {
                "channel": 460,
                "count": 16
            },
            {
                "channel": 461,
                "count": 63
            },
            {
                "channel": 462,
                "count": 64
            },
            {
                "channel": 463,
                "count": 66
            },
            {
                "channel": 464,
                "count": 42
            },
            {
                "channel": 465,
                "count": 34
            },
            {
                "channel": 466,
                "count": 53
            },
            {
                "channel": 468,
                "count": 50
            },
            {
                "channel": 469,
                "count": 23
            },
            {
                "channel": 470,
                "count": 50
            },
            {
                "channel": 471,
                "count": 65
            },
            {
                "channel": 472,
                "count": 52
            },
            {
                "channel": 473,
                "count": 50
            },
            {
                "channel": 475,
                "count": 40
            },
            {
                "channel": 476,
                "count": 49
            },
            {
                "channel": 477,
                "count": 50
            },
            {
                "channel": 478,
                "count": 62
            },
            {
                "channel": 479,
                "count": 47
            },
            {
                "channel": 480,
                "count": 67
            },
            {
                "channel": 481,
                "count": 45
            },
            {
                "channel": 482,
                "count": 42
            },
            {
                "channel": 483,
                "count": 53
            },
            {
                "channel": 484,
                "count": 53
            },
            {
                "channel": 485,
                "count": 63
            },
            {
                "channel": 486,
                "count": 67
            },
            {
                "channel": 487,
                "count": 68
            },
            {
                "channel": 488,
                "count": 63
            },
            {
                "channel": 489,
                "count": 52
            },
            {
                "channel": 490,
                "count": 43
            },
            {
                "channel": 491,
                "count": 61
            },
            {
                "channel": 492,
                "count": 69
            },
            {
                "channel": 493,
                "count": 63
            },
            {
                "channel": 494,
                "count": 35
            },
            {
                "channel": 495,
                "count": 66
            },
            {
                "channel": 496,
                "count": 60
            },
            {
                "channel": 497,
                "count": 33
            },
            {
                "channel": 498,
                "count": 45
            },
            {
                "channel": 499,
                "count": 39
            },
            {
                "channel": 500,
                "count": 38
            },
            {
                "channel": 501,
                "count": 53
            },
            {
                "channel": 502,
                "count": 10
            },
            {
                "channel": 503,
                "count": 52
            },
            {
                "channel": 504,
                "count": 71
            },
            {
                "channel": 505,
                "count": 38
            },
            {
                "channel": 506,
                "count": 50
            },
            {
                "channel": 507,
                "count": 51
            },
            {
                "channel": 508,
                "count": 55
            },
            {
                "channel": 509,
                "count": 61
            },
            {
                "channel": 510,
                "count": 69
            },
            {
                "channel": 511,
                "count": 42
            },
            {
                "channel": 512,
                "count": 69
            }
        ],
        "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
        "segment_duration": 1380,
        "segment_number": 1,
        "segment_type": "guppy-acquisition",
        "software": {
            "analysis": "1d_basecalling",
            "name": "guppy-basecalling",
            "version": "4.0.14+8d3226e"
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
            "msg_id": "b208fd9a-7011-492f-8164-5730d1584df3",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-08-12T21:08:23Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    }
]