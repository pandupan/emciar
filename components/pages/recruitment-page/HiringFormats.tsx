import React from "react";

const HiringFormats = () => {
  return (
    <div className="relative justify-center items-center">
      <div className="container flex justify-center mx-auto">
      <h1 className="text-center text-5xl font-base w-full sm:mt-40">
        Hiring Formats
      </h1>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center mt-20 gap-8 flex-wrap mb-36">
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Full Time Permanent
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            The conventional format for hiring FTEs on your own company&apos;s payroll
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Part Time Permanent
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Same as FTEs above except for working hours are generally 50% lesser
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Ad-hoc Temporary
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Talent for your one off or periodic occurrence needs
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Pro Bono
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Interns, Freshers and Experienced Volunteers
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Contract to Perm
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            On your payrolls eventually or from start
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md h-auto w-1/4 p-12 ">
          <div>
          <h1 className="text-2xl w-[200px]">
            Off Payrolls
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            You let us worry about your hire&apos;s paychecks
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringFormats;
