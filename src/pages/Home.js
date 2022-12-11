import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Chat from "../components/Chat";
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";
import Timeline from "../components/Timeline";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Timeline />
      <Events />
      <VideoSection />
      <Chat />
    </>
  );
};

export default Home;
