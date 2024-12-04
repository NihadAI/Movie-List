import React from 'react'
import { Vector1, Vector2 } from '../../public/Vectors'

const Footer = () => {
  return (
    <div className='relative w-full'>
        <div className='absolute w-full inset-0'>
            <Vector1/>
        </div>
        <div className='absolute w-full inset-0'>
            <Vector2/>
        </div>
    </div>
  )
}

export default Footer