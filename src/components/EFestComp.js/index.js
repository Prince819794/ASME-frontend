import React, { useState } from "react";
import Competition from "../Competition";
import "./efestcomp.css";

const EFestComp = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="comp-main">
      <div className="sec-title">E-Fest Competitions</div>
      <div className="comp-title-li">
        <div
          className={`comp-title ${active === 0 ? "comp-title-active" : ""}`}
          onClick={() => setActive(0)}
        >
          All
        </div>
        <div
          className={`comp-title ${active === 1 ? "comp-title-active" : ""}`}
          onClick={() => setActive(1)}
        >
          HPVC
        </div>
        <div
          className={`comp-title ${active === 2 ? "comp-title-active" : ""}`}
          onClick={() => setActive(2)}
        >
          IAM3D
        </div>
        <div
          className={`comp-title ${active === 3 ? "comp-title-active" : ""}`}
          onClick={() => setActive(3)}
        >
          SDC
        </div>
        <div
          className={`comp-title ${active === 4 ? "comp-title-active" : ""}`}
          onClick={() => setActive(4)}
        >
          Old Guard
        </div>
      </div>
      <Competition />
    </div>
  );
};

export default EFestComp;
