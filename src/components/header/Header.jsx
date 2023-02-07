import React from "react";
import Resume from "./Resume";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

import ME from "../../assets/JTSbluetran.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>NICE TO MEET YOU! I AM</h5>
        <h1>JON SNOVER</h1>
        <h5 className="text-light">A FULLSTACK WEB DEVELOPER</h5>
       <Resume/>
       <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;