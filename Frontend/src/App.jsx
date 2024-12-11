import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Home from './pages/home'
import { UseAuthStore } from './zustand/AuthStore'


function App() {
  const [count, setCount] = useState(0)
      const {authUser, checkAuth} = UseAuthStore()
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
