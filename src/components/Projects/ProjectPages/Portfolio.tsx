import React from 'react';

const Portfolio: React.FC = () => {

  return (

    <div className={'project-page'}>

      <div className={'project-header row'}>
        <h1>Portfolio</h1>
      </div>

      <div className={'project-problem row'}>
        <h2>The Problem Statement:</h2>
        <p>As a web developer and photographer, I really needed a place to point people to, a single point of contact where anyone could visit.</p>
        <p>A website was the obvious answer.</p>
        <p>In building this website, I needed to consider a few things:</p>
        <ul>
          <li>Would I use a website builder? Or create one from scratch?</li>
          <li>If I built one from scratch, where would I host it?</li>
          <li>What language and framework would I use?</li>
          <li>What is the easiest and cheapest way to get what I want?</li>
        </ul>
        <p></p>
      </div>

      <div className={'project-solution row'}>
        <h2>The Solution:</h2>
        <p>
          When the idea of a website first occured to me a few years ago, I did not know very much about coding and web development. I first tried out
          a few free website builders like Wix and Adobe Portfolio. This also solved the problem of hosting the site.
        </p>
        <p>
          In 2017 I switched my major from Mechanical Engineering to Software Development, and I started to take some web development classes. I put together a simple site
          and used Github pages to host it.
        </p>
        <p>
          A year later in 2018, I began my first coop rotation through the University of Cincinnati. I went to work for a company called the IT Solutions Center, a startup within UC
          which hired primarity from the student body. I was immeditaely exposed to technologies like Node.js, Angular, Express.js - this was my first exposure to full-stack development.
        </p>
        <p>
          After using these technologies for a few months, I realized that I could use them for myself. I started up a simple Express.js application and served a few web pages.
          I also discovered Heroku, a service where you can host anything for free (up to a certain amount of hours). I published my web app on Heroku and it was live!
        </p>
        <p>
          Recently, this past summer in 2019, I began a third coop at a company called Kinetic Vision. Here I worked (again) on full-stack applications, but this time
          we utilized other tools like React.js, Python, and GraphQL. I almost immediatly tore down my old site and started again on a new one.
        </p>
      </div>

      <div className={'project-result row'}>
        <h2>The Result:</h2>
        <p>
          And that bring us to the site you're visiting now.
        </p>
        <p>
          I kept the Express.js backend - I only needed top handle a few HTTP requests. The biggest part of this application is the front-end,
          which is build in React.js. I also use React Router for front-end routing, and React Styled Components for the animations.
        </p>
        <p>
          I'm very happy with how this website has turned out and I'm very proud of myself for how far I've come. Creating a website for myself has
          also let me interact with many aspects of web design, UI/UX, graphic design, animations design, and the best practices for all of these things.
        </p>
      </div>

      <div className={'project-resources row'}>
        <h2>Resources:</h2>
        <ul>
          <li>Project Source Code (coming soon . . .)</li>
          <li><a href="https://www.wix.com/">Wix</a>(website builder)</li>
          <li><a href="https://pages.github.com/">Github Pages</a>(host yout HTML pages)</li>
          <li><a href="https://reactjs.org/">React.js</a>(front-end web framework)</li>
          <li><a href="https://reacttraining.com/react-router/">React Router</a>(easy front-end routing in react)</li>
          <li><a href="https://www.styled-components.com/">React Styles Components</a>(use CSS directly in react components)</li>
        </ul>
      </div>

    </div>

  );
}

export default Portfolio;
