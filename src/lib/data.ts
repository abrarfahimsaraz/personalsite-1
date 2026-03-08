// ============================================================
// Central data module — single source of truth for the portfolio
// All content derived from unified JSON profile (2026-03-06)
// ============================================================

export const personalInfo = {
  name: "Abrar Fahim",
  role: "Researcher & Engineer in AI, Power Systems, and Medical Imaging",
  email: "abrarfahim8@iut-dhaka.edu",
  phone: "+8801855891232",
  location: "Chattogram, Bangladesh",
  dob: "2001-06-10",
  nationality: "Bangladeshi",
  github: "https://github.com/abrarfahimsaraz",
  linkedin: "https://linkedin.com/in/abrarfahimsaraz",
  scholar: "https://scholar.google.com/citations?user=abrarfahim",
  cvUrl: "/CV.pdf",
  intro:
    "Electrical Engineering graduate with a strong foundation in power systems, energy modeling, and optimization. Experienced in deep learning, power systems optimization and several machine learning projects using MATLAB and Python. Current research interests include AC optimal power flow, and smart grid operation along with computer vision.",
  synthesized:
    "Abrar Fahim is a B.Sc. EEE graduate from Islamic University of Technology (CGPA 3.44/4.00) with strong expertise in machine learning, deep learning, and data analytics applied across power systems, healthcare, and cybersecurity. He currently works concurrently as Executive, Risk & Operational Analyst at NEXT Ventures — leading the FNmarkets brokerage launch and trading backend — and as a remote Data Scientist at Synnax Laboratory for financial forecasting. He has co-authored multiple IEEE and Springer conference publications.",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Projects", path: "/projects" },
  { label: "Trainings", path: "/trainings" },
  { label: "Certifications", path: "/certifications" },
  { label: "Miscellaneous", path: "/miscellaneous" },
  { label: "Contact", path: "/contact" },
];

// ─── Education ───────────────────────────────────────────────
export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  grade: string;
  thesis?: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    degree: "B.Sc. in Electrical & Electronic Engineering",
    institution: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    dates: "January 2020 – May 2024",
    grade: "CGPA 3.44 / 4.00",
    thesis:
      "Plasmonic Coupling & Thermal Effects on Photothermal Response of Randomly Distributed Nanoparticles",
    highlights: [
      "Presented thesis at the International Conference on Centennial Celebration of Bose-Einstein Statistics",
      "Active in IEEE, competitive programming, and departmental clubs",
    ],
  },
  {
    degree: "Higher Secondary Certificate (Science) — HSC",
    institution: "Chittagong College",
    location: "Chattogram, Bangladesh",
    dates: "June 2017 – June 2019",
    grade: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (Science) — SSC",
    institution: "Government Muslim High School",
    location: "Chattogram, Bangladesh",
    dates: "January 2012 – June 2017",
    grade: "GPA 5.00 / 5.00",
  },
];

// ─── Test Scores ─────────────────────────────────────────────
export interface TestScore {
  name: string;
  year: string;
  overall?: string;
  breakdown: { label: string; score: string; level?: string }[];
  certificateUrl?: string;
}

export const testScores: TestScore[] = [
  {
    name: "EFSET English Certificate",
    year: "2024",
    overall: "C2 Proficient",
    breakdown: [
      { label: "Reading", score: "80", level: "C2 Proficient" },
      { label: "Listening", score: "75", level: "C2 Proficient" },
      { label: "Writing", score: "97", level: "C2 Proficient" },
      { label: "Speaking", score: "81", level: "C2 Proficient" },
    ],
  },
  {
    name: "IELTS Academic",
    year: "2021",
    overall: "7.0",
    breakdown: [
      { label: "Listening", score: "8" },
      { label: "Reading", score: "7.5" },
      { label: "Writing", score: "6" },
      { label: "Speaking", score: "7" },
    ],
  },
  {
    name: "IELTS Academic",
    year: "2020",
    overall: "—",
    breakdown: [],
    certificateUrl: "/certificates/IELTS_2020.pdf",
  },
];

// ─── Research Papers ─────────────────────────────────────────
export type PaperStatus = "Published" | "Accepted" | "Under Review" | "In Preparation";

