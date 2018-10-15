import React from 'react';

const Skill = (props) => (
  <li className="skill media group">
    <img className="skill-img" src={props.img} alt="skill" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <a className="btn" target="_blank" href="http://www.github.com">           
      	{props.demo ? 'Demo' : ''}
 			</a>
    </div>
  </li>
);

export default Skill;