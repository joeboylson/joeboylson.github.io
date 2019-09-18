import React from 'react';

const Prometheus: React.FC = () => {

  return (

    <div className={'project-page'}>

      <div className={'project-header row'}>
        <h1>Project "Icarus"</h1>
      </div>

      <div className={'project-problem row'}>
        <h2>The Problem Statement:</h2>
        <p>
          During a coop semester with The IT Solutions Center, I was assigned to a web project that involved government agencies.
        </p>
        <p>
          This application was already created and it was my job to fix any bugs that arose, make enhancements to help the users,
          and to implement new features.
        </p>
        <p>
          This was not exactly a beginning-to-end project. Instead, this project is split up into two milestones:
        </p>
        <ol>
          <li>Adding a feature that would help to organize funding management.</li>
          <li>Creating and implementing a process to add more agencies to the application.</li>
        </ol>
      </div>

      <div className={'row'}>
        <h2>Milestone 1: The new funding management feature:</h2>
        <p>
          The actual coding piece of this new feature was quite simple. Because there was already an application in place,
          all we needed to do was add the interface and connect the actions to the API.
        </p>
        <p>
          The API was supported by a set of microservices that split up the features into separate processes, thus increasing performace
          and the reliability of the application (meaning that if one service crashed, the entire application would not crash).
        </p>
        <p>
          I was invloved with client meetings, and got the chance to listen to the client's needs, give some ideas on the matter, and implement
          the final solution. Thw whole feature was rolled out successfully.
        </p>
      </div>

      <div className={'row'}>
        <h2>Milestone 2: Creating a process to add more agencies to the system:</h2>
        <p>
          Our application was originally built with the intent to support only one agency. When a new agency
          joined, we realized we needed to create a process through which a new agency could be added.
        </p>
        <p>
          The database schema was set so that each agency had it's own set of data within the same application; this
          data could not be shared to any other application. And so the system had to be changed slightly to allow
          different agencies to use the same application while remaining that data integrity.
        </p>
        <p>
          There were also a few processes we created, which surrounded the agency onboarding process: this mainly involved scripts
          to import data from external sources and to migrate data from other databases.
        </p>
      </div>

      <div className={'project-resources row'}>
        <h2>Resources:</h2>
        <ul>
          <li><a href="https://kinetic-vision.com/">Kinetic Vision's Homepage</a></li>
          <li><a href="https://reactjs.org/">React.js</a>(front-end web framework)</li>
          <li><a href="https://reacttraining.com/react-router/">React Router</a>(easy front-end routing in react)</li>
          <li><a href="https://www.apollographql.com">Apollo React Graphql Client</a>(an easy solution for implementing graphql in your React app)</li>
        </ul>
        <h3>Other tools we've used:</h3>
        <ul>
          <li><a href="https://www.tornadoweb.org/en/stable/">Tornado Web Server</a></li>
          <li><a href="https://graphene-python.org/">Graphene Python</a>(for implementating a graphql api with Python)</li>
          <li><a href="https://www.sqlalchemy.org/">SQL Alchemy</a>("Python SQL toolkit")</li>
        </ul>
      </div>

    </div>

  );
}

export default Prometheus;
