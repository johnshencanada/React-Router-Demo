import React from 'react';
import {
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Skill from './skills/Skill';
import CSS from './skills/CSS';
import HTML from './skills/HTML';
import JavaScript from './skills/JavaScript';

const Skills = () => (

  <div className="main-content courses">
    <div className="course-header group">
      <h2>Skill</h2> 
      <ul className="course-nav">
        <li><NavLink to="/skills/rails">Ruby on Rails</NavLink></li>
        <li><NavLink to="/skills/react">React.js</NavLink></li>
        <li><NavLink to="/skills/redux">Redux</NavLink></li>
        <li><NavLink to="/skills/javascript">JavaScript</NavLink></li>
        <li><NavLink to="/skills/html">HTML</NavLink></li>
        <li><NavLink to="/skills/css">CSS</NavLink></li>
      </ul>
    </div>
    
    <Route exact path="/skills" render={ () => <Redirect to="/skills/rails" /> } />
    <Route exact path="/skills/html" component={HTML} />
    <Route exact path="/skills/css" component={CSS} />
    <Route exact path="/skills/javascript" component={JavaScript} />
  </div>
  
);

export default Skills;