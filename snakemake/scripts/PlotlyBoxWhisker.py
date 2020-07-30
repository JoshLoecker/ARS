import pandas as pd
import plotly.express as px


# master_csv_file_path = snakemake.input
# save_location = snakemake.output

master_csv_file_path = "/Users/joshl/PycharmProjects/ARS/Results/CountReads/master.data.set.csv"
save_location = "/Users/joshl/PycharmProjects/ARS/Results/Visuals/Plotly/plotly.box.whisker.html"

# create a data set of the master csv file
data_frame = pd.read_csv(filepath_or_buffer=master_csv_file_path,
                         header=0,
                         delimiter="\t")

# create a box plot
box_plot = px.box(data_frame, x="process", y="reads")
box_plot.show()
