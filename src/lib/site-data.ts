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

export const publications: Publication[] = [
  {
    year: "2025",
    authors:
      "Mohamed Elmanzalawi, Takatomo Fujisawa, Hiroshi Mori, Yasukazu Nakamura, Yasuhiro Tanizawa",
    highlight: "Mohamed Elmanzalawi",
    title: "DFAST_QC: quality assessment and taxonomic identification tool for prokaryotic genomes",
    venue: "BMC Bioinformatics 26, 3 (2025)",
    links: [
      { label: "Research article", url: "https://doi.org/10.1186/s12859-024-06030-y" },
      { label: "Code", url: "https://github.com/nigyta/dfast_qc" },
      { label: "Website", url: "https://dfast.ddbj.nig.ac.jp/dqc/submit/" },
    ],
  },
  {
    year: "2024",
    authors:
      "Adele Mazzoleni, Wireko Andrew Awuah, Vivek Sanker, Hareesha Rishab Bharadwaj, Nicholas Aderinto, Joecelyn Kirani Tan, Helen Ye Rim Huang, Jeisun Poornaselvan, Muhammad Hamza Shah, Oday Atallah, Aya Tawfik, Mohamed Elsayed Abdelmeguid Elsayed Elmanzalawi, Sama Hesham Ghozlan, Toufik Abdul-Rahman, Jeremiah Adepoju Moyondafoluwa, Athanasios Alexiou, Marios Papadakis",
    highlight: "Mohamed Elsayed Abdelmeguid Elsayed Elmanzalawi",
    title: "Chromosomal instability: a key driver in glioma pathogenesis and progression",
    venue: "European Journal of Medical Research, Article number: 451 (2024)",
    links: [{ label: "Research article", url: "https://doi.org/10.1186/s40001-024-02043-8" }],
  },
];

export type Presentation = {
  type: "Oral" | "Poster";
  year: string;
  title: string;
  event: string;
  location: string;
  date: string;
  link?: { label: string; url: string };
};

export const presentations: Presentation[] = [
  {
    type: "Oral",
    year: "2025",
    title: "Ultrafast Identification of Species from Their Genomes",
    event: "The 22nd CJK Bioinformatics Conference",
    location: "Shanghai, China",
    date: "6–9 Nov 2025",
    link: { label: "Agenda", url: "https://drive.google.com/file/d/1qv94u12fT0BSETyWow9DwABxHEqSvzZM/view?usp=sharing" },
  },
  {
    type: "Oral",
    year: "2025",
    title:
      "User-oriented bioinformatics pipelines for microbial genome assessment and pathogenic variant analysis",
    event: "National Institute of Genetics — Master's defence (D2) progress presentation",
    location: "Mishima, Japan",
    date: "30 Jul 2025",
    link: { label: "Website", url: "https://www.nig.ac.jp/nig/research/seminer?id=1718" },
  },
  {
    type: "Oral",
    year: "2025",
    title: "Identification of rare pathogenic variants in patients with primary immune deficiency",
    event: "National Institute of Genetics — progress presentation",
    location: "Mishima, Japan",
    date: "27 Feb 2025",
    link: {
      label: "Website",
      url: "https://www.nig.ac.jp/nig/phd-program/courses-top/courses-at-the-department-of-genetics/poster",
    },
  },
  {
    type: "Oral",
    year: "2024",
    title: "DFAST_QC: quality assessment and taxonomic identification tool for prokaryotic genomes",
    event: "National Institute of Genetics — progress presentation",
    location: "Mishima, Japan",
    date: "28 Aug 2024",
    link: {
      label: "Website",
      url: "https://www.nig.ac.jp/nig/phd-program/courses-top/courses-at-the-department-of-genetics/poster",
    },
  },
  {
    type: "Poster",
    year: "2025",
    title: "SAPP: a flexible, scalable and reproducible pipeline for pathogenic variants detection",
    event: "The 22nd CJK Bioinformatics Conference",
    location: "Shanghai, China",
    date: "6–9 Nov 2025",
    link: { label: "Agenda", url: "https://drive.google.com/file/d/1qv94u12fT0BSETyWow9DwABxHEqSvzZM/view?usp=sharing" },
  },
  {
    type: "Poster",
    year: "2025",
    title: "Identification of rare pathogenic variants in patients with primary immune deficiency",
    event: "National Institute of Genetics — life science retreat",
    location: "Shizuoka, Japan",
    date: "3–4 Jul 2025",
    link: { label: "Agenda", url: "https://drive.google.com/file/d/1BjaKj5kg9OJLgUNAKFotRBVxzWLYNJVM/view?usp=sharing" },
  },
  {
    type: "Poster",
    year: "2025",
    title: "Identification of rare pathogenic variants in patients with primary immune deficiency",
    event: "National Institute of Genetics — progress presentation",
    location: "Mishima, Japan",
    date: "27 Feb 2025",
    link: {
      label: "Website",
      url: "https://www.nig.ac.jp/nig/phd-program/courses-top/courses-at-the-department-of-genetics/poster",
    },
  },
  {
    type: "Poster",
    year: "2025",
    title: "DFAST_QC: quality assessment and taxonomic identification tool for prokaryotic genomes",
    event: "National Institute of Genetics — life science retreat",
    location: "Minamitsuru, Japan",
    date: "16–17 Jan 2025",
    link: { label: "Agenda", url: "https://drive.google.com/file/d/1qXbASxGIhWvta9gAlpvBmn5_mOpIQoco/view?usp=sharing" },
  },
  {
    type: "Poster",
    year: "2024",
    title: "DFAST_QC: quality assessment and taxonomic identification tool for prokaryotic genomes",
    event: "International Symposium on Plasmid Biology 2024",
    location: "Hamamatsu, Japan",
    date: "2–6 Sep 2024",
    link: { label: "Website", url: "https://smartconf.jp/content/ispb2024/" },
  },
  {
    type: "Poster",
    year: "2024",
    title: "DFAST_QC: quality assessment and taxonomic identification tool for prokaryotic genomes",
    event: "National Institute of Genetics — progress presentation",
    location: "Mishima, Japan",
    date: "28 Aug 2024",
    link: {
      label: "Website",
      url: "https://www.nig.ac.jp/nig/phd-program/courses-top/courses-at-the-department-of-genetics/poster",
    },
  },
];

