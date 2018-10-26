import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import photo from './photo2.png';


const rubyColor = {
  border: '1px solid #B02B2C',
  color: '#B02B2C',
  opacity: '0.8'
};

const reactColor = {
  border: '1px solid #7ED9F7',
  color: '#7ED9F7',
  opacity: '1'
};

const nodeColor = {
  border: '1px solid #96bc52',
  color: '#96bc52',
  opacity: '0.8'
};

const reduxColor = {
  border: '1px solid #7050b6',
  color: '#7050b6',
  opacity: '0.8'
};

const objectiveCColor = {
  border: '1px solid #6aaef0',
  color: '#6aaef0',
  opacity: '0.8'
};





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
      1. Exosphere. Exosphere is a ecommerce platform I have built using ruby on rails and react.  
      <a href="http://www.exosphere.tech" target="_blank">www.exosphere.tech </a>
      </p>

      <Work/>
      <Work/>

      <Link to="skills/rails" style={rubyColor}>  Ruby on Rails </Link>
      <Link to="skills/react" style={reactColor}> React.js </Link>
      
      <hr/>

      <p>
      2. SCOREBOARD. React Redux.  
      <a href="http://www.scoreboard.tech" target="_blank">www.scoreboard.tech </a>
      </p>
      <Link to="skills/rails" style={nodeColor}> Node.js </Link>
      <Link to="skills/react" style={reactColor}> React.js </Link>
      <Link to="skills/react" style={reduxColor}> Redux </Link>
      
      <hr/>

      <p>
      3. HUSH. Objective-C and C
      <a href="http://www.scoreboard.tech" target="_blank">www.hush.tech </a>
      </p>
      <Link to="skills/rails" style={objectiveCColor}> Objective C </Link>
      <hr/>

      <p> 
      4.NEXTHOME 
      <a href="http://www.nexthometech.com" target="_blank">www.nexthometech.com </a>
      </p>
      <Link to="skills/rails" style={objectiveCColor}> Objective C </Link>

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