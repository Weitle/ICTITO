import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/projects/Projects';
import NotFound from './components/NotFound';
import Engineers from './components/engineers/Engineers';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route path="/engineers" component={Engineers} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>    
  );
}

export default App;
