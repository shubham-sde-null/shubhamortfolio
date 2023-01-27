import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shubhampawardev/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com" rel="noopener noreferrer" target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default HeaderSocials;
