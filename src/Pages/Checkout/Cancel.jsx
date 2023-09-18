import React from "react";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <div className="h-[25rem] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <button className="bg-[#248F59] text-[#f2f2f2] text-lg hover:text-white transition-transform hover:scale-95 cursor-pointer font-sans font-semibold  p-3 rounded">
          <Link to="/checkout">Go to Checkout</Link>
        </button>
        <span className="mt-4 text-gray-500 text-center text-lg font-sans font-semibold">
          Something Went Wrong 😱...!<br/>Payment has been cancelled 😕
        </span>
      </div>
    </div>
  );
};

export default Cancel;
