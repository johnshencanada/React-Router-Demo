import React from 'react';
import photo from './photo.png';
import photo2 from './photo2.png';

const Work = () => (
  <div className="">

  <div className="gallery">
    <a target="_blank" href="fjords.jpg">
      <img src={photo} alt="Cinque Terre" width="300" height="200"/>
    </a>
    <div className="desc">Add a description of the image here</div>
  </div>

<div class="gallery">
  <a target="_blank" href="lights.jpg">
      <img src={photo2} alt="Cinque Terre" width="300" height="200"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="lights.jpg">
    <img src="https://www.w3schools.com/css/img_forest.jpg" alt="Northern Lights" width="300" height="200"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>
</div>


);

export default Work;