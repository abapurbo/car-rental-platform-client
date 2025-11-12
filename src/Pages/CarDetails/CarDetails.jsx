import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaCarSide,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function CarDetails() {
  const [carDetails, setCarDetails] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/car-details/${id}`)
      .then((res) => {
        setCarDetails(res?.data);
      });
  }, [id]);

  const handleCarBooking = (carInfo) => {
    const bookingCar = {
      car_id: carInfo?._id,
      car_name: carInfo?.car_name,
      rent_price: carInfo?.rent_price,
      location: carInfo?.location,
      user_name: user?.displayName,
      user_email: user?.email,
      image: user?.photoURL,
    };

    axiosSecure.post(`/car-booking`, bookingCar)
      .then(res => {
        const data = res.data;
        if (data.success) {
          toast.success(data.message);
          setCarDetails({ ...carInfo, status: 'unavailable' });
        }
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "Booking failed");
      });
  };

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-10 pb-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full  max-w-5xl border border-gray-200 h-fit rounded-3xl shadow-xl overflow-hidden hover:shadow-[0_4px_15px_rgba(255,0,0,0.2)]"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src={carDetails?.image}
              alt={carDetails?.car_name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Car Info */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black">
                {carDetails?.car_name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-800 mt-1">
                {carDetails?.category || "Premium Sedan"}
              </p>
              <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
                {carDetails?.description ||
                  "A perfect blend of performance, comfort, and luxury."}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 ">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full flex items-center gap-1 text-sm sm:text-base">
                <FaDollarSign /> ${carDetails?.rent_price}/day
              </span>
              <span className="px-3 py-1 bg-green-50 border border-green-300 text-green-700 rounded-full flex items-center gap-1 text-sm sm:text-base">
                <FaMapMarkerAlt /> {carDetails?.location}
              </span>
              <span className={`px-3 py-1 rounded-full font-medium text-sm sm:text-base ${
                carDetails?.status === "available"
                  ? "bg-yellow-50 text-yellow-700 border border-yellow-700"
                  : "bg-red-100 border border-red-300 text-red-950"
              }`}>
                {carDetails?.status}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-6 mx-4 md:mx-10"></div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-6 px-4 md:px-10 pb-10">
          {/* Vehicle Specs */}
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaCarSide className="text-red-600" /> Vehicle Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
              <p><span className="font-medium">Category:</span> {carDetails?.category}</p>
              <p><span className="font-medium">Rent:</span> ${carDetails?.rent_price}/day</p>
              <p><span className="font-medium">Location:</span> {carDetails?.location}</p>
              <p><span className="font-medium">Status:</span> {carDetails?.status}</p>
            </div>
          </div>

          {/* Provider */}
          <div className="bg-gray-50 md:col-span-2 lg:col-span-1 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaUser className="text-red-600" /> Provider Details
            </h3>
            <div className="text-gray-700 text-sm sm:text-base space-y-2">
              <p><span className="font-medium">Name:</span> {carDetails?.providerName}</p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-red-600" /> {carDetails?.providerEmail}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black/10 flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 py-4 sm:py-6 gap-4 sm:gap-0">
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-black">
              <span className="text-red-600">Ready to rent</span> this car?
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mt-1">
              Fast booking. No hidden fees. 24/7 support.
            </p>
          </div>
          <motion.button
            onClick={() => handleCarBooking(carDetails)}
            whileHover={{ scale: 1.05 }}
            className="mt-3 sm:mt-0 px-6 sm:px-10 py-2 sm:py-3 text-red-600 border border-red-400 rounded-full hover:bg-red-500 hover:text-white hover:shadow-[0_4px_15px_rgba(255,0,0,0.2)] transition-all"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
