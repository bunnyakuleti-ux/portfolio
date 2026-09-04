// ============================================================
// portfolioData.js — Centralized configuration for Akuleti Bunny's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Akuleti Bunny",
  firstName: "Bunny",
  brandName: "Bunny.",
  title: "AI & ML Engineer",
  location: "Anantapur, India",
  phone: "+91 9347096234",
  emails: {
    primary: "bunnyakuleti@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning, with hands-on experience developing AI-powered applications using Python. Experienced in building project-based solutions with AI assisted development, APIs, databases, and cloud technologies. Strong problem-solving skills with a willingness to learn and adapt to new technologies.",
  resumeUrl: "/Bunny_Akuleti_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/bunnyakuleti-ux",
  linkedin: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
  instagram: null,
};

export const heroContent = {
  greeting: "Hi, I'm Akuleti Bunny",
  titleHighlight: "AI & ML Engineer",
  subtitle:
    "I build AI-powered cybersecurity platforms, intelligent agents, and full-stack applications using Python, FastAPI, LangChain, and modern ML technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bunnyakuleti@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Bunny,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Bunny_Akuleti_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Akuleti Bunny</span>, a CSE student specializing in Artificial Intelligence and Machine Learning, based in Anantapur, India. I'm passionate about building intelligent, real-world applications — from explainable AI cybersecurity platforms to LLM-powered agents — using Python, FastAPI, LangChain, and full-stack technologies.`,
  techStack: ["Python", "FastAPI", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into intelligent applications",
  description:
    "I follow a structured, analytical, and highly technical approach to turn real-world problems into AI-powered solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem space, user requirements, and data characteristics to lay a rock-solid foundation for any AI or software project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean system architecture, intuitive interfaces, and scalable ML pipelines that ensure both performance and accessibility.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building intelligent backends with Python and FastAPI, and responsive frontends with React — integrating AI models with production-ready APIs.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure like Vercel and Render, followed by continuous improvement.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
      ],
    },
    {
      title: "Artificial Intelligence",
      skills: [
        { name: "Prompt Engineering", level: 88 },
        { name: "Responsible AI", level: 82 },
        { name: "AI-Assisted Development", level: 85 },
        { name: "HuggingFace Transformers", level: 80 },
        { name: "SHAP / LIME (XAI)", level: 80 },
        { name: "XGBoost / Scikit-learn", level: 84 },
      ],
    },
    {
      title: "AI Agents & LLMs",
      skills: [
        { name: "LangChain", level: 83 },
        { name: "LangGraph", level: 80 },
        { name: "Groq API (Llama 3.3)", level: 85 },
        { name: "Whisper (Speech-to-Text)", level: 80 },
      ],
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React.js", level: 82 },
        { name: "Node.js", level: 80 },
        { name: "Streamlit", level: 88 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "REST APIs", level: 88 },
        { name: "GitHub Webhooks", level: 80 },
        { name: "JWT Authentication", level: 82 },
      ],
    },
    {
      title: "Data, Tools & Infrastructure",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "SQLAlchemy / SQLite", level: 80 },
        { name: "Docker", level: 78 },
        { name: "GitHub Actions (CI/CD)", level: 80 },
        { name: "Vercel / Render", level: 88 },
      ],
    },
  ],
};

export const contentCreation = {
  badge: "AI Focus Areas",
  heading: "Where I Apply AI to the Real World",
  description:
    "Beyond coursework, I build AI systems that solve real cybersecurity, automation, and full-stack challenges.",
  categories: [
    {
      title: "Explainable AI & Cybersecurity",
      description:
        "Building production-grade threat detection platforms using DistilBERT, XGBoost, Isolation Forest, SHAP, and LIME — with full explainability for every prediction.",
      stats: "SHAP · LIME · XGBoost",
      icon: "🛡️",
    },
    {
      title: "AI Agents & LLMs",
      description:
        "Engineering LangGraph ReAct agents with persistent memory, voice interaction, and Groq's Llama 3.3 70B — enabling personalized multi-session AI assistants.",
      stats: "LangChain · LangGraph · Groq",
      icon: "🤖",
    },
    {
      title: "AI-Powered Web Apps",
      description:
        "Full-stack applications fusing React, Node.js, FastAPI, and AI backends — from smart outfit planners to automated GitHub PR code reviewers.",
      stats: "React · FastAPI · MongoDB",
      icon: "🧠",
    },
    {
      title: "Responsible AI",
      description:
        "Studying and applying ethical AI principles, bias mitigation, transparent predictions, and responsible deployment practices across every project I build.",
      stats: "IBM · Google · Microsoft · AWS",
      icon: "⚖️",
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex AI and engineering challenges into clean, logical, and modular solutions.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "Balancing B.Tech studies, personal projects, and certifications with disciplined scheduling.",
  },
  {
    name: "Adaptability",
    icon: "🌟",
    desc: "Quick to learn new frameworks and tools — from PyTorch to FastAPI to cloud deployment.",
  },
  {
    name: "Analytical Thinking",
    icon: "📊",
    desc: "Applying structured reasoning to data analysis, model selection, and system design decisions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Clear, concise, and structured interactions in both technical documentation and team collaboration.",
  },
  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Committed to staying current through certifications from Google, IBM, Microsoft, and AWS.",
  },
];

