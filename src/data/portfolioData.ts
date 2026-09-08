import { Certificate, InterestArea, Project, SkillCategory, TimelineEvent } from '../types';

export const PERSONAL_INFO = {
  name: 'Harpreet T Gowda',
  title: 'AI & DATA SCIENCE STUDENT',
  university: 'REVA University',
  degree: 'B.Tech – Artificial Intelligence & Data Science',
  batch: '2023 — 2027',
  semester: 'YEAR II — SEMESTER III',
  cgpa: '9.1',
  cgpaPeriod: 'CGPA — 2ND SEMESTER',
  cgpaDescription:
    'Reflects verified academic performance across core mathematical foundations, programming paradigms, and engineering laboratory practicals.',
  location: 'Bengaluru, Karnataka',
  email: 'harpreettgowda2007@gmail.com',
  phone: '+91 99027 08299',
  githubUrl: 'https://github.com/Harp2007',
  githubUsername: 'Harp2007',
  linkedinUrl: 'https://www.linkedin.com/in/harpreet-t-gowda-6787a2299/',
  monogramLogo:
    'https://lh3.googleusercontent.com/aida/AEtjO1UHIjnC1qYqKPLJPLdM6Tey1ZdHPy9XL20ZKSHg-Cdcfn1p7lDsk6eIvERxd7e6cF3Mk-wVe3qUnHBXRdwXBoqBT9z3g5uYodovKMi9jMP8CQlwSQJiu-Z_EtgeNU_JtxZMHYfgdUNoj-LxU1qnBFsX87vcZ5QSO7I51uRo2_Khbh3YLr6wU5M39zIlOD3AURz5gGh27p9LwYu4AIddT98_euiwn47V5bcPfcOR3gqWWcnkqBnMt28qHhZ1',
  intro:
    'Second-year Artificial Intelligence & Data Science student at REVA University, focused on programming, problem solving, practical projects, and exploring AI and Data Science.',
  aboutP1:
    'I am Harpreet T Gowda, a second-year Artificial Intelligence & Data Science student at REVA University. I enjoy programming and building practical projects to improve my technical and problem-solving skills.',
  aboutP2:
    'Python is currently my strongest programming language, and I also have experience with C. I have explored the basics of Python-based data analysis, Artificial Intelligence, and Data Science. Currently, I am focusing on strengthening my programming fundamentals, learning Data Structures and Algorithms, and exploring Software Development.',
  careerObjective:
    '“To become a skilled Software Developer and build strong technical expertise through programming, problem solving, and practical projects while continuing to explore Artificial Intelligence and Data Science.”',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROGRAMMING',
    code: '// 01',
    subtitle: 'CORE SYNTAX & ARCHITECTURE',
    items: [
      { name: 'PYTHON', status: 'ACTIVE' },
      { name: 'C', status: 'ACTIVE' },
    ],
  },
  {
    title: 'AI & DATA',
    code: '// 02',
    subtitle: 'APPLIED CONCEPTS & MODELS',
    items: [
      { name: 'Python Data Analysis', status: 'EXPLORING' },
      { name: 'AI Fundamentals', status: 'EXPLORING' },
      { name: 'Data Science Fundamentals', status: 'EXPLORING' },
    ],
  },
  {
    title: 'CURRENTLY LEARNING',
    code: '// 03',
    subtitle: 'TECHNICAL REFINEMENT',
    items: [
      { name: 'Data Structures & Algorithms', status: 'LEARNING' },
      { name: 'Software Development', status: 'LEARNING' },
      { name: 'Problem Solving', status: 'LEARNING' },
    ],
  },
];

