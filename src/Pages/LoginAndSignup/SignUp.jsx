import React from "react";
import { User, Mail, Lock, Image } from "lucide-react";

export default function SignUp() {
  return (
    <div className=" pt-38 pb-18 flex items-center justify-center px-4 ">
      
      {/* Card */}
      <div className="bg-black/30 backdrop-blur-2xl border rounded-xl border-white/20 shadow-2xl p-10 w-full max-w-md">
        
        {/* Logo */}
        <h1 className="text-center text-4xl font-extrabold text-red-600 tracking-wide">
          Rent<span className="text-black">Wheels</span>
        </h1>

        <p className="text-white text-center mt-2">
          Create your account to start renting cars
        </p>

        {/* Form */}
        <form className="mt-10 space-y-2">
          
          {/* Name */}
          <div>
            <label className="text-white font-semibold">Full Name</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <User className="text-white" size={20} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-white font-semibold">Email</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Mail className="text-white" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
              />
            </div>
          </div>

          {/* Profile Photo URL */}
          <div>
            <label className="text-white font-semibold">Profile Photo URL</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Image className="text-white" size={20} />
              <input
                type="url"
                placeholder="Enter your photo URL"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-semibold">Password</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Lock className="text-white" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold rounded-xl shadow-lg shadow-red-700/40">
            Sign Up
          </button>

          <p className="text-center text-[16px] font-bold text-white mt-2">
            Already have an account?{" "}
            <a className="text-red-600 hover:underline" href="/login">
              Login
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}
