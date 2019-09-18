import React from 'react';

const Icarus: React.FC = () => {

  return (

    <div className={'project-page'}>

      <div className={'project-header row'}>
        <h1>Project "Icarus"</h1>
      </div>

      <div className={'project-problem row'}>
        <h2>The Problem Statement:</h2>
        <p>
          During a coop semester with Kinetic Vision, we got a new project for a client that involved a web application and a external IOT
          device. This was meant to replace an old application that was slow and hard to use.
        </p>
        <p>
          This application was split into two parts: an engineering solution and a web solution. I was put on the web team for this project
          during my coop with Kinetic Vision: the goal was to create a web application that would allow a user to control, recieve updates,
          and check the status of a running IOT device
        </p>
        <p>
          There were a few things that I needed to take into consideration when building this tool.
        </p>
        <ul>
          <li>The tool would be stand-alone, both hosting the site and connected to the device.</li>
          <li>The tool would be battery-powered, so performance was an absolute priority.</li>
          <li>A storage solution was needed, one that was performant and did not run any extra processes.</li>
          <li>The application needed to send and recieve messages from an external device.</li>
        </ul>
      </div>

      <div className={'project-solution row'}>
        <h2>The Solution:</h2>
        <p>
          The web solution was split into 2 parts: the frontend and the backend.
        </p>
        <p>The front-end was created first: we used React, React Router, and React Apollo as our GraphQL client. There were a few
          simple pages to create, with input and controls. These controls were meant to send data to through the API and to
          the external device in order to control it.
        </p>
        <p>
          The backend (still in progress) recieves the graphQL requests and does one of two things. It can go to a database and return data, or pass a
          command through a serial port.
        </p>
        <p>
          This application needed to handle any updates that come from the external device. We are using Graphql subscriptions and an implementation
          of websockets in order to push updates from the device, through the API, and to the front-end. The front-end can then notify the user if
          there are any errors, or update the interface accordingly.
        </p>
        <p>
          We ended up using a SQLite database, which does not require any extra process to run but still gives us most of the functionality of a full
          database. This will reduce our number of processes, increase performance, and extend battery life.
        </p>
      </div>

      <div className={'project-result row'}>
        <h2>The Result:</h2>
        <p>
          During the coop semster, I completed the bulk of the front-end; the interface design came from a mockup from the design team
          and I was successful in recreating this interface with react (with a few changes where necessary). The client was pleased
          with how the front-end turned out.
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

export default Icarus;
