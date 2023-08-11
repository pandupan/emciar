import React from "react";
import Image from "next/image";

const FooterContacts = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="relative flex flex-col justify-center items-center border-y py-32 w-full">
        <Image
          src="/images/emciar-logo.png"
          width={155}
          height={155}
          alt="emciar"
          className="mt-4"
        />
        <div className="absolute sm:top-20 sm:right-64 top-20 right-5 flex justify-center mt-6">
          <a
            href="https://www.linkedin.com/company/emciar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666666] text-center text-base font-extrabold rounded-full bg-white w-[24px] h-[24px] flex items-center justify-center"
          >
            <span>in</span>
          </a>
        </div>
      </div>
      <p className="mt-4 text-center text-lg text-[#6d6d80] pt-8 mb-14">
        Copyright ©️ 2021 <span className="font-bold text-black">Emciar</span>.
        All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterContacts;
