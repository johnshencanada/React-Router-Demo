import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Exosphere = (props) => (

  <div className="gallery">

    <h3>2.Token Airdrop </h3>
    <p>
    link:  
    <a href="http://www.exosphere.tech" target="_blank">github.com/johnshencanada </a>
    </p>

    <p>
    "NextHome" is a home automation app that connects and controls a smart light bulb using bluetooth low energy.
    </p>  

    <p>
    The app implements the micro-services architecture to make the app easier to maintain.
    The app is mainly divided into 3 services.
    </p>

    <Link className="objectiveCColor" to="skills/rails"> Objective C </Link>

  </div>

);

export default Exosphere;