import React from 'react'
import cal from "../assests/cal.png"

const Projects = () => {
  return (
    <section id="projects" class="projects py-5">
        <div class="container">
          <div class="title">
            <span> Projects </span>
          </div>
          <div class="row">
            <div class="col-md">
              <img src={cal} width="100%" height="100%" alt="" />
            </div>
            <div class="col-md c-p pt-5 text-light">
              <div class="p-2">
                <h2 class="fw-bolder">Port</h2>
                <div>
                  <a href=""><i class="fab fa-github-square"></i></a>
                  <a href=""> <i class="fab fa-chrome"></i></a>
                </div>
                <p class="mt-2">tech used</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam illo odit culpa commodi doloremque aspernatur dolor
                  quaerat iusto mollitia molestias?
                </p>
              </div>
            </div>
          </div>
          <div class="row mt-4 mt-md-0">
            <div class="col-md order-md-2">
              <img src={cal} width="100%" height="100%" alt="" />
            </div>
            <div class="col-md c-p pt-5 text-light bg-primary">
              <div class="p-2">
                <h2 class="fw-bolder">Port</h2>
                <div>
                  <a href=""><i class="fab fa-github-square"></i></a>
                  <a href=""> <i class="fab fa-chrome"></i></a>
                </div>
                <p class="mt-2">tech used</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam illo odit culpa commodi doloremque aspernatur dolor
                  quaerat iusto mollitia molestias?
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-4 mt-md-0">
            <div class="col-md">
              <img src={cal} width="100%" height="100%" alt="" />
            </div>
            <div class="col-md c-p pt-5 text-light">
              <div class="p-2">
                <h2 class="fw-bolder">Port</h2>
                <div>
                  <a href=""><i class="fab fa-github-square"></i></a>
                  <a href=""> <i class="fab fa-chrome"></i></a>
                </div>
                <p class="mt-2">tech used</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam illo odit culpa commodi doloremque aspernatur dolor
                  quaerat iusto mollitia molestias?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects
