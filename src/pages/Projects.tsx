import React, { useEffect, useState } from 'react';
import './Projects.css';
import {
  FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular,
  FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins,
  FaMicrosoft, FaPython, FaVuejs
} from 'react-icons/fa';
import {
  SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign,
  SiHtml5, SiCss3, SiJquery, SiFirebase,
  SiTerraform, SiArgo
} from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { GrKubernetes } from "react-icons/gr";


const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Azure: <FaMicrosoft />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  Python: <FaPython />,
  Angular: <FaAngular />,
  "Vue.js": <FaVuejs />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => window.open(project.repoLink, "_blank")}
          >
            <img
              src={project.image.url}
              alt={project.title}
              className="project-image"
            />

            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
