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

export interface Experience {
  position: string
  company: string
  duration: string
  location: string
  highlights: string[]
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
    shell: "Python, C/C++",
    currentTask: "Scaling RAG pipelines and low-latency trading systems",
  },

  about: [
    "Computer Engineering student at TSEC focused on AI systems and backend infrastructure. Currently working as an SDE Intern building low-latency trading infrastructure, event-driven APIs, and broker abstraction layers for production deployments.",
    "Experienced in designing production-grade RAG pipelines, multi-agent evaluation systems, and cloud-native AI services. Winner of multiple AI hackathons (DOC.AI, Codeissance, Techathon 2025) with projects spanning governance AI, multimodal audio intelligence, and scalable backend architectures."
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
  { label: "Python (FastAPI, Flask, Streamlit)", percentage: 88 },
  { label: "RAG & AI Systems (Embeddings, FAISS, Multi-Agent)", percentage: 84 },
  { label: "Backend Systems (APIs, WebSockets, Event Flows)", percentage: 82 },
  { label: "Databases (PostgreSQL, MySQL, Redis, FAISS)", percentage: 80 },
  { label: "C/C++", percentage: 72 },
]


// ============================================
// SKILLS - Add new categories or skills easily
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [{ name: "Python" }, { name: "C" }, { name: "C++" }, { name: "SQL" }],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Redis" },
      { name: "FAISS (Vector DB)" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "React" },
      { name: "Streamlit" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "AI/ML & NLP",
    skills: [
      { name: "Embeddings" },
      { name: "RAG" },
      { name: "FAISS indexing" },
      { name: "Multi-agent" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, Lambda, Bedrock)" },
      { name: "GCP Cloud Run" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "n8n" },
      { name: "Linux" },
      { name: "Git" },
      { name: "VS Code" },
      { name: "Postman" },
    ],
  },
]

// ============================================
// EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    position: "Software Development Engineer Intern",
    company: "Nidhi-Harsh Wealth Ventures",
    duration: "Jan 2026 - Feb 2026",
    location: "Remote",
    highlights: [
      "Contributed to AlgoBridge, adding WebSocket-driven price triggers and event-based order flows to keep NIFTY/BANKNIFTY executions reliable under sub-second constraints.",
      "Built an abstraction layer for FYERS orders and webhooks so strategies deploy once across brokers.",
      "Delivered a Flask REST API and Streamlit dashboard so non-technical operators can configure strategies.",
      "Implemented an option instrument resolver caching 6,000+ symbols to translate human-readable inputs into broker-specific instruments, reducing lookup latency and order errors.",
    ],
  },
]

// ============================================
// PROJECTS - Add youtubeId for video embed
// ============================================
export const projects: Project[] = [
  {
    title: "AETHER – AI Governance & Adjudication Engine",
    tech: "LLM Council, RoBERTa, Multi-Agent Debate",
    description: [
      "Designed AETHER as a modular AI governance and adjudication engine using multi-agent debate with automated judging to deliver consistent rulings.",
      "Implemented pluggable evaluator modules so domain teams can drop in specialized reasoning.",
      "Added traceable reasoning graphs and decision logs to support transparency, post-hoc analysis, and regulator-ready evidence.",
    ],
    githubUrl: "https://github.com/calvincandiec137/ather",
  },
  {
    title: "Mind Voice – Depression Detection System",
    tech: "Agentic AI, ML, Audio Processing, GCP",
    description: [
      "Designed a multimodal classification pipeline mixing acoustic signals (pitch, tone, prosody, pauses) with linguistic sentiment and keyword cues to improve robustness across varied speakers.",
      "Extracted Mel-spectrograms and prosodic statistical features to turn raw audio into stable inputs, reducing sensitivity to noise and speaker variation.",
      "Integrated Speech-to-Text with emotion scoring so text and acoustic signals reinforce each other, improving prediction reliability across accents and recording quality.",
      "Deployed on GCP Cloud Run behind API Gateway, enabling fast iteration without redeploying clients.",
    ],
    githubUrl: "https://github.com/calvincandiec137/Depression-Detection",
  },
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
    title: "n8n Audio Processing",
    tech: "n8n, Flask API, FFmpeg, Docker",
    description: [
     "Workflow for automated audio pitch & tempo modification.",
     "Uses n8n to orchestrate uploads, API calls, and response handling.",
     "Audio processed via custom Flask-FFmpeg.",
     "Triggers using new file upload in Drive."
    ],
    githubUrl: "https://github.com/calvincandiec137/n8n_audio_processing",
    youtubeId: "A8C3H94ioqU"
  },

]

// ============================================
// ACHIEVEMENTS
// ============================================
export const achievements: Achievement[] = [
  {
    date: "2026",
    title: "Nidhi-Harsh Wealth Ventures SDE Intern",
    description: "Building low-latency trading infrastructure, event-driven APIs, and broker abstraction layers for production deployments.",
  },
  {
    date: "2026",
    title: "1st Place - TSEC-HACKS 2026",
    description: "24-hour AI/ML Sprint - Nolana, an AI-powered screenplay generator and analyzer.",
  },{
    date: "2026",
    title: "2nd Place - TSDC 2026",
    description: "24-hour AI/ML Sprint - Built AETHER, an AI governance and adjudication engine.",
  },
  {
    date: "2025",
    title: "1st Place - Techathon 2025",
    description: "8-hour AI/ML Sprint - Built LLM Council for AI-vs-human text classification using adversarial LLM arguments and fine-tuned RoBERTa judge.",
  },
  { date: "2025",
    title: "1st Place - Codeissance 2025 (TSEC)",
    description:
      "Mind Voice - multimodal ML pipeline combining acoustic and linguistic signals for depression detection.",
  },
  {
    date: "2024",
    title: "1st Place - DOC.AI Hackathon",
    description: "48-hour hackathon - Built DoChat, an advanced RAG system with FAISS indexing, contextual Q&A, citation tracking, and multi-document analytics.",
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
