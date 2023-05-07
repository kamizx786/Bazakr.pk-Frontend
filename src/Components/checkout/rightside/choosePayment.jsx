import React, { useState, useEffect } from "react";
import { FaStripe } from "react-icons/fa";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  useEffect(() => {
    const storedMethod = localStorage.getItem("selectedPaymentMethod");
    if (storedMethod) {
      setSelectedMethod(storedMethod);
    }
  }, []);

  const handleStripeSelect = () => {
    setSelectedMethod("stripe");
    localStorage.setItem("selectedPaymentMethod", "stripe");
  };

  const handleCODSelect = () => {
    setSelectedMethod("cod");
    localStorage.setItem("selectedPaymentMethod", "cod");
  };

  return (
    <>
      <div className="flex flex-col font-sans bg-white p-2">
        <h1 className="text-black text-center font-sans font-semibold">
          Choose a Payment Method
        </h1>
        <div className="my-4 flex flex-row gap-2">
          <div
            className={`bg-white flex justify-center items-center p-3 h-fit w-full cursor-pointer shadow-2xl  ${
              selectedMethod === "stripe" ? "border-green-500 border-2" : ""
            }`}
            onClick={handleStripeSelect}
          >
            <FaStripe color="blue" size={50} />
          </div>
          <div
            className={`bg-white flex justify-center items-center text-center font-medium p-3  w-full cursor-pointer shadow-2xl ${
              selectedMethod === "cod" ? "border-green-500 border-2" : ""
            }`}
            onClick={handleCODSelect}
          >
            <p>Cash on Delivery</p>
          </div>
        </div>

        <div>
          {selectedMethod === "stripe" && (
            <p className="text">
              Please click Place order to make order and payment
            </p>
          )}
          {selectedMethod === "cod" && (
            <p>Please Pay After You Receive Your Goods!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
