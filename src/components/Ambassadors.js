import React from 'react';
import TeacherList from '../data/teachers';

const Ambassadors = () => {
  let ambassadors = TeacherList.map((ambassador) => {
    return (
      <li className="ambassador" key={ambassador.id} >
        <img className="ambassador-img" src={ambassador.img_src} alt="ambassador" />
        <h3>{ambassador.name}</h3>
        <p>{ambassador.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Ambassadors </h2>
      <ul className="group">
        {ambassadors}    
      </ul>
    </div>
  );
}

export default Ambassadors;