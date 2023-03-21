import React from "react";
const Shop = () => {
  return (
    <div className="mx-10">
      <div className="flex flex-row">
        <div className="bg-gray-200 font-medium w-[10.4375rem] font-sans rounded  mx-2 mt-3 p-2  text-center ">
          Men's Clothing
        </div>
        <div className="bg-gray-200 font-medium w-[10.4375rem] font-sans rounded  mx-2 mt-3 p-2 text-center ">
          Women's Clothing
        </div>
        <div className="bg-gray-200 font-medium w-[10.4375rem] font-sans rounded  mx-2 mt-3 p-2 text-center">
          Grocery
        </div>
      </div>
      {/* Shops */}
      <div className="flex flex-row justify-between ">
        {/* Shops category Name */}
        <h3 className="text-3xl font-serif mt-3">Men's Fashion</h3>
        <p className="font-sans mt-3  text-[#248F59]">See All</p>
      </div>
      {/* Shops Cards */}
      <div className=" flex flex-row">
        <div className="h-[18.4375rem] w-[17.8125rem] mr-2 rounded mt-3 shadow-md">
          <img src="pants.png" />
          <img className="-mt-7" src="circle.png" />
          <h4 className="text-3xl font-sans font-semibold mt-2">Jean’s Club</h4>
          <div className="flex flex-row">
            <img src="Rating.png" alt="" />
            <img className="ml-[9.125rem]" src="Arrow.png" alt="" />
          </div>
        </div>
        <div className="h-[18.4375rem] w-[17.8125rem] rounded mt-3 shadow-md">
          <img src="pants.png" />
          <img className="-mt-7" src="circle.png" />
          <h4 className="text-3xl font-sans font-semibold mt-2">
            Dubai Collection
          </h4>
          <div className="flex flex-row">
            <img src="Rating.png" alt="" />
            <img className="ml-[9.125rem]" src="Arrow.png" alt="" />
          </div>
        </div>
      </div>
      {/* Shops */}
      <div className="flex flex-row justify-between ">
        {/* Shops category Name */}
        <h3 className="text-3xl font-serif mt-3">Women's Fashion</h3>
        <p className="font-sans mt-3  text-[#248F59]">See All</p>
      </div>
      {/* Shops Cards */}
      <div className=" flex flex-row">
        <div className="h-[18.4375rem] w-[17.8125rem] mr-2 rounded mt-3 shadow-md">
          <img src="pants.png" />
          <img className="-mt-7" src="circle.png" />
          <h4 className="text-3xl font-sans font-semibold mt-2">Jean’s Club</h4>
          <div className="flex flex-row">
            <img src="Rating.png" alt="" />
            <img className="ml-[9.125rem]" src="Arrow.png" alt="" />
          </div>
        </div>
        <div className="h-[18.4375rem] w-[17.8125rem] rounded mt-3 shadow-md">
          <img src="pants.png" />
          <img className="-mt-7" src="circle.png" />
          <h4 className="text-3xl font-sans font-semibold mt-2">
            Dubai Collection
          </h4>
          <div className="flex flex-row">
            <img src="Rating.png" alt="" />
            <img className="ml-[9.125rem]" src="Arrow.png" alt="" />
          </div>
        </div>
      </div>







    </div>
  );
};
export default Shop;
