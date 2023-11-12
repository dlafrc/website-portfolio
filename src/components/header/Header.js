import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/me-developer.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Della Rachmatika Noer Intanty</h1>
        <h5 className="text-light">an Undergraduate Computer Science Education Student</h5>

        <CTA></CTA>
        <HeaderSocials></HeaderSocials>

        <div className="me">
          <img src={ME} alt="My Photo" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
