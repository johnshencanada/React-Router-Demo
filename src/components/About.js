import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => (
    <div className="main-content home">
        <h2> John Shen</h2>
        <p> Hello World! I am a Front-End developer passionate about crafting beautiful user interface. 

        </p>
        
        <hr/>
        <p> <i class="fas fa-envelope"></i> johnshencanada@gmail.com </p>
        <p> <i class="fas fa-home"></i> Vancouver, British Columbia, Canada </p>
        <a href="http://www.github.com/johnshencanada" target="_blank">  www.github.com/johnshencanada </a>
        <hr/>
        <h3> <i class="fas fa-graduation-cap"></i> Education </h3>
        <p> Computer Engineering, University of California, San Diego </p>
        <hr />
        <h3> Featured Skills </h3>
        <Link className="rubyColor" to="skills/rails"> Ruby on Rails </Link>
        <Link className="reactColor" to="skills/react"> React.js </Link>
        <Link className="objectiveCColor" to="skills/ios"> Objective-c  </Link>
    </div>
);

export default About;