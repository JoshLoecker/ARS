[
    {
        "aggregation": "segment",
        "analysis_id": "fa12926d-6562-4ce6-8bec-8987403230b7",
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
                "mean": 9.48214244842529,
                "sum": 37928.5703125
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
                "mean": 81.1853713989258,
                "sum": 324741.5
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.35349178314209,
                "sum": 37413.96875
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
            "msg_id": "6a3104ba-b728-41c4-b9b9-0207e54913d5",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-10T17:29:50Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    },
    {
        "aggregation": "cumulative",
        "analysis_id": "fa12926d-6562-4ce6-8bec-8987403230b7",
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
                "mean": 9.48214244842529,
                "sum": 37928.5703125
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
                "mean": 81.1853713989258,
                "sum": 324741.5
            },
            "strand_sd_pa": {
                "count": 4000,
                "mean": 9.35349178314209,
                "sum": 37413.96875
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
        "segment_duration": 540,
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
            "msg_id": "853adc8d-23c3-4bf6-bad1-d4b2ba23aeaa",
            "operating_system": "ubuntu 18.04",
            "protocol_group_id": "CLC_2020-02-11",
            "protocol_run_id": "a68409f4-d536-4b68-b733-c3c4b5dd1551",
            "protocols_version": "4.3.12",
            "run_id": "67a0761ea992f55d7000e748e88761780ca1bb60",
            "sample_id": "SBGX_CLC",
            "time_stamp": "2020-07-10T17:29:50Z",
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#bulk#Auto",
            "version": "3.6.0"
        }
    }
]