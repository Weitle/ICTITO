import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Businesses extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <h1>商机</h1>

        <Link className="btn btn-primary" to="/businesses/add">创建商机</Link>
      </React.Fragment>
    );
  }
}
 
export default Businesses;