'use client'

import * as React from "react";
import Image from "next/image"
import { IoMdArrowDropdown } from "react-icons/io"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { PopoverAnchor } from "@radix-ui/react-popover"
import { Input } from "../ui/input"


const Navbar = () => {
  const [searchOpen, setSearchOpen] = React.useState(true);

  const toggleSearch = () => {
    setSearchOpen((prevSearchOpen) => !prevSearchOpen);
  };

  return (
    <>
      <div className="hidden lg:flex w-full sticky h-[95px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] ">
        <Image 
          src="/images/emciar-logo.png"
          width={90}
          height={90}
          alt="Logo"
          className="ml-4 sm:ml-12 lg:ml-16 sm:p-2"
        />
        <Popover>
          <div className="flex text- justify-center items-center px-2 font-bold ml-20 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transform hover:scale-110 hover:mt-2 hover:font-bold">
            <PopoverTrigger>Home</PopoverTrigger>
            <IoMdArrowDropdown/>
            <PopoverContent className="uppercase ml-[190px] mt-8 gap-1">
              <div className="flex flex-col justify-center font-bold text-sm py-4 ">
                <div className="py-2 hover:text-blue-500">
                  Recruitment
                </div>
                <div className="py-2 hover:text-blue-500">
                  Job Counseling
                </div>
                
              </div>
            </PopoverContent>
            
          </div>
        </Popover>
        <div className="flex justify-center items-center px-2 font-bold ml-10 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transform hover:scale-110 hover:mt-2 hover:font-bold">
          <p>Contatcs</p>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center w-full sticky h-[90px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] ">
        <Image 
          src="/images/emciar-logo.png"
          width={90}
          height={90}
          alt="Logo"
          className="sm:ml-12 lg:ml-16 p-3"
        />
        <div className="flex justify-center gap-4 mr-4 sm:mr-2">
          <Popover>
            <PopoverTrigger className="lg:hidden">
              {searchOpen ? (
                  <AiOutlineSearch size={25} onClick={toggleSearch} />
                ) : (
                  <AiOutlineClose size={25} onClick={toggleSearch} />
                )}
            </PopoverTrigger>
            <PopoverContent className="mt-[30px] lg:hidden">
              <Input placeholder="Search..."/>
            </PopoverContent>
          </Popover>
          <AiOutlineMenu size={25}/>
        </div>
      </div>
    </>
  )
}

export default Navbar
