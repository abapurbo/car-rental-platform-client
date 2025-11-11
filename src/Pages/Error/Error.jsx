import React from "react";
import Lottie from "lottie-react";
import error from '../../assets/Lottie/error.json'
export default function Error() {
  return <div className="h-screen container mx-auto flex justify-center items-center">
    <div className="">
      <Lottie animationData={error} />
    </div>
  </div>
}
