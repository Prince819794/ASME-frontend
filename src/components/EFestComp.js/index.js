import React, { useState } from "react";
import Competition from "../Competition";
import hpvcMain from "../../assets/hpvc-main.png";
import hero from "../../assets/heroBg.png";
import hpvcMain2 from "../../assets/hpvc-main-2.png";
import hpvcS1 from "../../assets/hpvc-sub-1.png";
import hpvcS2 from "../../assets/hpvc-sub-2.png";
import eFestBg from "../../assets/e-fest-bg.png";
import "./efestcomp.css";

const competitions = [
  {
    title: "All",
    description: "Human Powered Vehicle Challenge",
    content1: `ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by Altair, is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.`,
    content2: `The first HPVC competition was in 1983 at the University of California, Davis and was won by California State University, Chico.`,
    mainImg: hpvcMain,
    subImg: hpvcMain2,
    imgs: [hpvcS1, hpvcS2, eFestBg],
  },
  {
    title: "HPVC",
    description: "Human Powered Vehicle Challenge",
    content1: `ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by Altair, is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.`,
    content2: `The first HPVC competition was in 1983 at the University of California, Davis and was won by California State University, Chico.`,
    mainImg: hpvcMain,
    subImg: hpvcMain2,
    imgs: [hpvcS1, hpvcS2, eFestBg],
  },
  {
    title: "IAM3D",
    description: "Human Powered Vehicle Challenge",
    content1: `ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by Altair, is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.`,
    content2: `The first HPVC competition was in 1983 at the University of California, Davis and was won by California State University, Chico.`,
    mainImg: hero,
    subImg: hpvcMain2,
    imgs: [hpvcS1, hpvcS2, eFestBg],
  },
  {
    title: "SDC",
    description: "Human Powered Vehicle Challenge",
    content1: `ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by Altair, is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.`,
    content2: `The first HPVC competition was in 1983 at the University of California, Davis and was won by California State University, Chico.`,
    mainImg: hpvcMain,
    subImg: hpvcMain2,
    imgs: [hpvcS1, hpvcS2, eFestBg],
  },
  {
    title: "Old Guard",
    description: "Human Powered Vehicle Challenge",
    content1: `ASME's e-Human Powered Vehicle Challenge (e-HPVC), sponsored by Altair, is an engineering design and innovation competition that gives students the opportunity to network and apply engineering principles through the design, fabrication, and racing of human powered vehicles.`,
    content2: `The first HPVC competition was in 1983 at the University of California, Davis and was won by California State University, Chico.`,
    mainImg: hero,
    subImg: hpvcMain2,
    imgs: [hpvcS1, hpvcS2, eFestBg],
  },
];

const EFestComp = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="comp-main">
      <div className="sec-title">E-Fest Competitions</div>
      <div className="comp-title-li">
        {competitions.map((comp, index) => {
          return (
            <div
              className={`comp-title ${
                active === index ? "comp-title-active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {comp.title}
            </div>
          );
        })}
      </div>
      {competitions.map((comp, ind) => {
        return active === ind ? <Competition {...comp} /> : null;
      })}
    </div>
  );
};

export default EFestComp;
