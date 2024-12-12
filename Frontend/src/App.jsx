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

function App() {
  const { checkAuth, authUser } = UseAuthStore()

  useEffect(() => {
    checkAuth();
  }, [])
  

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/request" element={<Request />} />
          <Route path="/appointment" element={<Appointment />} />
        </Route>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
