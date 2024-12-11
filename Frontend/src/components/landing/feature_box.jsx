import React from 'react'

const Feature = ({title, description, children}) => {
  return (
    <div>
        {children}
        <h1>
            {title}
        </h1>
        <p>{description}</p>
    </div>
  )
}

export default Feature