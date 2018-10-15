import React from 'react';
import Skill from './Skill';
import { CSSCourses } from '../../data/skills';

const CSS = (props) => {
  let skills = CSSCourses.map((skill) => {
    return <Skill title={skill.title}
                   desc={skill.description}
                   img={skill.img_src}
                   key={skill.id} />
  }); 
  return (
    <div>
      <ul>
        {skills}    
      </ul>
    </div>
  );
}

export default CSS;