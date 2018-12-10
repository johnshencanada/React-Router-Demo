import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import nexthome1 from '../nexthome1.jpg';
import nexthome2 from '../nexthome2.jpg';
import nexthome3 from '../nexthome3.jpg';
import nexthome4 from '../nexthome4.jpg';
import nexthome5 from '../nexthome5.jpg';
import nexthome6 from '../nexthome6.jpg';
import nexthome7 from '../nexthome7.jpg';
import nexthome8 from '../nexthome8.jpg';

const Exosphere = (props) => (

  <div className="gallery">

    <h3>3.NextHome </h3>
    <p>
    "NextHome" is a home automation app that connects and controls a smart light bulb using bluetooth lowe energy.
    </p>  

    <div className="gallery">
      <img src={nexthome1} />
    </div>

    <p>

    The app implements the micro-services architecture to make the app easier to maintain.
    The app is mainly divided into 3 services.

    </p>
    <p>


    <div className="gallery">
      <img src={nexthome2} />
    </div>
    <div className="gallery">
      <img src={nexthome3} />
    </div>
    <div className="gallery">
      <img src={nexthome4} />
    </div>
    <div className="gallery">
      <img src={nexthome5} />
    </div>
    <div className="gallery">
      <img src={nexthome6} />
    </div>
    <div className="gallery">
      <img src={nexthome7} />
    </div>
    <div className="gallery">
      <img src={nexthome8} />
    </div>

    <br/>
    </p>

    <Link className="objectiveCColor" to="skills/rails"> Objective C </Link>

  </div>

);

export default Exosphere;