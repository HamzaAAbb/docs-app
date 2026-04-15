# How to access INPT HPC Cluster?

---

## How to access INPT HPC Cluster?

### For MacOS/Linux Users:

You can use the terminal shell and simply type:

```bash
ssh username@login1.inpt.ac.ma
```

Or

```bash
ssh username@login2.inpt.ac.ma
```

Then enter your account login password.

***This is a picture** — a macOS terminal application icon.*

---

### For Windows Users:

You need to install a SSH Client to be used.

MobaXterm is preferred. Download it from the link below:
[https://mobaxterm.mobatek.net](https://mobaxterm.mobatek.net)

***This is a picture** — a screenshot of the MobaXterm website and its terminal interface showing an active SSH session.*

---

### Download MobaXterm:

Choose **Home Edition** then press **Download now**.

***This is a picture** — a screenshot of the MobaXterm download page showing the Home Edition (Free) and Professional Edition ($69/49€ per user) options.*

---

### Download MobaXterm:

The **Portable edition** is preferred.

***This is a picture** — a screenshot of the MobaXterm Home Edition download page highlighting the Portable edition button.*

---

### Download MobaXterm:

- Click **Session** then choose **SSH**
- Fill **Remote Host** with one of the login nodes IP address or hostname
- Then you will be requested to enter your **username** and **login password**

***This is a picture** — a screenshot of MobaXterm's Session Settings dialog with SSH selected and the Remote Host field visible.*

---

## Quick Tour on your account

---

## Home Directory

Once you logged in, you will be in your home directory `/home/$USER`

`pwd` : command to show the current directory

```bash
[mdx01@login1 ~]$ pwd
/home/mdx01
[mdx01@login1 ~]$
```

- 25GB storage quota
- Best use is to save your source codes, scripts, results etc.
- **Never run your program in login nodes**

---

## Application Settings (environment modules)

First: Access all the shared application modules:

```bash
module use /app/common/modules
```

To list all available modules (compilers/software packages):

```bash
module avail
```

***This is a picture** — a terminal screenshot showing the output of `module avail`, listing available modules such as anaconda3-2024.10, compiler, debugger, mpi, vtune, and others.*

---

To load a module:

```bash
module load <module name>
```

To list the current loaded modules:

```bash
module list
```

```bash
[mdx01@login1 ~]$ module load anaconda3-2024.10
[mdx01@login1 ~]$ module list
Currently Loaded Modulefiles:
  1) anaconda3-2024.10
```

---

To unload a specific module:

```bash
module unload <module name>
```

To unload all the loaded modules:

```bash
module purge
```

```bash
[mdx01@login1 ~]$ module purge
[mdx01@login1 ~]$ module list
No Modulefiles Currently Loaded.
```

---

## Anaconda Virtual Environments

**Step 1) Login to one of the Login nodes and load anaconda module**

```bash
module use /app/common/modules
module load anaconda3-2024.10
```

**Step 2) Create your environment and specify the python version**

```bash
conda create -n ENV_NAME python=3.x
```

**Step 3) Activate the environment**

```bash
source activate ENV_NAME
```

**Step 4) Install the packages you need for this environment (using conda or pip)**

```bash
conda install pandas
```

Or:

```bash
pip install pandas
```

---

## Best Practices

The jobs are running in batch mode, i.e. it will be submitted to one compute node and start working there. If the job fails, you have to correct the error and submit it again.

Before submitting your job:

- To avoid job failure due to any missing packages for your script, **write and run a small python script to make sure all the required packages are installed** before submitting your job.
- The compute nodes have no internet access. **Write and run a small script to download all the required datasets and models** before submitting your jobs.
- **Make sure in your PBS or python scripts, all the paths referring to data, models and/or other scripts are correct.**

---

## Best Practices

### DO NOT run any computing program on the login nodes

The Login nodes are used only to:

- Access the cluster and submit your jobs.
- Browse, upload, or download your files.
- Create anaconda environments and install required packages.

---

## Submitting your PBS Batch Job

**Template PBS script to run a python script**

```bash
#!/bin/bash
#PBS -N example01
#PBS -l select=1:ncpus=20:ngpus=1
#PBS -q gpu_1d

# Load required modules
module load /app/common/modules/anaconda3-2024.10

# Activate your virtual environment
source activate ENV_NAME

# change to working directory
cd $PBS_O_WORKDIR

# run your python script
python script_name.py
```

---

## PBS Common Commands

**Command to submit your PBS job**

```bash
qsub <Name of the script>
```

**Command to view submitted jobs**

```bash
qstat
```

**Command to delete job**

```bash
qdel <job id>
```

---

*Thanks*