import React from 'react';
import ProjectRow from './ProjectRow';
import { HashLink as Link } from 'react-router-hash-link';

const ProjectsList = [
  {
    name: 'Portfolio',
    link: '/portfolio',
    description: `
      You are on this website right now! 
      This project explains why I created this website as well as the tools and resources I used in its development.`
  },
  {
    name: `Project "Icarus"`,
    link: `/icarus`,
    description: `A full-stack application that interfaces with an external IOT device. (currently in progress . . .)`
  },
  {
    name: `Project "Prometheus"`,
    link: `/prometheus`,
    description: `A large-scale enterprise application that supports over 20,000 users across 5 states`
  }
];

export interface projectProps {
  name: string;
  link: string;
  description: string;
}

const Projects: React.FC = () => {

  return (

    <div id={'projects'}>

      {ProjectsList &&

        ProjectsList.map((project: projectProps, index: number) => {

          return (
            <Link to={project.link} key={index}>
              <ProjectRow name={project.name} link={project.link} description={project.description} index={index}/>
            </Link>
          )
        })

      }


    </div >
  );
}

export default Projects;
