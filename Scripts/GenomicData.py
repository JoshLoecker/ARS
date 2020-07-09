import csv
import os
from Global import Files


class GlobalGenomicFunctions:

    @staticmethod
    def write_header_row(primary_csv_path: str, unclassified_csv_path: str, header_line: str):
        """
        This class will be responsible for taking the input path and attempting to create a
            header row for the primary alignment and unclassified alignments
        If the files already exist, it will test if the first row is a header row.
        If this row is a header row, nothing will be done, otherwise it will create a header row

        Args:
            primary_csv_path (str): This is the exact path of the .csv file that will contain primary alignments
            unclassified_csv_path (str): This is the exact path of the .csv file that will contain unclassified alignments
            header_line (str): This is the line that should be tested for in the primary and unclassified alignment files
        """
        alignment_paths = [primary_csv_path, unclassified_csv_path]
        header_line = header_line
        write_header = [False, False]  # primary, unclassified
        read_lines = [[], []]  # primary, unclassified

        # open the primary alignment file
        for i in alignment_paths:
            try:
                open(i, 'r').close()
            except FileNotFoundError:
                open(i, 'w').close()

        # see if the file has a header row
        for i in range(len(alignment_paths)):
            with open(alignment_paths[i], 'r') as input_stream:
                first_line = input_stream.readline()

                # we have not found a line in the file, we must add one
                if header_line not in first_line:
                    write_header[i] = True

                    # we need to append the first line because the file cursor has been moved to the end of the line. If this is not done we will lose the first line
                    read_lines[i].append(first_line)

                    # read lines so they can be added back in
                    for line in input_stream:
                        read_lines[i].append(line)

        # only open the file for writing if we need to add a header line
        for i in range(len(write_header)):
            if write_header[i]:

                # if we need to write a header row, check if we should also add a newline to the end of the header row
                if header_line[-1] != "\n":
                    header_line += "\n"

                with open(alignment_paths[i], 'w') as output_stream:
                    output_stream.write(header_line)
                    for line in read_lines[i]:
                        output_stream.write(line)

    @staticmethod
    def write_alignment_to_csv(alignment_csv_path: str, alignment_instances: list, alignment_tool: str):
        """
            This function will write alignment instances into the csv file path.
            It will write the alignment tool used at the end of each line
            This was made to reduce code duplicates between guppy and minimap, since they are doing the same thing
            Args:
                alignment_csv_path (str): This is the exact file path to be used for writing data (including file name)
                alignment_instances (list): This is the list of instances, consisting of MiniMapAlignmentData or GuppyAlignmentData
                alignment_tool (str): This is the tool used to make alignments. It should be `guppy` or `minimap`

            Returns: None
            """

        try:
            open(alignment_csv_path, 'r').close()
        except FileNotFoundError:
            csv_file_path = alignment_csv_path.split("/")[-1]  # collect everything except the file name
            csv_file_path = "/".join(csv_file_path)  # rejoin the new path so only the directories are made
            os.makedirs(csv_file_path)
            open(alignment_csv_path, 'w').close()

        # write data
        with open(alignment_csv_path, 'a') as output_stream:
            csv_writer = csv.writer(output_stream, delimiter='\t')
            for instance in alignment_instances:
                row = [instance.sequence_name,
                       instance.alignment_name,
                       instance.mapping_quality,
                       instance.alignment_score,
                       instance.per_base_divergence,
                       instance.row_index,
                       instance.file_path,
                       alignment_tool]
                csv_writer.writerow(row)