export interface ResearchPaper {
  id: string;
  title: string;
  venue: string;
  year: number;
  location?: string;
  authors?: string;
  status: PaperStatus;
  tags: string[];
  abstract: string;
  bullets: string[];
  doi?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "opf-comparative",
    title: "Comparative Analysis of Classical, Machine Learning, Deep Learning, and Metaheuristic Approaches for Optimal Power Flow",
    venue: "2nd IEEE ICEESI 2026",
    year: 2026,
    location: "India",
    status: "Under Review",
    tags: ["Power Systems", "Machine Learning", "Optimization"],
    abstract: "Conducted a unified comparative study of AC optimal power flow solved using classical OPF, Random Forest, DNN, and Particle Swarm Optimization on IEEE test systems.",
    bullets: [
      "Compared classical, ML, DL, and metaheuristic solvers for AC-OPF",
      "Benchmarked on standard IEEE test systems",
      "Evaluated convergence, accuracy, and computational cost",
    ],
  },
  {
    id: "solar-street-lighting",
    title: "Design and Implementation of a Solar Energy-Powered Smart Street Lighting Control System for Sustainable Urban Development in Bangladesh",
    venue: "IEEE IPRECON 2026",
    year: 2026,
    location: "Kerala, India",
    status: "Under Review",
    tags: ["Sustainable Energy", "IoT", "Smart Systems"],
    abstract: "Designed a solar-powered smart street lighting control system with automated energy management to reduce power consumption and support sustainable infrastructure in Bangladesh.",
    bullets: [
      "Integrated solar energy harvesting with automated control",
      "Reduced power consumption through smart scheduling",
      "Targeted sustainable urban infrastructure in Bangladesh",
    ],
  },
  {
    id: "sdn-intrusion",
    title: "Enhancing Intrusion Detection in SDNs Using Hybrid Feature Selection and XGBoost",
    venue: "Pending Submission",
    year: 2026,
    status: "In Preparation",
    tags: ["Cybersecurity", "Machine Learning", "SDN"],
    abstract: "Hybrid intrusion detection using XGBoost and CFS + RF-RFE feature selection on NSL-KDD dataset, achieving 99.97% accuracy.",
    bullets: [
      "Used CFS + RF-RFE hybrid feature selection",
      "Achieved 99.97% accuracy on NSL-KDD",
      "Targeted SDN security applications",
    ],
  },
  {
    id: "anemia-prediction",
    title: "Transparent and Accurate Anemia Prediction Through GA-Selected Features and Grid-Search Enhanced Decision Trees",
    venue: "Pending Submission",
    year: 2026,
    status: "In Preparation",
    tags: ["Healthcare AI", "Explainable AI"],
    abstract: "Interpretable anemia prediction model using GA-based feature selection with clinical transparency and explainability.",
    bullets: [
      "GA-based feature selection for clinical interpretability",
      "Grid-search optimized Decision Tree classifier",
      "Balanced accuracy with explainability",
    ],
  },
  {
    id: "colorectal-cancer",
    title: "Deep Learning Based Framework for Colorectal Cancer Using Histopathological Images",
    venue: "7th ICAIIC 2025",
    year: 2025,
    location: "Japan",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning"],
    abstract: "Modified MobileNetV2 classification framework achieving 99.95% accuracy on LC25000 dataset for colon cancer detection.",
    bullets: [
      "Advanced pre-processing pipeline for histopathological images",
      "Modified MobileNetV2 architecture",
      "99.95% accuracy on LC25000 dataset",
    ],
  },
  {
    id: "malware-detection",
    title: "Optimized Approaches to Malware Detection: A Study of Machine Learning and Deep Learning Techniques",
    venue: "14th IEEE CSNT 2025",
    year: 2025,
    location: "VIT Bhopal, India",
    status: "Published",
    tags: ["Cybersecurity", "Machine Learning", "Deep Learning"],
    abstract: "MLP, KNN, Logistic Regression, SVM, CNN, DNN, SVC, and Random Forest for malware detection with ~99.97% accuracy.",
    bullets: [
      "Compared MLP, KNN, LR, SVM for malware classification",
      "Optimized preprocessing pipeline",
      "99.97% accuracy with CNN/DNN/RF ensemble",
    ],
  },
  {
    id: "bone-fracture",
    title: "A Modified VGG19-Based Framework for Accurate and Interpretable Real-Time Bone Fracture Detection",
    venue: "16th ICCCNT 2025",
    year: 2025,
    location: "IIT-Indore, India",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "XAI"],
    abstract: "VGG19-based X-ray fracture detection with CLAHE, Otsu thresholding, and Canny edge detection achieving ~99.78% accuracy.",
    bullets: [
      "Modified VGG19 architecture for X-ray analysis",
      "Applied CLAHE, Otsu's thresholding, Canny edge detection",
      "99.78% classification accuracy",
    ],
  },
  {
    id: "brain-tumor",
    title: "Analysis of Pre-trained CNN Models in MRI-Based Brain Tumor Detection",
    venue: "27th IEEE ICCIT 2024",
    year: 2024,
    location: "Cox's Bazar, Bangladesh",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "CNN"],
    abstract: "Comparative analysis of InceptionV3, ResNet-50, VGG-16, MobileNetV2, and DenseNet121 for binary and multi-class MRI brain tumor classification.",
    bullets: [
      "Compared five pre-trained CNN architectures",
      "Binary and multi-class tumor classification",
      "Comprehensive performance benchmarking on MRI data",
    ],
  },
  {
    id: "antibiotic-resistance",
    title: "Predicting Antibiotic Resistance in Gonorrhea: A Comparative Analysis of Machine Learning, Deep Learning, and Explainable AI",
    venue: "27th IEEE ICCIT 2024",
    year: 2024,
    location: "Cox's Bazar, Bangladesh",
    status: "Published",
    tags: ["Healthcare AI", "Explainable AI", "Deep Learning"],
    abstract: "Applied XAI (GRU, LSTM, RNNs), CNN, Random Forest, and Decision Tree for Neisseria gonorrhoeae antibiotic resistance prediction.",
    bullets: [
      "Applied GRU, LSTM, RNN for resistance prediction",
      "Used CNN, Random Forest, Decision Tree models",
      "Addressed public health antibiotic resistance challenges",
    ],
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Diagnosis Using a Hybrid EfficientNet-ResNet Model with Coordinate Attention",
    venue: "IEMTRONICS 2025, Springer Nature",
    year: 2025,
    location: "Imperial College London, UK",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "Attention Mechanisms"],
    abstract: "Hybrid EfficientNet-B3 + ResNet-50 with Coordinate Attention; 83.61% accuracy, 93.34% precision, 0.9051 Kappa on APTOS 2019.",
    bullets: [
      "Hybrid EfficientNet-B3 + ResNet-50 with Coordinate Attention",
      "83.61% accuracy, 0.9051 Kappa on APTOS 2019",
      "Targeted automated diabetic retinopathy grading",
    ],
  },
  {
    id: "maternal-risk",
    title: "An Optimized Support Vector-Based Hybrid Framework for Real-Time Maternal Risk Prediction: GA-Driven Feature Selection and XAI",
    venue: "16th ICCCNT 2025",
    year: 2025,
    location: "IIT-Indore, India",
    status: "Published",
    tags: ["Healthcare AI", "Explainable AI", "Machine Learning"],
    abstract: "GA-driven feature selection with SVC for maternal risk prediction: 98.21% accuracy, 0.9903 AUC. LIME used for explainability. Web app developed for real-time stratification.",
    bullets: [
      "GA-driven feature selection with SVC (98.21% accuracy)",
      "0.9903 AUC score",
      "LIME-based explainability and real-time web app",
    ],
  },
  {
    id: "visionedge-cataract",
    title: "VisionEdge: Cataract Detection via Smartphone",
    venue: "27th IEEE ICCIT 2024",
    year: 2024,
    location: "Cox's Bazar, Bangladesh",
    status: "Published",
    tags: ["Medical Imaging", "Edge AI", "Mobile"],
    abstract: "MobileNetV2-based smartphone app for real-time cataract detection with 99.11% accuracy, optimized for Edge Intelligence.",
    bullets: [
      "MobileNetV2-based real-time cataract detection",
      "99.11% accuracy on smartphone deployment",
      "Edge Intelligence optimization for accessibility",
    ],
  },
];

