/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const Hero = () => {

  const imageSlider = [
    {
      id:1,
      imageUrl:'https://i.ibb.co/tZnQVj1/slide-hero1.jpg'
    },
    {
      id:2,
      imageUrl:'https://i.ibb.co/8sPRSb1/slide-hero2.jpg'
    }
  ]

  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] mt-0 sm:mt-2 md:mt-0 xl:mt-[140px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{clickable:true}}
        className="w-full h-full"
      > 
        {imageSlider.map((item)=>(
          <SwiperSlide key={item.id}>
            <div
              className='w-full h-[100vh] z-[2] absolute bg-no-repeat top-0 right-0 bg-center bg-cover'
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
