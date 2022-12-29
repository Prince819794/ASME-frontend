import React from "react";
import Bg from "../../assets/e-fest-bg.png";
import overlay from "../../assets/e-fest-overlay.png";
import subBg from "../../assets/aboutBg.png";
import eFest from "../../assets/efest.png";
import eFest1 from "../../assets/e-fest1.png";
import eFest2 from "../../assets/e-fest2.png";
import eFest3 from "../../assets/e-fest3.png";
import eFest4 from "../../assets/e-fest4.png";
import eFest5 from "../../assets/e-fest5.png";
import "./styles.css";

const EfestLanding = () => {
  return (
    <>
      <div className="e-fest-main">
        <div className="e-fest-overlay">
          <img src={overlay} alt="overlay" />
        </div>
        <img src={Bg} alt="e-fest-bg" className="bgImg" />
        <div className="e-main-wrapper">
          <div className="e-wrap-t1">ASME E-Fest</div>
          <div className="e-wrap-t2">
            <div>
              <div className="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div style={{ color: "#3031c7" }}>Innovate.</div>
              <div style={{ color: "#c04af8" }}>Create.</div>
            </div>
            <div>
              <div style={{ color: "#d84d60" }}>Compete.</div>
              <div style={{ color: "#d84d60" }}>Celebrate.</div>
              <div className="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="e-wrap-t3">2022-23</div>
        </div>
      </div>
      <div className="e-fest-sub">
        <img src={subBg} alt="" className="bgImg" />
        <div className="sub-main">
          <div className="sub-title">
            <div>ASME Engineering Festivals (E-Fest)®</div>
            <img src={eFest} alt="e-fest" style={{ height: "3rem" }} />
          </div>
          <div className="sub-content">
            ASME Engineering Festivals® (or E-Fests) are WAY more than just a
            series of events. They're a movement driven by engineering students
            and early-career engineers, like YOU, that has gained force
            globally.
          </div>
          <div className="sub-images">
            <img src={eFest1} alt="" className="e-img" />
            <img src={eFest2} alt="" className="e-img" />
            <img src={eFest3} alt="" className="e-img" />
            <img src={eFest4} alt="" className="e-img" />
            <img src={eFest5} alt="" className="e-img" />
          </div>
        </div>
        <div className="sub-text">
          Going beyond the classroom or laboratory and put engineering design
          principles to the test by applying them in ASME Student Competitions
          (enter as an individual or a team). Competitions are both all virtual
          (held at E-Fest Digital) or in-person
        </div>
      </div>
    </>
  );
};

export default EfestLanding;
