import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { WishlistData } from "./wishlistdata";

const WishlistProducts = () => {
  return (
    <>
      <div className="flex  bg-white border border-[#f2f2f2] rounded w-full flex-col">
        <div className="mb-8  w-full flex flex-col items-center justify-center sm:mb-10">
          <h1 className="text-center mt-2 text-[#248F59] font-serif text-3xl font-normal ">
            My Wishlist
          </h1>

          {WishlistData.map((item) => (
            <div className="flex font-sans  w-full border-b p-2 border-[#f2f2f2]  flex-col items-start sm:flex-row sm:justify-between sm:space-x-4 rtl:sm:space-x-reverse xl:items-center">
              <div className="relative border my-2  border-[#f2f2f2] rounded mx-4 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
                <img src={item.image} alt="" className="object-cover" />
              </div>

              <div className="flex flex-row p-2 w-full justify-between ">
                <div className="flex flex-col w-full ">
                  <h1 className="text-lg font-semibold text-heading transition-colors hover:text-accent">
                    {item.name}
                  </h1>
                  <p className="inline-block w-auto text-sm font-semibold text-body-dark transition-colors hover:text-accent">
                    {item.shop}
                  </p>
                  <p className="flex flex-row gap-2">
                    {item.rating}{" "}
                    <BsFillStarFill className="mt-1" size={15} color="green" />
                  </p>
                </div>
                <div className="flex flex-col  w-full  text-end ">
                  <span className="text-xl font-semibold text-heading">
                    {item.price}
                  </span>
                  <div className="flex flex-row justify-end mt-2 gap-3">
                    <p className="flex whitespace-nowrap transition-transform hover:scale-95 text-[#248f59] cursor-pointer items-center space-x-6 rtl:space-x-reverse">
                      Add to cart
                    </p>
                    <div className="border-gray-400 border-r-2 border-dashed"></div>
                    <p className="whitespace-nowrap cursor-pointer text-sm font-semibold text-red-500 hover:scale-95 transition-transform">
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WishlistProducts;
