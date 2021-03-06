import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/work">Projects</NavLink></li>
      <li><NavLink to="/skills">Skills</NavLink></li>
    </ul>    
  </header>
);

export default Header;