import React from 'react'
import Hero from '../components/landing/hero'
import Why from '../components/landing/why'
import Features from '../components/landing/features'
import Navbar from '../components/landing/navbar'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate } from 'react-router-dom'

const Landing = () => {
  const { authUser } = UseAuthStore();
  console.log(authUser);
  
  return (
    <>
      {authUser && (<Navigate to="/home" replace="true" />)}
      <Navbar />
      <Hero />
      <Why />
      <Features />
    </>
  )
}

export default Landing