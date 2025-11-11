import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaCarSide,
  FaLink,
  FaRegNewspaper,
} from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image + Overlay */}
      <div className="absolute bg-[url('https://i.ibb.co.com/pvGx1srq/01-LVN-34-Front-removebg-preview.png')] bg-no-repeat bg-center bg-size-[1200px_auto] inset-0 flex justify-center">
        <div className="absolute inset-0 bg-linear-to-t from-black via-black to-black/25"></div>
      </div>

      <div className="relative py-12 px-6 md:px-16 overflow-hidden">
        {/* Footer Content */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto z-10">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-4xl font-bold text-red-600 tracking-wide">
              Rent<span className="text-white">Wheels</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              RentWheels is your trusted car rental platform providing reliable,
              affordable, and luxury cars for every journey.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2 hover:text-red-400 transition">
                Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2 hover:text-red-400 transition">
                 +880 1234-567890
              </p>
              <p className="flex items-center gap-2 hover:text-red-400 transition">
                support@rentwheels.com
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="border border-red-600 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="border border-red-600 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="border border-red-600 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="border border-red-600 p-2 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaLink className="text-red-500" /> Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-red-500 flex items-center gap-1"><span>•</span> Home</Link></li>
              <li><Link to="/add-car" className="hover:text-red-500 flex items-center gap-1"><span>•</span> Add Car</Link></li>
              <li className="flex"><Link to="/login" className="hover:text-red-500 flex items-center gap-1"><span>•</span> Login</Link>{''} / {''}<Link to="/signup" className="hover:text-red-500 flex items-center gap-1"> SignUp</Link></li>
              <li><Link to="/my-listings" className="hover:text-red-500 flex items-center gap-1"><span>•</span> My Listings</Link></li>
              <li><Link to="/my-bookings" className="hover:text-red-500 flex items-center gap-1"><span>•</span> My Bookings</Link></li>
              <li><Link to="/browse-cars" className="hover:text-red-500 flex items-center gap-1"><span>•</span> Browse Cars</Link></li>
            </ul>
          </div>

          {/* Rental Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaCarSide className="text-red-500" /> Rental Services
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500  flex items-center gap-1"><span>•</span> Business Rentals</a></li>
              <li><a href="#" className="hover:text-red-500  flex items-center gap-1"><span>•</span> Long-Term Rentals</a></li>
              <li><a href="#" className="hover:text-red-500  flex items-center gap-1"><span>•</span> One-Way Rentals</a></li>
              <li><a href="#" className="hover:text-red-500  flex items-center gap-1"><span>•</span> Airport Rentals</a></li>
              <li><a href="#" className="hover:text-red-500  flex items-center gap-1"><span>•</span> Electric Vehicles</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaRegNewspaper className="text-red-500" /> Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>

            <label
              htmlFor="email"
              className="relative flex items-center border border-gray-600 rounded-full px-4 py-2 overflow-hidden focus-within:border-red-500 transition"
            >
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-gray-300 placeholder-gray-500 text-sm w-full pr-10 focus:outline-none"
              />
             
                <IoSend className="text-white w-4 h-4" />
            </label>

            <div className="text-gray-400 text-xs mt-4">
              By subscribing, you agree to our{" "}
              <Link to="/terms" className="text-red-500 hover:underline">
                Terms & Conditions
              </Link>
              .
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative text-center text-gray-500 text-sm border-t container mx-auto border-gray-700 mt-10 pt-4 z-10">
          © {new Date().getFullYear()}{" "}
          <span className="text-red-500 font-semibold">Rent</span>
          <span className="text-white font-semibold">Wheels</span> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
