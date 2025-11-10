import React from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex pt-18 items-center justify-center  px-4">
      
      {/* Card */}
      <div className="bg-black/30 backdrop-blur-2xl border rounded-xl border-white/20 shadow-2xl p-10  w-full max-w-md">
        
        {/* Logo */}
        <h1 className="text-center text-4xl font-extrabold text-red-600 tracking-wide">
          Rent<span className="text-black">Wheels</span>
        </h1>

        <p className="text-white text-center mt-2">
          Welcome back! Please login to continue
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          
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

          {/* Login Button */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold rounded-xl shadow-lg shadow-red-700/40">
            Login
          </button>

          <p className="text-center text-[16px] font-bold text-white mt-2">
            Don’t have an account?{" "}
            <a className="text-red-600 hover:underline" href="/signup">
              Sign Up
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}
