import React from 'react'

const StagesCounseling = () => {
  return (
    <div className="flex flex-col items-center bg-[#221f3c] h-auto pb-8 mt-8">
      <h1 className="text-white text-center font-black text-4xl my-8">
        Job Counseling Stages
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 flex-wrap sm:px-0 px-8 justify-center">
      <div className="flex flex-col sm:w-[355px] sm:h-[250px] h-[300px] bg-[#262051] py-12 px-8 border border-[#46416b]">
        <h1 className="text-white text-xl font-extrabold">
          CV Scan
        </h1>
        <p className="text-white mt-4">
          Scrutinizing your resume critically from
          eyes of HR
        </p>
      </div>
      <div className="flex flex-col sm:w-[355px] sm:h-[250px] h-[300px] bg-[#262051] py-12 px-8 border border-[#46416b]">
        <h1 className="text-white text-xl font-extrabold">
          Professional Advisory
        </h1>
        <p className="text-white mt-4">
          Aligning your career goals and
          streamlining directions
        </p>
      </div>
      <div className="flex flex-col sm:w-[355px] sm:h-[250px] h-[300px] bg-[#262051] py-12 px-8 border border-[#46416b]">
        <h1 className="text-white text-xl font-extrabold">
          Job Scouting
        </h1>
        <p className="text-white mt-4">
          You representative to find and apply
          jobs on your behalf
        </p>
      </div>
      <div className="flex flex-col sm:w-[355px] xl:w-[520px] xl:h-[225px] sm:h-[250px] h-[300px] bg-[#262051] py-12 px-8 border border-[#46416b]">
        <h1 className="text-white text-xl font-extrabold">
          Interview Support
        </h1>
        <p className="text-white mt-4">
        Detailed evaluation of your employment contracts
        </p>
      </div>
      <div className="flex flex-col sm:w-[355px] xl:w-[520px] xl:h-[225px] sm:h-[250px] h-[300px] bg-[#262051] py-12 px-8 border border-[#46416b]">
        <h1 className="text-white text-xl font-extrabold">
          Joining Support
        </h1>
        <p className="text-white mt-4">
        Smooth landing ensurance for easy probation completion
        </p>
      </div>
      </div>
    </div>
  )
}

export default StagesCounseling
