import React from 'react'

const cardgradient = () => {
  return (
    <svg className="block w-0 h-0" >
      <defs>
        <linearGradient id="cardgradient" className='rotate-45'>
          <stop offset="0%" stopColor="#C0C0C0" /> 
          <stop offset="100%" stopColor="#161616" /> 
        </linearGradient>
      </defs>
    </svg>
  )
}

export default cardgradient