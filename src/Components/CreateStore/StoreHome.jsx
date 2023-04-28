import React from "react";
const StoreHome = () => {
  return (
    <div className="mx-20 flex flex-row">
      <div className="my-16 flex flex-col">
        <h3 className="text-4xl font-serif">
          Let’s Create A <span className=" text-[#248F59]">Store</span> Now!
        </h3>
        <p className="font-serif mt-2 font-normal text-xl">
          By creating your store, you’ll be able to access our amazing tools for
          sellers and can target your customers online.
        </p>
        {/* Button */}
        <button className="h-12 w-[20.4375rem] mt-3 text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Create A Store
        </button>
      </div>
      <div className="flex flex-col">
        <img src="unsplash.png" alto="" />
      </div>
    </div>
  );
};
export default StoreHome;
