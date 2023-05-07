import React, { useState, useEffect } from "react";
import FileInput from "../../common/fileInput";
import SaveButton from "../../common/save";
import AddressModal from "./addressModel";
const ProfileForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [savedAddress, setSavedAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  useEffect(() => {
    const storedAddress = localStorage.getItem("billingAddress");
    if (storedAddress) {
      setSavedAddress(storedAddress);
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const address = `${country}, ${city}, ${street}, ${zipCode}`;
    setSavedAddress(address);
    localStorage.setItem("billingAddress", address);

    closeModal();
  };

  useEffect(() => {
    const savedContactNumber = localStorage.getItem("contactNumber");
    if (savedContactNumber) {
      setContactNumber(savedContactNumber);
    }
  }, []);

  const handleInputChange = (event) => {
    setContactNumber(event.target.value);
  };
  return (
    <>
      <div className="bg-white w-full  flex flex-col shadow p-3 mb-3 font-sans justify-between">
        {/* FILE INPUT */}
        <div className="flex my-2">
          <FileInput />
        </div>
        {/* NAME */}
        <div className="flex items-center my-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Name
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
        </div>
        {/* BIO */}
        <div className="flex items-center my-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Bio
          </p>
        </div>
        <div className="w-full  ">
          <textarea
            type="text"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent"
          />
        </div>
        <div className="flex justify-end">
          <SaveButton></SaveButton>
        </div>
      </div>
      {/* CHANGE PASSWORD */}
      <div className="bg-white w-full  flex flex-col shadow p-3 mb-3 font-sans justify-between">
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Change Password
          </p>
        </div>
        <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
          Old Password
        </p>
        <div className="w-full my-2 ">
          <input
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
        </div>
        <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
          New Password
        </p>
        <div className="w-full my-2 ">
          <input
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
          />
        </div>
        <div className="flex justify-end">
          <SaveButton></SaveButton>
        </div>
      </div>
      {/* EMAIL */}
      <div className="bg-white w-full  flex flex-col shadow p-3 mb-3 font-sans justify-between">
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Email
          </p>
        </div>
        <div className="w-full  ">
          <input
            type="email"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
            disabled
          />
        </div>
      </div>
      {/* CONTACT */}
      <div className="bg-white w-full  flex flex-col shadow p-3 mb-3 font-sans justify-between">
        <div className="flex   items-center mb-3 space-x-3 rtl:space-x-reverse md:space-x-4">
          <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
            Contact Number
          </p>
        </div>
        <div className="w-full  ">
          <input
            type="number"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
            value={contactNumber}
            onChange={handleInputChange}
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
            handleSubmit={handleSubmit}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>

        {/* SHOW ADDRESS */}
        <div className=" focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent">
          {savedAddress}
        </div>
      </div>
    </>
  );
};
export default ProfileForm;
