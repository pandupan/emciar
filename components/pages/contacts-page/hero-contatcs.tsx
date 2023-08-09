import React from "react"
import Link from "next/link"
import {SlArrowRight} from "react-icons/sl"

const HeroContacts = () => {
  return (
    <>
    <div className="relative flex justify-center bg-[#262051] items-center w-full h-[50vh] mt-0 sm:mt-2 md:mt-0 xl:mt-[140px] mb-28 z-1">
      <div className="container flex flex-row justify-between p-32">
          <h1 className="text-5xl text-white font-black">
            Contacts
          </h1>
          <div className="flex flex-row items-center">
            <Link href="/">
              <h2 className="text-[#aeaacb] font-black text-sm hover:text-white">
                HOME
              </h2>
            </Link>
            <h2 className="text-[#43baff] text-xs mx-2"> 
              <SlArrowRight size={15}/>
            </h2>
            <h2 className="text-white font-black text-sm">
              CONTACTS
            </h2>
          </div>
      </div>
    </div>
    </>
  )
}

export default HeroContacts
