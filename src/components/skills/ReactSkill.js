import React from 'react';
import Skill from './Skill';
import { ReactSkills } from '../../data/skills';

const ReactSkill = (props) => {
  let skills = ReactSkills.map((skill) => {
    return <Skill title={skill.title}
                   desc={skill.description}
                   img={skill.img_src}
                   key={skill.id} 
                   demo={skill.demo} 
                   />
  }); 
  return (
    <div>
      <ul>
        {skills}
      </ul>
    </div>
  );
}

export default ReactSkill;