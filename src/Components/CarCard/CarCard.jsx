import React from "react";
import { Link } from "react-router";

export default function CarCard({ car }) {
  const { _id,car_name, image, providerName, category, rent_price, status } = car || {}
  return (
    <div className="relative hover:border hover:border-red-500 max-w-xs bg-white rounded-xl shadow-[0_4px_15px_rgba(255,0,0,0.2)] overflow-hidden p-4 transition hover:shadow-2xl hover:scale-[1.02] duration-300">
      {/* Car Image Wrapper */}
      <div className="relative">
        <img
          src={image}
          alt={car_name}
          className="w-full h-44 object-center rounded-lg mb-4"
        />

        {/* Available Badge */}
        <div className="absolute top-2 right-2 bg-red-50 text-red-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {status}
        </div>
      </div>

      {/* Car Name */}
      <h2 className="text-xl font-bold text-gray-900 mb-1">{car_name}</h2>

      {/* Provider Name */}
      <p className="text-sm text-gray-600 mb-3">
        <span className="font-semibold text-gray-800">Provider:</span> {providerName}
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
      <Link to={`/car-datails/${_id}`}>
        <button
          className="w-full border border-gray-700 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full hover:border-none hover:duration-1000 hover:bg-red-500 hover:text-white transition"
          type="button"
        >
          View Details
        </button>
      </Link>
    </div>
  );

}