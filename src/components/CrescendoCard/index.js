import React from "react";
import "./style.css";

const index = ({ reverse, title, content, img }) => {
  return (
    <div
      className="crs-card-wrapper"
      style={{ flexDirection: reverse ? "row" : "row-reverse" }}
    >
      <div className="crs-card-image">
        <img src="./img1.svg" alt="" />
      </div>
      <div className="crs-card-content">
        <div className="heading">
          <h3>{title}</h3>
          <div className="div"></div>
          <div className="div" style={{ backgroundColor: "#f7bf50" }}></div>
          <div className="div" style={{ backgroundColor: "#61c553" }}></div>
        </div>
        <div className="text">
          <p>{content}</p>
        </div>
        <div className="button">Register Now</div>
      </div>
    </div>
  );
};

export default index;
