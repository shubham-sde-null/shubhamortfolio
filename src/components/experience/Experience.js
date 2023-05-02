import React from "react";
import "./Experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { SiMaterialui } from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
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
                <h4>
                  HTML <ImHtmlFive />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  CSS <IoLogoCss3 />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Javascript <SiJavascript />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  React JS <DiReact />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Next JS <TbBrandNextjs />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  React Native <DiReact />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Redux <SiRedux />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Bootstrap <DiBootstrap />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  MUI <SiMaterialui />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  npm <DiNpm />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  GitHub <AiFillGithub />
                </h4>
                <small className="text-light">Experienced</small>
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
                <h4>
                  Node Js <IoLogoNodejs />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  MongoDB <DiMongodb />
                </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Firebase <SiFirebase />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  SQL <GrMysql />
                </h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <VerifiedIcon className="experience__details-icons" />
              <div>
                <h4>
                  Ptyhon <DiPython />
                </h4>
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
