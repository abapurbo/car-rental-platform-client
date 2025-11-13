import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // ✅ Google icon
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { loginUser, providerGoogle } = useAuth()
  const [showpass, setShowpass] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const handleLoginForm = (e) => {
    e.preventDefault();

    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;

    // Correct regex patterns (use RegExp objects, not strings)
    const upperRex = /[A-Z]/;
    const lowerRex = /[a-z]/;

    //  Check minimum length
    if (password.length < 6) {
      return toast.error(' Password must be at least 6 characters long.');
    }

    // Check for uppercase letter
    if (!upperRex.test(password)) {
      return toast.error('Password must contain at least one uppercase letter.');
    }

    // Check for lowercase letter
    if (!lowerRex.test(password)) {
      return toast.error('Password must contain at least one lowercase letter.');
    }


    loginUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success('Successfully login your account!');
        navigate(location?.state || '/')
        e.target.reset()
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleGooleProvider = async () => {
    await providerGoogle()
    await navigate(location?.state || '/')
    await toast.success('Successfully login your account!')
  }
  return (
    <div className="min-h-screen flex pt-32 pb-18 items-center justify-center px-4 ">
     <title>
      car-rental-platform-client || Login
     </title>
      {/* Card */}
      <div className="bg-black/30 backdrop-blur-2xl border rounded-xl border-white/20 shadow-2xl p-10 w-full max-w-md">

        {/* Logo */}
        <h1 className="text-center text-4xl font-extrabold text-red-600 tracking-wide">
          Rent<span className="text-black">Wheels</span>
        </h1>

        <p className="text-white text-center mt-2 opacity-90">
          Welcome back! Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLoginForm} className="mt-10 space-y-4">

          {/* Email */}
          <div>
            <label className="text-white font-semibold">Email</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Mail className="text-white" size={20} />
              <input
                type="email"
                name="email"
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
                type={showpass ? 'password':'text'}
                name="password"
                placeholder="Enter your password"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
              />
              <p onClick={() => setShowpass(!showpass)} className="absolute text-white right-3">
                {
                  showpass ? <FaEye /> : <FaEyeSlash />
                }
              </p>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold rounded-xl shadow-lg shadow-red-700/40">
            Login
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-white/70 text-sm font-medium">OR</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={() => handleGooleProvider()}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 bg-white hover:bg-gray-100 active:scale-95 transition rounded-xl shadow-lg shadow-gray-400/40 font-semibold text-gray-800"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-[16px] font-bold text-white mt-4">
          Don’t have an account?{" "}
          <a className="text-red-600 hover:underline" href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
