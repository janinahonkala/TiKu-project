import { useState } from 'react';
import ProjectForm from '../components/Projects/ProjectForm';
import ProjectCard from '../components/Projects/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  const addProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  return (
    <div>
      <h1>TiKu - Projects</h1>
      <ProjectForm addProject={addProject} />
      {projects.length > 0 && <h2>Saved Projects</h2>}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
