// ============================================================
// Central data module — single source of truth for the portfolio
// ============================================================

export const personalInfo = {
  name: "Abrar Fahim",
  role: "Researcher & Engineer in AI, Power Systems, and Medical Imaging",
  email: "abrarfahim8@iut-dhaka.edu",
  phone: "+8801855891232",
  location: "Chattogram, Bangladesh",
  dob: "10/06/2001",
  nationality: "Bangladeshi",
  github: "https://github.com/abrarfahimsaraz",
  linkedin: "https://linkedin.com/in/abrarfahimsaraz",
  scholar: "https://scholar.google.com/citations?user=abrarfahim",
  cvUrl: "/CV.pdf",
  intro:
    "Electrical Engineering graduate with a strong foundation in power systems, energy modeling, and optimization. Experienced in deep learning, power systems optimization and machine learning projects using MATLAB and Python. Current research interests include AC optimal power flow, smart grid operation, and computer vision.",
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
    institution: "Islamic University of Technology",
    location: "Board Bazar, Gazipur, Bangladesh",
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
    degree: "HSC (Science)",
    institution: "Chittagong College",
    location: "Chattogram, Bangladesh",
    dates: "2017 – 2019",
    grade: "GPA 5.00 / 5.00",
  },
  {
    degree: "SSC (Science)",
    institution: "Government Muslim High School",
    location: "Chattogram, Bangladesh",
    dates: "2012 – 2017",
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
export type PaperStatus = "Published" | "Accepted" | "Under Review" | "Pending Submission";

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
  image?: string;
}

