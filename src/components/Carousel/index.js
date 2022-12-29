import React, { useState } from "react";
import "./carousel.css";

const Carousel = (props) => {
  let imgs = [...props.imgs];
  let n = imgs.length;
  const [active, setActive] = useState(0);
  return (
    <div className="ci-carousel">
      <div className="carousel-active-itm">
        <img src={imgs[active]} alt="" />
      </div>
      <div
        className="carousel-inactive-itm"
        onClick={() => setActive((active + 1) % n)}
      >
        <img src={imgs[(active + 1) % n]} alt="" />
      </div>
    </div>
  );
};
export default Carousel;
