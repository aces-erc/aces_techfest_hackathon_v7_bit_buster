import { useState } from 'react'
import {Button} from "@/components/ui/Button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-semibold'>It's working hooray</h1>
      <Button>meow</Button>
    </>
  )
}

export default App
