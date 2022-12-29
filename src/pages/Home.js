import React from 'react'
import Hero from "../components/Hero"
import Chat from '../components/Chat'
import AboutUs from "../components/AboutUs";
import Events from "../components/Events";
import Timeline from "../components/Timeline";
import VideoSection from "../components/VideoSection";

const Home = () => {
  return (
    <>
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
