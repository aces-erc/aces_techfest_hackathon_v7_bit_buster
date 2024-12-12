import React from 'react'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const Home = () => {
  const {authUser} = UseAuthStore();
  return (
    <>
    {!authUser && (<Navigate to="/" replace={true} />)}
    </>
  )
}

export default Home