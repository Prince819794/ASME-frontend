import React from "react";
import Carousel from "../Carousel";
import "./styles.css";

const Competition = (props) => {
  return (
    <div>
      <div className="comp-main-img">
        <img src={props.mainImg} alt="" />
        <div className="comp-wrapper"></div>
        <div className="wr-cnt-1">
          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "0.4rem",
              textTransform: 'uppercase'
            }}
          >
            {props.title}
          </div>
          <div>{props.description}</div>
        </div>
        <div className="wr-cnt-2">
          <img src={props.subImg} alt="" />
        </div>
      </div>
      <div className="comp-body">
        <div className="comp-content">
          {props.content1}
          <div style={{ marginTop: "2rem" }}>{props.content2}</div>
        </div>
        <Carousel {...props} />
      </div>
    </div>
  );
};

export default Competition;
