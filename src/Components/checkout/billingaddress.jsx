import React, { useState,useEffect } from "react";
import { Bs2CircleFill } from "react-icons/bs";
import AddressModal from "../User Dashboard/profile/addressModel";
const BillingAddress = ({values,setValues}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [street, setStreet] = useState("");
  // const [zipCode, setZipCode] = useState("");


  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const address = `${country}, ${city}, ${street}, ${zipCode}`;
  //   setSavedAddress(address);
  //   localStorage.setItem("billingAddress", address);

  //   closeModal();
  // };


  return (
    <>
      <div className="bg-white flex flex-col  shadow p-3 mb-5  font-sans justify-between">
        <div className="flex justify-between flex-row mb-5 space-x-3 rtl:space-x-reverse md:space-x-4">
          <div className="gap-2 flex flex-row">
            <Bs2CircleFill color="#248F59" size={25} />
            <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
              Billing and Shipping Address
            </p>
          </div>
          {/* <p
            className="text-[#248F59] cursor-pointer font-normal py-2 px-4 "
            onClick={openModal}
          >
            + ADD
          </p> */}
         
          {/* <AddressModal
            isOpen={isOpen}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            zipCode={zipCode}
            setZipCode={setZipCode}
          /> */}
        </div>

        {/* SHOW ADDRESS */}
        <input 
        value={values.order_address}
        onChange={(e)=>setValues((prevValues) => ({
          ...prevValues,
          order_address:e.target.value,
        }))}
        className=" focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent"/>
        
      </div>
    </>
  );
};
export default BillingAddress;
