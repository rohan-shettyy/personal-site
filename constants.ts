import { ExperienceItem, ProjectItem, SkillCategory, EducationItem } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/rohan-shettyy",
  linkedin: "https://linkedin.com/in/rohanshettyse",
  email: "r3shetty@uwaterloo.ca",
  website: "https://rohanshetty.me",
  resume: "/resume.pdf"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "HeyGen",
    role: "Software Engineer Intern, AI Infrastructure",
    location: "Toronto, Canada",
    period: "May 2025 – Aug 2025",
    description: [
      "Optimized an AI video generation model by integrating SageAttention with outlier smoothing and Int4 quantization to reduce end‑to‑end latency by 10%.",
      "Developed logging and profiling utilities to identify inference bottlenecks and guide model and systems‑level optimizations.",
      "Architected and executed a storage migration from AWS S3 to Cloudflare R2, reducing recurring storage costs by 35% while maintaining reliability and performance."
    ]
  },
  {
    company: "Huawei",
    role: "AI Systems Research Intern",
    location: "Markham, Canada",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Benchmarked BitNet against llama.cpp and llama3.c using top‑down microarchitectural analysis to identify performance characteristics and bottlenecks.",
      "Implemented a custom C++ page‑aware data prefetcher that achieved a 6% speedup in mobile LLM inference workloads.",
      "Proposed and prototyped a specialized MatMul kernel for 1‑bit LLMs with fine‑grained structured sparsity, reducing computation overhead by 20%."
    ]
  },
  {
    company: "University of Waterloo",
    role: "Undergraduate Research Assistant",
    location: "Waterloo, Canada",
    period: "Previous",
    description: [
      "Collaborated with Dr. Hiren Patel on implementing pod‑based systolic arrays for GEMM operations in Verilog.",
      "Improved simulation infrastructure to more accurately capture throughput and pod utilization under realistic workloads.",
      "Adapted the systolic design to support fine‑grained structured sparsity and align with the RISC‑V Matrix Extension."
    ]
  },
  {
    company: "Tactic Studios",
    role: "Game Programmer Intern",
    location: "London, Canada",
    period: "Previous",
    description: [
      "Implemented gameplay systems and engine features in Java for the narrative‑driven game “Killer Inn.”",
      "Built tools and systems to support designers and artists, improving iteration speed and content workflows.",
      "Contributed to debugging, optimization, and maintenance of core engine components."
    ]
  },
  {
    company: "Besty AI",
    role: "Software Engineer Intern",
    location: "New York City, USA",
    period: "Sep 2023 – Dec 2023",
    description: [
      "Integrated GPT‑4 into upsell and customer engagement workflows to drive automated yet personalized recommendations.",
      "Built real‑time analytics dashboards to monitor user behavior and feature performance using React.js.",
      "Optimized backend services using Node.js workers and improved request handling to consistently achieve sub‑100ms API responses."
    ]
  },
  {
    company: "Behaviour Interactive",
    role: "Game Programmer Intern",
    location: "Toronto, Canada",
    period: "Jan 2023 – Apr 2023",
    description: [
      "Developed C++ gameplay features and supporting systems for “Dead by Daylight” within Unreal Engine.",
      "Collaborated with designers, artists, and QA to ship player‑facing updates on a live service title.",
      "Diagnosed and optimized performance issues to maintain stability and frame‑rate targets on multiple platforms."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "ThermaLM",
    description: "Thermal-Aware LLM Inference Scheduler. Developed a scheduler that dynamically adapts configuration based on device thermal/battery performance. Created energy-efficiency modes utilizing KV-cache quantization, flash attention, and sparsity.",
    techStack: ["Kotlin", "C++", "Android"],
    link: "https://github.com/rohan-shettyy/ThermaLM",
    linkType: "github"
  },
  {
    title: "Sensor-Driven Violin Performance Capture",
    description: "Prototyped an 'augmented' violin using Raspberry Pi to capture high-fidelity telemetry with >85% detection accuracy. Developed firmware to translate raw sensor data into synthesizer control parameters.",
    techStack: ["Python", "Raspberry Pi", "Firmware"],
    link: "",
    linkType: "other",
    status: "GitLab link coming soon!"
  },
  {
    title: "Tuesday Night Tempo",
    description: "Rhythm game that lets you play a real acoustic drumset and detects what you play via audio for in-game synchronization.",
    techStack: ["Game Dev", "Audio Processing"],
    link: "https://devpost.com/software/saturday-night-smashing",
    linkType: "devpost"
  },
  {
    title: "Tabular",
    description: "Productivity tool that enables hotkey execution via facial recognition. Winner at Hack the North 2020.",
    techStack: ["Web", "Productivity"],
    link: "https://devpost.com/software/hackthenorth2020-02khts",
    linkType: "devpost"
  },
  {
    title: "Wallpaper Wizard",
    description: "A creative tool for generating and managing dynamic desktop wallpapers.",
    techStack: ["Game Engine", "Graphics"],
    link: "https://cyndakwil.itch.io/wallpaper-wizard",
    linkType: "itch"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C++/C", "Python", "Java", "Kotlin", "SQL", "TypeScript", "Verilog", "Assembly"]
  },
  {
    category: "Domains",
    skills: ["Computer Architecture", "Compilers", "HPC", "AI/ML Systems", "Game Dev"]
  },
  {
    category: "Tools",
    skills: ["PyTorch", "CUDA", "Node.js", "React", "Docker", "Kubernetes", "AWS", "Git"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "University of Waterloo",
    degree: "Bachelor of Applied Science in Software Engineering",
    location: "Waterloo, Canada",
    period: "2021 – 2026"
  }
];