/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';


const imageSlider = [
  {
    id:1,
    imageUrl:'https://i.ibb.co/tZnQVj1/slide-hero1.jpg',
    section:'RECRUITMENT', 
    subsection:'All Talent Found'
  },
  {
    id:2,
    imageUrl:'https://i.ibb.co/8sPRSb1/slide-hero2.jpg',
    section:'JOB COUNSELING',
    subsection:'All Talent Conected'
  }
]
const Hero = () => {


  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] mt-0 sm:mt-2 md:mt-0 xl:mt-[140px] z-[1]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        ref={swiperRef}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {imageSlider.map((item)=>(
          <SwiperSlide key={item.id}>
            <div className="container w-auto sm:ml-18 xl:ml-20 h-auto absolute text-white z-20">
              <div className='mt-[110px] xl:mt-[210px] sm:p-20 sm:space-y-4'>
                <h3 className='hidden md:block text-2xl font-normal'>{item.subsection}</h3>
                <div className='space-y-2 sm:space-y-6'>
                  <h1 className="text-xl sm:text-7xl xl:8xl font-black font-montserrat ">{item.section}</h1>
                  <button className='text-xs sm:text-base w-[80px] h-[30px] sm:w-[150px] sm:h-[50px] bg-colorfull-lightblue hover:bg-colorfull-purple  sm:ml-32 z-[20]'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className='hidden w-full h-full absolute md:flex justify-between items-center z-[19]'>
              <button onClick={slidePrev} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 ml-4 p-1">
                <BsArrowLeft size={15}/>
              </button>
              <button onClick={slideNext} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 mr-4 p-1">
                <BsArrowRight size={15}/>
              </button>
            </div>
            <div
              className='w-full sm:h-[100vh] h-[350px] z-[2] absolute bg-no-repeat top-0 right-0 bg-center bg-cover'
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  )
}

export default Hero
