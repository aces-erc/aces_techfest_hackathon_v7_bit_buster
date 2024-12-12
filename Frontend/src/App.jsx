import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Home from './pages/home'
import { UseAuthStore } from './zustand/AuthStore'
import { Toaster } from "@/components/ui/toaster"

function App() {
  const { checkAuth, authUser } = UseAuthStore()

  useEffect(() => {
    checkAuth();
  }, [])
  

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route path="/" element={authUser?<Navigate to="/home" replace={true} />:<Landing />} />
        <Route path="/home" element={authUser? <Home /> : <Navigate to="/" replace={true}/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
