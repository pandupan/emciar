import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Recruitment = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center mx-auto overflow-x-hidden xl:mt-[140px] md:mt-[20px] sm:mt-[60px] mt-[35px]">
        <div className="container flex justify-center mx-auto ">
          <div className="flex xl:mt-16 sm:gap-32 flex-col sm:flex-row w-full justify-center items-center sm:items-start flex-wrap">
            <Image
              src="/images/image1-home6.png"
              width={700}
              height={700}
              alt="recruitment"
              className="sm:p-44 sm:-mb-[250px] sm:-mt-[150px] lg:p-32 lg:-mb-[200px] lg:-mt-[100px] xl:mb-0 xl:mt-0 xl:p-0 p-0"
            />
            <div className="flex flex-col">
              <h1 className="font-normal md:text-5xl text-4xl md:mt-0 sm:mt-0 mt-[60px]">
                Recruitment
              </h1>
              <div className="xl:w-[500px] md:w-auto">
              <p className="text-[#6d6d6d] mt-6">
                Our team can assist you in transforming your business through
                our capabilities to stay ahead of the curve.
              </p>
              <p className="text-[#6d6d6d] mt-6 mb-6">
                Our team of experienced ex-HRs and seasoned headhunters helps
                clients connect with talents worldwide.
              </p>
              </div>
              <div>
              <ol>
                <li className="flex gap-4 p-1 items-center">
                  <div className="text-[#7141b1]">
                    <FaCheck size={16 }/>
                  </div>
                  <p className="text-lg font-bold">
                    Job Posting
                  </p>
                </li>
                <li className="flex gap-4 p-1 items-center">
                  <div className="text-[#7141b1]">
                    <FaCheck size={16 }/>
                  </div>
                  <p className="text-lg font-bold">
                    Talent Identification
                  </p>
                </li>
                <li className="flex gap-4 p-1 items-center">
                  <div className="text-[#7141b1]">
                    <FaCheck size={16 }/>
                  </div>
                  <p className="text-lg font-bold">
                    Matchmake Contacting
                  </p>
                </li>
                <li className="flex gap-4 p-1 items-center">
                  <div className="text-[#7141b1]">
                    <FaCheck size={16 }/>
                  </div>
                  <p className="text-lg font-bold">
                    Interview Talents
                  </p>
                </li>
                <li className="flex gap-4 p-1 items-center">
                  <div className="text-[#7141b1]">
                    <FaCheck size={16 }/>
                  </div>
                  <p className="text-lg font-bold">
                    Filtered Shortlisting
                  </p>
                </li>
              </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
