// File: src/components/CarBookingBar.jsx
import React from "react";

export default function CarBookingBar() {
  return (
    <div className="p-4 flex justify-center items-center z-30">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-4 gap-3">
        {/* Pick-up Location */}
        <div className="flex flex-col w-full md:w-auto flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Pick-up Location
          </label>
          <div className="flex  items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search a location"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Pick-up Date */}
        <div className="flex flex-col md:w-auto  w-full flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Pick-up Date
          </label>
          <div className="flex w-full items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <input
              type="date"
              className="w-full bg-transparent outline-none text-gray-700"
              defaultValue="2023-12-12"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Drop-off Location */}
        <div className="flex flex-col md:w-auto w-full flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Drop-off Location
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search a location"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Drop-off Date */}
        <div className="flex flex-col md:w-auto w-full flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Drop-off Date
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <input
              type="date"
              className="w-full bg-transparent outline-none text-gray-700 focus-within:"
              defaultValue="2023-12-12"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Find Button */}
        <button className="flex items-center justify-center mt-5 md:mt-6 md:self-end bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-all">
          Find a Vehicle →
        </button>
      </div>
    </div>

  );
}
