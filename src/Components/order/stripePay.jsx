import React, { useState } from "react";

const StripePay = () => {
  const selectedMethod = "stripe";
  const [cardInfo, setCardInfo] = useState({
    number: "",
    ownerName: "",
    cvc: "",
    expiryDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let truncatedValue = value;
    if (name === "cvc" && value.length > 4) {
      truncatedValue = value.slice(0, 4);
    }
    setCardInfo({ ...cardInfo, [name]: truncatedValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the card info, such as sending it to Stripe for processing
  };
  return (
    <>
      {selectedMethod === "stripe" && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row p-3 border border-[#f2f2f2] shadow gap-3 my-3">
            <div className="flex flex-col">
              <label
                className="text-sm whitespace-nowrap font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl"
                htmlFor="company"
              >
                Card Number:
              </label>

              <input
                type="number"
                id="number"
                name="number"
                className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
                value={cardInfo.number}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm whitespace-nowrap font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl"
                htmlFor="ownerName"
              >
                Owner Name:
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
                value={cardInfo.ownerName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm whitespace-nowrap font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl"
                htmlFor="cvc"
              >
                CVC:
              </label>
              <input
                type="number"
                id="cvc"
                name="cvc"
                className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
                value={cardInfo.cvc}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-sm whitespace-nowrap font-serif font-medium text-[#248F59] capitalize text-heading lg:text-xl"
                htmlFor="expiryDate"
              >
                Expiry Date:
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                className="focus:outline-none focus:ring-2 focus:ring-green-600 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 p-3 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm !border !border-border-base !rounded focus:!border-accent !h-12"
                value={cardInfo.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex p-6">
              <button
                className="rounded flex float-right h-fit p-2 w-24 items-center justify-center  text-[#f2f2f2] bg-[#248F59] "
                type="submit"
              >
                Pay
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default StripePay;
