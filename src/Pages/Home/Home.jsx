import React from "react";
import HeroBanner from "./HeroBanner";
import FeaturedCars from './FeaturedCars'
export default function Home() {
  return (
    <div className="h-[2000px]">
      <div>
     <HeroBanner></HeroBanner>
      </div>
      {/* features car section */}
      <div>
         <FeaturedCars></FeaturedCars>
      </div>
    </div>
  )
}
