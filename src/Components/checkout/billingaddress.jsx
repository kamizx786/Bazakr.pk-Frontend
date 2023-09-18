import React from "react";
import { Bs2CircleFill } from "react-icons/bs";
const BillingAddress = ({ values, setValues }) => {
  

  return (
    <>
      <div className="bg-white flex flex-col border rounded p-3 mb-5  font-sans justify-between">
        <div className="flex justify-between flex-row mb-5 space-x-3 rtl:space-x-reverse md:space-x-4">
          <div className="gap-2 flex flex-row">
            <Bs2CircleFill color="#248F59" size={25} />
            <p className="text-lg font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl">
              Billing and Shipping Address
            </p>
          </div>
          

          
        </div>

        {/* SHOW ADDRESS */}
        <input
          value={values.order_address}
          onChange={(e) =>
            setValues((prevValues) => ({
              ...prevValues,
              order_address: e.target.value,
            }))
          }
          className=" focus:outline-none focus:ring-2 focus:ring-green-600 font-sans  p-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-sm border rounded"
        />
      </div>
    </>
  );
};
export default BillingAddress;
