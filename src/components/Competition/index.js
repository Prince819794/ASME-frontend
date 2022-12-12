import React from "react";
import hpvcMain from "../../assets/hpvc-main.png";
import hpvcMain2 from "../../assets/hpvc-main-2.png";
import "./styles.css";

const Competition = () => {
  return (
    <div>
      <div className="comp-main-img">
        <img src={hpvcMain} alt="" />
        <div className="comp-wrapper"></div>
        <div className="wr-cnt-1">
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "0.4rem",
            }}
          >
            HPVC
          </div>
          <div>Human Powered Vehicle Challenge</div>
        </div>
        <div className="wr-cnt-2">
          <img src={hpvcMain2} alt="" />
        </div>
      </div>
      <div className="comp-body">
        <div className="comp-content">
          ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by
          Altair, is an engineering design and innovation competition that gives
          students the opportunity to network and apply engineering principles
          through the design, fabrication, and racing of human powered vehicles.
          <div style={{ marginTop: "2rem" }}>
            The first HPVC competition was in 1983 at the University of
            California, Davis and was won by California State University, Chico.
          </div>
        </div>
        <div className="ci-carousel"></div>
      </div>
    </div>
  );
};

export default Competition;
