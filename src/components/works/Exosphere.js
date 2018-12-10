import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import photo from '../photo2.png';
import techstack from '../techstack.png';

const Exosphere = (props) => (

  <div className="gallery">

    <h3>1.Exosphere </h3>
    <p>
    link:  
    <a href="http://www.exosphere.tech" target="_blank">www.exosphere.tech </a>
    </p>

    <p>
    "Exosphere" is a Social E-commerce app that allows users to earn cryptocurrency rewards by reviewing products and driving traffic to products.
    </p>  
    <img src={photo} />
    <hr/>

    <p>    
    Micro-services architecture was implemented to make the app easier to maintain.
    The back end of the application is divided into 3 services:
    </p>
    <p> 
    1. E-commerce service that deals with products 
    </p>
    <p>
    2. Social Media service that 
    </p>
    <p>
    3. Payment service that keeps track which users 
    </p>

    <p>
    The Front-End is a React application that uses Redux for state management.
    It uses<a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a>to retreive JSON API from the rails servers.

    </p>

    <img src={techstack} />
    <hr/>

    <Link className="rubyColor" to="skills/rails">  Ruby on Rails </Link>
    <Link className="reactColor" to="skills/react"> React.js </Link>
    <Link className="nodeColor" to="skills/javascript"> Node.js </Link>

  </div>

);

export default Exosphere;