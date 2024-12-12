import React from 'react'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate } from 'react-router-dom';
import Map from '../components/homepage/map';

const Home = () => {
  return (
    <>
    <Map />
    </>
  )
}

export default Home