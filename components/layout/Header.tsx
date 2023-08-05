import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsFillClockFill} from  'react-icons/bs'

const Header = () => {
  return (
    <div className='flex w-full justify-around bg-colorfull-darkblue h-[60px] '>
      <div className='flex items-center justify-center text-white'>
        <MdEmail size={25}/>
        <p>emciartalents@gmail.com</p>
      </div>
      <div className='flex items-center justify-center text-white'>
        <BsFillClockFill size={25}/>
        <p>emciartalents@gmail.com</p>
      </div>
      <div className='flex items-center justify-center text-white'>
        <MdEmail size={25}/>
        <p>emciartalents@gmail.com</p>
      </div>
      
    </div>
  )
}

export default Header
