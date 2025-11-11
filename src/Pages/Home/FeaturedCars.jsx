import React, { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard/CarCard";
import useAxios from "../../Hooks/useAxios";

export default function FeaturedCars() {
  const [latestCars, setLatestCars] = useState([])
  const instance = useAxios()
  useEffect(() => {
    instance.get('/latest-cars')
      .then(result => {
        setLatestCars(result?.data)
      })
  }, [])
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-20">

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore Our <span className="text-red-600">Featured Cars</span>
        </h2>

        <p className="text-gray-600 mt-3 text-lg">
          Handpicked premium cars — newest arrivals ready for your next journey
        </p>

        {/* Decorative underline */}
        <div className="w-24 h-1 bg-red-600 mt-4 mx-auto rounded-full"></div>
      </div>

      {/*  Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
       {
        latestCars.map((car,index)=><CarCard key={index} car={car}></CarCard>)
       }
       
      </div>

    </div>
  );
}
