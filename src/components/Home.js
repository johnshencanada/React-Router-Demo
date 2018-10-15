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
        <p> <b>Email:</b> johnshencanada@gmail.com </p>
        <p> <b>Phone:</b> 778-522-0766 </p>
        <p> <b>Home:</b> Vancouver, British Columbia, Canada </p>
        <p> <b>Education:</b> University of California, San Diego </p>
        <p> Hello world, my name is john. I am a front end developer. <em>React Router Basics</em> course on Treehouse.</p>
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

export default Home;