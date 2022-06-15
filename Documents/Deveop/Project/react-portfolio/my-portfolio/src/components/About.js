import React from 'react'
import my from "../assests/my_photo.JPG"

const About = () => {
  return (
    <div id="about" class="container about mt-5 py-5">
        <div class="title">
          <span> About me</span>
        </div>
        <div class="row mt-5">
          <div class="col">
            <img src={my} width="100%" alt="" />
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              cumque qui aperiam accusamus tenetur recusandae reprehenderit quia
              quod vitae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias deleniti totam adipisci eveniet cumque, sint temporibus
              ex odit ipsam ratione!
            </p>
          </div>
        </div>
      </div>
  )
}

export default About
