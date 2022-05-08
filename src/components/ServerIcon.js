import React from 'react'

function ServerIcon({image}) {
  return (
    <img 
    src={image}
    alt="serverImage"
    className='h-12 cursor-pointer rounded-full transition-all duration-100
    ease-out hover:rounded-3xl' />
  )
}

export default ServerIcon