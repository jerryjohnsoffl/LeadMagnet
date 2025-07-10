import React from 'react'

const Footer = () => {
    const time = new Date
    const year = time.getFullYear()
  return (
    <div className='w-full flex justify-center'>&copy;{year}</div>
  )
}

export default Footer