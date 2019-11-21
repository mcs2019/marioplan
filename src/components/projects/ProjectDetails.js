import React from 'react';

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>Very nice testing projects for rreact-redux-firebase</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Marcos</div>
          <div>November, 21, 2019</div>
        </div>
      </div>
    </div>
  );
}
