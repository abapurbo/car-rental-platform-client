import React from "react";
import HeroBanner from "./HeroBanner";
import FeaturedCars from './FeaturedCars'
import WhyRentWithUs from "./WhyRentWithUs";
import TopRatedCars from "./TopRatedCars";
import Testimonials from './Testimonials'
export default function Home() {
  return (
    <div>
      <div className="pt-18 bg-linear-to-r from-black/25">
        <HeroBanner></HeroBanner>
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
    </div>
  )
}
