import React from 'react'
import Hero from "../components/Hero"
import Header from '../components/Header'
import Chat from '../components/Chat'
import AboutUs from '../components/AboutUs'
import Events from '../components/Events'
import Timeline from '../components/Timeline'
import ContactUs from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Timeline />
      <Events />
      <Chat />
      <ContactUs />
    </>
  )
}

export default Home