import { Project } from "../types";

export async function getProjects(): Promise<Project[]> {
  return [
    {
      title: "Smart Volleyball Referee System",
      description:
        "An AI-powered volleyball analytics and referee system using computer vision to track players, ball movement, and match events, providing real-time insights.",
      techUsed: "Python, OpenCV, YOLOv8, PyTorch, Streamlit",
      image: {
        url: "/project-smart-volleyball.png"
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
        url: "/project-ai-code-reviewer.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/AI-CODE-REVIEVER"
    },
    {
      title: "Mental Health Prediction (ML Mini Project)",
      description:
        "Machine learning project that predicts mental health outcomes using structured datasets with preprocessing, training, and evaluation.",
      techUsed: "Python, Pandas, Scikit-Learn, Jupyter Notebook",
      image: {
        url: "/project-ml-mini.png"
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
        url: "/project-pipeline-editor.png"
      },
      repoLink:
        "https://github.com/ABHINAVNDEVADIGA/node-based-pipeline-editor"
    }
  ];
}
