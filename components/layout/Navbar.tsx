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
  const [nav, setNav] = React.useState(false);
  const [header, setHeader] = React.useState(true);
  const [popoverOpened, setPopoverOpened] = React.useState(false);
  const [accordionOpenedMobile, setAccordionOpenedMobile] = React.useState(false);

  const handlePopoverOpen = () => {
    setPopoverOpened(!popoverOpened);
  };

  const handleAccordionToggle = () => {
    setAccordionOpenedMobile(!accordionOpenedMobile);
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
          <Link href="/">          
            <Image
              src="/images/emciar-logo.png"
              width={90}
              height={90}
              alt="Logo"
              className="ml-4 sm:ml-12 lg:ml-16 sm:p-2"
            />
          </Link>
          <div className="relative flex justify-center items-center px-2 font-bold ml-10 border-b-2 border-white hover:border-blue-500 transform hover:mt-2 hover:font-bold transition group">
            <Link href="/" className="hover:text-blue-500 hover:scale-110 transition">
              Home
            </Link>
            <div className="hidden group-hover:flex absolute -bottom-[135%] left-0 w-[200px] bg-white shadow-lg px-8 flex-col justify-center font-bold py-4">
              <Link href="/recruitment">
                <div className="py-2 hover:text-blue-500">Recruitment</div>
              </Link>
              <Link href="/counseling">
                <div className="py-2 hover:text-blue-500 whitespace-nowrap">Job Counseling</div>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center px-2 font-bold ml-10 border-b-2 border-white hover:border-blue-500 transform hover:mt-2 hover:font-bold transition">
            <Link href="/contact" className="hover:text-blue-500 hover:scale-110 transition">
              Contact
            </Link>
          </div>
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
                  <AccordionTrigger 
                    className="border-b-[1px] border-gray-200"
                    onClick={handleAccordionToggle}
                  >
                  { accordionOpenedMobile ? (
                      <Link href="/">Home</Link>
                    ) : (
                      <span>Home</span>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 mt-4 pl-5"> 
                        <Link href="/recruitment" onClick={handleNav}>
                          <li className="border-b-[1px] border-gray-200 pb-4 mb-2">
                          Recruitment
                          </li>
                        </Link>
                        <Link href="/counseling" onClick={handleNav}>
                          <li>
                          Job Counseling
                          </li>
                        </Link>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="border-b-[1px] border-gray-200 pb-4">
              <Link href="contact" onClick={handleNav}>
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Search*/}
      <div className="xl:hidden flex justify-between items-center w-full sticky h-[90px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]">
        <Link href="/">        
          <Image
            src="/images/emciar-logo.png"
            width={90}
            height={90}
            alt="Logo"
            className="sm:ml-12 lg:ml-16 p-3"
          />
        </Link>
        <div className="flex justify-center gap-4 mr-4 sm:mr-2 md:mr-8 ">
          <div onClick={handleNav}>
            {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
