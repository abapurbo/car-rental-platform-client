import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import CarCard from "../../Components/CarCard/CarCard";

export default function BrowseCars() {
  const [allCars, setAllCars] = useState([])
  // 🔹 Demo Car Data (property names match card fields)
  const instance = useAxios()
  useEffect(() => {
    instance.get('/all-cars')
      .then(result => {
        setAllCars(result?.data)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100  pb-18 ">
      <div className="relative mb-18 pt-32 pb-20 h-[500px]  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0  flex justify-center items-center">
          <img
            src="https://i.ibb.co/JRtT5cqw/red-bmw-m-car-black-background-72594621-removebg-preview.png"
            alt="car"
            className="w-full max-w-2xl object-center mt-30"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-4">
          {/* Title */}
          <h1 className="text-5xl font-bold noto-sans-georgian text-red-600 leading-tight mb-4 tracking-tight drop-shadow-lg">
            Browse <span className="text-white">Available Cars for Rent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 italic text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Choose from our wide range of premium, luxury, and electric cars — all ready for your next ride.
            Drive your dream today!
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                id="search"
                type="text"
                placeholder="Search cars, brands or categories..."
                className="w-full text-[18px] text-gray-900 bg-white border border-gray-300 rounded-full pl-12 pr-5 py-3 shadow-md 
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 
                         transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-10">
        {allCars.map((car, index) => <CarCard key={index} car={car}></CarCard>)}
      </div>
    </div>
  );
}
