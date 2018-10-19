import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <h2>John Shen</h2>
        <p> Hello world, I am a full stack developer using ruby on rails and react.js </p>
        <p> <i class="fas fa-envelope"></i> johnshencanada@gmail.com </p>
        <p> <i class="fas fa-home"></i> Vancouver, British Columbia, Canada </p>
        <hr/>

        <Employment />
        <hr/>

        <h3> <i class="fas fa-graduation-cap"></i> Education </h3>
        <p> Computer Engineering, University of California, San Diego </p>
        <hr />

        <h3> Featured Skills </h3>
        <Link to="skills/rails"> Ruby on Rails </Link>
        <Link to="skills/react"> React.js </Link>
        <Link to="skills/ios"> Objective-c  </Link>
        <hr/>
        <h3> Find Skills </h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Skill name" ref={ (input) => this.name = input } /> 
          <button type="submit"> Go </button>
        </form>
      </div>
    );
  }
}

const Employment = () => {

  return (
    <div>
      <h3> <i class="fas fa-suitcase"></i> Employment </h3>
      <p> full stack developer, Shenzhen, China </p>
      <p> junior developer at Moxie Center, San Diego </p>
      <p> Moxie Lab is an incubator in UCSD that helps student entrepreneurs to launch their ideas and products into the market. I worked there as a software advisor. My job was to help these entrepreneurs create software prototype with the least amount of money and effort so they could to get their Minimum Viable Product to the market as soon as possible.</p>
      <p> ios intern at NEXTHOME, San Diego </p>
      <p>NextHome is an iOS app I prototyped that uses Bluetooth Low Energy (BLE) to connect to a multi-purpose micro controller specifically designed for home automation. I worked with a team of Electrical Engineer, Industrial Designer and Firmware engineer to design a LED light bulb that can be controlled through the nextHome app. With the app, the user can turn on and off, adjust brightness, change colors, set timers to make adjustment to the light bulb.</p>
    </div>
  );
}
export default Home;