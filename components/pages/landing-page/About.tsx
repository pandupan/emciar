import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mx-auto mt-20 mb-52">
      <div className="flex flex-col xl:flex-nowrap flex-wrap sm:flex-row sm:items-start items-center justify-center">
        <Image
          src="/images/about-image-1.png"
          width={650}
          height={400}
          alt="About-Company"
          className="mt-4"
        />
        <div className="">
          <p className="text-[#7141b1] md:text-sm sm:text-xs text-xs font-extrabold">
            ABOUT COMPANY
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-3xl mt-2 font-black w-full ">
          Client Confidante for All Things &quot;Talent&quot;
        </h1>
        <p className="text-[#6d6d6d] xl:w-[600px] lg:w-[880px] md:w-[670px] mt-6">
            Emiciar is a millennial-owned and operated new age firm that specializes in finding talents across sectors and geographies.
            We are mentored by globally seasoned sector agnostic industry veterans with them as our board members and advisors. Our team&apos;s
            total experience is well over a century of years working with and at world&apos;s top global who&apos;s who of the global investment companies,
            governments, intermediaries and Fortune 500s. Emciar is only 3 to 6 degress from any relevant talent sought by our clients.
            Our human network access includes ex-CXOs and retired think tanks as well as current CXOs across 180+ countries. Some of these
            includes ex-torchbearers of until date&apos;s landmark corporate and professional discoveries, inventions and innovations.
        </p>
        <p className=" xl:w-[600px] lg:w-[880px] md:w-[670px] italic font-bold mt-20 ">
            We aim to leverage our knowledge derived from our own plus the grateful
            experience of working closely with the aforementioned senior folks has led us to
            separate ourselves from the crowd and become eligible and capable to produce
            the highest quality and yet faster turnaround results for all our clients whilst
            following best industry practices and world-class procedural standards.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
