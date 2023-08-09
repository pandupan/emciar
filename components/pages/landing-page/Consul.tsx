import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const consultantImage =[
  {
    id:1,
    linkImage:'https://i.ibb.co/n09FN6r/Screenshot-2023-08-09-071417.png,',
    heroText:'NEED A CONSULTATION?',
    subHeroText:'Drop us a line! We are here to answer your questions 24/7'
  }
]

const  Consul = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-[45vh] lg:[55vh] mb-[-49px] md:mb-0 lg:mb-[65px] xl:mb-[70px] z-[1]'>
      {consultantImage.map((item,id)=>(
        <>
          <div 
            key={item.id} 
            className="w-full sm:h-[45vh] lg:h-[55vh] h-[250px] z-[2] absolute bg-no-repeat top-0 right-0 bg-center bg-cover"
            style={{
              backgroundImage:`url(${item.linkImage})`
            }}
          />
          <div className="container w-full sm:ml-18 xl:ml-20 h-auto absolute text-white z-20">
              <div className='-mt-10 sm:mt-0 sm:p-20 space-y-2 sm:space-y-4'>
                <h3 className='text-base md:text-xl lg:text-2xl font-normal'>
                  {item.subHeroText}
                </h3>
                <div className='space-y-2 sm:space-y-6'>
                  <h1 className="text-xl sm:text-5xl lg:text-7xl xl:8xl font-black font-montserrat">
                    {item.heroText}
                  </h1>
                </div>
              </div>
              <Link href="/contact">
                <button className='flex justify-center items-center mx-auto text-xs sm:text-base w-[80px] h-[30px] sm:w-[150px] sm:h-[50px] bg-colorfull-lightblue hover:bg-colorfull-purple text-white mb-4 md:mt-[-65px] lg:-mt-[50px]'>
                  Contact Us
                </button>
              </Link>        
          </div>
        </>
      ))}
    </div>
  )
}

export default Consul
