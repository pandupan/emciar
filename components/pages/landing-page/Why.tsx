import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

const Why = () => {
  return (
    <div className="container mx-auto mt-64 md:mt-28 mb-12">
      <div>
        <h1 className="font-black sm:text-4xl text-2xl text-center sm:m-16 mb-28 ">
          Why Emciar?
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start items-center md:gap-20 lg:gap-24 xl:gap-24 justify-center flex-wrap">
        <div className="flex flex-col  items-center md:w-[90px] lg:w-[120px] xl:w-[180px] w-[200px]">
          <FaSearchPlus size={55} />
          <h3 className="text-center font-extrabold text-xl my-4">
            Better Finders
          </h3>
          <p className="text-[#6d6d6d] text-center">
            Emciar clients receive far more accurate profiles at even better
            speed and turnaround time as compared to our industry peers across
            India and worldwide.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-[90px] lg:w-[120px] xl:w-[180px] w-[200px] sm:mt-0 mt-28">
          <FaRegEye size={55} />
          <h3 className="text-center font-extrabold text-xl my-4">Transparent</h3>
          <p className="text-[#6d6d6d] text-center">
            Our clients have complete visibility over our entire operations and
            delivery process with dedicated single point of contacts to ensure
            they are always up to date and speed with latest progress on their
            mandates.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-[90px] lg:w-[120px] xl:w-[180px] w-[200px] sm:mt-0 mt-28">
          <FaNetworkWired size={55} />
          <h3 className="text-center font-extrabold text-xl my-4">
            Well Networked
          </h3>
          <p className="text-[#6d6d6d] text-center">
            Most of the talent that we find for our clients are from our
            existing network itself courtesy our team&apos;s several decades of
            experience and professional journeys.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-[90px] lg:w-[120px] xl:w-[180px] w-[200px] sm:mt-0 mt-28">
          <FaHandshake size={55} />
          <h3 className="text-center font-extrabold text-xl my-4">
            More Trusted
          </h3>
          <p className="text-[#6d6d6d] text-center">
            Our network includes talent with a minimum of a few years to several
            decades of experience across sectors and geographies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
