import React from "react";

const addProduct = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row mx-2 px-2 my-2 py-2">
        <div className="flex flex-col flex-wrap mx-auto">
          {/* Details */}
          <div className="flex flex-col border rounded-2xl border-gray-400 m-2 p-3 mb-3">
            <h5 className="font-sans  font-medium mb-2 text-2xl">Details</h5>
            {/* Name */}
            <input
              type="text"
              className="h-12 mb-2 w-80 md:w-96 bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Product Name"
            />
            {/* Discription */}
            <textarea
              className="h-52 mb-2 w-80 md:w-96 font-sans bg-white border border-gray-400 rounded-lg px-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Product Description"
            />
            {/* Regular Price */}
            <input
              type="number"
              className="h-12 mb-2 w-80 md:w-96 bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Regular Price"
            />
            {/* Sale Price */}
            <input
              type="number"
              className="h-12 mb-2 w-80 md:w-96 bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Sale Price"
            />
          </div>
          {/* Products Pic */}
          <div className="flex flex-col border rounded-2xl border-gray-400 m-2 p-3 mb-3">
            <h5 className="font-sans font-medium mb-2 text-2xl">
              Product Images (up to 4)
            </h5>
            <div class="flex flex-col justify-center items-center p-5 gap-4 h-[17.625rem] bg-[#EAF4EF] border-2 border-dashed border-gray-400 rounded-2xl">
              <img src="../../Public/Dashboard/Image.svg" alt="" />
              <p className="font-sans font-normal text-base text-gray-500">
                Drag & drop product image
              </p>
              {/* OR */}
              <div>
                <div className="h-0.5 -mb-3.5 w-[13.4375rem] bg-neutral-300"></div>
                <div className="w-fit px-2 m-auto font-sans text-base text-gray-500 bg-[#EAF4EF]">
                  OR
                </div>
              </div>
              {/* Button */}
              <button className="h-[17.625rem] mt-3 w-[7.4375rem] text-[#248F59] border-2 border-[#248F59] bg-[#EAF4EF] rounded-lg font-sans uppercase font-base">
                Select Files
              </button>
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="h-12 mt-3 w-[7.4375rem] text-[#248F59] border-2 border-[#248F59] bg-white rounded-lg font-sans uppercase font-semibold">
              Cancel
            </button>{" "}
            <button className="h-12 mt-3 w-[10.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-3/5 mx-auto">
          <div className="flex flex-col border rounded-2xl border-gray-400 m-2 p-3 mb-3">
            <h5 className="font-sans font-medium mb-2 text-2xl">Category</h5>
            <select className="h-[4.0625rem] border border-gray-400 rounded-lg px-3 py-2 text-lg  font-normal tracking-normal  flex ">
                <option>Select Category</option>
                <option>1.</option>
                <option>2.</option>
                <option>3.</option>
              </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default addProduct;
