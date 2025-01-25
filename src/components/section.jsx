import React from 'react'

const section = ({children, id}) => {
  return (
    <>
    <div id={id} className='container'>
        {children}
    </div>
    </>
  )
}

export default section
