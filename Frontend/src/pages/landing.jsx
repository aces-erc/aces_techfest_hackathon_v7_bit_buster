import React, { useEffect } from 'react'
import Hero from '../components/landing/hero'
import Why from '../components/landing/why'
import Features from '../components/landing/features'
import Navbar from '../components/landing/navbar'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate, useNavigate } from 'react-router-dom'

const Landing = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Features />
    </>
  )
}

export default Landing