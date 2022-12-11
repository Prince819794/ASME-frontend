import React from "react";
import VideoSlider from "../VideoSlider";
import "./videosection.css";

const index = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1664575196851-5318f32c3f43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "beach",
    },
    {
      url: "https://images.unsplash.com/photo-1670708779502-b524a3ef43f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "boat",
    },
    {
      url: "https://images.unsplash.com/photo-1670679899048-dc29d0a855ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "forest",
    },
    {
      url: "https://images.unsplash.com/photo-1670708472911-d2afe0110ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "city",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1667737996558-9c28a148e47e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
