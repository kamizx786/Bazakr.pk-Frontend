import React from "react";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import OrderCard from "../../Components/order/ordercard";
import OrderDetail from "../../Components/order/orderdetails";
import StripePay from "../../Components/order/stripePay";
import { OrderTable } from "../../Components/order/table";

const Order = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-lg">
        <div className="my-4">
          <Link to="/">
            <div className="flex flex-row gap-2 w-fit">
              <GoHome size={20} color="green" />
              <span className="text-[#248F59] font-sans">Back To Home</span>
            </div>
          </Link>
          {/* STRIPE */}
          <StripePay />
        </div>
        <div className="relative overflow-hidden rounded border shadow-sm">
          <div className="bg-light p-6 sm:p-8 lg:p-12">
            {/* ORDER CARDS */}
            <OrderCard />

            {/* ORDER DETAILS */}
            <OrderDetail />
            {/* ORDER Table */}
            <OrderTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
