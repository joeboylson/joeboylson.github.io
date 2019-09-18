import React from 'react';

const Template: React.FC = () => {

  return (

    <div className={'project-page'}>

      <div className={'project-header row'}>
        <h1>TITLE</h1>
      </div>

      <div className={'project-problem row'}>
        <h2>The Problem Statement:</h2>
      </div>

      <div className={'project-solution row'}>
        <h2>The Solution:</h2>
      </div>

      <div className={'project-result row'}>
        <h2>The Result:</h2>
      </div>

    </div>

  );
}

export default Template;
