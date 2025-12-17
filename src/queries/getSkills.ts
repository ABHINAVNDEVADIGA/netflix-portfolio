import { Skill } from "../types";

export async function getSkills(): Promise<Skill[]> {
  return [
    // 🔹 Programming Languages
    {
      name: "Java",
      category: "Programming",
      description: "Strong foundation in OOP concepts and Data Structures & Algorithms",
      icon: "FaJava"
    },
    {
      name: "Python",
      category: "Programming",
      description: "Used for AI, ML, data processing, and automation",
      icon: "FaJava"
    },
    {
      name: "JavaScript",
      category: "Programming",
      description: "ES6+, asynchronous programming, promises, and event-driven development",
      icon: "FaReact"
    },
    {
      name: "TypeScript",
      category: "Programming",
      description: "Strongly typed JavaScript for scalable applications",
      icon: "SiTypescript"
    },
    {
      name: "SQL",
      category: "Programming",
      description: "Writing optimized queries and managing relational databases",
      icon: "SiMysql"
    },

    // 🔹 Frontend
    {
      name: "React.js",
      category: "Frontend",
      description: "Building reusable UI components using hooks and SPA architecture",
      icon: "FaReact"
    },
    {
      name: "HTML5",
      category: "Frontend",
      description: "Semantic markup and accessible web structure",
      icon: "SiHtml5"
    },
    {
      name: "CSS3",
      category: "Frontend",
      description: "Responsive layouts, animations, and modern UI design",
      icon: "SiCss3"
    },

    // 🔹 Backend
    {
      name: "Node.js",
      category: "Backend",
      description: "Server-side JavaScript runtime for scalable backend services",
      icon: "FaNodeJs"
    },
    {
      name: "Express.js",
      category: "Backend",
      description: "REST API development, routing, and middleware",
      icon: "FaNodeJs"
    },

    // 🔹 AI / Machine Learning
    {
      name: "Machine Learning",
      category: "AI / ML",
      description: "Supervised and unsupervised learning techniques",
      icon: "SiImessage"
    },
    {
      name: "Deep Learning",
      category: "AI / ML",
      description: "Neural networks and model training concepts",
      icon: "SiImessage"
    },
    {
      name: "PyTorch",
      category: "AI / ML",
      description: "Deep learning framework for model training and inference",
      icon: "SiImessage"
    },
    {
      name: "NumPy",
      category: "AI / ML",
      description: "Numerical computing and array-based operations",
      icon: "SiImessage"
    },
    {
      name: "Pandas",
      category: "AI / ML",
      description: "Data manipulation, preprocessing, and analysis",
      icon: "SiImessage"
    },
    {
      name: "Computer Vision",
      category: "AI / ML",
      description: "Image and video processing using ML techniques",
      icon: "SiImessage"
    },

    // 🔹 Databases
    {
      name: "MySQL",
      category: "Database",
      description: "Relational database design and query optimization",
      icon: "SiMysql"
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "NoSQL database for scalable applications",
      icon: "SiMysql"
    },
    {
      name: "DBMS",
      category: "Database",
      description: "Database normalization, indexing, and transactions",
      icon: "SiMysql"
    },

    // 🔹 Tools & Platforms
    {
      name: "Git",
      category: "Tools",
      description: "Version control, branching, and collaboration",
      icon: "FaGitAlt"
    },
    {
      name: "GitHub",
      category: "Tools",
      description: "Code hosting, pull requests, and project management",
      icon: "FaGitAlt"
    },
    {
      name: "VS Code",
      category: "Tools",
      description: "Primary development environment",
      icon: "FaGitAlt"
    },
    {
      name: "Anaconda Navigator",
      category: "Tools",
      description: "Python environment and package management for ML",
      icon: "SiImessage"
    },
    {
      name: "Postman",
      category: "Tools",
      description: "API testing and debugging",
      icon: "FaGitAlt"
    },

    // 🔹 Core CS Concepts
    {
      name: "Data Structures & Algorithms",
      category: "Core CS",
      description: "Arrays, stacks, queues, trees, recursion, and complexity analysis",
      icon: "SiImessage"
    },
    {
      name: "Operating Systems",
      category: "Core CS",
      description: "Processes, threads, memory management, and scheduling",
      icon: "SiImessage"
    },
    {
      name: "Object-Oriented Programming",
      category: "Core CS",
      description: "Encapsulation, inheritance, polymorphism, and abstraction",
      icon: "SiImessage"
    }
  ];
}
