import React from "react";
import HeroBg from "../../assets/heroBg.png";
import fb from "../../assets/facebook.png";
import inst from "../../assets/instagram.png";
import ln from "../../assets/linkedin.png";
import './hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <img src={HeroBg} alt="" className="bgImg" />
      <div className="wrapper">
        <div className="lev1">ASME NITS</div>
        <div className="lev2">STUDENT SECTION</div>
        <div className="lev3">Setting The Standard.</div>

        <div className="boxes">
          <div className="bx1"></div>
          <div className="bx2"></div>
        </div>

        <div className="socials">
          <img src={fb} alt="fb" className="fb" />
          <img src={inst} alt="insta" className="ins" />
          <img src={ln} alt="linkn" className="ln" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
