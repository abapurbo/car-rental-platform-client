import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/20 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-3">RentWheels</h2>
          <p className="text-gray-300">
            Your trusted car rental service. Rent luxury, economy, or family cars with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="/cars" className="hover:text-red-600 transition">Cars</a></li>
            <li><a href="/login" className="hover:text-red-600 transition">Login</a></li>
            <li><a href="/signup" className="hover:text-red-600 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:info@rentwheels.com" className="hover:text-red-600 transition">info@rentwheels.com</a></li>
            <li>Phone: <span className="text-gray-300">+880 1234 567890</span></li>
            <li>Address: <span className="text-gray-300">Dhaka, Bangladesh</span></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-red-600 transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-red-600 transition"><Twitter size={24} /></a>
            <a href="#" className="hover:text-red-600 transition"><Instagram size={24} /></a>
            <a href="mailto:info@rentwheels.com" className="hover:text-red-600 transition"><Mail size={24} /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-white/20 pt-4">
        © 2025 RentWheels. All rights reserved.
      </div>
    </footer>
  );
}
