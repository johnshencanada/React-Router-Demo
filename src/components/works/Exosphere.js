import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import photo from '../photo2.png';
import techstack from '../techstack.png';

const Exosphere = (props) => (

  <div className="gallery">

    <Intro/>
    <Architecture/>

    <Link className="rubyColor" to="skills/rails">  Ruby on Rails </Link>
    <Link className="reactColor" to="skills/react"> React.js </Link>
    <Link className="nodeColor" to="skills/javascript"> Node.js </Link>

  </div>

);


const Intro = (props) => (
  <div>
    <h3>1.Exosphere </h3>
    <p>
    link:  
    <a href="http://www.exosphere.tech" target="_blank">www.exosphere.tech </a>
    </p>

    <p>
    "Exosphere" is a Social E-commerce app that allows users to earn token rewards by uploading pictures with products and driving traffic to products.
    </p>  
    <img src={photo} />
    <hr/>
  </div>
);

const Architecture = (props) => (
  <div>
    <h3>Architecture: </h3>
    <p>    
    I tried to implement this app with "Microservices Architecture" which should theoratically make the app much easier to maintain.
    The back end of the application is divided into 3 services:
    </p>
    <p> 
    1. E-commerce service that deals with product informations (price, categories, pictures, shipping info).
    </p>
    <p>
    2. Social Media service that allows users to upload their pictures of reviewed products. 
    It also keeps track of traffic each user brings to the platform.
    </p>
    <p>
    3. Payment service that pays users tokens. (TODO) 
    </p>
    <p>
    The Front-End is a React application that uses Redux for state management.
    It uses<a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a>to communicate with the servers through REST API.
    </p>

    <img src={techstack} />
    <hr/>
  </div>
);
export default Exosphere;