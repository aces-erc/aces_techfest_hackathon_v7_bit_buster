import React from 'react'

const Feature = ({title, description, children}) => {
  return (
    <div className='bg-gray-200 py-8 px-6 my-2 rounded-md shadow-md text-3xl'>
        {children}
        <h1 className='font-semibold text-xl text-left '>
            {title}
        </h1>
        <p className='py-2 text-sm text-left'>{description}</p>
    </div>
  )
}

export default Feature