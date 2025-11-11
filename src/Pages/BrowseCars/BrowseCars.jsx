import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import CarCard from "../../Components/CarCard/CarCard";

export default function BrowseCars() {
  const [allCars,setAllCars]=useState([])
  // 🔹 Demo Car Data (property names match card fields)
  const instance = useAxios()
  useEffect(() => {
    instance.get('/all-cars')
    .then(result=>{
      setAllCars(result?.data)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 pt-32 pb-16 px-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-red-600 mb-3 tracking-tight">
             Browse <span className="text-black">Available Cars for Rent</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose from our wide range of premium, luxury, and electric cars —
          all ready for your next ride. Drive your dream today!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-12 relative">
        <div className="relative w-full max-w-md">
          {/* Search Icon */}
          <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />

          {/* Input Field */}
          <input
            id="search"
            type="text"
            placeholder="Search cars, brands or categories..."
            className="w-full text-[18px] text-black bg-white border border-gray-300 rounded-full pl-12 pr-5 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.15)]"
          />
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {allCars.map((car,index) => <CarCard key={index} car={car}></CarCard>)}
      </div>
    </div>
  );
}
