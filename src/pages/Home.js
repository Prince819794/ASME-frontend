import React from 'react'
import Hero from "../components/Hero"
import Header from '../components/Header'
import Chat from '../components/Chat'
import AboutUs from '../components/AboutUs'
import Events from '../components/Events'
import Timeline from '../components/Timeline'
import Test from '../components/Test'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Timeline />
      <Events />
      <Test/>
      <Chat />
    </>
  )
}

export default Home