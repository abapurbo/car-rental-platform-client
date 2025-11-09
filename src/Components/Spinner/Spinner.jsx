import Lottie from "lottie-react";
import React from "react";
import spinner from '../../assets/Lottie/spinner.json'
export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-20 h-20">
        <Lottie animationData={spinner} />
      </div>
    </div>
  )
}
