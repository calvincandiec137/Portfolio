// ============================================
// EASILY CONFIGURABLE DATA - EDIT THIS FILE
// ============================================

export interface Skill {
  name: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  title: string
  tech: string
  description: string[]
  githubUrl?: string
  youtubeId?: string // Add YouTube video ID here (e.g., "dQw4w9WgXcQ")
}

export interface Achievement {
  date: string
  title: string
  description: string
}

export interface StatBar {
  label: string
  percentage: number
}

// ============================================
// PROFILE DATA
// ============================================
export const profile = {
  name: "Faiz Khan",
  title: "AI & Backend Developer",
  username: "faiz_khan",
  bio: "Computer Engineering student at TSEC building production-grade RAG systems, and scalable backend services. Skilled in Python, C/C++, and Go, with a focus on performance, reliability, and clean architecture.",
  terminal: {
    os: "Backend & AI Engineering",
    kernel: "RAG Systems · AIML Infrastructure",
    uptime: "~2 years active development",
    shell: "Python, Go, C/C++",
    currentTask: "Scaling RAG pipelines and low-latency trading systems",
  },

  about: [
    "3rd-year Computer Engineering student specializing in AI/ML and backend systems. I build applied solutions across RAG, audio intelligence, and automated trading.",
    "Winner of DOC.AI and Codeissance 2025. Experienced in vector databases, distributed system design, and cloud optimization."
  ],
  contact: {
    email: "khanfaizmominshama@google.com",
    github: "https://github.com/calvincandiec137",
    linkedin: "https://linkedin.com/in/faiz-khan-yw/",
  },
}


// ============================================
// STAT BARS
// ============================================
export const statBars: StatBar[] = [
  { label: "Python / AI (PyTorch, FAISS)", percentage: 95 },
  { label: "Backend (FastAPI, Golang)", percentage: 90 },
  { label: "Databases (SQL, NoSQL, Vector)", percentage: 85 },
  { label: "C/C++ System Programming", percentage: 80 },
]

// ============================================
// SKILLS - Add new categories or skills easily
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [{ name: "Python" }, { name: "C" }, { name: "C++" }, { name: "Golang" }, { name: "SQL" }],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "React" },
      { name: "Streamlit" },
      { name: "AWS (Basics)" },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      { name: "NumPy" },
      { name: "pandas" },
      { name: "scikit-learn" },
      { name: "AWS Bedrock" },
      { name: "Matplotlib" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "FAISS (Vector DB)" },
      { name: "SQLite" },
    ],
  },
]

// ============================================
// PROJECTS - Add youtubeId for video embed
// ============================================
export const projects: Project[] = [
  {
    title: "LenDen AI Chatbot",
    tech: "Python, FAISS, AWS Bedrock, FastAPI",
    description: [
      "RAG-enhanced chatbot with 90% query resolution accuracy.",
      "Optimized embedding caching for 50% faster responses.",
      "Supports CSV-based bulk testing & streaming responses.",
    ],
    githubUrl: "https://github.com/calvincandiec137/DoChat",
    youtubeId: "smLLruXduPU",
  },
  {
    title: "Goodwill Copy Trader",
    tech: "FastAPI, Python, Excel, GWCIndia API",
    description: [
      "Automated trade replication system for real-time order mirroring.",
      "100% order synchronization across multiple accounts.",
      "Secure token exchange & Excel-based configuration.",
    ],
    githubUrl: "https://github.com/calvincandiec137/Python-Copy_trader",
    youtubeId: "Qy75lc2OWto",
  },
  {
    title: "Depression Detection System",
    tech: "Agentic AI, ML, Audio Processing, GCP",
    description: [
      "Multi-modal assessment using acoustic & linguistic features.",
      "Utilizes Mel-spectrograms & prosody analysis.",
      "Deployed on GCP Cloud Run for scalable usage.",
    ],
    githubUrl: "https://github.com/calvincandiec137",
    youtubeId: "dQw4w9WgXcQ", 
  },
]

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements: Achievement[] = [
  {
    date: "2025",
    title: "1st Place - Codeissance Hackathon",
    description:
      'Built "Voice-based Depression Detection System". Agentic AI system using acoustic/linguistic analysis.',
  },
  {
    date: "2024",
    title: "1st Place - DOC.AI Hackathon",
    description: "48-hour hackathon. Built an AI document assistant using RAG, FAISS, and Llama 3.",
  },
  {
    date: "2024",
    title: "Certifications",
    description:
      "CS50SQL (Harvard University) • Python in Data Science (IIT Madras NPTEL) • SQL Certified (HackerRank)",
  },
  {
    date: "2023 - 2027",
    title: "B.E in Computer Science",
    description: "Thadomal Shahani Engineering College (CGPA: 8.25)",
  },
]
