import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
          clickable: true,
        }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}

        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-full h-full inter-font'>
            <div className="banner-1   flex lg:flex-row  justify-start mx-auto h-full">

              <div className="banner-content  md:mt-16 md:pl-6  flex flex-col  ">
                <div>
                  <h1 className="hero-title text-white noto-sans-georgian font-extrabold lg:text-5xl  md:text-start text-center leading-tight">
                    <span>Looking To Save More </span><br className='hidden lg:block xl:block sm:block'/>
                    On Your <span className="bg-red-600 text-white transform -skew-x-12 inline-block px-2">Rental Car?</span>
                  </h1>
                  <p className="text-xl  sub-title italic md:text-start text-center text-white mt-6">
                    We Provide The Best Car Options And Expert Services For<br className='hidden lg:block sm:block'/>
                    The Greatest Customer Experience
                  </p>
                </div>
                <div className='btn-content flex flex-col md:mt-10 mt-8 md:items-start items-center'>
                  <h1 className='text-[15px] text-white font-semibold'>BMW M6 Competition</h1>
                  <p className='text-2xl font-bold text-red-600'>$1178.90<small className='text-white font-semibold'>/day</small></p>
                  <div className='flex justify-around items-center border-t-2 mt-3 border-l-2 border-r-2 rounded-full border-gray-500 w-70 h-13'>
                    <p className='text-black flex flex-col items-center'>
                      <IoMdSpeedometer className='text-red-600' />
                      <span className='text-xs font-semibold text-white'>4,000 km</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <TbManualGearbox className='text-red-600' />
                      <span className='text-xs font-semibold text-white'>Auto</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <FaUserFriends className='text-red-600' />
                      <span className='text-xs font-semibold text-white'>4 Person</span>
                    </p>
                    <p className='text-black flex flex-col items-center'>
                      <GiGasPump className='text-red-600' />
                      <span className='text-xs font-semibold text-white'>Petrol</span>
                    </p>
                  </div>
                  <button className='btn bg-red-600 mt-5 text-white w-70 rounded-full'>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full inter-font'>
            <div className="banner-2 flex flex-row justify-start  w-full  h-full">

              <div className="banner-content md:mt-14  md:pl-6  flex flex-col">
                <div>
                  <h1 className="hero-title lg:text-start text-center text-white noto-sans-georgian font-extrabold text-5xl  leading-tight">
                    <span>Experience Ultimate Luxury</span><br className='hidden lg:block xl:block sm:block' />
                    <span> Rolls-Royce With Us</span>
                  </h1>

                  <p className="text-xl sub-title italic md:text-start text-center text-white mt-6">
                    Travel in unmatched comfort and timeless elegance. Premium cars,<br className='hidden lg:block sm:block'/>
                    white-glove service — book your luxury ride today.
                  </p>
                </div>

                <div className="btn-content flex flex-col md:mt-10 mt-8 md:items-start items-center">
                  <h2 className="text-[15px] text-white font-semibold">Rolls-Royce Phantom</h2>

                  <p className="text-2xl font-bold text-red-600">
                    $1,999.00 <small className="text-white font-semibold">/day</small>
                  </p>

                  <div
                    className=" flex justify-around items-center border-t-2 mt-3 border-l-2 border-r-2 rounded-full border-gray-500 w-70 h-13 px-4"
                    role="list"
                    aria-label="car specifications"
                  >
                    <div className="flex flex-col items-center" role="listitem" aria-label="horsepower">
                      <IoMdSpeedometer className="text-red-600" />
                      <span className="text-xs font-semibold text-white">563 hp</span>
                    </div>

                    <div className="flex flex-col items-center" role="listitem" aria-label="transmission">
                      <TbManualGearbox className="text-red-600" />
                      <span className="text-xs font-semibold text-white">Auto</span>
                    </div>

                    <div className="flex flex-col items-center" role="listitem" aria-label="passengers">
                      <FaUserFriends className="text-red-600" />
                      <span className="text-xs font-semibold text-white">4 Passengers</span>
                    </div>

                    <div className="flex flex-col items-center" role="listitem" aria-label="fuel type">
                      <GiGasPump className="text-red-600" />
                      <span className="text-xs font-semibold text-white">Petrol</span>
                    </div>
                  </div>

                  <button
                    className="btn bg-red-600 mt-5 text-white w-70 rounded-full py-3 px-6"
                    aria-label="Book Rolls-Royce Phantom now"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full inter-font'>
            <div className="banner-3  flex flex-row justify-start w-full  h-full">

              <div className="banner-content md:mt-14  md:pl-6 flex flex-col">
                <div>
                  <h1 className="hero-title text-white noto-sans-georgian font-extrabold text-5xl  text-center ">
                    <span>Drive the Luxury You Deserve </span><br className='hidden xl:block sm:block lg:block'/>
                    <span>Experience Mercedes Excellence</span>
                  </h1>

                  <p className="sub-title title text-xl   italic md:text-start  text-center text-white md:px-0 px-6 mt-6">
                    Discover unmatched comfort, performance, and prestige.<br className='hidden xl:block sm:block lg:block'/>
                    Rent your dream Mercedes and redefine your driving experience.
                  </p>
                </div>

                <div className="btn-content flex flex-col md:mt-10 mt-8 md:items-start items-center">
                  <h2 className="text-[15px] text-white font-semibold">Mercedes-Benz S-Class</h2>
                  <p className="text-2xl font-bold text-red-600">
                    $1,250.00 <small className="text-white font-semibold">/day</small>
                  </p>

                  <div className="flex justify-around items-center border-t-2 mt-3 border-l-2 border-r-2 rounded-full border-gray-500 w-70 h-13 px-4">
                    <div className="flex flex-col items-center">
                      <IoMdSpeedometer className="text-red-600" />
                      <span className="text-xs font-semibold text-white">4,500 km</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <TbManualGearbox className="text-red-600" />
                      <span className="text-xs font-semibold text-white">Automatic</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaUserFriends className="text-red-600" />
                      <span className="text-xs font-semibold text-white">4 Seats</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <GiGasPump className="text-red-600" />
                      <span className="text-xs font-semibold text-white">Petrol</span>
                    </div>
                  </div>

                  <button className="btn bg-red-600 mt-5 text-white w-70 rounded-full">
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
