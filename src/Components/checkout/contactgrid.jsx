import React, { useState, useEffect } from "react";
import { Bs1CircleFill } from "react-icons/bs";

const ContactGrid = ({values,setValues}) => {
  const handleInputChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      orderContact:event.target.value
    }));
  };

  return (
    <>
      <div className="bg-white flex flex-col shadow p-4 mb-5 font-sans justify-between">
        <div className="flex items-center mb-5 space-x-3 rtl:space-x-reverse md:space-x-4">
          <Bs1CircleFill color="#248F59" size={25} />
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Contact Number
          </p>
        </div>
        <div className="w-full">
          <input
            type="number"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
            value={values.orderContact}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default ContactGrid;