export const projects = [
  {
    id: "adaptive-ai-cyber-threat",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Adaptive Explainable AI for Cyber Threat Detection",
    description:
      "A production-grade AI-powered cybersecurity platform that detects phishing emails, malicious URLs, suspicious login behavior, and network anomalies using Machine Learning, Deep Learning, and Explainable AI. Features a modular multi-model pipeline with DistilBERT/BERT for phishing detection, XGBoost for malicious URL and network intrusion detection, and Isolation Forest for behavioral anomaly detection. An Adaptive Threat Fusion Engine generates unified risk scores and actionable security insights. SHAP and LIME provide transparent model explanations and remediation recommendations. Includes a Streamlit SOC dashboard with real-time analytics, threat timelines, PDF/CSV reporting, Docker support, CI/CD via GitHub Actions, and cloud deployment on Render and Streamlit Community Cloud.",
    techTags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "PyTorch",
      "HuggingFace Transformers",
      "XGBoost",
      "SHAP",
      "LIME",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/bunnyakuleti-ux",
      frontendDemo: null,
    },
    isFlagship: true,
  },
  {
    id: "custom-ai-agent-memory",
    number: "02",
    badge: null,
    title: "Custom AI Agent with Memory",
    description:
      "A production-ready AI assistant with persistent long-term memory supporting both voice and text interactions. Remembers user preferences, facts, and goals across multiple sessions using a LangGraph ReAct agent integrated with LangChain and Groq's Llama 3.3 70B model. Features intelligent memory retrieval, automated memory storage, and contextual response generation. FastAPI backend exposes REST APIs for chat, memory management, and Whisper-based speech transcription. Streamlit frontend provides voice input, real-time conversations, and an interactive memory dashboard. Designed with isolated multi-user memory stores, Dockerized deployment, and cloud hosting on Render and Streamlit Community Cloud.",
    techTags: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Streamlit",
      "Groq API",
      "Whisper",
      "Docker",
      "Render",
    ],
    links: {
      github: "https://github.com/bunnyakuleti-ux",
      frontendDemo: null,
    },
    isFlagship: false,
  },
  {
    id: "ai-code-review-bot",
    number: "03",
    badge: null,
    title: "AI Code Review Bot – GitHub PR Auto-Reviewer",
    description:
      "An AI-powered GitHub Pull Request review automation system that performs intelligent code analysis and posts detailed review comments directly on GitHub using Groq's Llama 3.3 70B model. A FastAPI backend integrates with GitHub Webhooks and GitHub REST APIs to automatically retrieve PR diffs, analyze code quality, and generate actionable feedback for every submitted pull request. Automatically detects logic errors, security vulnerabilities, performance bottlenecks, coding standard violations, and best practice issues. Deployed on Render using zero-cost cloud infrastructure.",
    techTags: [
      "Python",
      "FastAPI",
      "GitHub Webhooks",
      "GitHub REST API",
      "Groq API",
      "Llama 3.3 70B",
      "Render",
    ],
    links: {
      github: "https://github.com/bunnyakuleti-ux",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "travelwear-ai",
    number: "04",
    badge: null,
    title: "TravelWear AI – Smart Weather Based Outfit Planner",
    description:
      "A full-stack AI-powered travel fashion assistant that recommends clothing based on real-time weather conditions from OpenWeatherMap for any destination worldwide. Features a Smart Style Advisor using Canvas API color histogram analysis to detect skin tone from uploaded photos and generate personalized outfit color recommendations. Includes an AI chatbot for destination-specific clothing, food, and places-to-visit guidance, smart packing checklist with PDF export, 5-day weather forecast with travel date selection, and JWT-based authentication with user data stored in MongoDB Atlas. Frontend deployed on Vercel, backend on Render.",
    techTags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "OpenWeatherMap API",
      "Canvas API",
      "JWT",
      "TailwindCSS",
      "Vercel",
      "Render",
    ],
    links: {
      github: "https://github.com/bunnyakuleti-ux",
      frontendDemo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud",
      icon: "🤖",
      url: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM",
      icon: "💡",
      url: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
    },
    {
      name: "Introduction to AI in Azure",
      issuer: "Microsoft",
      icon: "☁️",
      url: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "AWS",
      icon: "📊",
      url: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/bunny-akuleti-014b6a31b",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering (AI & ML)",
  institution: "Kalasalingam Academy of Research & Education, Tamil Nadu",
  cgpa: "6.31",
  graduation: "2027",
  twelfth: "Intermediate – 7.42/10 (Swamy Vivekananda Junior College, Andhra Pradesh)",
  tenth: "10th – 10/10 (JVM RDT School, Andhra Pradesh)",
};

export const footerContent = {
  taglines: [
    "Artificial Intelligence & Machine Learning",
    "Python · FastAPI · LangChain · LangGraph",
    "AI Agents · Cybersecurity · Full Stack Apps",
  ],
  credential: "B.Tech CSE (AI & ML) · Kalasalingam Academy",
  copyright: `© ${new Date().getFullYear()} Akuleti Bunny | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
