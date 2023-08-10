'use client'

import React from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <div className=" relative bg-colorfull-darkpurple pb-6 h-auto">
      <div className="flex flex-col items-center">
        <Image
          src="/images/emciar-logo.png"
          width={155}
          height={155}
          alt="emciar"
          className="invert mt-4"
        />
        <p className="text-colorfull-lightpurple mt-4 text-center">
          Copyright ©️ 2021 Emciar. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-[100px] container  lg:w-full ">
        {/* Mailbox */}
        <div className="flex flex-col items-center sm:w-[400px] w-full ">
          <div className="text-colorfull-lightblue">
            <MdEmail size={36} />
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[200px] w-full">
            <p className="text-lg text-white my-6  ">emciartalents@gmail.com</p>
            <p className="text-colorfull-lightpurple text-center">
              Our Mailbox
            </p>
          </div>
        </div>
        {/* address */}
        <div className="flex flex-col items-center  sm:w-[400px] w-full ">
          <div className="text-colorfull-lightblue sm:mt-0 mt-2">
            <FaGlobe size={36} />
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[400px] w-[200px] ">
            <p className="text-lg text-white my-6 text-center  w-[200px] xl:w-full">
              Bldg#20C Sector 87, Faridabad, Haryana - 121002
            </p>
            <p className="text-colorfull-lightpurple text-center">
              Our Address
            </p>
          </div>
        </div>
        {/* phone */}
        <div className="flex flex-col items-center  sm:w-[400px] w-full sm:mt-0 mt-12">
          <div className="text-colorfull-lightblue ">
            <PiPhoneCallFill size={36} />
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[200px] w-full">
            <p className="text-lg text-white my-6">(+91) 01294 051 861</p>
            <p className="text-colorfull-lightpurple text-center">Our Phone</p>
          </div>
        </div>
      </div>
      <div className="absolute sm:top-5 sm:right-64 top-5 right-5 flex justify-center mt-6">
          <p className="text-blue-500 text-center text-base font-extrabold rounded-full bg-white w-[24px] h-[24px]">
            in
          </p>
        </div>
    </div>
  );
};

export default Footer;
