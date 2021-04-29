import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Engineers from './components/engineers/engineers';
import Projects from './components/projects/projects';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{marginTop:'80px'}}>
        <Switch>
          <Route component={Engineers} path="/engineers" />
          <Route component={Projects} path="/projects" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
