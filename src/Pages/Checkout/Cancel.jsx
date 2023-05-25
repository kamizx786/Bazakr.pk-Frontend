import React from "react";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
      <button className="bg-[#248F59] text-white py-3 px-3 rounded">
               <Link to="/checkout">
                  Go to Checkout
                </Link>
                </button>
        <span className="mt-4 text-gray-500 text-lg font-semibold">
        Something Went Wrong .....Payment has been Cancelled
        </span>
      </div>
    </div>
  )
}

export default Cancel