import React from 'react';
import { Link } from 'react-router-dom';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import book3 from './book3.jpg';
import book4 from './book4.jpg';
import book5 from './book5.jpg';
import book6 from './book6.jpg';
import book7 from './book7.jpg';

const About = (props) => (
    <div className="main-content home">
        <h2> John Shen</h2>
        <p> 
            Hello World! 
            I am an extremely curious Front-End developer passionate about crafting beautiful user interface. 
            I love coding in modern javascript libraries like React or Vue.
            I am also ready to work on server-side frameworks such as Ruby on Rails and Express.js
        </p>
        <p> 
            I am really eager to learn about modern software architecture and design principles such as - "microservices architecture".
        </p>
        <p>
            I enjoy reading  about macroeconomics and study how distributed ledger technology will impact the world economy.
            I am also a cryptocurrency trader and investor.
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

        <hr/>
        <p> <i class="fas fa-book"></i> Books I am reading </p>
        <p/>

        <div className="book">
            <img src={book1} />
            <img src={book2} />
            <img src={book3} />
            <img src={book4} />
        </div>

        <div className="book">
            <img src={book5} />
            <img src={book6} />
        </div>
    </div>
);

export default About;