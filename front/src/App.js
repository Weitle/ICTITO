import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Projects from './components/projects/projects';
import Engineers from './components/engineers/engineers';
import Home from './components/home';
import Login from 'components/auth/login';
import Register from 'components/auth/register';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-2">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/projects" component={Projects} />
          <Route path="/engineers" component={Engineers} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
