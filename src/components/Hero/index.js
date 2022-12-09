import React, { useState } from "react";
import HeroBg from "../../assets/heroBg.png";
import fb from "../../assets/facebook.png";
import inst from "../../assets/instagram.png";
import ln from "../../assets/linkedin.png";
import './hero.css'
import { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  const [angle, setAngle] = useState(0);
  const [disX, setDisX] = useState(0);
  const [disY, setDisY] = useState(0);
  const t1Ref = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      setAngle((Math.atan2(mouseX, mouseY) * 180) / Math.PI);

      setDisX((mouseX - window.innerWidth / 2)/50);
      setDisY((mouseY - window.innerHeight / 2)/50);
    });

    document.removeEventListener("mousemove", () => { 
      return;
    })
  })
  return (
    <div className="hero">
      <div className="overlay"></div>
      <img src={HeroBg} alt="" className="bgImg" />
      <div className="wrapper">
        <div className="lev1">ASME NITS</div>
        <div className="lev2">STUDENT SECTION</div>
        <div className="lev3">Setting The Standard.</div>

        <div className="boxes">
          <div
            className="bx1"
            style={{
              transform: `translateX(${disX / 2}px) translateY(${disY / 2}px)`,
            }}
          ></div>
          <div
            className="bx2"
            style={{ transform: `translateX(${disX}px) translateY(${disY}px)` }}
          ></div>
        </div>

        <div className="socials">
          <img src={fb} alt="fb" className="fb" />
          <img src={inst} alt="insta" className="ins" />
          <img src={ln} alt="linkn" className="ln" />
        </div>
      </div>

      <div className="eclipse"></div>
      <div
        className="t1"
        ref={t1Ref}
        style={{ transform: `rotateZ(${angle}deg)`, zIndex: "100" }}
      >
        <div></div>
      </div>
      <div
        className="t2"
        style={{ transform: `rotateZ(-${angle}deg)`, zIndex: "100" }}
      >
        <div></div>
      </div>
      <div
        className="c1"
        style={{ transform: `rotateZ(-${angle}deg)`, zIndex: "100" }}
      >
        <div></div>
      </div>
      <div
        className="c2"
        style={{ transform: `rotateZ(${angle}deg)`, zIndex: "100" }}
      >
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
