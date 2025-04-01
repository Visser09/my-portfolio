// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard"; // Adjust alias or path if needed

export default function Projects() {
  const projects = [
    {
      title: 'Jarvis – Functional AI Assistant',
      description: 'Built in Python with voice recognition, NLP, and LLM integration to automate tasks and manage dynamic scheduling.',
    },
    {
      title: 'Trading Journal',
      description: 'A web-based tool for real-time trading analysis with interactive dashboards and automated alerts, built using Python and JavaScript.',
    },
    {
      title: 'Interactive Game AI',
      description: 'Game projects developed with Unity (C#) and Unreal Engine (C++/Blueprints) featuring adaptive NPC behavior powered by LLM integration.',
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </div>
  );
}
