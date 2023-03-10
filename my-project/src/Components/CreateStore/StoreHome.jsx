import React from "react";
const StoreHome = () => {
  return (
    <div className="mx-20">
      <div className="col-md-6 float-left my-16">
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
      <div className="col-md-6 float-right mb-5">
        <img src="unsplash.png" alto="" />
      </div>
    </div>
  );
};
export default StoreHome;
