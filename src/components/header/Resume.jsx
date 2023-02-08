import React from "react";
import JTSCODER from "../../assets/newestresume2:7.pdf";
import "./resume.css";
const Resume = () => {
  return (
    <div className="Resume">
      <a href={JTSCODER} download className="btn">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;