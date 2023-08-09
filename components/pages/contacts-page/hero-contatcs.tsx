import React from "react"

const HeroContacts = () => {
  return (
    <>
    <div className="relative flex justify-center bg-[#262051] items-center w-full h-[50vh] mt-0 sm:mt-2 md:mt-0 xl:mt-[140px] z-[-1] mb-28">
      <div className="container flex flex-row justify-between p-32">
          <h1 className="text-5xl text-white font-black">
            Contacts
          </h1>
          <div className="flex flex-row items-center">
            <h2 className="text-[#aeaacb] font-black text-sm hover:text-white">
              HOME
            </h2>
            <h2 className="text-[#43baff] text-xs mx-2"> 
            □
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
