import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineBarChart } from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaUserPlus } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdEmojiPeople } from 'react-icons/md'

const Talent = () => {
  return (
    <div className="bg-colorfull-darkpurple flex justify-center mx-auto">
      <div className="container flex mt-32 mb-44 flex-col sm:flex-row w-full justify-center items-center sm:items-start flex-wrap">
        <div className="flex flex-col">
          <h1 className="sm:text-4xl text-3xl font-black text-white xl:w-[600px]">
            Talent Acquisition: Our Capabilities
          </h1>
          <p className="text-[#aeaacb] mt-6 xl:w-[440px] mb-6 ">
            Our team can assist you in transforming your business through latest
            tech capabilities to stay ahead of the curve.
          </p>
          <ol>
            <li className="flex gap-4 p-1 items-center">
              <div className="text-[#43baff]">
                <FaCheck size={16} />
              </div>
              <h2 className="text-white sm:text-xl text-md font-light">
                Application Access to the best candidates
              </h2>
            </li>
            <li className="flex gap-4 p-1 items-center">
              <div className="text-[#43baff]">
                <FaCheck size={16} />
              </div>
              <h2 className="text-white sm:text-xl text-md font-light">
                Save time & money
              </h2>
            </li>
            <li className="flex gap-4 p-1 items-center">
              <div className="text-[#43baff]">
                <FaCheck size={16} />
              </div>
              <h2 className="text-white sm:text-xl text-md font-light">
                Enable business growth
              </h2>
            </li>
            <li className="flex gap-4 p-1 items-center">
              <div className="text-[#43baff]">
                <FaCheck size={16} />
              </div>
              <h2 className="text-white sm:text-xl text-md font-light">
                Industry expertise
              </h2>
            </li>
          </ol>
        </div>

        <div className="w-full sm:w-auto flex flex-col">
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-8">
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="m-4">
                <AiOutlineFileSearch size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                SOURCING
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="m-4">
                <AiOutlineBarChart size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                SCREENING
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="text-[#43baff] hover:text-white m-4">
                <FaChalkboardTeacher size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                INTERVIEWING
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 mt-8 ">
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="m-4">
                <FaUserPlus size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                ASSESSMENTS
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="m-4">
                <MdEmojiPeople size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                ONBOARDING
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col text-[#43baff] hover:text-white border border-[#646276] hover:border-[#43baff] xl:w-[170px] h-[150px] w-full md:w-[200px] lg:w-[270px]">
              <div className="m-4">
                <IoMdSettings size={40} />
              </div>
              <h2 className="text-center text-white font-bold text-md">
                RPO°
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talent