// ─── Work Experience ─────────────────────────────────────────
export interface Experience {
  title: string;
  organization: string;
  department?: string;
  location: string;
  dates: string;
  bullets: string[];
  category: "Industry" | "Research" | "Media";
}

export const experiences: Experience[] = [
  {
    title: "Executive, Risk & Operational Analyst",
    organization: "NEXT Ventures",
    department: "Dept. of Trading & Risk Management",
    location: "Dhaka, Bangladesh",
    dates: "April 2025 – Present",
    category: "Industry",
    bullets: [
      "Led the launch of FNmarkets brokerage and its CRM platform, coordinating with business, product, and technology teams.",
      "Handle the full trading backend including servers, trading software, execution feeds, and latency optimization to ensure uninterrupted operations.",
      "Configure and monitor platform settings, routing, and liquidity provider connections to reduce execution errors and slippage.",
      "Oversee risk control measures including real-time market monitoring and trade routing to liquidity providers.",
      "Develop and deliver comprehensive analytics, dashboards, and reports to support strategic decision-making.",
      "Collaborate with Support, Product, Back Office, and Tech teams to investigate trade disputes and maintain seamless client experience.",
    ],
  },
  {
    title: "Data Scientist",
    organization: "Synnax Laboratory",
    department: "Credit Intelligence Division",
    location: "Remote (Dhaka, Bangladesh)",
    dates: "May 2025 – Present",
    category: "Research",
    bullets: [
      "Developed end-to-end machine learning SDK and pipelines for multi-target financial forecasting, including data preprocessing, feature engineering, and model ensembling.",
      "Ran regular prediction cycles, hyperparameter tuning, and leaderboard-style evaluation, achieving top-quartile accuracy on proprietary financial datasets.",
      "Automated data workflows and experiment tracking to support scalable model deployment and continuous improvement.",
    ],
  },
  {
    title: "Project Engineer (Electrical)",
    organization: "Mark Enterprise",
    department: "BPDB Contractor",
    location: "Chattogram, Bangladesh",
    dates: "June 2024 – December 2024",
    category: "Industry",
    bullets: [
      "Prepared and reviewed procurement-related agreement papers with multiple vendors and stakeholders for BPDB projects.",
      "Built comparative statements, cost sheets, and visual reports using Excel and databases for management review.",
      "Coordinated with civil engineers to align electrical project plans and schedules across multiple project sites.",
    ],
  },
  {
    title: "Technical Writing Intern",
    organization: "The Financial Express Bangladesh",
    department: "Sci-Tech Section",
    location: "Dhaka, Bangladesh",
    dates: "January 2022 – July 2022",
    category: "Media",
    bullets: [
      "Wrote biweekly technology-focused articles and explainers for the newspaper's Sci-Tech section.",
      "Researched topics, generated keywords, and pitched new article ideas aligned with editorial themes.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  timeframe?: string;
  technologies: string[];
  role?: string;
  bullets: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "plasmonic-coupling",
    name: "Plasmonic Coupling & Thermal Effects on Photothermal Response of Randomly Distributed Nanoparticles",
    timeframe: "2023 – 2024",
    technologies: ["MATLAB", "Python"],
    role: "Undergraduate Thesis",
    tags: ["Physics", "Simulation"],
    bullets: [
      "Investigated the influence of plasmonic coupling on the photothermal behavior of silver nanoparticles.",
      "Applied the Discrete Dipole Approximation (DDA) and thermal Green's function to compute temperature profiles.",
      "Used MATLAB and Python for nanoscale temperature visualization, histograms, scatterplots, and absorption spectra.",
    ],
  },
  {
    id: "economic-load-dispatch",
    name: "Economic Load Dispatch Problem Using Python & MATLAB",
    technologies: ["Python", "MATLAB", "LaTeX"],
    tags: ["Power Systems", "ML"],
    bullets: [
      "Performed Economic Load Dispatch calculations for Bangladeshi power grid data using MATLAB and Python.",
      "Predicted the accuracy of several numerical methods using ML models.",
    ],
  },
  {
    id: "secure-qr-gen",
    name: "SecureQRGen: Double Layer Encrypted QR Code Generator",
    technologies: ["Python", "PyQt5"],
    tags: ["Security", "Desktop App"],
    bullets: [
      "Developed a Python-based QR code generator using base64 encryption and decryption.",
      "Used PyQt5 for building a user-friendly GUI for scanning and transmitting.",
    ],
  },
  {
    id: "ai-sudoku-solver",
    name: "AI Sudoku Solver Using Constraint Satisfaction",
    technologies: ["Python", "PyQt5"],
    tags: ["AI", "Desktop App"],
    bullets: [
      "Developed a Sudoku solver using constraint satisfaction with a PyQt5-based interface for real-time interaction.",
    ],
  },
  {
    id: "credit-card-fraud",
    name: "Credit Card Fraud Detection",
    technologies: ["Python", "Google Colab"],
    tags: ["ML", "Finance"],
    bullets: [
      "Conducted analysis on a credit card transactions dataset, handled class imbalance, and compared classifiers to improve fraud detection.",
    ],
  },
  {
    id: "servo-motor-control",
    name: "Precision Servo Motor Control",
    technologies: ["Arduino", "C++", "MATLAB"],
    tags: ["Embedded Systems", "Control"],
    bullets: [
      "Designed a precision servo motor control system with PID tuning.",
      "Interfaced hardware with embedded controllers for real-time positioning.",
    ],
  },
  {
    id: "thermoelectric-generation",
    name: "Electricity Generation Using Thermoelectric Plates",
    technologies: ["Hardware", "MATLAB"],
    tags: ["Energy", "Embedded Systems"],
    bullets: [
      "Explored thermoelectric energy harvesting from waste heat using Peltier modules.",
      "Measured and analyzed voltage/current outputs under varying temperature gradients.",
    ],
  },
];

// ─── Certifications ──────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  certificateUrl?: string;
  category: "conference" | "course";
}

