import React from "react";
import ContactGrid from "../../Components/checkout/contactgrid";
import BillingAddress from "../../Components/checkout/billingaddress";
import RightSideView from "../../Components/checkout/rightside/rightside";

const Checkout = () => {
  return (
    <>
      <div className="px-4 py-8 bg-gray-100 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center w-full max-w-5xl m-auto rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-2xl">
            {/* CONTACT */}
            <ContactGrid className="p-5 bg-light shadow-700 md:p-8" />
            {/* BILL n SHIP */}
            <BillingAddress className="p-5 bg-light shadow-700 md:p-8" />
          </div>
          <div className="w-full mt-10 mb-10 sm:mb-12 lg:mb-0 lg:w-96">
            <RightSideView /> 
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Checkout;
