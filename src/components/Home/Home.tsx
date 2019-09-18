import React from 'react';

const Home: React.FC = () => {

  return (

    <div id={'home'}>

      {/* web development */}

      <div className={'row'}>

        <div className={'w8'}>
          <h2>Web Dev.</h2>
        </div>

        <div className={'w18'}>
          <p>
            My goal as a web developer is to create awesome websites that are easy to use,
            fill their purpose, and look amazing. 
          </p>
          <p>
            I have experience in React.js, Angular.js, HTML, CSS, and Javascript.
          </p>
        </div>

      </div>

      {/* photography */}

      <div className={'row'}>

        <div className={'w8'}>
          <h2>Photog.</h2>
        </div>

        <div className={'w18'}>
          <p>
            I'm a street photographer and portrait photographer. I use photography as 
            a way to express the beauty I see in every-day life.
          </p>
        </div>

      </div>

      {/* university */}

      <div className={'row'}>

        <div className={'w8'}>
          <h2>Univ.</h2>
        </div>

        <div className={'w18'}>
          <p>
            I'm a student at the University of Cincinnati, studying for a Bachelors of Science
            in Software Development. After graduation, I hope to get a job in web development and
            web design.
          </p>
          {/* <a href="" className={'small-text'}>Check out my resume:</a> */}

        </div>

      </div>

    </div>
  );
}

export default Home;
