import React from 'react';
import Skill from './Skill';
import { RailsSkills } from '../../data/skills';

const Rails = (props) => {
  let skills = RailsSkills.map((skill) => {
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

export default Rails;