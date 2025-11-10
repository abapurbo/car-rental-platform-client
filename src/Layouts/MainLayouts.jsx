import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayouts() {
  const location = useLocation()
  return (
    <div >
      <div className="inter-font">
        <Navbar></Navbar>
      </div>
      {/* main contain */}
      <div className="relative z-20">
        <Outlet></Outlet>
      </div>
      <div className="relative z-20">
        <Footer></Footer>
      </div>
      {/* hot toast in react */}
      <Toaster></Toaster>
    </div>
  )
}
