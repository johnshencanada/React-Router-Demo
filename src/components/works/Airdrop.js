import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Exosphere = (props) => (

  <div className="gallery">

    <h3>2.Token Airdrop Tool </h3>
    <p>
    link:  
    <a href="http://www.exosphere.tech" target="_blank">github.com/johnshencanada/airdrop </a>
    </p>

    <p>
    Airdrop is dada
    </p>  

    <p>
    This is a simple tool I created that airdrops EOS based tokens to EOS token holders based on a csv file.
    </p>

    <Link className="rubyColor" to="skills/rails"> Ruby </Link>

  </div>

);

export default Exosphere;