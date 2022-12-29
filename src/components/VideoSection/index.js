import React from "react";
import VideoSlider from "../VideoSlider";
import "./videosection.css";

const index = () => {
  const slides = [
    {
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "beach",
    },
    {
      url: "https://www.youtube.com/embed/MLpWrANjFbI",
      title: "boat",
    },
    {
      url: "https://www.youtube.com/embed/u31qwQUeGuM",
      title: "forest",
    },
    {
      url: "https://www.youtube.com/embed/MLpWrANjFbI",
      title: "city",
    },
    {
      url: "https://www.youtube.com/embed/u31qwQUeGuM",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="vd-main">
      <div className="vd-wrapper">
        <div className="vd-head">ASME - NITS VIDEOS</div>
        <div className="video-play-secton">
          <span class="hscroll-line"></span>
          <div className="carousel">
            <div style={containerStyles}>
              <VideoSlider slides={slides} />
            </div>
          </div>
        </div>
        <div className="video-description">
          <div className="title">
            <h4>Video Name</h4>
            <h4>16 Nov'22</h4>
          </div>
          <div className="vd-description">
            Lorem ipsum dolor sit amet consectetueradipiscing elit, sed diam
            nonummy nibh euismod tincidunt lorem20 Lorem ipsum dolor Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Laboriosam fuga, sint
            dolorum voluptas accusantium quasi soluta ullam aliquam sequi cum.
            sit amet consectetur adipisicing elit. Ab laudantium vero
            accusantium voluptates iste ea reiciendis tenetur nam voluptas
            pariatur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