export const certifications: Certification[] = [
  // Conference Presentations / Author Certificates
  { title: "Optimized Approaches to Malware Detection", issuer: "IEEE CSNT 2025", year: "2025", category: "conference" },
  { title: "Predicting Antibiotic Resistance in Gonorrhea", issuer: "IEEE ICCIT 2024", year: "2024", category: "conference" },
  { title: "VisionEdge: Cataract Detection via Smartphone", issuer: "IEEE ICCIT 2024", year: "2024", category: "conference" },
  { title: "Analysis of Pre-trained CNN Models in MRI-Based Brain Tumor Detection", issuer: "IEEE ICCIT 2024", year: "2024", category: "conference" },
  { title: "Diabetic Retinopathy Diagnosis Using Hybrid EfficientNet-ResNet", issuer: "IEMTRONICS 2025, Springer Nature", year: "2025", category: "conference" },
  { title: "Bone Fracture Detection (Modified VGG19)", issuer: "16th ICCCNT 2025", year: "2025", category: "conference" },
  { title: "Maternal Risk Prediction (GA + XAI)", issuer: "16th ICCCNT 2025", year: "2025", category: "conference" },
  { title: "Colorectal Cancer Detection", issuer: "7th ICAIIC 2025", year: "2025", category: "conference" },

  // Course / Online Certifications (from JSON)
  { title: "Introduction to Data Science", issuer: "Simplilearn", category: "course" },
  { title: "Introduction to Neural Network", issuer: "Simplilearn", category: "course" },
  { title: "Introduction to Python OpenCV", issuer: "Simplilearn", category: "course" },
  { title: "Image Recognition Basics for Beginners", issuer: "Simplilearn", category: "course" },
  { title: "Machine Learning using Python", issuer: "LinkedIn Learning", category: "course" },
  { title: "Google AI Essentials", issuer: "Coursera", category: "course" },
  { title: "Google Project Management", issuer: "Coursera", category: "course" },
  { title: "Lean Six Sigma White Belt", issuer: "CSSC", category: "course" },
  { title: "What Is Generative AI?", issuer: "Simplilearn / LinkedIn Learning", category: "course" },
];

