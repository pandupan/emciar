import React from "react";
import Image from "next/image";

const JobCounseling = () => {
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
                Job Counseling
              </h1>
              <div className="xl:w-[500px] md:w-auto">
                <p className="text-[#6d6d6d] mt-6">
                  Emciar works alike with talents from across all walks of life,
                  ethnicities, origins, diversities, backgrounds, personal and
                  professional journeys whether of only a few years or several
                  decades.
                </p>
                <p className="text-[#6d6d6d] mt-6">
                  Talents engage us to borrow our expertise to evaluate, write
                  and rewrite their CVs as well as to find and apply for jobs on
                  their behalf. We are their agony aunts and uncles they discuss
                  in confidence their queries and worries regarding how to
                  become bigger and better at their existing jobs and career
                  stages.
                </p>
                <p className="text-[#6d6d6d] mt-6 mb-6">
                  These talents ask us to prepare them for their interviews,
                  help them evaluate their job offers, compare two different or
                  similar opportunities as well as to keep abreast of the latest
                  trends in the job market relevant to their geographies,
                  sectors and role domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCounseling;
