import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assests/project1.png";
import IMG2 from "../../assests/project2.png";
import IMG3 from "../../assests/project3.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Full Stack Mobile Phone Website",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "eCommerce Flikart Clone",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Automatic Video Generator",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 4,
    image: IMG1,
    title: "Full Stack Mobile Phone Website",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 5,
    image: IMG1,
    title: "Full Stack Mobile Phone Website",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 6,
    image: IMG1,
    title: "Full Stack Mobile Phone Website",
    github: "https://github.com",
    demo: "",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Rectent Work</h5>
      <h2>Portfolio</h2>
      <div className="conatainer portfolio__conatiner">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn-primary"
                // target="_blank"
              >
                Githhub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                // target="_blank"
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

export default Portfolio;
