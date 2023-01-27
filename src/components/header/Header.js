import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assests/shubhammain.png";

import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shubham</h1>
        <h5 className="text-light">Full Stack Developer & Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="my profile" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
