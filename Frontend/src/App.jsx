import { useState } from 'react'
import './App.css'
import Landing from './pages/landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: "Poppins, sans-serif"}}>
      <Landing />
    </div>
  )
}

export default App
