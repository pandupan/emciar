import React from "react"
import { FaGlobe } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { PiPhoneCallFill } from "react-icons/pi"

const DetailContacts = () => {
  return (
    <div className="flex flex-col justify-center container xl:px-32 sm:px-12">
      <h2 className="text-[#7141b1] font-extrabold text-sm">
        CONTACT DETAILS
      </h2>
      <h1 className="font-black text-4xl my-2">
        Contact us
      </h1>
      <p className="text-[#6d6d6d] xl:w-[1000px] sm:w-full">
      Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We
      will be happy to answer your questions.
      </p>
      <div className="flex flex-col sm:flex-row  justify-center items-start mt-[100px]  ">
        {/* Mailbox */}
        <div className="flex flex-col items-center  p-2 sm:w-[400px] w-full ">
          <div className="text-colorfull-lightblue">
            <MdEmail size={36} />
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[200px] w-full">
            <p className="text-lg  my-6">emciartalents@gmail.com</p>
            <p className=" text-center">
              Our Mailbox
            </p>
          </div>
        </div>
        {/* address */}
        <div className="flex flex-col items-center  sm:w-[400px] w-full ">
          <div className="text-colorfull-lightblue sm:mt-0 mt-2">
            <FaGlobe size={36} />
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[400px] w-[200px]">
            <p className="text-lg  my-6 text-center">
              Bldg#20C Sector 87, Faridabad, Haryana - 121002
            </p>
            <p className=" text-center">
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
            <p className="text-lg  my-6">(+91) 01294 051 861</p>
            <p className=" text-center">Our Phone</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailContacts
