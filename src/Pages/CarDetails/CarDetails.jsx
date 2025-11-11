import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaCarSide,
  FaClock,
  FaEnvelope,
  FaUser,
  FaStar,
} from "react-icons/fa";

export default function CarDetails() {
  const [carDetails, setCarDetails] = useState({});
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/car-details/${id}`).then((res) => {
      setCarDetails(res?.data);
    });
  }, [id]);

  return (
    <div className="min-h-screen pt-32 bg-gray-100 flex items-center justify-center pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 h-72 md:h-auto">
            <img
              src={carDetails?.image}
              alt={carDetails?.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Car Info */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  {carDetails?.name}
                </h2>
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-300" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {carDetails?.category || "Premium Sedan"}
              </p>

              <p className="text-gray-600 mt-6 leading-relaxed">
                {carDetails?.description ||
                  "A perfect blend of performance, comfort, and luxury. Designed for those who appreciate fine engineering and modern aesthetics."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium flex items-center gap-2">
                <FaDollarSign /> ${carDetails?.rent_price}/day
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium flex items-center gap-2">
                <FaMapMarkerAlt /> {carDetails?.location}
              </span>
              <span
                className={`px-4 py-2 rounded-full font-medium ${
                  carDetails?.status === "Available"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {carDetails?.status}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-6 mx-10"></div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-10">
          {/* Vehicle Specs */}
          <div className="col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaCarSide className="text-blue-600" /> Vehicle Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-3 text-gray-700">
              <p>
                <span className="font-medium">Category:</span>{" "}
                {carDetails?.category}
              </p>
              <p>
                <span className="font-medium">Rent:</span> $
                {carDetails?.rent_price}/day
              </p>
              <p>
                <span className="font-medium">Location:</span>{" "}
                {carDetails?.location}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {carDetails?.status}
              </p>
            </div>
          </div>

          {/* Provider */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaUser className="text-blue-600" /> Provider Details
            </h3>
            <div className="text-gray-700 space-y-3">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {carDetails?.providerName}
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" />
                {carDetails?.providerEmail}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-black/25 text-white flex flex-col sm:flex-row justify-between items-center px-10 py-6">
          <div>
            <h3 className="text-2xl text-black font-semibold"><span className="text-red-600">Ready to rent</span> this car?</h3>
            <p className="text-sm text-blue-600">
              Fast booking. No hidden fees. 24/7 support.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 w-46 border border-red-200 sm:mt-0 px-10 py-3  text-red-600 font-semibold rounded-full shadow-[0_4px_15px_rgba(255,0,0,0.2)] hover:shadow-xl transition-all"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