class MiniMapGenome:
    def __init__(self, input_directory: str, primary_csv_path: str, unclassified_csv_path: str):
        """

        This function will collect the genome, species, and subspecies from .csv files after they have been processed by guppy_aligner or MiniMap2
        The minimap2 results may not look like they are in a specified format; however, everything is delimited by a tab ('\t')
        Because of this, determining if specific tags are present can be (relatively) easily done.
        See the manual pages to determine which column tags fall into: https://lh3.github.io/minimap2/minimap2.html#10
            The tags are under the section "Output Format".

        Args:
            input_directory (str): This is the input csv files from guppy_aligner or MiniMap2
            primary_csv_path (str): This is the file path (including file name) where the primary alignment data should be saved
            unclassified_csv_path (str): This is the file path (including file name) where the unclassified alignment data should be savd
        """
        self.input_directory = input_directory
        self.primary_csv_path = primary_csv_path
        self.unclassified_csv_path = unclassified_csv_path
        self.file_paths = []
        self.primary_alignment_instances = []
        self.unclassified_alignment_instances = []
        self.number_of_files = 0

        self.__collect_file_paths()

        for file in self.file_paths:
            self.__find_alignments(input_file=file)

        # this wrapper function will write primary and unclassified alignments to their respective alignment files
        self.__write_alignments_to_csv()

    def __collect_file_paths(self):
        """
        This will use the Global.Files class to collect all files with a .csv file extension.
        It will save a list of file paths in self.file_paths
        It will place the total number of files in self.number_of_files
        Returns:

        """
        collect_files = Files(input_directory=self.input_directory, file_extensions=[".csv"])
        self.file_paths = collect_files.file_paths
        self.number_of_files = collect_files.total_files

    def __find_alignments(self, input_file):
        """
        This function will take the .csv files from self.file_paths and collect the primary alignments from them
        This uses the idea that the second column from minimap output will be a `0` if the sequence is primary.
            If this column contains a `0`, it will also check that the tag `tp:A:P` is listed in the row; this is to double check that the correct data is being pulled
        If any item does not appear to have content, the item is not present in this row
        Returns: None
        """

        with open(input_file, 'r') as input_stream:
            csv_reader = csv.reader(input_stream, delimiter='\t')


            # this marks what row in the csv file the alignment was found at
            primary_index = 1
            unclassified_index = 1

            for line in csv_reader:

                # we aren't interested in the top header/tag lines that are in the MiniMap .csv files
                # `line` is in the following format: ['@SQ', 'SOME DATA', 'SOME MORE DATA']
                # we are accessing the first character of the first item (index 0) in `line` (i.e. the `@` symbol)
                if line[0][0] != "@":

                    # we want to try to collect the following data
                    # if we cannot get it from this line, we want to go to the next one using `continue`
                    try:
                        sequence_name = line[0]
                        alignment_name = line[2]
                        mapping_quality = int(line[4])
                        alignment_score = line[13]
                        per_base_divergence = line[19]

                        minimap_instance = self.MiniMapAlignmentData(
                            file_path=input_file,
                            row_index=primary_index,
                            sequence_name=sequence_name,
                            alignment_name=alignment_name,
                            mapping_quality=mapping_quality,
                            alignment_score=alignment_score,
                            per_base_divergence=per_base_divergence
                        )
                    except IndexError:
                        continue

                    # match primary alignments here
                    if line[1] == "0" and line[15] == "tp:A:P":
                        self.primary_alignment_instances.append(minimap_instance)

                    # match unclassified alignments here
                    elif line[1] == "512":
                        self.unclassified_alignment_instances.append(minimap_instance)
                primary_index += 1
                unclassified_index += 1

    def __write_alignments_to_csv(self):
        """
        This is a wrapper function for writing alignment instances
        Returns: None
        """

        # write primary alignments
        GlobalGenomicFunctions.write_alignment_to_csv(alignment_csv_path=self.primary_csv_path,
                                                      alignment_instances=self.primary_alignment_instances,
                                                      alignment_tool="minimap")

        # write unclassified alignments
        GlobalGenomicFunctions.write_alignment_to_csv(alignment_csv_path=self.unclassified_csv_path,
                                                      alignment_instances=self.unclassified_alignment_instances,
                                                      alignment_tool="minimap")


    class MiniMapAlignmentData:
        def __init__(self, file_path: str, row_index: int, sequence_name: str, alignment_name: str, mapping_quality: int, alignment_score: str, per_base_divergence: str):
            """
            This class will simply be used to hold data about each row that is a primary alignments.

            This data will be added to a list of instances within the MiniMapGenome class; this will be written to a csv file

            Args:
                file_path (str): This is the path of the input file
                row_index (int): This is the row index that is being appended
                sequence_name (str):  The name of the sequence (read_id)
                alignment_name (str): The name of the alignments/species that was aligned
                mapping_quality (int): A value indicating the quality of mapping
                alignment_score (str):  A value indicating the quality of alignments (matches needleman-wunsch alignments score)
                per_base_divergence (str):  A value depicting how far the sequence has diverged
            """
            self.file_path = file_path
            self.row_index = row_index
            self.sequence_name = sequence_name
            self.alignment_name = alignment_name
            self.mapping_quality = mapping_quality
            self.alignment_score = alignment_score
            self.per_base_divergence = per_base_divergence