export type Recognition = {
  title: string;
  date: string;
  body: string;
  url?: string;
};

export const scholarships: Recognition[] = [
  {
    title: "Ministry of Education, Culture, Sports, Science and Technology (MEXT) Scholarship",
    date: "Jul. 2023",
    body: "One of 15 students out of 5,000+ (0.3%) applicants in Egypt to receive the MEXT scholarship to study in Japan.",
    url: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm",
  },
  {
    title: "NIG Global Scholar (NIG-GS) Scholarship",
    date: "Jun. 2023",
    body: "The only student out of 1,000+ (0.1%) applicants to receive the NIG Global Scholar scholarship to study at the National Institute of Genetics (NIG).",
    url: "https://www.nig.ac.jp/nig/phd-program/admissions-top/admissions/nig-gs",
  },
  {
    title: "Data Careers Unlocked x DataCamp Scholarship",
    date: "Jan. 2024",
    body: "Awarded one year of access to DataCamp's data science and analytics courses.",
    url: "https://datacareersunlocked.org/",
  },
];

export const awards: Recognition[] = [
  {
    title: "Hiroko Morishima Progress Award",
    date: "Aug. 2024",
    body: "Given by Dept. of Genetics (National Institute of Genetics), SOKENDAI, Japan, to students who demonstrate a strong commitment to research and outstanding performance.",
    url: "http://www.nig.ac.jp/nig/phd-program/main-page-top/various-aids-to-students/progress-award",
  },
  {
    title: "Best Intern Instructor Award",
    date: "Jul. 2024",
    body: "Given by Dept. of Genetics (National Institute of Genetics), SOKENDAI, Japan, to the instructor with the most outstanding guidance to their interns.",
    url: "https://www.nig.ac.jp/nig/research/seminer?id=1592",
  },
  {
    title: "NIGINTERN 2022 Research Internship Completion Award",
    date: "Jul. 2022",
    body: "Given by Dept. of Genetics (National Institute of Genetics), SOKENDAI, Japan, for successfully completing a prestigious research internship.",
  },
  {
    title: "NIGINTERN 2022 Awardee",
    date: "Feb. 2022",
    body: "One of 9 students out of 1,500+ (0.6%) applicants to receive a summer research internship, admitted under the Genome Informatics Laboratory working on large genome sequences in the DNA Data Bank of Japan (DDBJ).",
    url: "https://www.nig.ac.jp/jimu/soken/intern/2022/message/essay/essay_04.html",
  },
  {
    title: "Certificate of Appreciation",
    date: "Nov. 2022",
    body: "Given by Dr. Reem Emad, Director of Dar Al Salam Cancer Hospital, Egypt.",
  },
  {
    title: "Excellent Performance Award",
    date: "Feb. 2018",
    body: "Given by Dr. Omar Ahmed Taha Al Fahal, Pharmacy Manager, Madinat Zayed Hospital, UAE.",
  },
  {
    title: "Excellent Execution Award, Community Pharmacy Project",
    date: "Jun. 2017",
    body: "Given by Prof. Dr. Samar Farid, Head of the Department of Clinical Pharmacy, Faculty of Pharmacy, Cairo University.",
  },
  {
    title: "Most Passionate",
    date: "May 2016",
    body: "Given at the SCOPS Academy Clinical Workshop.",
  },
  {
    title: "Completion Certificate Student Award",
    date: "May 2014",
    body: "One of the top 10 high-school students in the Western District, UAE, given by the Abdullah Ali Al Hammadi Al Gharbiya Model School director.",
  },
];

export const affiliationLinks = [
  { label: "ROIS – National Institute of Genetics", url: "https://www.nig.ac.jp/nig/" },
  { label: "SOKENDAI – The Graduate University for Advanced Studies", url: "https://www.soken.ac.jp/en/" },
  { label: "Nile University", url: "https://nu.edu.eg/" },
  { label: "Faculty of Pharmacy, Cairo University", url: "https://www.pharma.cu.edu.eg/" },
  { label: "Cairo University", url: "https://cu.edu.eg/Home" },
  { label: "Nakamura Lab (Yasukazu Nakamura)", url: "http://ynlab.info/" },
];
