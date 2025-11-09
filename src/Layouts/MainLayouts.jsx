import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

export default function MainLayouts() {
  return (
    <div >
      <div className="inter-font h-16 border-2 border-red-500">
        <Navbar></Navbar>
      </div>
      {/* main contain */}
      <div>
        <Outlet></Outlet>
      </div>
     <div>
      <Footer></Footer>
     </div>

    </div>
  )
}
