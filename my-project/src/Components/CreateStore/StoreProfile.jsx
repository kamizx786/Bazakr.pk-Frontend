import { CameraTwoTone } from "@ant-design/icons";
import React, { useState } from "react";

const StoreProfile = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="mx-20">
      <h3 className="text-4xl font-serif mt-3 ]">Store Profile</h3>
      <div>
        <img className="h-[2.1rem] mt-3" src="Store Steps.png" alt="" />
      </div>
      <div className="h-[18.75rem] w-auto">
        <h4 className="font-sans mt-4 text-2xl">Profile & Cover Images</h4>
        <div className="h-[14rem] bg-[#F2F2F2]">
        <span className="float-right font-sans text-[#248F59] mt-[12rem]"><CameraTwoTone  Style={" vertical-align:baseline"}/> Upload Cover Image</span>
      </div>
      <div className="h-[7.625rem] -mt-[3.4rem] w-[7.625rem] rounded-full bg-[#F2F2F2]" Style={"margin-left:50px; border:1px solid #248F59;"}>
        <span className="float-right mt-16 -ml-5  font-sans text-[#248F59]"><CameraTwoTone  Style={" vertical-align:middle"}/></span>
      </div>
      </div>
      <div className="col-md-6 float-left my-10">
        {/* Name */}
        <h4 className="font-sans font-semibold  uppercase mt-1">Name</h4>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Store Name"
          className="h-12 my-2 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        {/* Description */}
        <h4 className="font-sans font-semibold  uppercase mt-1">Description</h4>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Store Description"
          className="px-5 h-[8.5rem] w-[20.4375rem] border rounded-lg border-neutral-300"
        />
        {/* Category */}
        <h4 className="font-sans font-semibold  uppercase mt-1">
          Store Category
        </h4>
        <div className="dropdown">
          <button
            className="btn  dropdown-toggle h-12 my-2 w-[20.4375rem] border rounded-lg border-neutral-300"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
        </div>

        {/* Button */}
        <button className="h-12 mt-3 w-[20.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Save & Continue
        </button>
      </div>
      <div className="col-md-6 float-right my-10 ">
        <img height={"25rem"} src="pan.png" alt="" />
      </div>
    </div>
  );
};
export default StoreProfile;
