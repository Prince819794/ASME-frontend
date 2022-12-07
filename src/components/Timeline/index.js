import React from "react";
import timelineBg from "../../assets/timelineBg.png";
import efest from "../../assets/efest.png";
import "./timeline.css";
import { useState } from "react";

const Timeline = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="timeline-main">
      <img src={timelineBg} alt="timeline-bg" className="timeline-bg" />
      <div className="time-wrapper">
        <div className="bg-box"></div>
        <div className="time-head">Timeline</div>
        <div className="time-main">
          <img src={efest} alt="asme-efest" />
          <div className="efest-body">
            <div className="efest-title">ASME e-fest &#60;&#62;</div>
            <div className="efest-tag">
              Innovate. Create. Compete. Celebrate.{" "}
            </div>
            <div className="efest-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </div>
          </div>
        </div>
        <div className="main-timeline">
          <div className="time-line"></div>
          <div className="itm-li">
            <div className={`itm ${active === 0 ? "itm-active" : ""}`}>
              <div className="name">Orientation</div>
              <div className="ci"></div>
              <div
                className={`${active === 0 ? "upcoming" : "upcoming-inactive"}`}
              >
                Upcoming...
              </div>
            </div>
            <div className={`itm ${active === 1 ? "itm-active" : ""}`}>
              <div className="name" id="n2">
                ASME e-fest
              </div>
              <div className="ci"></div>
              <div
                className={`${active === 1 ? "upcoming" : "upcoming-inactive"}`}
              >
                Upcoming...
              </div>
            </div>
            <div className={`itm ${active === 2 ? "itm-active" : ""}`}>
              <div className="name" id="n3">
                ASME efx
              </div>
              <div className="ci"></div>
              <div
                className={`${active === 2 ? "upcoming" : "upcoming-inactive"}`}
              >
                Upcoming...
              </div>
            </div>
            <div className={`itm ${active === 3 ? "itm-active" : ""}`}>
              <div className="name" id="n4">
                Ekavyom
              </div>
              <div className="ci" style={{ backgroundColor: "#493481" }}></div>
              <div
                className={`${active === 3 ? "upcoming" : "upcoming-inactive"}`}
              >
                Upcoming...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
