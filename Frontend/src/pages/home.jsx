import React from 'react'
import { UseAuthStore } from '../zustand/AuthStore'
import { Navigate } from 'react-router-dom';

const Home = () => {
  const {authUser} = UseAuthStore();
  return (
    <>
    {!authUser && (<Navigate to="/" replace={true} />)}
    <div>Home</div>
    </>
  )
}

export default Home