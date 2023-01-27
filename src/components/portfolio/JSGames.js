import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/project1.png";
import IMG2 from "../../assests/project2.png";
import IMG3 from "../../assests/project3.png";
import flappybird from "../../assests/flappybirdhosting.mp4";
import snakegame from "../../assests/snakegamehost.mp4";
import tetrisgame from "../../assests/tetrisgamehosting.mp4";

const data = [
  {
    id: 1,
    image: IMG1,
    video: flappybird,
    title:
      "Flappy Bird Game Which Can Be Played On Mobiles, Click Live Demo To Play",
    github: "https://github.com/shubham-sde-null/js-game-flappy-bird",
    demo: "https://shubham-sde-null.github.io/js-game-flappy-bird/",
  },
  {
    id: 2,
    image: IMG2,
    video: snakegame,
    title: "Snake Game Which Can Be Played On Mobiles, Click Live Demo To Play",
    github: "https://github.com/shubham-sde-null/snakegame",
    demo: "https://shubham-sde-null.github.io/snakegame/",
  },
  {
    id: 3,
    image: IMG3,
    video: tetrisgame,
    title:
      "Tetris Game Which Can Be Played On Mobiles, Click Live Demo To Play",
    github: "https://github.com/shubham-sde-null/tetrisgame",
    demo: "https://shubham-sde-null.github.io/tetrisgame/",
  },
];
function JSGames() {
  return (
    <section id="portfolio">
      {/* <h5>My Rectent Work</h5> */}
      {/* <h2>Portfolio</h2> */}
      {/* <h2>Projects</h2> */}
      <h2>Javascript Games</h2>
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

export default JSGames;
