import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Spinner from "../Components/Spinner/Spinner";

export default function MainLayouts() {
  const location = useLocation()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div >
      <div className="inter-font mt-0">
        <Navbar></Navbar>
      </div>
      {/* main contain */}
      <div className="relative z-20">
        {
          loading ? (<div className="flex justify-center items-center">
            <Spinner></Spinner>

          </div>) : <Outlet></Outlet>
        }

      </div>
      <div className="relative z-20">
        <Footer></Footer>
      </div>
      {/* hot toast in react */}
      <Toaster></Toaster>
    </div>
  )
}
