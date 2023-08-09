import React from 'react'
import Image from 'next/image'

const FooterContacts = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center border-y py-32 w-full">
        <Image
          src="/images/emciar-logo.png"
          width={155}
          height={155}
          alt="emciar"
          className="mt-4"
        />
      </div>
      <p className="mt-4 text-center text-lg text-[#6d6d80] pt-8 mb-14">
      Copyright ©️ 2021 <span className="font-bold text-black">Emciar</span>. All Rights Reserved.
    </p>
    </div>
  )
}

export default FooterContacts
