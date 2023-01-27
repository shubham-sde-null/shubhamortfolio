import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/project1.png";
import IMG2 from "../../assests/project2.png";
import IMG3 from "../../assests/project3.png";
import travelAdvisor from "../../assests/traveladvisorhost.mp4";
import todolist from "../../assests/todolisthost.mp4";
import pokedex from "../../assests/pokedexhost.mp4";

const data = [
  {
    id: 1,
    image: IMG1,
    video: travelAdvisor,
    title: "This Website Suggest Places To Visit While Navigating With Map",
    github: "https://github.com/shubham-sde-null/traveladvisor",
    demo: "https://traveltoplaces.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    video: todolist,
    title: "Full Responive Todo List Website",
    github: "https://github.com/shubham-sde-null/todoListWithReactRedux",
    demo: "https://shubham-sde-null.github.io/todoListWithReactRedux/",
  },
  {
    id: 3,
    image: IMG3,
    video: pokedex,
    title: "This Website Gives Complete Details About All Pokemons",
    github: "https://github.com/shubham-sde-null/pokedex",
    demo: "https://pokiproject.netlify.app/",
  },
];
function ReactRedux() {
  return (
    <section id="portfolio">
      {/* <h5>My Rectent Work</h5> */}
      {/* <h2>Portfolio</h2> */}
      {/* <h2>Projects</h2> */}
      <h2>React Redux Projects</h2>
      <div className="conatainer portfolio__conatiner">
        {data.map(({ id, image, video, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            {/* <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div> */}
            <div className="videoCont">
              {" "}
              <video
                src={video}
                width="100%"
                // height="300px"
                controls
                className="videoPlayer"
              ></video>
            </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Githhub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}

        {/*
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Githhub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              // target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default ReactRedux;
