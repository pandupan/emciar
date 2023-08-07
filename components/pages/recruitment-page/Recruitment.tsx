import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";

const Recruitment = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center mx-auto overflow-x-hidden mt-[140px] ">
        <div className="container flex justify-center mx-auto ">
          <div className="flex mt-24 sm:gap-6 flex-col sm:flex-row w-full justify-center items-center sm:items-start">
            <Image
              src="/images/image1-home6.png"
              width={700}
              height={700}
              alt="recruitment"
              className=""
            />
            <div className="flex flex-col">
              <h1 className="font-normal text-5xl">Recruitment</h1>
              <div className="w-[500px]">
              <p className="text-[#6d6d6d]">
                Our team can assist you in transforming your business through
                our capabilities to stay ahead of the curve.
              </p>
              <p className="text-[#6d6d6d] mt-6">
                Our team of experienced ex-HRs and seasoned headhunters helps
                clients connect with talents worldwide.
              </p>
              </div>
              <div>
              <BsCheck size={35}/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
