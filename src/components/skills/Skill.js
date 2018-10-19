import React from 'react';

const Skill = (props) => (
  <li className="skill media group">
    <img className="skill-img" src={props.img} alt="skill" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <a className="btn btn-demo" target="_blank" href={props.demo}>           
      	{props.demo ? 'Demo' : ''}
 			</a>
    </div>
  </li>
);

export default Skill;