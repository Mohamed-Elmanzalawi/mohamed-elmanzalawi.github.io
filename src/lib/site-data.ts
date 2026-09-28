import publicationsData from "../../content/publications.json";
import presentationsData from "../../content/presentations.json";
import scholarshipsData from "../../content/scholarships.json";
import awardsData from "../../content/awards.json";
import cvTimelineData from "../../content/cv-timeline.json";

export const LINKEDIN_URL = "https://www.linkedin.com/in/mohamed-elmanzalawi/";
export const GITHUB_URL = "https://github.com/Mohamed-Elmanzalawi";

export type ProjectCategory =
  | "Genomics"
  | "Human Genetics"
  | "Microbial Genomics"
  | "Metagenomics"
  | "Data Science";

export type Project = {
  id: string;
  index: string;
  name: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  capabilities: string[];
  tech: string[];
  workflow?: string[];
  link?: { label: string; url: string };
  context?: string;
};

export const projects: Project[] = [
  {
    id: "dfast-qc",
    index: "01",
    name: "DFAST_QC",
    title: "Quality Assessment and Taxonomic Identification of Prokaryotic Genomes",
    category: "Microbial Genomics",
    categoryLabel: "Microbial Genomics / Bioinformatics",
    summary:
      "A high-speed tool for evaluating prokaryotic genome quality and taxonomic identity, querying genomic data against more than 20,000 reference genomes from type strains.",
    problem:
      "Assessing whether a newly assembled prokaryotic genome is complete, uncontaminated and correctly labelled taxonomically usually requires stitching together several slow, separate tools.",
    approach:
      "A single automated workflow that runs completeness and contamination checks and compares the query genome against a curated type-strain reference collection, exposed through both a command-line interface and a web interface.",
    outcome:
      "Genome assessment and taxonomic identification happen in one reproducible step, making routine quality control practical for large batches of microbial genomes.",
    capabilities: [
      "Genome quality assessment",
      "Taxonomic identification",
      "Large-scale reference genome comparison",
      "Automated bioinformatics analysis",
      "Web and command-line usability",
    ],
    tech: ["Python", "Bioinformatics", "Microbial genomics", "Genome databases"],
    workflow: ["Genome", "Quality assessment", "Reference comparison", "Taxonomic identification"],
    context: "Developed as a major project during my master's research at SOKENDAI.",
  },
  {
    id: "sapp",
    index: "02",
    name: "SAPP",
    title: "Short-read Analysis Pipeline for Pathogenic Variants",
    category: "Human Genetics",
    categoryLabel: "Human Genetics / Variant Analysis",
    summary:
      "A high-performance, HPC-compatible pipeline designed for short-read sequencing analysis and pathogenic variant identification.",
    problem:
      "Short-read variant analysis involves many chained tools whose behaviour and scheduling differ between compute clusters, which makes runs hard to reproduce.",
    approach:
      "An end-to-end pipeline covering QC through annotation, written to run identically under different HPC schedulers with reproducible configuration.",
    outcome:
      "Validated and optimised for both Sun Grid Engine (SGE) and Slurm environments, so the same analysis scales from a single sample to cluster-scale cohorts.",
    capabilities: [
      "Short-read sequencing analysis",
      "Variant detection",
      "Pathogenic variant identification",
      "HPC execution",
      "Reproducible workflows",
      "Scalable analysis",
    ],
    tech: ["Python", "Bash", "HPC", "Genomic variant analysis", "SGE", "Slurm"],
    workflow: [
      "FASTQ",
      "QC",
      "Alignment",
      "Variant calling",
      "Annotation",
      "Candidate variants",
    ],
    link: { label: "View on GitHub", url: "https://github.com/Mohamed-Elmanzalawi/SAPP" },
  },
  {
    id: "polar-fungi",
    index: "03",
    name: "Polar Fungi Database",
    title: "Polar Fungi Genome Database",
    category: "Genomics",
    categoryLabel: "Genomic Databases / Comparative Genomics",
    summary:
      "A specialised database and comparative platform for exploring fungal genomes from polar environments.",
    problem:
      "Genomic resources for polar fungi are fragmented across sources, which makes systematic exploration and cross-genome comparison difficult.",
    approach:
      "An integrated database with a comparison interface that places genomes side by side and surfaces shared genomic features and annotations.",
    outcome:
      "A single environment for genome exploration and comparative genomics of polar fungal genomes.",
    capabilities: [
      "Polar fungal genomes",
      "Genome exploration",
      "Comparative genomics",
      "Shared genomic features",
      "Biological data visualization",
    ],
    tech: ["Genomic databases", "Comparative genomics", "Python", "Data visualization"],
  },
  {
    id: "parkinsons-metagenomics",
    index: "04",
    name: "Parkinson's Metagenomics",
    title: "Metagenomic Analysis of Parkinson's Disease",
    category: "Metagenomics",
    categoryLabel: "Metagenomics / Statistical Analysis / Machine Learning",
    summary:
      "Analysis of metagenomic relative-abundance data from Parkinson's disease and healthy-control cohorts using R and Python-based statistical approaches.",
    problem:
      "Relative-abundance metagenomic data is compositional, sparse and high-dimensional, which makes naive comparisons between cohorts unreliable.",
    approach:
      "Statistical modelling of microbial abundance profiles combined with machine-learning approaches and dedicated visualisations of cohort differences.",
    outcome:
      "A reproducible analysis framework for comparing microbial community profiles between disease and control cohorts.",
    capabilities: [
      "Microbial abundance analysis",
      "Disease-associated microbial patterns",
      "Statistical modeling",
      "Data visualization",
      "Machine learning",
    ],
    tech: ["R", "Python", "Statistical analysis", "Machine learning", "Metagenomics"],
  },
  {
    id: "organ-age-proteomics",
    index: "05",
    name: "Organ Age & Proteomics",
    title: "Proteomic Analysis of Organ Age Associations",
    category: "Data Science",
    categoryLabel: "Proteomics / Data Science / Biological Aging",
    summary:
      "Analysis of high-dimensional proteomic data to investigate associations between organ-age estimates and biological phenotypes.",
    problem:
      "Proteomic datasets carry thousands of correlated measurements per sample, so linking organ-age estimates to phenotypes requires careful statistical handling.",
    approach:
      "Statistical modelling and computational analysis of high-dimensional proteomic measurements alongside organ-age estimates.",
    outcome:
      "A structured analytical workflow for exploring organ-age and phenotype relationships in proteomic data.",
    capabilities: [
      "High-dimensional data analysis",
      "Statistical modeling",
      "Proteomic data processing",
      "Machine learning",
    ],
    tech: ["Python", "R", "Statistical modeling", "Proteomics", "Machine learning"],
  },
  {
    id: "genomic-pipelines",
    index: "06",
    name: "Genomic Data Analysis",
    title: "Genomic Data Analysis & Research Pipelines",
    category: "Genomics",
    categoryLabel: "Genomics / Research Engineering",
    summary:
      "A broader body of work covering the analysis pipelines and data engineering behind large-scale biological datasets.",
    problem:
      "Research questions across genomics repeatedly need the same foundations: clean data handling, scalable execution and reproducible analysis.",
    approach:
      "Reusable pipeline components for sequencing analysis, variant workflows, phylogenetics and clustering, applied across microbial and human datasets.",
    outcome:
      "A consistent computational toolkit that shortens the path from raw sequencing data to interpretable results.",
    capabilities: [
      "High-throughput sequencing",
      "Variant analysis",
      "Microbial genomics",
      "Genomic databases",
      "Phylogenetics",
      "Clustering",
      "Large-scale biological datasets",
    ],
    tech: ["Python", "R", "Bash", "Linux", "HPC"],
  },
];

