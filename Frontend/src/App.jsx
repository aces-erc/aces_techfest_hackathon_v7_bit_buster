import { useState } from 'react'
import {Button} from "@/components/ui/Button"
import './App.css'
import Hero from './components/homepage/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-semibold'>It's working hooray</h1>
      <Button>meow</Button>
      <Hero />
    </>
  )
}

export default App
