import React from "react";
import Image from "next/image";

const Resume = () => {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <h1 className="text-center font-black text-3xl sm:text-4xl">
            Resume Assistance
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-20 sm:gap-20 lg:gap-28 xl:gap-32 sm:items-start sm:mt-32 xl:mt-16 mt-28">
          <div className="flex flex-col justify-center items-center sm:w-[100px] md:w-[125px] xl:w-[170px] w-[170px] text-center">
            <Image
              src="/images/analysis.png"
              width={50}
              height={50}
              alt="analysis"
              className=""
            />
            <h1 className="text-xl font-extrabold mb-4 mt-6">
              Resume Analysis
            </h1>
            <p className="text-[#6d6d6d]">Locating talent in 180+ countries</p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[100px] md:w-[125px] xl:w-[170px] w-[170px] text-center">
            <Image
              src="/images/Hiring-buzzwords.png"
              width={50}
              height={50}
              alt="Hiring-buzzwords"
              className=""
            />
            <h1 className="text-xl font-extrabold mb-4 mt-6">
              Hiring Buzzwords
            </h1>
            <p className="text-[#6d6d6d]">
              Jupiter is gas giant and the biggest planet
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[100px] md:w-[125px] xl:w-[170px] w-[170px] text-center">
            <Image
              src="/images/CV-posting.png"
              width={50}
              height={50}
              alt="CV-posting"
              className=""
            />
            <h1 className="text-xl font-extrabold mb-4 mt-6">CV Posting</h1>
            <p className="text-[#6d6d6d]">
              Job board selection and profile creations
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[100px] md:w-[125px] xl:w-[170px] w-[170px] text-center">
            <Image
              src="/images/CV-distribution.png"
              width={50}
              height={50}
              alt="CV-Distribution"
              className=""
            />
            <h1 className="text-xl font-extrabold mb-4 mt-6">
              CV Distribution
            </h1>
            <p className="text-[#6d6d6d]">
              Digital uploads and sharing to relevant mediums
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
