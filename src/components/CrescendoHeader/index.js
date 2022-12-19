import React from "react";
import "./style.css";
import cresendo_bg from "../../assets/crescendoBody_landing.png";

const index = () => {
  return (
    <div>
      <div className="crescendoBody_landing">
        <img src={cresendo_bg} className="bgImg" alt="background_image" />
        <div className="explore_btn">Explore</div>
      </div>
    </div>
  );
};

export default index;
