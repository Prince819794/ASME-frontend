import React from "react";
import "./crestyle.css"
import cresendo_bg from "../../assets/crescendoBody_landing.png";

const index = () => {
  const pop_up=()=>{

  }
  return (
    <div >
      <div className="crescendoBody_landing">
        <img src={cresendo_bg} className="bgImg"/>
        <div className="explore_btn" onclick={pop_up}>Explore</div>
      </div>
    </div>
  );
};

export default index;
