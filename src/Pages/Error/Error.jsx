import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router"; // if using React Router
import error from "../../assets/Lottie/error.json";

export default function Error() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-50 text-gray-800 px-4">
      <div className="max-w-md text-center">
        {/* Lottie Animation */}
        <div className="w-86 mx-auto mb-6">
          <Lottie animationData={error} loop={true} />
        </div>

        {/* 404 Message */}
        <p className="text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-block border border-red-600 text-red-600 text-sm px-6 py-3 hover:bg-red-600 hover:text-white rounded-lg  font-medium transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
