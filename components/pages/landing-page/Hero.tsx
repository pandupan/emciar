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
        pagination={{ clickable: true }}
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
            <div className="container w-full h-full absolute text-white z-20">
              <div className='mt-[130px] p-20 ml-20 space-y-4'>
                <h3 className='text-2xl font-normal'>{item.subsection}</h3>
                <h1 className="text-7xl font-black">{item.section}</h1>
                <button className='w-[150px] h-[40px] bg-colorfull-lightblue hover:bg-colorfull-purple ml-6 z-[30]'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='w-full h-full absolute flex justify-between items-center z-[20]'>
              <button onClick={slidePrev} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 ml-4 p-1">
                <BsArrowLeft size={15}/>
              </button>
              <button onClick={slideNext} className="flex justify-center items-center w-[50px] h-[110px] bg-transparent hover:bg-colorfull-lightblue text-white border-[1px] border-white m-2 mr-4 p-1">
                <BsArrowRight size={15}/>
              </button>
            </div>
            <div
              className='w-full sm:h-[100vh] h-[400px] z-[2] absolute bg-no-repeat top-0 right-0 bg-center bg-cover'
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