export const researchPapers: ResearchPaper[] = [
  // ── Under Review / In Progress ──
  {
    id: "opf-comparative",
    title:
      "Comparative Analysis of Classical, Machine Learning, Deep Learning, and Metaheuristic Approaches for Optimal Power Flow",
    venue: "2nd IEEE ICEESI 2026",
    year: 2026,
    location: "India",
    status: "Under Review",
    tags: ["Power Systems", "Machine Learning", "Optimization"],
    abstract:
      "A unified comparative study of AC optimal power flow solved using classical OPF, Random Forest, DNN, and Particle Swarm Optimization on IEEE test systems.",
    bullets: [
      "Compared classical, ML, DL, and metaheuristic solvers for AC-OPF",
      "Benchmarked on standard IEEE test systems",
      "Evaluated convergence, accuracy, and computational cost",
    ],
  },
  {
    id: "solar-street-lighting",
    title:
      "Design and Implementation of a Solar Energy-Powered Smart Street Lighting Control System for Sustainable Urban Development in Bangladesh",
    venue: "IEEE IPRECON 2026",
    year: 2026,
    location: "Kerala, India",
    status: "Under Review",
    tags: ["Sustainable Energy", "IoT", "Smart Systems"],
    abstract:
      "Designed a solar-powered smart street lighting control system integrating automated energy management and control to reduce power consumption and support sustainable infrastructure in Bangladesh.",
    bullets: [
      "Integrated solar energy harvesting with automated control",
      "Reduced power consumption through smart scheduling",
      "Targeted sustainable urban infrastructure in Bangladesh",
    ],
  },
  {
    id: "sdn-intrusion",
    title:
      "Enhancing Intrusion Detection in SDNs Using Hybrid Feature Selection and XGBoost",
    venue: "Pending Submission",
    year: 2026,
    status: "Pending Submission",
    tags: ["Cybersecurity", "Machine Learning", "SDN"],
    abstract:
      "Trained a hybrid intrusion detection system using XGBoost and hybrid feature selection (CFS + RF-RFE) for Software-Defined Networking (SDN), achieving 99.97% accuracy on the NSL-KDD Dataset.",
    bullets: [
      "Used CFS + RF-RFE hybrid feature selection",
      "Achieved 99.97% accuracy on NSL-KDD",
      "Targeted SDN security applications",
    ],
  },
  {
    id: "anemia-prediction",
    title:
      "Transparent and Accurate Anemia Prediction Through GA-Selected Features and Grid-Search Enhanced Decision Trees",
    venue: "Pending Submission",
    year: 2026,
    status: "Pending Submission",
    tags: ["Healthcare AI", "Explainable AI"],
    abstract:
      "Proposed an interpretable anemia prediction model using Genetic Algorithm–based feature selection, achieving high predictive accuracy while preserving clinical transparency and explainability.",
    bullets: [
      "GA-based feature selection for clinical interpretability",
      "Grid-search optimized Decision Tree classifier",
      "Balanced accuracy with explainability",
    ],
  },
  // ── Published / Accepted ──
  {
    id: "colorectal-cancer",
    title:
      "Deep Learning Based Framework for Colorectal Cancer Using Histopathological Images",
    venue: "7th ICAIIC 2025",
    year: 2025,
    location: "Japan",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning"],
    abstract:
      "Developed a framework using advanced pre-processing techniques for detecting colon cancer. Used a modified MobileNetV2 for classification achieving 99.95% accuracy on the LC25000 dataset.",
    bullets: [
      "Advanced pre-processing pipeline for histopathological images",
      "Modified MobileNetV2 architecture",
      "99.95% accuracy on LC25000 dataset",
    ],
  },
  {
    id: "malware-detection",
    title:
      "Optimized Approaches to Malware Detection: A Study of Machine Learning and Deep Learning Techniques",
    venue: "14th IEEE CSNT 2025",
    year: 2025,
    location: "VIT Bhopal, India",
    status: "Published",
    tags: ["Cybersecurity", "Machine Learning", "Deep Learning"],
    abstract:
      "Trained ML models like Multi-Layer Perceptron, KNN, Logistic Regression & SVM for malware detection. Achieved 99.97% accuracy by optimizing preprocessing and used CNN, DNN, and Random Forest.",
    bullets: [
      "Compared MLP, KNN, LR, SVM for malware classification",
      "Optimized preprocessing pipeline",
      "99.97% accuracy with CNN/DNN/RF ensemble",
    ],
  },
  {
    id: "bone-fracture",
    title:
      "A Modified VGG19-Based Framework for Accurate and Interpretable Real-Time Bone Fracture Detection",
    venue: "16th ICCCNT 2025",
    year: 2025,
    location: "IIT-Indore, India",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "XAI"],
    abstract:
      "Developed a modified VGG19-based deep learning framework for automated bone fracture detection in X-ray images, achieving 99.78% classification accuracy with CLAHE, Otsu's thresholding, and Canny edge detection.",
    bullets: [
      "Modified VGG19 architecture for X-ray analysis",
      "Applied CLAHE, Otsu's thresholding, Canny edge detection",
      "99.78% classification accuracy",
    ],
  },
  {
    id: "brain-tumor",
    title:
      "Analysis of Pre-trained CNN Models in MRI-Based Brain Tumor Detection",
    venue: "27th IEEE ICCIT 2024",
    year: 2024,
    location: "Cox's Bazar, Bangladesh",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "CNN"],
    abstract:
      "Performed a comparative analysis of five CNN models (InceptionV3, ResNet-50, VGG-16, MobileNetV2, DenseNet121) for classifying brain tumors in MRI images with both binary and multi-class classification.",
    bullets: [
      "Compared five pre-trained CNN architectures",
      "Binary and multi-class tumor classification",
      "Comprehensive performance benchmarking on MRI data",
    ],
  },
  {
    id: "antibiotic-resistance",
    title:
      "Predicting Antibiotic Resistance in Gonorrhea: A Comparative Analysis of Machine Learning, Deep Learning, and Explainable AI",
    venue: "27th IEEE ICCIT 2024",
    year: 2024,
    location: "Cox's Bazar, Bangladesh",
    status: "Published",
    tags: ["Healthcare AI", "Explainable AI", "Deep Learning"],
    abstract:
      "Applied XAI techniques (GRU, LSTM, RNNs) for antibiotic resistance prediction in Neisseria gonorrhoeae, showing high accuracy and potential public health solutions.",
    bullets: [
      "Applied GRU, LSTM, RNN for resistance prediction",
      "Used CNN, Random Forest, Decision Tree models",
      "Addressed public health antibiotic resistance challenges",
    ],
  },
  {
    id: "diabetic-retinopathy",
    title:
      "Diabetic Retinopathy Diagnosis Using a Hybrid EfficientNet-ResNet Model with Coordinate Attention",
    venue: "IEMTRONICS 2025, Springer Nature",
    year: 2025,
    location: "Imperial College London, UK",
    status: "Published",
    tags: ["Medical Imaging", "Deep Learning", "Attention Mechanisms"],
    abstract:
      "Developed a hybrid EfficientNet-B3 ResNet-50 model with Coordinate Attention, achieving 83.61% accuracy, 93.34% sensitivity, and 0.9051 Kappa Score on the APTOS 2019 dataset.",
    bullets: [
      "Hybrid EfficientNet-B3 + ResNet-50 with Coordinate Attention",
      "83.61% accuracy, 0.9051 Kappa on APTOS 2019",
      "Targeted automated diabetic retinopathy grading",
    ],
  },
  {
    id: "maternal-risk",
    title:
      "An Optimized Support Vector-Based Hybrid Framework for Real-Time Maternal Risk Prediction: GA-Driven Feature Selection and XAI",
    venue: "16th ICCCNT 2025",
    year: 2025,
    location: "IIT-Indore, India",
    status: "Published",
    tags: ["Healthcare AI", "Explainable AI", "Machine Learning"],
    abstract:
      "Applied GA-driven feature selection with SVC for maternal risk prediction achieving 98.21% accuracy and 0.9903 AUC. Used LIME to identify key risk factors and developed a web app for real-time risk stratification.",
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
    abstract:
      "Developed VisionEdge, a mobile app using MobileNetV2 for real-time cataract detection with 99.11% accuracy, optimized for Edge Intelligence, providing a cost-effective and accessible solution for cataract screening.",
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
  category: "Industry" | "Research" | "Academic";
}

