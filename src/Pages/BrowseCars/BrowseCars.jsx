import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";

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
  const cars = [
    {
      id: 1,
      car_name: "Toyota Supra",
      rent_price: 120,
      image: "https://cdn.motor1.com/images/mgl/Vz33n/s1/2020-toyota-supra.jpg",
      category: "Sports",
      providerName: "Alex Johnson",
    },
    {
      id: 2,
      car_name: "BMW M8 Competition",
      rent_price: 180,
      image: "https://cdn.motor1.com/images/mgl/0oO8P/s3/2022-bmw-m8-competition.jpg",
      category: "Luxury",
      providerName: "Michael Brown",
    },
    {
      id: 3,
      car_name: "Mercedes C-Class",
      rent_price: 150,
      image: "https://cdn.motor1.com/images/mgl/0AN6k/s1/2023-mercedes-c-class.jpg",
      category: "Sedan",
      providerName: "Sophia Davis",
    },
    {
      id: 4,
      car_name: "Tesla Model S",
      rent_price: 200,
      image: "https://cdn.motor1.com/images/mgl/02k6e/s1/tesla-model-s.jpg",
      category: "Electric",
      providerName: "Elon Carter",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 pt-24 pb-16 px-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          🚘 Available <span className="text-red-600">Cars for Rent</span>
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
            className="w-full text-black bg-white border border-gray-300 rounded-full pl-12 pr-5 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.15)]"
          />
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {allCars.map(({ _id, car_name, rent_price, image, category, providerName }) => (
          <div
            key={_id}
            className="relative hover:border hover:border-red-500 bg-white rounded-xl shadow-[0_4px_15px_rgba(255,0,0,0.2)] overflow-hidden p-4 transition hover:shadow-2xl hover:scale-[1.02] duration-300"
          >
            {/* Car Image */}
            <div className="relative">
              <img
                src={image}
                alt={car_name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />

              {/* Available Badge */}
              <div className="absolute top-2 right-2 bg-red-50 text-red-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Available
              </div>
            </div>

            {/* Car Name */}
            <h2 className="text-xl font-bold text-gray-900 mb-1">{car_name}</h2>

            {/* Provider Name */}
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-semibold text-gray-800">Provider:</span>{" "}
              {providerName}
            </p>

            {/* Rent and Category */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold text-black">
                ${rent_price}
                <span className="text-base font-normal text-gray-600">/day</span>
              </p>
              <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>

            {/* View Details Button */}
            <button
              className="w-full border border-gray-700 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full hover:border-none hover:bg-red-500 hover:text-white transition duration-300"
              type="button"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