export const INTEREST_AREAS: InterestArea[] = [
  {
    id: '01',
    title: 'SOFTWARE DEVELOPMENT',
    description: 'Architecting robust, scalable software and practical systems.',
  },
  {
    id: '02',
    title: 'PYTHON',
    description: 'Primary language for scripting, problem solving, and analytical pipelines.',
  },
  {
    id: '03',
    title: 'C PROGRAMMING',
    description: 'Low-level understanding of memory, pointers, and computational efficiency.',
  },
  {
    id: '04',
    title: 'DATA STRUCTURES & ALGORITHMS',
    description: 'Core focus on algorithmic complexity and optimal problem solving.',
  },
  {
    id: '05',
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Exploring machine learning foundations and intelligent computing.',
  },
  {
    id: '06',
    title: 'DATA SCIENCE',
    description: 'Transforming datasets into actionable computational insights.',
  },
  {
    id: '07',
    title: 'PROBLEM SOLVING',
    description:
      'Continuous refinement of logical reasoning, test case analysis, and mathematical coding challenges across algorithmic domains.',
  },
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'cert-1',
    recordId: 'RECORD ID: PY-0941',
    title: 'PYTHON PROGRAMMING CERTIFICATION',
    issuer: 'Authorized Certification Body',
    credentialId: 'Verified Academic Record',
    verificationDetails:
      'Verified Academic Record — Python Fundamentals, Modular Functions, OOP Principles, Exception Handling, File I/O, and Core Syntax Architecture.',
    date: 'Academic Term 2023 - 2024',
    skills: ['Python 3.x', 'Data Structures', 'OOP', 'Algorithm Design'],
  },
  {
    id: 'cert-2',
    recordId: 'RECORD ID: DA-1082',
    title: 'PYTHON FOR DATA ANALYSIS',
    issuer: 'Technical Certification',
    credentialId: 'Coursework Completed',
    verificationDetails:
      'Coursework Completed — Exploratory Data Analysis (EDA), NumPy Vectorization, Pandas DataFrames Manipulation, Matplotlib/Seaborn Visualization, and Tabular Processing.',
    date: 'Academic Term 2024',
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Analysis'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    code: '// PROJECT 01',
    tags: 'PYTHON / C',
    title: 'PROGRAMMING PROJECTS',
    description:
      'Completed programming projects using Python and C to strengthen programming and problem-solving skills.',
    githubUrl: 'https://github.com/Harp2007',
    details: {
      overview:
        'Focused repositories demonstrating fundamental algorithm implementation in C (pointers, memory management, sorting algorithms) and automated scripts in Python.',
      highlights: [
        'Direct pointer manipulation and structural memory layouts in C',
        'Command-line automation utilities in Python',
        'Implementation of searching, sorting, and recursion benchmarks',
      ],
      technologies: ['C', 'Python 3', 'GCC Compiler', 'CLI Tooling'],
    },
  },
  {
    id: 'proj-2',
    code: '// PROJECT 02',
    tags: 'DATA PIPELINES',
    title: 'PYTHON DATA ANALYSIS',
    description:
      'Worked on Python-based data analysis and applications while exploring practical applications of data.',
    githubUrl: 'https://github.com/Harp2007',
    details: {
      overview:
        'Comprehensive analytical notebooks processing structured datasets, performing statistical aggregations, handling missing data distributions, and generating visual trends.',
      highlights: [
        'Data cleaning and preparation workflows with Pandas',
        'Statistical distribution analysis and numerical arrays with NumPy',
        'Visualization pipelines for descriptive trend insights',
      ],
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebooks'],
    },
  },
  {
    id: 'proj-3',
    code: '// PROJECT 03',
    tags: 'SYSTEMS / WEB',
    title: 'PERSONAL PORTFOLIO',
    description:
      'Built a personal portfolio website to showcase skills, projects, and development work.',
    githubUrl: 'https://github.com/Harp2007',
    details: {
      overview:
        'Technical, minimalist developer portfolio engineered with editorial restraint, typographic hierarchy, responsive dark-mode aesthetics, and structured technical data display.',
      highlights: [
        'Strict monospace technical annotation system',
        'Modular architecture with component encapsulation',
        'Integrated certificate validation & interactive resume preview',
      ],
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    step: '01',
    title: 'B.TECH',
    description: 'Started B.Tech in Artificial Intelligence & Data Science at REVA University.',
    status: 'completed',
  },
  {
    step: '02',
    title: 'PROGRAMMING',
    description: 'Developed programming projects using Python and C to build practical competence.',
    status: 'completed',
  },
  {
    step: '03',
    title: 'DATA',
    description: 'Explored Python-based data analysis and computational applications.',
    status: 'completed',
  },
  {
    step: '04',
    title: 'DSA',
    description: 'Started learning Data Structures & Algorithms for systematic problem solving.',
    status: 'completed',
  },
  {
    step: '05',
    title: 'NEXT',
    description: 'Continuing to explore Software Development, AI, and Data Science.',
    status: 'active',
  },
];
