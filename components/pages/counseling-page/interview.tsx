import React from "react";
import Image from "next/image";

const Interview = () => {
  return (
    <>
      <div className="container mx-auto mt-16 mb-16">
        <div className="flex justify-center">
          <h1 className="text-center font-black text-3xl sm:text-4xl">
            Interview Counseling
          </h1>
        </div>
        <div className="container flex flex-col xl:flex-row xl:gap-12 justify-center mt-12">
          {/* LEFT */}
          <div className="flex flex-col  lg:justify-start xl:justify-center gap-8 xl:items-center justify-start">
            <div className="flex flex-row justify-start  gap-8 items-center mt-6 sm:w-[400px] w-[200px]">
              <Image
                src="/images/impression.png"
                width={50}
                height={50}
                alt="impression"
                className="items-center"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-extrabold mb-4">Impression</h1>
                <p className="text-[#6d6d6d]">
                  Creating first good and long lasting
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-8 items-center mt-6 sm:w-[400px] w-[200px]">
              <Image
                src="/images/presenting.png"
                width={50}
                height={50}
                alt="presenting"
                className="items-center"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-extrabold mb-4">Presenting</h1>
                <p className="text-[#6d6d6d]">Polish your expressing power</p>
              </div>
            </div>
          </div>
          {/* MID */}
          <div className="flex flex-col lg:justify-start xl:justify-center xl:items-center gap-8 justify-start">
            <div className="flex flex-row justify-start gap-8 items-center mt-6 xl:mt-0 mb-4 sm:w-[400px] w-[200px]">
              <Image
                src="/images/technical2.png"
                width={40}
                height={40}
                alt="technical"
                className="items-center"
              />
              <div className="flex flex-col sm:ml-0 ml-4">
                <h1 className="text-xl font-extrabold mb-4">Technical</h1>
                <p className="text-[#6d6d6d]">
                  Update your functional knowledge
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col lg:justify-start xl:justify-center xl:items-center justify-start gap-8">
            <div className="flex flex-row justify-start gap-8 items-center mt-6 sm:w-[400px] w-[200px]">
              <Image
                src="/images/confidence.png"
                width={50}
                height={50}
                alt="confidence"
                className="items-center"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-extrabold mb-4">Confidence</h1>
                <p className="text-[#6d6d6d]">
                  Rebuild your lost morale or boost existing
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-8 items-center mt-6 sm:w-[400px] w-[200px]">
              <Image
                src="/images/negotiation.png"
                width={50}
                height={50}
                alt="negotiation"
                className="items-center"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-extrabold mb-4">Negotiation</h1>
                <p className="text-[#6d6d6d]">
                  Learn the right mix of under-over sell
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interview;
