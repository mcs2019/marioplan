import React from 'react';

export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="cars-title">
          <h5>{project.title}</h5>
        </span>
        <p>Posted by Marcos</p>
        <p className="grey-text">#2nd Stemper, 2am</p>
      </div>
    </div>
  );
}
