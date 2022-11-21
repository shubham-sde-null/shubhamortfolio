import React from "react";
import "./Experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>Ptyhon</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <VerifiedIcon />
              <h4>React JS</h4>
              <small className="text-light">Experienced</small>
            </article> */}
            {/* <article className="experience__details">
              <VerifiedIcon />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article> */}
            {/* <article className="experience__details">
              <VerifiedIcon />
              <h4>Material UI</h4>
              <small className="text-light">Intermediate</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
