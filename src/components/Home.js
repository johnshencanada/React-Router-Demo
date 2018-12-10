import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import photo from './photo1.png';
import photo1 from './photo1.png';
import photo2 from './photo2.png';
import photo3 from './photo2.png';
import photo4 from './photo2.png';
import photo5 from './photo2.png';
import techstack from './techstack.png';

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