// ─── Trainings ───────────────────────────────────────────────
export interface Training {
  organization: string;
  unit?: string;
  location?: string;
  duration: string;
  year: string;
  topics: string[];
  technologies?: string[];
  bullets: string[];
  certificateUrl?: string;
}

export const trainings: Training[] = [
  {
    organization: "Bangladesh Power Development Board (BPDB)",
    unit: "Ghorashal Power Station",
    location: "Ghorashal, Bangladesh",
    duration: "Short-term visit",
    year: "2023",
    topics: ["Power Generation", "Transmission", "Energy Management"],
    technologies: ["Large-scale electrical systems"],
    bullets: [
      "Observed large-scale electrical systems and power generation operations at Ghorashal Power Station.",
      "Gained hands-on exposure to generation, transmission, and large-scale energy management procedures.",
    ],
  },
  {
    organization: "Institute of Nuclear Science and Technology",
    unit: "Bangladesh Atomic Energy Commission",
    location: "Savar, Bangladesh",
    duration: "Short-term visit",
    year: "2023",
    topics: ["Nuclear Reactor Operation", "Radiation Safety", "Instrumentation"],
    technologies: ["Nuclear Reactor Facilities"],
    bullets: [
      "Visited nuclear reactor facilities and associated machinery at BAEC Savar.",
      "Gained understanding of reactor operation, functionality, and radiation safety principles.",
    ],
  },
  {
    organization: "Robi Axiata Ltd.",
    location: "Bangladesh",
    duration: "Short-term visit",
    year: "2023",
    topics: ["Telecommunications", "Network Infrastructure", "QoS"],
    technologies: ["Mobile Network Architecture", "Signal Transmission"],
    bullets: [
      "Observed signal transmission operations, network infrastructure, and interdepartmental workflows.",
      "Developed understanding of mobile network architecture, QoS, and maintenance practices.",
    ],
  },
];

