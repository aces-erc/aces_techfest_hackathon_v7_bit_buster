import React from 'react'
import {Button} from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className='flex flex-row w-full justify-between'>
        <div>
            <h1 className='font-bold text-3xl text-tert'>
                RedBond
            </h1>
        </div>
        <div>
            <ul className='flex flex-row gap-4'>
                <li><Button variant="outline">SignUp</Button></li>
                <li><Button>Login</Button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar