import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/CODIOtran.png";
import IMG2 from "../../assets/TRIPPIEBRtSample.png";
import IMG3 from "../../assets/FULL COUNT SOFT WASH-1.png";
import IMG4 from "../../assets/JTS-1.png";
import IMG5 from "../../assets/README-1.png";
import IMG6 from "../../assets/TIK-TAK-CODE-1 (1).png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "My first group project, a website to assist graduate students after bootcamp",
    github: "https://github.com/JonSno29/Number_1_Coders.git",
    demo: "https://jonsno29.github.io/Number_1_Coders/",
  },
  {
    id: 2,
    image: IMG2,
    title: "My second group project, A roadtrip documentation application",
    github: "https://github.com/JonSno29/Trippie-101.git",
    demo: "https://trippie-101.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "A pressure washing webpage for a co-worker",
    github:  "https://github.com/JonSno29/Warsh",
    demo:"https://jonsno29.github.io/Warsh/",
  },
  {
    id: 4,
    image: IMG4,
    title: "My first Professional Portfolio, University Of Minnesota themed",
    github: "https://github.com/JonSno29/JTS_PORTFOLIO",
    demo: "https://jonsno29.github.io/JTS_PORTFOLIO/",
  },
  {
    id: 5,
    image: IMG5,
    title: "My GitHub README.md page, I will never complete this. ",
    github: "https://github.com/JonSno29 ",
    demo: "https://github.com/JonSno29 ",
  },
  {
    id: 6,
    image: IMG6,
    title: "Our final coding bootcamp project three, TIK-TAK-CODE ",
    github:"https://github.com/vivid20221/Tik-Tak-Code.git",
    demo:  "https://github.com/vivid20221/Tik-Tak-Code.git",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PORTFOLIO</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;