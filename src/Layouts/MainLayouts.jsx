import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

export default function MainLayouts() {
  return (
    <div >
      <div className="inter-font h-[67px] bg-linear-to-r from-black/25 to-transparent">
        <Navbar></Navbar>
      </div>
      {/* main contain */}
      <div className="">
        <Outlet></Outlet>
      </div>
     <div>
      <Footer></Footer>
     </div>

    </div>
  )
}
