import React from "react";
import Image from "next/image";

const Hiring = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <div className="relative">
        {/* LEFT */}
        <div className="absolute -left-[300px] -top-[30px] hidden sm:flex justify-center items-center w-1/2 z-[-1]">
          <Image
            src="/images/bg-art2-home4.png"
            width={400}
            height={400}
            alt="Decorative Background"
          />
        </div>
        <p className="text-[#7141b1] sm:px-6 lg:px-24 px-0 md:text-sm sm:text-xs text-xs font-extrabold">
          HIRING MANDATES
        </p>
        <p className="md:text-4xl sm:text-3xl text-3xl mt-2 font-black sm:px-6  lg:px-24 px-0 sm:w-full lg:w-full md:w-[500px]">
          TYPICAL TYPES WE WORK MOST OFTEN
        </p>
        <div className="flex flex-col sm:flex-row justify-center mt-[65px] flex-wrap">
          <div className="flex flex-col items-center  md:w-[350px] w-full lg:m-6">
            <Image
              src="/images/WORLDWIDE.png"
              width={45}
              height={45}
              alt="WORLDWIDE"
              className="sm:mt-4 mt-6"
            />
            <p className="sm:text-lg text-xl font-extrabold mt-6">WORLDWIDE</p>
            <p className="text-[#6d6d6d] mt-2 text-center sm:w-full w-[150px]">
              Locating talent in 180+ countries
            </p>
          </div>
          <div className="flex flex-col items-center  sm:w-[350px] w-full sm:mt-0 mt-16 lg:m-6">
            <Image
              src="/images/HIRING-EXECUTIVES.png"
              width={50}
              height={50}
              alt="HIRING-EXECUTIVES"
              className="mt-4"
            />
            <p className="sm:text-lg text-xl font-extrabold mt-6 text-center sm:w-full w-[150px]">
              HIRING EXECUTIVES
            </p>
            <p className="text-[#6d6d6d] mt-2 text-center sm:w-full w-[150px]">
              C-suite and Leadership hiring
            </p>
          </div>
          <div className="sm:hidden md:hidden lg:hidden xl:flex flex flex-col items-center sm:w-[350px] w-full sm:mt-0 mt-16 lg:m-6">
            <Image
              src="/images/TECHNICAL.png"
              width={50}
              height={50}
              alt="TECHNICAL"
              className="mt-4"
            />
            <p className="sm:text-lg text-xl font-extrabold mt-6 text-center ">
              TECHNICAL
            </p>
            <p className="text-[#6d6d6d] mt-2 text-center sm:w-full w-[150px]">
              Web, IoT, Software and Hardware
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-center sm:w-[350px] w-full md:mt-0 mt-16 lg:m-6">
            <Image
              src="/images/MASS-HIRING.png"
              width={45}
              height={45}
              alt="MASS-HIRING"
              className="mt-4"
            />
            <p className="sm:text-lg text-xl font-extrabold mt-6 text-center">
              MASS HIRING
            </p>
            <p className="text-[#6d6d6d] mt-2 text-center sm:w-full w-[150px]">
              10s to 100s new hires per month
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-center sm:w-[350px] w-full sm:mt-0 mt-16 lg:m-6">
            <Image
              src="/images/OFFICE.png"
              width={50}
              height={50}
              alt="OFFICE"
              className="mt-4"
            />
            <p className="sm:text-lg text-xl font-extrabold mt-6">OFFICE</p>
            <p className="text-[#6d6d6d] mt-2 sm:w-full w-[150px] text-center">
              Reception, Support and Facilities Staff
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="absolute -right-[350px] -bottom-[70px] hidden sm:flex justify-center items-center w-1/2">
          <Image
            src="/images/bg-art2-home4.png"
            width={400}
            height={400}
            alt="Decorative Background"
            className="transform scale-x-[-1] scale-y-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hiring;
