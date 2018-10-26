import React from 'react';
import Skill from './Skill';
import { ReactSkills } from '../../data/skills';

const ReactSkill = (props) => {
  let skills = ReactSkills.map((skill) => {
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

export default ReactSkill;