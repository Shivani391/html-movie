import React from 'react'

const Skills = () => {
  return   <div id="skills" class="container">
  <div class="row mt-5">
    <div class="col">
      <div class="title">
        <span class="">Skills</span>
      </div>
      <div
        class="icons fw-bolder mt-5 d-flex flex-wrap justify-content-around"
      >
        <div><i class="fab fa-html5 text-danger"> </i> HTML5</div>
        <div><i class="fab fa-css3-alt text-primary"> </i> CSS3</div>
        <div>
          <i class="fab fa-js-square text-warning"> </i> JavaScript
        </div>
        <div><i class="fab fa-github-square"> </i> Github</div>
        <div><i class="fab fa-bootstrap text-info"> </i> Bootstrap</div>
        <div><i class="fab fa-figma text-danger"> </i> Figma</div>
      </div>
    </div>
  </div>
</div>
   
  }

export default Skills
