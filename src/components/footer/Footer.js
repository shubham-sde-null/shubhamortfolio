import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Footer() {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        Shubham Pawar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com" rel="noreferrer" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <TwitterIcon />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shubham Pawar. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
