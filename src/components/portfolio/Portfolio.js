import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/project1.png";
import IMG2 from "../../assests/project2.png";
import IMG3 from "../../assests/project3.png";
import flipkartClone from "../../assests/flipkarthost.mp4";
import mobileComparisonWebsite from "../../assests/108mobileshost.mp4";
import reactAndHooks from "../../assests/reactandhookshost.mp4";
import ReactRedux from "./ReactRedux";
import JSGames from "./JSGames";
const data = [
  {
    id: 1,
    image: IMG1,
    video: flipkartClone,
    title: "Full Responsive eCommerce Website Flipkart's Clone",
    github: "https://github.com/shubham-sde-null/flipkartCloneMUI",
    demo: "https://flipkartmini.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    video: mobileComparisonWebsite,
    title: "Smartphone Reviews and Comparisons Website",
    github: "https://github.com/shubham-sde-null/108mobiles",
    demo: "https://108mobiles.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    video: reactAndHooks,
    title: "React Website Which Explains Use Of React and React Hooks",
    github: "https://github.com/shubham-sde-null/reactjsAndHooks",
    demo: "https://shubham-sde-null.github.io/reactjsAndHooks/",
  },
  // {
  //   id: 4,
  //   image: IMG1,
  //   title: "Full Stack Mobile Phone Website",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 5,
  //   image: IMG1,
  //   title: "Full Stack Mobile Phone Website",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: "Full Stack Mobile Phone Website",
  //   github: "https://github.com",
  //   demo: "",
  // },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      {/* <h2>Portfolio</h2> */}
      <h2>Projects</h2>
      <h2>Full Stack MERN Project</h2>
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

      <ReactRedux />
      <JSGames />
    </section>
  );
}

export default Portfolio;
