import React from 'react'
import Hero from '../components/landing/hero'
import Why from '../components/landing/why'
import Features from '../components/landing/features'
import Navbar from '../components/landing/navbar'

const Landing = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Why />
      <Features />
    </>
  )
}

export default Landing