class GuppyGenome:
    def __init__(self, input_directory: str, primary_csv_path: str, unclassified_csv_path: str):
        """
        This class will be responsible for collecting data from the guppy_aligner SAM files and appending them to the csv file found  in the guppy_aligner parent folder.
        It will collect the following data:
            File path of the SAM file
            Row that the primary alignment was found in the file
            Name of the sequence
            Name of the alignment (species)
            Quality of the mapping
            Alignment score
            Per base divergence (or a similar statistic)

        Args:
            input_directory (str): This is the directory containing SAM files to be analyzed
            primary_csv_path (str): This is the file path where the primary alignment data should be stored
            unclassified_csv_path (str): This is the file path where the unclassified alignment data should be stored
        """

        self.input_directory = input_directory
        self.primary_csv_path = primary_csv_path
        self.unclassified_csv_path = unclassified_csv_path
        self.primary_alignment_instances = []
        self.unclassified_alignment_instances = []
        self.file_paths = []
        self.total_files = 0

        self.__collect_file_paths()

        for file in self.file_paths:
            self.__find_alignments(input_file=file)

        self.__write_alignments_to_csv()


    def __collect_file_paths(self):
        collect_files = Files(input_directory=self.input_directory,
                              file_extensions=['.sam'])
        self.file_paths = collect_files.file_paths
        self.total_files = collect_files.total_files

    def __find_alignments(self, input_file):
        """
        This method will iterate through each file in self.file_paths
        It will collect primary and unclassified alignments based on if data is present
        Returns: None
        """
        with open(input_file, 'r') as input_stream:
            csv_reader = csv.reader(input_stream, delimiter='\t')

            # this marks what row in the csv file the alignment was found at
            primary_index = 1
            unclassified_index = 1

            for line in csv_reader:

                # we aren't interested in any header tags that are present in the .sam files
                # `line` is in the following format: ['@SQ', 'SOME DATA', 'SOME MORE DATA']
                # we are accessing the first character of the first item (index 0) in `line` (i.e. the `@` symbol)
                if line[0][0] != "@":

                    # we want to try to collect the following data
                    # if we cannot get it from this line, go to the next one
                    try:
                        sequence_name = line[0]
                        alignment_name = line[2]
                        mapping_quality = int(line[4])
                        alignment_score = line[13]
                        per_base_divergence = line[19]

                        guppy_instance = self.GuppyAlignmentData(
                            file_path=input_file,
                            row_index=primary_index,
                            sequence_name=sequence_name,
                            alignment_name=alignment_name,
                            mapping_quality=mapping_quality,
                            alignment_score=alignment_score,
                            per_base_divergence=per_base_divergence
                        )
                    except IndexError:
                        continue

                    # match primary alignments here
                    if line[1] == "0" and line[15] == "tp:A:P":
                        self.primary_alignment_instances.append(guppy_instance)
                    # match unclassified reads here
                    elif line[1] == "512":
                        self.unclassified_alignment_instances.append(guppy_instance)
                primary_index += 1
                unclassified_index += 1

    def __write_alignments_to_csv(self):
        """
        This is a wrapper function for writing alignment instances of GuppyAlignmentData

        Returns: None
        """

        # write primary alignments
        GlobalGenomicFunctions.write_alignment_to_csv(alignment_csv_path=self.primary_csv_path,
                                                      alignment_instances=self.primary_alignment_instances,
                                                      alignment_tool="guppy")

        # write unclassified alignments
        GlobalGenomicFunctions.write_alignment_to_csv(alignment_csv_path=self.unclassified_csv_path,
                                                      alignment_instances=self.unclassified_alignment_instances,
                                                      alignment_tool="guppy")


    class GuppyAlignmentData:
        def __init__(self, file_path: str, row_index: int, sequence_name: str, alignment_name: str, mapping_quality: int, alignment_score: str, per_base_divergence: str):
            """
            This class will create an instance that can be used to write to a file

            Args:
                file_path (str): This is the path to the file that data is being collected from
                row_index (int): This is the row that the data was found in
                sequence_name (str): This is the species name that was collected (or not collected in the case of unclassified reads)
                alignment_name (str): This is the read_id of the alignment
                mapping_quality (int): This indicates the quality of the alignment mapping
                alignment_score (str):  A value indicating the quality of alignments (matches needleman-wunsch alignments score)
                per_base_divergence (str):  A value depicting how far the sequence has diverged
            """
            self.file_path = file_path
            self.row_index = row_index
            self.sequence_name = sequence_name
            self.alignment_name = alignment_name
            self.mapping_quality = mapping_quality
            self.alignment_score = alignment_score
            self.per_base_divergence = per_base_divergence


if __name__ == '__main__':
    try:
        minimap_input_directory = snakemake.input.minimap_input_directory
        guppy_input_directory = snakemake.input.guppy_input_directory
        primary_csv_path = snakemake.output.primary_csv_path
        unclassified_csv_path = snakemake.output.unclassified_csv_path
        header_line = snakemake.params.header_line

    except NameError:
        minimap_input_directory = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/minimap/"
        guppy_input_directory = "/Users/joshl/Downloads/ARS/Results/Alignments/guppy/SAM_Files"
        primary_csv_path = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/collated_primary_alignment_data.csv"
        unclassified_csv_path = "/Users/joshl/PycharmProjects/ARS/Results/Alignments/collated_unclassified_alignment_data.csv"
        header_line = "read_id\talignment_genome\tquality_score\talignment_score\tper_base_divergence\tbarcode_number\tinput_file\talignment_tool"

    GlobalGenomicFunctions.write_header_row(primary_csv_path=primary_csv_path, unclassified_csv_path=unclassified_csv_path, header_line=header_line)
    MiniMapGenome(input_directory=minimap_input_directory, primary_csv_path=primary_csv_path, unclassified_csv_path=unclassified_csv_path)
    GuppyGenome(input_directory=guppy_input_directory, primary_csv_path=primary_csv_path, unclassified_csv_path=unclassified_csv_path)

