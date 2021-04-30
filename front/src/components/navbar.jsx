import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#e60027'}}>
      <span className="navbar-brand">ICT自主交付与运营服务</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">最新进展</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">项目管理</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/engineers">队伍建设</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;