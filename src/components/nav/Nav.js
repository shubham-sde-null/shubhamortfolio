import React, { useState } from "react";
import "./Nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
function Nav() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className="navbar">
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <HomeOutlinedIcon />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <PersonOutlineOutlinedIcon />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BookOutlinedIcon />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <HandshakeOutlinedIcon />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MessageOutlinedIcon />
      </a>
    </div>
  );
}

export default Nav;
