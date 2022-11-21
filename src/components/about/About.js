import React from "react";
import "./About.css";
import ME from "../../assests/shubham.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupIcon from "@mui/icons-material/Group";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              width="360px"
              style={{ obectFit: "contain", objectPosition: "center" }}
              alt="about img"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <WorkspacePremiumIcon fontSize="large" className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className="about__card">
              <GroupIcon className="about__icon" />

              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FolderSharedOutlinedIcon className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            porro id fugit reiciendis dolorum inventore obcaecati suscipit
            consectetur, quo ratione culpa aspernatur repellat facilis eaque
            esse beatae sed, eius vitae.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
