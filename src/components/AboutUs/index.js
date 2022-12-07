import React from "react";
import aboutBg from "../../assets/aboutBg.png";
import competition from "../../assets/competition.png";
import lightning from "../../assets/lightning.png";
import mentoring from "../../assets/mentoring.png";
import workshop from "../../assets/workshops.png";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="about">
      <img src={aboutBg} alt="aboutBg" className="aboutBg" />
      <div className="ab-wrapper">
        <div className="f-head">About Us</div>
        <div className="head">About Us</div>
        <div className="ab-text">
          ASME NIT Silchar Chapter is the youngest technical community of NIT
          Silchar. It aims to promote the
          <span>
            art, science & practice of multidisciplinary engineering and allied
            sciences
          </span>
          among the NIT fraternity.
        </div>

        <div className="timeline">
          <div className="t-itm" id="ti1">
            <div className="t-head" id="th1">
              Engineering Competitions
            </div>
            <img src={competition} alt="" />
            <div className="t-body" id="tb1">
              A SERIES OF STIMULATING COMPETITIONS
            </div>
          </div>
          <div className="t-itm" id="ti2">
            <div className="t-body" id="tb2">
              IMPACTFUL TALKS DELIVERED BY PIONEERS OF INDUSTRIES
            </div>
            <img src={lightning} alt="" />
            <div className="t-head" id="th2">
              LIGHTNING TALKS
            </div>
          </div>
          <div className="t-itm" id="ti3">
            <div className="t-head" id="th3">
              CAREER ADVICE
            </div>
            <img src={mentoring} alt="" />
            <div className="t-body" id="tb3">
              GETTING MENTORED
            </div>
          </div>
          <div className="t-itm" id="ti4">
            <div className="t-body" id="tb4">
              BUILDING YOU SKILL JOINING INTERACTIVE SESSIONS
            </div>
            <img src={workshop} alt="" />
            <div className="t-head" id="th4">
              WORKSHOPS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
