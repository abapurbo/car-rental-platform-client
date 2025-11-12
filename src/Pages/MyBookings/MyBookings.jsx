import React, { useEffect, useState } from "react";
import { FaCarSide, FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Spinner from "../../Components/Spinner/Spinner";

export default function MyBookings() {
  const [bookings, setBookings] = useState([])
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosSecure.get('/booking-all-car')
      .then(res => { setBookings(res.data); setLoading(false); })
  }, [])

  // const bookings = [
  //   {
  //     car_id: "69125030d99a00b579054045",
  //     car_name: "Tesla Model 3",
  //     rent_price: 120,
  //     location: "Dhaka",
  //     user_name: "Rakib Hasan",
  //     user_email: "rakib@gmail.com",
  //     booking_date: "2025-11-11T10:30:00Z",
  //     status: "confirmed",
  //     image: "https://i.ibb.co/jyQ2QyZ/tesla-model-3.png",
  //   },
  //   {
  //     car_id: "69125030d99a00b579054046",
  //     car_name: "BMW M4",
  //     rent_price: 200,
  //     location: "Chittagong",
  //     user_name: "Rakib Hasan",
  //     user_email: "rakib@gmail.com",
  //     booking_date: "2025-11-12T09:15:00Z",
  //     status: "confirmed",
  //     image: "https://i.ibb.co/YbVv6pL/bmw-m4.png",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black/15 pt-32 pb-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red-600 mb-10">
        My <span className="text-black">Bookings</span>
      </h1>

      {/* Booking Cards */}
      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {loading ? <div className="flex items-center justify-center">

          <Spinner></Spinner>
        </div> : bookings.map((booking, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-md hover:shadow-red-400/30 transition-all duration-300 p-6"
          >
            {/* Left Section - Image + Name */}
            <div className="flex items-center gap-5">
              <img
                src={booking.image}
                alt={booking.car_name}
                className="w-18 h-18 object-contain rounded-xl border border-gray-300 shadow-sm "
              />
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-1 tracking-tight">
                  {booking.car_name}
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  <FaCarSide className="inline text-red-500 mr-2" />
                  <span className="text-gray-700">Booking ID:</span>{" "}
                  <span className="font-semibold">{booking.car_id}</span>
                </p>
              </div>
            </div>

            {/* Middle Section - Booking Info */}
            <div className="flex flex-col gap-2 text-[15px] text-gray-700 min-w-[220px]">
              <p>
                <MdAttachMoney className="inline text-green-500 mr-2 text-lg" />
                <span className="font-semibold text-gray-900">${booking.rent_price}</span>{" "}
                <small className="text-gray-500">/ day</small>
              </p>
              <p>
                <FaLocationDot className="inline text-blue-500 mr-2 text-lg" />
                <span className="font-medium">{booking.location}</span>
              </p>
              <p>
                <AiOutlineCalendar className="inline text-yellow-500 mr-2 text-lg" />
                <span>
                  {new Date(booking.booking_date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC"
                  })}{" "}
                  <span className="text-gray-500 ml-1">
                    ({new Date(booking.booking_date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC"
                    })})
                  </span>
                </span>
              </p>
            </div>

            {/* Right Section - Status */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <span
                className={`px-4 py-1.5 text-sm font-semibold rounded-full border shadow-sm ${booking.status === "confirmed"
                  ? "bg-green-100 text-green-700 border-green-300"
                  : "bg-yellow-100 text-yellow-700 border-yellow-300"
                  }`}
              >
                {booking.status}
              </span>

            </div>
          </div>


        ))}
      </div>
    </div>
  );
}
