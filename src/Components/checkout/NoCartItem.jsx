import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NoCartItem = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col border-b-2 border-dashed pb-7 border-[#248f59]">
        <div className="flex flex-col items-center justify-center h-full mb-4">
          <ShoppingBagIcon color="#248F59" width={140} height={176} />
          <h4 className="mt-6 font-serif font-normal text-3xl">No Products</h4>
        </div>
      </div>
      <Link to="/shops">
        <button className="w-full text-[#f2f2f2] rounded-md text-lg hover:text-white mt-8 font-semibold h-[50px] bg-[#248F59] transition-transform hover:scale-95">
          Go to Shop
        </button>
      </Link>
    </div>
  );
};

export default NoCartItem;