export const experiences: Experience[] = [
  {
    title: "Risk & Operational Analyst (Promoted to Trading Platform Engineer)",
    organization: "NEXT Ventures",
    department: "Dept. of Trading & Risk Management",
    location: "Dhaka, Bangladesh",
    dates: "April 2025 – Present",
    category: "Industry",
    bullets: [
      "Promoted to Trading Platform Engineer handling entire trading backend, server, software, execution feed & latency.",
      "Responsible for the launch of the newest trading brokerage FNmarkets and their CRM platform.",
      "Ensure uninterrupted trading operations by managing platform settings and optimizing trade execution.",
      "Oversee risk control measures, including real-time market monitoring and trade routing to liquidity providers.",
      "Develop and deliver comprehensive analytics, dashboards, and reports to support strategic decision-making.",
      "Collaborate with Support, Product, Back Office, and Tech teams to resolve trade disputes.",
    ],
  },
  {
    title: "Data Scientist",
    organization: "Synnax Laboratory",
    department: "Credit Intelligence Division",
    location: "Dhaka, Bangladesh",
    dates: "May 2025 – Present",
    category: "Research",
    bullets: [
      "Developed end-to-end machine learning SDK & pipelines for multi-target financial forecasting.",
      "Robust data preprocessing, feature engineering, and ensemble of multiple models.",
      "Regular data prediction, hyperparameter tuning, and leaderboard submission workflows.",
      "Achieved top-quartile accuracy on proprietary financial datasets.",
    ],
  },
  {
    title: "Project Engineer (Electrical)",
    organization: "Mark Enterprise, BPDB Contractor",
    location: "Chattogram, Bangladesh",
    dates: "June 2024 – December 2024",
    category: "Industry",
    bullets: [
      "Oversaw procurement-related agreement papers from several stakeholders & vendors.",
      "Created comparative statements in Excel and databases along with data visualization.",
      "Collaborated with civil engineers to handle project plans in different locations.",
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
      "Used MATLAB and Python for illustrating temperature in nanoscale, histograms, scatterplots, and absorption spectra.",
      "Presented at the International Conference on Centennial Celebration of Bose-Einstein Statistics.",
    ],
  },
  {
    id: "economic-load-dispatch",
    name: "Economic Load Dispatch Problem Using Python & MATLAB",
    technologies: ["Python", "MATLAB", "LaTeX"],
    tags: ["Power Systems", "ML"],
    bullets: [
      "Performed Economic Load Dispatch (ELD) calculation for Bangladeshi Power Grid Data using MATLAB.",
      "Predicted the accuracy of several numerical methods using machine learning models via Python.",
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
    technologies: ["Python", "PyQt5", "GitHub"],
    tags: ["AI", "Desktop App"],
    bullets: [
      "Developed a Sudoku solver incorporating a PyQt5-based interface for real-time interaction and puzzle-solving.",
      "Implemented constraint satisfaction algorithms for efficient solving.",
    ],
  },
  {
    id: "credit-card-fraud",
    name: "Credit Card Fraud Detection",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    tags: ["ML", "Finance"],
    bullets: [
      "Built ML models for detecting fraudulent credit card transactions.",
      "Applied data balancing techniques and ensemble methods for improved accuracy.",
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
  year: string;
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

  // Course / Online Certifications
  { title: "Mayven English Olympiad SDG Policy Challenge", issuer: "Mayven", year: "2024", category: "course" },
  { title: "Certified Prompt Engineer", issuer: "AICERTs", year: "2024", category: "course" },
  { title: "What Is Generative AI?", issuer: "LinkedIn Learning", year: "2024", category: "course" },
  { title: "Google AI Essentials", issuer: "Coursera (Google)", year: "2024", category: "course" },
  { title: "Hands-on Machine Learning", issuer: "ByteToCode", year: "2024", category: "course" },
  { title: "Data Analytics Certificate", issuer: "UniAthena", year: "2023", category: "course" },
  { title: "Lean Six Sigma White Belt", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Introduction to Data Science", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Introduction to Neural Network", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Introduction to Python OpenCV", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Machine Learning using Python", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Image Recognition Basics for Beginners", issuer: "Simplilearn", year: "2023", category: "course" },
  { title: "Esonance 2023 Participation", issuer: "IUT", year: "2023", category: "course" },
];

// ─── Trainings ───────────────────────────────────────────────
export interface Training {
  organization: string;
  unit?: string;
  duration: string;
  topics: string[];
  technologies?: string[];
  bullets: string[];
  certificateUrl?: string;
}

export const trainings: Training[] = [
  {
    organization: "Bangladesh Power Development Board (BPDB)",
    unit: "Raozan 210 MW Power Plant",
    duration: "2 weeks",
    topics: ["Power Generation", "Turbine Operation", "Grid Synchronization"],
    technologies: ["Gas Turbines", "Steam Turbines", "SCADA"],
    bullets: [
      "Observed combined-cycle gas turbine and steam turbine operations.",
      "Studied grid synchronization procedures and switchyard operations.",
      "Analyzed real-time SCADA monitoring for power plant efficiency.",
    ],
  },
  {
    organization: "Institute of Nuclear Science and Technology",
    unit: "Bangladesh Atomic Energy Commission",
    duration: "1 week",
    topics: ["Nuclear Reactor Physics", "Radiation Safety", "Instrumentation"],
    technologies: ["TRIGA Mk-II Reactor", "Radiation Detectors"],
    bullets: [
      "Observed TRIGA Mk-II research reactor operation and safety protocols.",
      "Learned about neutron activation analysis and isotope production.",
      "Studied radiation monitoring and safety instrumentation.",
    ],
  },
  {
    organization: "Robi Axiata Ltd.",
    unit: "Network Operations Center",
    duration: "1 week",
    topics: ["Telecommunications", "Network Infrastructure", "4G/LTE"],
    technologies: ["BTS", "Microwave Links", "Fiber Optics"],
    bullets: [
      "Visited base transceiver stations and understood cellular network architecture.",
      "Studied microwave backhaul and fiber optic network deployment.",
      "Observed network monitoring and fault management at the NOC.",
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
      { role: "Volunteer", description: "IUT Robotics Club workshop series" },
      { role: "Participant", description: "National Science Olympiad – regional round" },
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

// ─── Skills ──────────────────────────────────────────────────
export const skills = {
  programmingLanguages: ["MATLAB", "Python", "C", "LaTeX", "Assembly", "HTML/CSS", "TypeScript", "SQL"],
  dataAnalysisML: [
    "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn",
    "TensorFlow", "Keras", "OpenCV", "FastAPI", "Streamlit", "NLTK",
  ],
  aiDomains: [
    "Medical Imaging", "Power Systems Optimization", "Computer Vision",
    "Natural Language Processing", "Edge AI", "Explainable AI (XAI)",
    "Cybersecurity ML", "Financial Forecasting",
  ],
};

// ─── Stats ───────────────────────────────────────────────────
export const stats = {
  papers: researchPapers.length,
  projects: projects.length,
  trainings: trainings.length,
  certifications: certifications.length,
};
