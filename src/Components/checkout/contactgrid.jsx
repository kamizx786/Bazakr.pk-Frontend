import React, { useState, useEffect } from "react";
import { Bs1CircleFill } from "react-icons/bs";

const ContactGrid = ({ values, setValues,whatsappError, setWhatsappError }) => {

  const handleInputChange = (e) => {
    const input = e.target.value;

    // Remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, "");

    // Limit the input to a maximum of 11 digits
    const limitedInput = digitsOnly.slice(0, 11);
    setValues((prevValues) => ({
      ...prevValues,
      orderContact: limitedInput,
    }));

    // Validate Pakistan phone number
    const regex = /^(\+92|0)?[0-9]{10}$/;
    if (!regex.test(limitedInput)) {
      setWhatsappError("Please enter a valid Pakistan phone number.");
    } else {
      setWhatsappError("");
    }
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
          {whatsappError && <p className="text-red-500 mt-2">{whatsappError}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactGrid;
