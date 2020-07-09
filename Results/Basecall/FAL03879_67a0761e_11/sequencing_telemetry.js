[
    {
        "aggregation": "segment",
        "analysis_id": "3ee1edcf-922c-4042-81d4-713b16a21383",
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
                "mean": 9.53890323638916,
                "sum": 38155.61328125
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
                "mean": 86.8872222900391,
                "sum": 347548.875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.73662853240967,
                "sum": 38946.515625
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
            "cpu_threads_per_caller": "12",
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
            "quiet": "0",
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
            "msg_id": "cb5e30e3-9bb2-4f85-9540-c036e768f4f2",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-08T21:05:20Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "3ee1edcf-922c-4042-81d4-713b16a21383",
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
                "mean": 9.53890323638916,
                "sum": 38155.61328125
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
                "mean": 86.8872222900391,
                "sum": 347548.875
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.73662853240967,
                "sum": 38946.515625
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
            "cpu_threads_per_caller": "12",
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
            "quiet": "0",
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
            "msg_id": "8c635d02-3ede-4a11-862b-40ee830d63aa",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-08T21:05:20Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    }
]