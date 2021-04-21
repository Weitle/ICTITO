import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProjectForm from './components/projects/ProjectForm';
import Projects from './components/projects/Projects';
import Contracts from './components/contracts/Contracts';
import Businesses from './components/businesses/Businesses';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Engineers from './components/engineers/Engineers';
//import BusinessAdd from './components/businesses/BusinessAdd';
import BusinessForm from './components/businesses/BusinessForm';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-3">
        <Switch>
          <Route path="/projects/new" component={ProjectForm} />
          <Route path="/projects" component={Projects} />
          <Route path="/contracts" component={Contracts} />
          <Route path="/businesses/add" component={BusinessForm} />
          <Route path="/businesses" component={Businesses} />
          <Route path="/engineers" component={Engineers} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>    
  );
}

export default App;
