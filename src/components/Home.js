import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import photo from './photo1.png';
import photo1 from './photo1.png';
import photo2 from './photo2.png';
import photo3 from './photo2.png';
import photo4 from './photo2.png';
import photo5 from './photo2.png';

class Home extends Component {    
  
  handleSubmit = (e) => {
    e.preventDefault();
    let ambassadorName = this.name.value;
    let path = `ambassadors/${ambassadorName}`;
    this.props.history.push(path);
  }

  componentDidMount() {

    axios.get('/user?ID=12345')
      .then(function (response) {

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <div className="main-content home">
        <Project />
        <hr/>
      </div>
    );
  }
}

const Project = () => {

  return (
    <div>
      <h3> <i class="fas fa-suitcase"></i> Projects </h3>
      <p>
      1. Exosphere. An social E-commerce platform I built using Ruby on Rails and React. 
      Tech stack involves, Images are hosted on Google cloud service. 
      <br/>
      website link:  
      <a href="http://www.exosphere.tech" target="_blank">www.exosphere.tech </a>
      </p>
      <div className="gallery">
        <img src={photo1} alt="Cinque Terre" width="300" height="200"/>
      </div>
      <div className="gallery">
        <img src={photo2} alt="Cinque Terre" width="300" height="200"/>
      </div>
      <Link className="rubyColor" to="skills/rails">  Ruby on Rails </Link>
      <Link className="reactColor" to="skills/react"> React.js </Link>
      
      <hr/>

      <p>
      2. Scoreboard. A simple React-Redux application. Implemetation of Redux store, actions and
      reducers. 
      <br/>
      source code and link:  

      <a href="https://github.com/johnshencanada/React-Redux-Demo" target="_blank">www.github.com/johnshencanada </a>
      </p>
      <div className="gallery">
        <img src={photo3} alt="Cinque Terre" width="300" height="200"/>
      </div>

      <Link className="nodeColor" to="skills/javascript"> Node.js </Link>
      <Link className="reactColor" to="skills/react"> React.js </Link>
      <Link className="reduxColor" to="skills/react"> Redux </Link>
      
      <hr/>
      <p> 
      3. NextHome. A home automation app that connects to a smart lightbulb.
      <Work/>
      <Work/>
      <Work/>

      <a href="http://www.nexthometech.com" target="_blank">www.nexthometech.com </a>
      </p>
      <Link className="objectiveCColor" to="skills/rails"> Objective C </Link>

    </div>
  );
}

const Work = () => {

  return (
    <div className="gallery">
      <img src={photo} alt="Cinque Terre" width="300" height="200"/>
    </div>
  );
}


export default Home;