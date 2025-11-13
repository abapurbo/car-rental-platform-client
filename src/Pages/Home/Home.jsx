import React from "react";
import HeroBanner from "./HeroBanner";
import FeaturedCars from './FeaturedCars'
import WhyRentWithUs from "./WhyRentWithUs";
import TopRatedCars from "./TopRatedCars";
import Testimonials from './Testimonials'
import CarBookingBar from "../../Components/CarBookingBar/CarBookingBar";
import BrandLogo from "./BrandLogo";
export default function Home() {
  return (
    <div >
      <div className="pt-18 bg-black z-20">
        <div className="container mx-auto px-3">
          <HeroBanner></HeroBanner>
        </div>
      </div>
      <div className="md:-mt-16 -mt-38">
       <CarBookingBar></CarBookingBar>
      </div>
      {/* features car section */}
      <div>
        <FeaturedCars></FeaturedCars>
      </div>
      <div>
        <WhyRentWithUs></WhyRentWithUs>
      </div>
      <div>
        <TopRatedCars></TopRatedCars>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
      <div >
        <BrandLogo></BrandLogo>
      </div>
    </div>
  )
}
