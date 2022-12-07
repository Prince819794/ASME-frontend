import React from 'react'
import Hero from "../components/Hero"
import Header from '../components/Header'
import Chat from '../components/Chat'
import AboutUs from '../components/AboutUs'
import Events from '../components/Events'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Events />
      <Chat />
    </>
  )
}

export default Home