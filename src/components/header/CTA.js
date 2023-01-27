import React from "react";
import CV from "../../assests/shubhamcv.pdf";
function CTA() {
  return (
    <div className="cta">
      {/* here in order to allow our cv to be downloaded we must provide the download attribute in achor tag */}
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
