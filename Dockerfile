# install guppy
FROM ubuntu:18.04 as guppy_installer

# specify and open a working directory
ARG INSTALL_DIR=/guppy
WORKDIR $INSTALL_DIR

# version number for guppy
ARG VERSION_NUMBER=4.0.14

# download and install guppy
RUN apt-get update && \
    apt-get install --yes wget && \
    echo Downloading ont_guppy && \
    cd $INSTALL_DIR && \
    wget -q https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy-cpu_${VERSION_NUMBER}_linux64.tar.gz && \
    # uncomment the following line to install the gpu version instead. The above line needs to be commented out
    # wget -q https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy_${VERSION_NUMBER}_linux64.tar.gz && \
    tar -xf ont-guppy*.tar.gz && \
    rm ont-guppy*.tar.gz


# get our conda environment running
FROM continuumio/miniconda3

# set a working directory
WORKDIR /pipeline

# create a volume to store data
VOLUME ["/results/", "/data_files/"]

# copy the guppy downloader from previous workspace
# copy our environment file into the container
COPY --from=guppy_installer /guppy/ /pipeline
COPY environment.yaml .

# install a necessary package for guppy_basecaller
RUN apt update && \
    apt install --yes libidn11 git && \
    git clone --branch snakemake https://github.com/JoshLoecker/ARS

# create a symlink from ont-guppy so it can be used anywhere
# move snakemake files around inside the container
# create our conda environment
RUN ln -s /pipeline/ont-guppy*/bin/guppy_aligner /usr/local/bin/guppy_aligner && \
    ln -s /pipeline/ont-guppy*/bin/guppy_barcoder /usr/local/bin/guppy_barcoder && \
    ln -s /pipeline/ont-guppy*/bin/guppy_basecall_server /usr/local/bin/guppy_basecall_server && \
    ln -s /pipeline/ont-guppy*/bin/guppy_basecaller /usr/local/bin/guppy_basecaller && \
    ln -s /pipeline/ont-guppy*/bin/guppy_basecaller_1d2 /usr/local/bin/guppy_basecaller_1d2 && \
    ln -s /pipeline/ont-guppy*/bin/guppy_basecaller_supervisor /usr/local/bin/guppy_basecaller_supervisor && \
    mv /pipeline/ARS/Snakefile /pipeline/ && \
    mv /pipeline/ARS/config.yaml /pipeline/ && \
    mv /pipeline/ARS/envs /pipeline/envs/ && \
    mv /pipeline/ARS/scripts /pipeline/scripts/ && \
    rm -r /pipeline/ARS/ && \
    conda env create -f environment.yaml && \
    conda update -n base -c defaults conda

# send logs to STDOUT and STDERR
RUN ln -sf  /dev/stdout /var/

# activate our new environment
SHELL ["conda", "run", "-n", "pipeline", "/bin/bash", "-c"]

# run the code contained in 'run_pipeline.py` when the `pipeline` environment is started
ENTRYPOINT ["conda", "run", "-n", "pipeline", "snakemake", "-j", "all"]
