import React from 'react';
import ProjectSummary from './ProjectSummary';

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {/* The projects and '&&' were added in case there's no projects */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
}
