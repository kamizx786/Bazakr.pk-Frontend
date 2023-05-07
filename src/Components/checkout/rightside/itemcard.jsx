import React from "react";

import PaymentMethod from "./choosePayment";
import { Link } from "react-router-dom";
const ItemCard = () => {
  return (
    <>
      <div className="flex font-sans border-b border-border-200 justify-between py-2">
        <div className="flex items-center justify-between text-base">
          <span className="text-sm">
            <span className="text-sm font-bold">1{/* {item.quantity} */}</span>
            <span className="mx-2">x</span>
            {/* <span>{item.name}</span> | <span>{item.unit}</span> */}
            <span>JEANS</span> | <span>2 pc(s)</span>
          </span>
        </div>
        <span className="text-sm">
          {/* {!notAvailable ? price : t("text-unavailable")} */} 2500 PKR
        </span>{" "}
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-body">Sub Total</p>
        <span className="text-sm text-body">{/*value*/} $13.10</span>
      </div>
      <div className="flex justify-between my-3 border-b-2">
        <p className="text-sm text-body">Shipping n Tax</p>
        <span className="text-sm text-body">{/*value*/} $50.00</span>
      </div>
      <div className="flex justify-between my-3 border-b-2">
        <p className="text-sm text-body">Total</p>
        <span className="text-sm text-body">{/*value*/} $2250.00</span>
      </div>

      <PaymentMethod/>
      <div>
        <button className="w-full h-fit p-2 shadow bg-[#248F59] text-[#f2f2f2] rounded font-sans font-normal uppercase my-3">
          <Link to="/order/payment"> Palce Order</Link>
        </button>
      </div>
    </>
  );
};
export default ItemCard;
