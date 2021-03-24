import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#e60027', color:'#fff'}}>
            <span className="navbar-brand mb-0 h1">ICT自主交付运营</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>当前进度</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/engineers">智网工程师</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects">项目</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/businesses">商机</NavLink>
                    </li>
                </ul>
            </div>
        </nav> 
    );
}
 
export default Navbar;