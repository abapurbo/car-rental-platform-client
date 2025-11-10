import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdSpeedometer } from 'react-icons/io';
import { GiGasPump } from 'react-icons/gi';
import { TbManualGearbox } from 'react-icons/tb';
export default function HeroBanner() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full h-full inter-font'>
              <div className="banner container mx-auto w-full p-10 h-full">

              <div className="w-full mt-10 flex flex-col  ">
                <div>
                  <h1 className="text-black noto-sans-georgian font-extrabold text-5xl text-start leading-tight">
                    <span>Looking To Save More</span><br />
                    On Your <span className="bg-red-600 text-white transform -skew-x-12 inline-block px-2">Rental Car?</span>
                  </h1>
                  <p className="text-xl  italic text-start text-gray-800 mt-6">
                    We Provide The Best Car Options And Expert Services For<br />
                    The Greatest Customer Experience
                  </p>
                </div>
                <div className='flex flex-col mt-10 items-start'>
                  <h1 className='text-[15px] text-black font-semibold'>BMW M8 Competition</h1>
                  <p className='text-2xl font-bold text-red-600'>$1178.90<small className='text-gray-800 font-semibold'>/day</small></p>
                  <div className='flex justify-around items-center border-t-2 mt-3 border-l-2 border-r-2 rounded-full border-gray-500 w-70 h-13'>
                    <p className='text-black flex flex-col items-center'>
                      <IoMdSpeedometer className='text-red-600' />
                      <span className='text-xs font-semibold text-gray-800'>4,000</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <TbManualGearbox className='text-red-600' />
                      <span className='text-xs font-semibold text-gray-800'>Auto</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <FaUserFriends className='text-red-600' />
                      <span className='text-xs font-semibold text-gray-800'>Person</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <GiGasPump className='text-red-600' />
                      <span className='text-xs font-semibold text-gray-800'>Petrol</span>
                    </p>
                  </div>
                  <button className='btn bg-red-600 mt-5 text-white w-70 rounded-full'>Booking Now</button>
                </div>
              </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
