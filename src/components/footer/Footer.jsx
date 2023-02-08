import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        CHECK ME OUT!
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/jon.snover/" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/jon-snover-b15272110/" target="blank">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/JonSno29" target="blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;JON THOMAS SNOVER</small>
      </div>
    </footer>
  );
};

export default Footer;