// ─── Extracurricular Activities ──────────────────────────────
export interface Activity {
  year: string;
  items: { role: string; description: string }[];
}

export const extracurriculars: Activity[] = [
  {
    year: "2024",
    items: [
      { role: "Presenter", description: "Presented 3 papers at 27th IEEE ICCIT 2024, Cox's Bazar" },
      { role: "Participant", description: "Mayven English Olympiad SDG Policy Challenge" },
    ],
  },
  {
    year: "2023",
    items: [
      { role: "Organizer", description: "Esonance 2023 – IUT EEE departmental fest" },
      { role: "Member", description: "IEEE IUT Student Branch" },
      { role: "Participant", description: "Inter-departmental programming contest" },
    ],
  },
  {
    year: "2022",
    items: [
      { role: "Technical Writer", description: "Wrote Sci-Tech articles for The Financial Express Bangladesh" },
      { role: "Volunteer", description: "IUT Robotics Club workshop series" },
    ],
  },
  {
    year: "2021",
    items: [
      { role: "Member", description: "IUT Competitive Programming Club" },
      { role: "Player", description: "IUT Inter-departmental football and badminton tournaments" },
    ],
  },
];

// ─── Awards & Achievements ───────────────────────────────────
export interface Award {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    name: "Government Scholarship",
    issuer: "Government of Bangladesh",
    year: "2017",
    description: "Merit-based scholarship awarded for outstanding SSC board examination results.",
  },
  {
    name: "IUT Badminton Tournament – Runner-up",
    issuer: "Islamic University of Technology",
    year: "2022",
    description: "Runner-up in the IUT Inter-departmental Badminton Tournament.",
  },
  {
    name: "IUT Inter-departmental Football Achievement",
    issuer: "Islamic University of Technology",
    year: "2023",
    description: "Represented EEE department in the inter-departmental football tournament.",
  },
  {
    name: "IUT Intra-department Street Cricket Championship",
    issuer: "Islamic University of Technology",
    year: "2022",
    description: "Participated in the intra-department street cricket championship.",
  },
];

// ─── Skills (from JSON unified profile) ──────────────────────
export const skills = {
  programmingLanguages: [
    { name: "Python", level: "Advanced" },
    { name: "MATLAB", level: "Advanced" },
    { name: "C", level: "Intermediate" },
    { name: "LaTeX", level: "Intermediate" },
    { name: "Assembly", level: "Intermediate" },
    { name: "HTML/CSS", level: "Basic" },
    { name: "TypeScript", level: "Basic" },
    { name: "SQL", level: "Learning" },
  ],
  frameworksLibraries: [
    "NumPy", "Pandas", "Matplotlib", "NLTK", "Scikit-learn",
    "TensorFlow", "Keras", "OpenCV", "Seaborn", "Plotly",
    "FastAPI", "PyQt5", "Streamlit",
  ],
  dataSkills: [
    "Data Collection", "Data Preprocessing", "Data Analysis",
    "Data Visualization", "Feature Engineering", "Model Training & Tuning",
    "Financial Forecasting Pipelines", "Trading Platform Operations & Risk Dashboards",
  ],
  aiDomains: [
    "Power Systems Optimization", "AC Optimal Power Flow", "Smart Grid Operation",
    "Computer Vision", "Malware Detection", "Intrusion Detection (SDN)",
    "Medical Image Analysis", "Credit Risk & Financial Forecasting",
  ],
  toolsSoftware: [
    "Google Workspace", "Microsoft Office Suite", "Visual Studio",
    "Proteus", "TinkerCAD", "PSIM", "Mendeley", "Notion", "Airtable", "ClickUp",
  ],
  softSkills: [
    "Presentation", "Documentation", "Event Management",
    "Teamwork", "Critical Thinking", "Technical Writing",
  ],
  languages: [
    { name: "Bengali", type: "Mother tongue" },
    { name: "English", type: "C1–C2 Proficient" },
  ],
};

// ─── Stats ───────────────────────────────────────────────────
export const stats = {
  papers: researchPapers.length,
  projects: projects.length,
  trainings: trainings.length,
  certifications: certifications.length,
};
