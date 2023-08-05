import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsFillClockFill } from  'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex w-full justify-around bg-colorfull-darkblue h-[60px] '>
      <div>
        <div className='flex items-center justify-center text-white'>
          <MdEmail size={25}/>
          <p>emciartalents@gmail.com</p>
        </div>
        <div className='flex items-center justify-center text-white'>
          <BsFillClockFill size={25}/>
          <p>Mon - Fri: 9.00 am - 6.00 pm</p>
        </div>
      </div>
      <div>
        <div className='flex items-center justify-center text-white'>
          <p>Emciar is innately talented at connecting talents and clients.</p>
          <FaLinkedinIn/>
        </div>

      </div>
      
    </div>
  )
}

export default Header
