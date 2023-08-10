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
    <div className='relative flex justify-center items-center w-full aspect-square sm:aspect-auto sm:h-[550px] z-[1]'>
      {consultantImage.map((item,id)=>(
        <>
          <div 
            key={item.id} 
            className="w-full h-full z-[2] absolute bg-no-repeat top-0 right-0 bg-center bg-cover"
            style={{
              backgroundImage:`url(${item.linkImage})`
            }}
          />
          <div className="container w-full absolute text-white z-20 text-center">
              <div className='space-y-2 sm:space-y-4'>
                <h3 className='text-base md:text-xl lg:text-2xl font-normal'>
                  {item.subHeroText}
                </h3>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:8xl font-black font-montserrat">
                  {item.heroText}
                </h1>
              </div>
              <Link href="/contact">
                <button className='flex justify-center items-center mx-auto text-base px-4 py-2 bg-colorfull-lightblue hover:bg-colorfull-purple text-white my-8'>
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
