import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Home from './pages/home'
import { UseAuthStore } from './zustand/AuthStore'
import { Toaster } from "@/components/ui/toaster"
import Layout from './pages/layout'
import Donors from './pages/donors'
import Request from './pages/request'
import Appointment from './pages/appointment'
import ImageUpload from './components/imageUpload'

function App() {
  const { checkAuth, authUser } = UseAuthStore()

  useEffect(() => {
    checkAuth();
  }, [])
  

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={authUser ? <Home /> : <Navigate to="/" replace={true} />} />
          <Route path="/donors" element={authUser ? <Donors /> : <Navigate to="/" replace={true} />} />
          <Route path="/request" element={authUser ? <Request /> : <Navigate to="/" replace={true} />} />
          <Route path="/appointment" element={authUser ? <Appointment /> : <Navigate to="/" replace={true} />} />
        </Route>
        <Route path="/" element={authUser? <Navigate to="/home" replace={true} /> : <Landing />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
