import React from 'react';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom';
import Projects from './components/projects/projects';
import Engineers from './components/engineers/engineers';
import Home from './components/home';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/engineers" component={Engineers} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
