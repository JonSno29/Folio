import React from "react";
import "./about.css";
import ME from "../../assets/Images.png";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>ABOUT ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Coding Bootcamp Graduate</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>About 30</small>
            </article>
          </div>
          <p>
           My name is Jon Snover and I am a University Of Minnesota, 

  Full-Stack Coding Bootcamp Student.
  
  I came across this coding bootcamp while studying 

  to become a Real Estate agent, when I asked myself 

  “What do you really want to do?”. Eventually, 

   my goal is to become a remote developer,
  
  a very good one. I love to problem solve, 

  be creative and go above and beyond. 

  I am a very hard worker and believe 

  I would make a strong addition to the your team, 

  please check out my GitHub.
  
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;