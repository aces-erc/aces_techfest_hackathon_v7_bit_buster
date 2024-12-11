import React from 'react'

const Box = (props) => {
  return (
    <div className='bg-gray-200 py-4 px-6 my-2 rounded-md shadow-md'>
        <h1 className='font-semibold text-xl text-left '>
            {props.title}
        </h1>
        <p className='py-2 text-sm text-left'>
            {props.description}
        </p>
    </div>
  )
}

export default Box