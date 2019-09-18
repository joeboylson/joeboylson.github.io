import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from '../Context/AppContext'
import Nav from '../Nav/Nav'
import PageFrame from './PageFrame';

// pages
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

// projects
import Portfolio from '../Projects/ProjectPages/Portfolio';
import Icarus from '../Projects/ProjectPages/Icarus';
import Prometheus from '../Projects/ProjectPages/Prometheus';

export interface AppProps {
  images: any[]
}

const App: React.FC<AppProps> = (Props) => {

  return (

    <AppContext images={Props.images}>

      <Router>

        <Route render={({ location }) => {

          window.scrollTo(0, 0)

          return (

            <main>

              <div id={'nav'}>
                <Nav />
              </div>

              <Switch location={location}>

                <Route
                  path="/"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Home} /> }}
                />

                <Route
                  path="/projects"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Projects} /> }}
                />

                <Route
                  path="/gallery"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Gallery} /> }}
                />

                <Route
                  path="/contact"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Contact} /> }}
                />

                {/* projects */}

                <Route
                  path="/portfolio"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Portfolio} /> }}
                />

                <Route
                  path="/icarus"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Icarus} /> }}
                />

                <Route
                  path="/prometheus"
                  exact key={location.pathname}
                  component={() => { return <PageFrame component={Prometheus} /> }}
                />

              </Switch>



            </main>
          )
        }}
        />


      </Router >
    </AppContext>

  );
}

export default App;
