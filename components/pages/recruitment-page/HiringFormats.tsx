import React from "react";
import Image from "next/image";

const HiringFormats = () => {
  return (
    <div className="relative justify-center items-center">
      <div className="container flex justify-center mx-auto">
      <h1 className="text-center sm:text-5xl text-4xl font-base w-full mt-40">
        Hiring Formats
      </h1>
      </div>
      
      <div className="container items-center flex flex-col sm:flex-row justify-center mt-20 gap-8 flex-wrap mb-36">
        <div className="flex flex-col border-black border rounded-md xl:h-[400px] xl:w-[350px] lg:w-[410px] lg:h-[325px] sm:h-[385px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring1.png"
              width={100}
              height={100}
              alt="Hiring1"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
            Full Time Permanent
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto ">
            The conventional format for hiring FTEs on your own company&apos;s payroll
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md xl:h-[400px] xl:w-[350px] lg:w-[410px] lg:h-[325px] sm:h-[385px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring2.png"
              width={100}
              height={100}
              alt="Hiring2"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
            Part Time Permanent
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Same as FTEs above except for working hours are generally 50% lesser
          </p>
          </div>
        </div>
        <div className="sm:hidden xl:flex flex flex-col border-black border rounded-md xl:h-[400px] xl:w-[350px] lg:w-[410px] lg:h-[325px] sm:h-[385px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring3.png"
              width={100}
              height={100}
              alt="Hiring3"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
            Ad-hoc Temporary
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Talent for your one off or periodic occurrence needs
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md xl:h-[350px] xl:w-[350px] lg:w-[410px] sm:h-[325px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring1.png"
              width={100}
              height={100}
              alt="Hiring1"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
            Pro Bono
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            Interns, Freshers and Experienced Volunteers
          </p>
          </div>
        </div>
        <div className="flex flex-col border-black border rounded-md xl:h-[350px] xl:w-[350px] lg:w-[410px] sm:h-[325px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring2.png"
              width={100}
              height={100}
              alt="Hiring2"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
            Contract to Perm
          </h1>
          <p className="text-[#6d6d6d] mt-4 xl:w-[250px] sm:w-auto">
            On your payrolls eventually or from start
          </p>
          </div>
        </div>
        <div className="sm:hidden xl:flex flex flex-col border-black border rounded-md xl:h-[350px] xl:w-[350px] lg:w-[410px] sm:h-[325px] md:w-[300px] p-12 ">
          <div>
          <Image
              src="/images/Hiring3.png"
              width={100}
              height={100}
              alt="Hiring3"
              className="mb-8"
            />
          <h1 className="text-2xl font-medium sm:w-[200px] xl:w-[200px] md:w-auto">
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
