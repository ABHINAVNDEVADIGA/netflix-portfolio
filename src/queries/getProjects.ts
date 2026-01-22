import { Project } from "../types";

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "Smart Volleyball Referee System",
      description:
        "An AI-powered volleyball analytics and referee system using computer vision to track players, ball movement, and match events, providing real-time insights.",
      techUsed: "Python, OpenCV, YOLOv8, PyTorch, Streamlit",
      image: {
        url: "/projects/smart-volleyball.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/SMARTVOLLEYBALL_ENHANCEMENT_OFGAME_USING_AI"
    },
    {
      title: "AI Code Reviewer",
      description:
        "AI-based tool that analyzes source code and detects bugs, errors, and improvement suggestions to enhance code quality.",
      techUsed: "React, Node.js, JavaScript, AI",
      image: {
        url: "/projects/ai-code-reviewer.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/AI-CODE-REVIEVER",
      liveLink:
        "https://abhinavaicodereviewer.netlify.app/"
    },
    {
      title: "Netflix-portfolio",
      description:
        "A Netflix-inspired personal portfolio showcasing my projects and skills with a clean, responsive UI.",
      techUsed: "React, CSS,HTML, JavaScript, CSS , JSX ,typescript",
      image: {
        url: "/projects/netflix-portfolio.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/node-based-pipeline-editor",
      liveLink:
        "https://abhinavportfolio1.netlify.app/"
    },
    {
      title: "Mental Health Prediction (ML Mini Project)",
      description:
        "Machine learning project that predicts mental health outcomes using structured datasets with preprocessing, training, and evaluation.",
      techUsed: "Python, Pandas, Scikit-Learn, Jupyter Notebook",
      image: {
        url: "/projects/placeholder-image.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/ML-MINI-PROJECT"
    },
    {
      title: "Node-Based Pipeline Editor",
      description:
        "A drag-and-drop pipeline editor with a React frontend and Python backend to design, validate, and manage processing pipelines.",
      techUsed: "React, FastAPI, Python, JavaScript, CSS",
      image: {
        url: "/projects/placeholder-image.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/node-based-pipeline-editor"
    },
    {
      title: "Gesture-Controlled Desktop Assistant",
      description:
        "A real-time, touchless desktop control system that lets users interact with their computer using only hand gestures captured from a webcam. Users can perform mouse actions (move, click, scroll), adjust system settings like volume and brightness, and control the desktop without touching a mouse or keyboard.",
      techUsed: "React, FastAPI, Python, JavaScript, CSS",
      image: {
        url: "/projects/placeholder-image.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/Gesture-Controlled-Desktop-Assistant"
    }
  ];
}
