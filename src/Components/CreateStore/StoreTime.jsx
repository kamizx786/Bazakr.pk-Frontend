import React, { useState } from "react";

const StoreTime = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="mx-20">
      <h3 className="text-4xl font-serif mt-3 ]">Store Address & Timings</h3>
      <div>
        <img className="h-[2.1rem] mt-3" src="Storesteps 2.png" alt="" />
      </div>
      <div className="col-md-6 float-left my-10">
        {/* Category */}
        <h4 className="font-sans font-semibold  uppercase mt-1">City</h4>
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle h-12 my-2 w-[20.4375rem] border rounded-lg border-neutral-300"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select City
          </button>
          <div
            className="dropdown-menu w-[20.4375rem]"
            aria-labelledby="dropdownMenuButton"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
          <h4 className="font-sans font-semibold  uppercase mt-1">Location</h4>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Store Location"
            className="h-12 my-2 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
          />
          <h4 className="font-sans font-semibold  uppercase mt-1">Timings</h4>
          <div>
            <input type="radio" />
            <span className="font-sans"> Always Open</span>
          </div>
          <div>
            <input type="radio" />
            <span className="font-sans"> Opens during selected hours</span>
          </div>
         <div>
         <label className="font-sans font-semibold  uppercase mt-1">Opening</label>
          <input
            type="time"
            className="h-12 my-2 w-[10.2188rem] px-5 border rounded-lg border-neutral-300"
          />
         </div>
          <label className="font-sans font-semibold  uppercase mt-1">Closing</label>
          <input
            type="Time"
            placeholder="Closing"
            className="h-12 my-2 w-[10.2188rem] px-5 border rounded-lg border-neutral-300"
          />
        </div>

        {/* Button */}
        <button className="h-12 mt-3 w-[7.4375rem] text-[#248F59] border-[#248F59] bg-white rounded-lg font-sans uppercase font-semibold" Style={"border:1px solid"}>
          Back
        </button>{"   "}
        <button className="h-12 mt-3 w-[10.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Save & Continue
        </button>
      </div>
      <div className="col-md-6 float-right my-10 ">
        <img height={"25rem"} src="pan.png" alt="" />
      </div>
    </div>
  );
};
export default StoreTime;
