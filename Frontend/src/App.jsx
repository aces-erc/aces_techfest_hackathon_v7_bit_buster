import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Home from './pages/home'
import { UseAuthStore } from './zustand/AuthStore'
import { Toaster } from "@/components/ui/toaster"

function App() {
  const [count, setCount] = useState(0)
  const { checkAuth, authUser } = UseAuthStore()

  useEffect(() => {
    checkAuth();
  }, [])

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
