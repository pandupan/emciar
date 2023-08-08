'use client'

import * as React from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs"
import { Input } from "../ui/input";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MdEmail } from 'react-icons/md'
import { BsFillClockFill } from  'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


const Navbar = () => {
  const [searchOpen, setSearchOpen] = React.useState(true);
  const [nav, setNav] = React.useState(false);
  const [header, setHeader] = React.useState(true);

  const toggleSearch = () => {
    setSearchOpen((prevSearchOpen) => !prevSearchOpen);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 95) {
      setHeader(false);
    } else {
      setHeader(true);
    }
  };


  return (
    <>
    {/*Header*/}
    <div className="fixed w-full h-auto z-[2]">
      {header &&         
        <div className='hidden xl:flex  w-full justify-between bg-colorfull-darkblue h-[45px] text-sm font-light z-[10]'>
          <div className='flex justify-center items-center gap-8 ml-16'>
            <div className='flex items-center justify-center text-white gap-2'>
              <MdEmail size={15}/>
              <p>emciartalents@gmail.com</p>
            </div>
            <div className='flex items-center justify-center text-white gap-2'>
              <BsFillClockFill size={15}/>
              <p>Mon - Fri: 9.00 am - 6.00 pm</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4 mr-16'>
            <div className='flex items-center justify-center text-white'>
              <p>Emciar is innately talented at connecting talents and clients.</p>
            </div>
              <FaLinkedinIn className="flex justify-center items-center text-white" size={15}/>
          </div> 
        </div>
      }
        <div className="hidden xl:flex w-full h-[95px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-white z-[99]">
          <Image
            src="/images/emciar-logo.png"
            width={90}
            height={90}
            alt="Logo"
            className="ml-4 sm:ml-12 lg:ml-16 sm:p-2"
          />
          <Popover>
            <div className="flex text-justify-center items-center px-2 font-bold ml-20 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transform hover:scale-110 hover:mt-2 hover:font-bold">
              <PopoverTrigger>Home</PopoverTrigger>
              <IoMdArrowDropdown />
              <PopoverContent className="uppercase ml-[190px] mt-8 gap-1 z-[999]">
                <div className="flex flex-col justify-center font-bold text-sm py-4">
                  <Link href="/recruitment" >
                    <div className="py-2 hover:text-blue-500">Recruitment</div>
                  </Link>
                  <Link href="/counseling">
                    <div className="py-2 hover:text-blue-500">Job Counseling</div>
                  </Link>
                </div>
              </PopoverContent>
            </div>
          </Popover>
          <Link href="/contact" className="flex justify-center items-center px-2 font-bold ml-10 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transform hover:scale-110 hover:mt-2 hover:font-bold">
            <p>Contacts</p>
          </Link>
        </div>
    </div>


      <div className={
          nav
            ? "xl:hidden fixed inset-0 bg-black/50 ease-in duration-300 z-[990]"
            : "hidden"
        }
      />

      {/*Navbar*/}
      <div
        className={
          nav
            ? "xl:hidden fixed top-0 right-0 w-[310px] h-full bg-white text-black ease-in duration-300 z-[999] "
            : "hidden"
        }
      >
        <div className="flex justify-end mt-4 mr-4 z-[999]">
          <div onClick={handleNav}>
            {nav ? null : <AiOutlineMenu size={28} />}
          </div>
        </div>
        <div className="p-8 -mt-4">
          <div className="flex flex-col justify-start">
            <div onClick={handleNav}>
              <BsArrowRight size={25} />
            </div>
            <div className="text-sm my-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="border-b-[1px] border-gray-200">Home</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 mt-4 pl-5"> 
                      <li className="border-b-[1px] border-gray-200 pb-4">
                        <Link href="/recruitment">
                          Recruitment
                        </Link>
                      </li>
                      <li>
                        <Link href="/counseling">
                          Job Counseling
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border-b-[1px] border-gray-200 pb-4">
              <Link href="contact">
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Search*/}
      <div className="xl:hidden flex justify-between items-center w-full sticky h-[90px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]">
        <Image
          src="/images/emciar-logo.png"
          width={90}
          height={90}
          alt="Logo"
          className="sm:ml-12 lg:ml-16 p-3"
        />
        <div className="flex justify-center gap-4 mr-4 sm:mr-2 md:mr-8 ">
          <Popover>
            <PopoverTrigger className="xl:hidden">
              {searchOpen ? (
                <AiOutlineSearch size={25} onClick={toggleSearch} />
              ) : (
                <AiOutlineClose size={25} onClick={toggleSearch} />
              )}
            </PopoverTrigger>
            <PopoverContent className="mt-[30px] lg:hidden">
              <Input placeholder="Search..." />
            </PopoverContent>
          </Popover>
          <div onClick={handleNav}>
            {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
