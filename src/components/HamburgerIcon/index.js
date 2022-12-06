import React, { useState } from "react";
import "./icon.css";

const HamIcon = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <svg
      width="42"
      height="32"
      viewBox="0 0 42 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setShowMenu(!showMenu)}
      className="ham_icon"
    >
      <path
        id={`${showMenu ? "topS" : "top"}`}
        className="st"
        d="M3 3H39.2019"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id={`${showMenu ? "midS" : "mid"}`}
        className="st"
        d="M3 15.9778H39.2019"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id={`${showMenu ? "bottomS" : "bottom"}`}
        className="st"
        d="M3 28.9556H39.2019"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1701_1626"
          x1="3"
          y1="3"
          x2="37.1907"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_1701_1626"
          x1="3"
          y1="3"
          x2="37.1907"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HamIcon;
