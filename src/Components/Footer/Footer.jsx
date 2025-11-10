import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className="
        relative
        backdrop-blur-xl        /* গ্লাস ব্লার ইফেক্ট */
        border-t border-white/10
        shadow-lg shadow-black/50
        text-white
        px-6 py-10
        transition-all duration-500
       bg-black/70 
      "
    >

      
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/10 "></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-red-600">Rent</span>
            <span className="text-black">Wheels</span>
          </h2>
          <p className="text-gray-100 leading-relaxed">
            Your trusted car rental service. Rent luxury, economy, or family cars with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/cars" className="hover:text-red-600 transition">Cars</a></li>
            <li><a href="/login" className="hover:text-red-600 transition">Login</a></li>
            <li><a href="/signup" className="hover:text-red-600 transition">Sign Up</a></li>
            <li><a href="/terms" className="hover:text-red-600 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-100">
            <li>Email: <a href="mailto:info@rentwheels.com" className="hover:text-red-600 transition">info@rentwheels.com</a></li>
            <li>Phone: <span className="text-gray-100">+880 1234 567890</span></li>
            <li>Address: <span className="text-gray-100">Dhaka, Bangladesh</span></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-gray-100">
            <a href="#" className="hover:text-red-600 transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-red-600 transition"><BsTwitterX size={24} /></a>
            <a href="#" className="hover:text-red-600 transition"><Instagram size={24} /></a>
            <a href="mailto:info@rentwheels.com" className="hover:text-red-600 transition"><Mail size={24} /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-10 text-center text-gray-300 text-sm border-t border-white/10 pt-4">
        © 2025 RentWheels. All rights reserved. |{" "}
        <a href="/terms" className="text-red-500 hover:underline">Terms & Conditions</a>
      </div>
    </footer>
  );
}
