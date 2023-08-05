import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsFillClockFill } from  'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='hidden lg:flex w-full justify-between bg-colorfull-darkblue h-[45px] text-sm font-light'>
      <div className='flex justify-center items-center gap-8 ml-16'>
        <div className='flex items-center justify-center text-white gap-2'>
          <MdEmail size={15}/>
          <p>emciartalents@gmail.com</p>
        </div>
        <div className='flex items-center justify-center text-white gap-2'>
          <BsFillClockFill size={15}/>
          <p>Mon - Fri: 9.00 am - 6.00 pm</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 mr-16'>
        <div className='flex items-center justify-center text-white'>
          <p>Emciar is innately talented at connecting talents and clients.</p>
        </div>
          <FaLinkedinIn className="flex justify-center items-center text-white" size={15}/>
      </div> 
    </div>
  )
}

export default Header
