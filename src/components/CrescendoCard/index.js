import React from "react";
import "./style.css";

const index = (props) => {
  console.log(props);
  return (
    <div
      className="crs-card-wrapper"
      style={{ flexDirection: props.reverse ? "row" : "row-reverse" }}
    >
      <div className="crs-card-image">
        <img src={props.img} alt="" />
      </div>
      <div className="crs-card-content">
        <div className="heading">
          <h3>{props.title}</h3>
          <div className="div"></div>
          <div className="div" style={{ backgroundColor: "#f7bf50" }}></div>
          <div className="div" style={{ backgroundColor: "#61c553" }}></div>
        </div>
        <div className="text">
          <p>{props.content}</p>
        </div>
        <div className="button">Register Now</div>
      </div>
    </div>
  );
};

export default index;
