import React, { useState, useEffect } from "react";
import "./About.css";
import ME from "../../assests/shubhammain.png";
// this two icons will be used when I have experience and clients
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import GroupIcon from "@mui/icons-material/Group";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
function About() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function changeTitle() {
      setWindowSize(window.innerWidth);
      //   console.log("the width is changing:", window.innerWidth);
    }
    window.addEventListener("resize", changeTitle);
  });
  // console.log("the current window size is:", windowSize);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* this is added  */}
      <div className="coderepo">
        <a
          href="https://leetcode.com/shubham-sde-null/"
          target="_blank"
          rel="noopener noreferrer"
          className="coderepoanchor"
        >
          <span>Leetcode Profile </span>

          <span className="iconsnew">
            <SiLeetcode />
          </span>
        </a>
        <a
          href="https://github.com/shubham-sde-null"
          target="_blank"
          rel="noopener noreferrer"
          className="coderepoanchor"
        >
          <span> Github Profile </span>

          <span className="iconsnew">
            <AiFillGithub />
          </span>
        </a>
      </div>
      <div className="background">
        <h4>Background</h4>
        <h5>
          I graduated from{" "}
          <span style={{ fontWeight: "400", color: "#ecf0f1" }}>
            Rajiv Gandhi Institute Of Technology Mumbai University
          </span>{" "}
          after completing Bachelor of Computer Engineering.
        </h5>
      </div>
      {/* this is background end  */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              width={windowSize < 600 ? "100%" : "360px"}
              style={{ obectFit: "contain", objectPosition: "center" }}
              alt="about img"
            />
          </div>
        </div>
        <div className="about__content">
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            porro id fugit reiciendis dolorum inventore obcaecati suscipit
            consectetur, quo ratione culpa aspernatur repellat facilis eaque
            esse beatae sed, eius vitae. */}
            <span className="salutation"> HI THERE! I'M</span>
            <br />
            <span className="myName"> SHUBHAM </span>{" "}
            <span className="myNameSurName"> PAWAR </span>
            <br />
            <span className="aboutMe"></span>A Full-Stack-Developer passionate
            about creating interactive applications and experiences on the web,
            let's connect and make something special together.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <div className="about__cards">
            {/* <article className="about__card">
              <WorkspacePremiumIcon fontSize="large" className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article> */}
            {/*
            <article className="about__card">
              <GroupIcon className="about__icon" />

              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <FolderSharedOutlinedIcon className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed Projects</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
