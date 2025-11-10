import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";

export default function MainLayouts() {
  const location=useLocation()
  console.log(location)
  return (
    <div >
      <div className="inter-font">
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
