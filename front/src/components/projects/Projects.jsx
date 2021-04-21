import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1>Projects List</h1>
                <Link to="/projects/new" className="btn btn-primary">项目立项</Link>
            </React.Fragment>
        );
    }
}
 
export default Projects;