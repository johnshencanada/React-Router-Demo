import React from 'react';
import Skill from './Skill';
import { JSSkills } from '../../data/skills';

const JavaScript = (props) => {
  let skills = JSSkills.map((skill) => {
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

export default JavaScript;