export const projectFilters = [
  "All",
  "Genomics",
  "Human Genetics",
  "Microbial Genomics",
  "Metagenomics",
  "Data Science",
] as const;

export type Publication = {
  year: string;
  authors: string;
  highlight: string;
  title: string;
  venue: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = publicationsData;

export type Presentation = {
  type: "Oral" | "Poster";
  year: string;
  title: string;
  event: string;
  location: string;
  date: string;
  link?: { label: string; url: string };
};

export const presentations: Presentation[] = presentationsData as Presentation[];

export type Recognition = {
  title: string;
  date: string;
  body: string;
  url?: string;
};

export const scholarships: Recognition[] = scholarshipsData;

export const awards: Recognition[] = awardsData;

export type CvTimelineEntry = {
  period: string;
  title: string;
  body: string;
  points: string[];
};

export const cvTimeline: CvTimelineEntry[] = cvTimelineData;

export const affiliationLinks = [
  { label: "ROIS – National Institute of Genetics", url: "https://www.nig.ac.jp/nig/" },
  { label: "SOKENDAI – The Graduate University for Advanced Studies", url: "https://www.soken.ac.jp/en/" },
  { label: "Nile University", url: "https://nu.edu.eg/" },
  { label: "Faculty of Pharmacy, Cairo University", url: "https://www.pharma.cu.edu.eg/" },
  { label: "Cairo University", url: "https://cu.edu.eg/Home" },
  { label: "Nakamura Lab (Yasukazu Nakamura)", url: "http://ynlab.info/" },
];
