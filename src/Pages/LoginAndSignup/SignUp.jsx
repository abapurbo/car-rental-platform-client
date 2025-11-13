import React, { useState } from "react";
import { User, Mail, Lock, Image } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function SignUp() {
  const { createUser, profileUpdate,providerGoogle} = useAuth()
  const [showpass, setShowpass] = useState(true)
  const navigate=useNavigate()
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const photoURL = formData.image.value;
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

    const profile = {
      displayName: name,
      photoURL: photoURL
    };

    createUser(email, password)
      .then((result) => {
        console.log(result);
        profileUpdate(profile);
        toast.success('Successfully created your account!');
        navigate('/')
        e.target.reset()
      })
      .catch(err => {
        toast.error(err.code)
      });
  };

  const handleGooleProvider=async()=>{
    await providerGoogle()
    await navigate('/')
  }


  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-18 px-4 ">
      <title>
        car-rental-platform-client || Sign Up
      </title>
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
        <form onSubmit={handleSubmitForm} className="mt-10 space-y-4">

          {/* Name */}
          <div>
            <label className="text-white font-semibold">Full Name</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <User className="text-white" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
                required
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
                name="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
                required
              />
            </div>
          </div>

          {/* Profile Photo */}
          <div>
            <label className="text-white font-semibold">Profile Photo URL</label>
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Image className="text-white" size={20} />
              <input
                type="url"
                name="image"
                placeholder="Enter your photo URL"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-semibold">Password</label>
            <div className="relative flex items-center gap-3 bg-black/20 backdrop-blur-md mt-2 px-4 py-3 rounded-xl border border-white/30">
              <Lock className="text-white" size={20} />
              <input
                type={showpass ? 'password' : 'text'}
                name="password"
                placeholder="Enter your password"
                className="bg-transparent text-white placeholder-white/60 outline-none w-full"
                required
              />
              <p onClick={() => setShowpass(!showpass)} className="absolute text-white right-3">
                {
                  showpass ? <FaEye /> : <FaEyeSlash />
                }
              </p>
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-95 transition text-white font-semibold rounded-xl shadow-lg shadow-red-700/40">
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4 gap-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-white font-semibold">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google SignUp Button */}
        <button onClick={()=>handleGooleProvider()} className="w-full  flex text-black items-center justify-center gap-3 py-3 bg-white hover:bg-gray-100 transition rounded-xl font-semibold shadow-md">
          <FcGoogle size={24} />
          Sign Up with Google
        </button>

        {/* Login link */}
        <p className="text-center text-[16px] font-bold text-white mt-2">
          Already have an account?{" "}
          <a className="text-red-600 hover:underline" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
