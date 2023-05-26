import React, { useState, useEffect } from "react";
import SaveButton from "../../common/save";
import AddressModal from "./addressModel";
const ProfileForm = ({
  address,
  name,
  email,
  whatsapp,
  loading,
  password,
  Conpassword,
  setName,
  setEmail,
  setWhatsapp,
  setPassword,
  setConPassword,
  setaddress,
  passwordError, 
  setPasswordError,
  handleSubmit,
  whatsappError, 
  setWhatsappError
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
  
    // Validate password
    const regex = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!regex.test(input)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one special character and number.");
    } else {
      setPasswordError("");
    }
  };
  

  const handleWhatsappChange = (e) => {
    const input = e.target.value;
  
    // Remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, '');
  
    // Limit the input to a maximum of 11 digits
    const limitedInput = digitsOnly.slice(0, 11);
  
    setWhatsapp(limitedInput);
  
    // Validate Pakistan phone number
    const regex = /^(\+92|0)?[0-9]{10}$/;
    if (!regex.test(limitedInput)) {
      setWhatsappError("Please enter a valid Pakistan phone number.");
    } else {
      setWhatsappError("");
    }
  };
  
  const handleAddressSubmit = (event) => {
    // event.preventDefault();
    // const address = `${country}, ${city}, ${street}, ${zipCode}`;
    // setSavedAddress(address);
    // localStorage.setItem("billingAddress", address);
    // closeModal();
  };
  return (
    <>
      <div className="bg-white w-full  flex flex-col shadow p-5 mb-3 font-sans justify-between">
        {/* NAME */}
        <div className="flex items-center my-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Name
          </p>
        </div>
        <div className="w-full">
          <input
            value={name}
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[a-zA-Z\s]*$/; // Regex to match alphabetic characters and spaces
              if (regex.test(input)) {
                setName(input);
              }
            }}
            type="text"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
        </div>
        {/* BIO */}
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Email
          </p>
        </div>
        <div className="w-full  ">
          <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
            disabled
          />
        </div>
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Contact Number
          </p>
        </div>
        <div className="w-full  ">
          <input
           value={whatsapp}
           onChange={handleWhatsappChange}
            type="number"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
              {whatsappError && <p className="text-red-500">{whatsappError}</p>}

        </div>
      </div>
      {/* CHANGE PASSWORD */}
      <div className="bg-white w-full  flex flex-col shadow p-5 mb-3 font-sans justify-between">
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Change Password
          </p>
        </div>
        <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
          New Password
        </p>
        <div className="w-full my-2 ">
          <input
 value={password}
 onChange={handlePasswordChange}
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
          Confirm Password
        </p>
        <div className="w-full my-2 ">
          <input
           value={Conpassword}
           onChange={(e)=>setConPassword(e.target.value)}
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
        </div>
      </div>

      {/* ADDRESS */}
      <div className="bg-white flex flex-col w-full shadow p-3 mb-3  font-sans justify-between">
        <div className="flex justify-between flex-row mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <div className="gap-2 flex flex-row">
            <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
              Billing and Shipping Address
            </p>
          </div>
          <p
            className="text-[#248F59] cursor-pointer font-normal py-2 px-4 "
            onClick={openModal}
          >
            + UPDATE
          </p>
          {/* MODAL */}
          <AddressModal
            isOpen={isOpen}
            closeModal={closeModal}
            handleSubmit={handleAddressSubmit}
            setaddress={setaddress}
          />
        </div>

        {/* SHOW ADDRESS */}
        <div className=" focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent">
          {address}
        </div>
        <div className="flex justify-end">
          <SaveButton handleSubmit={handleSubmit} loading={loading} />
        </div>
      </div>
    </>
  );
};
export default ProfileForm;
