import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoicePDF from "../../Components/order/invoice";
import OrderCard from "../../Components/order/ordercard";
import OrderDetail from "../../Components/order/orderdetails";
import { OrderTable } from "../../Components/order/table";

const Order = () => {
  const { Orders, loggedIn } = useSelector((state) => ({ ...state }));
  const [singleOrder, setSingleOrder] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const invoiceRef = useRef();
  let GrandTotal = singleOrder?.Products?.reduce((acc, p) => {
    return acc + p?.Product.salePrice * p.order_quantity;
  }, 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LoadOrder = () => {
    const updated = Orders?.filter((o) => {
      return params._id === o._id;
    });
    setSingleOrder(updated[0]);
  };
  useEffect(() => {
    if (Orders && Orders.length) {
      LoadOrder();
    }
  }, [params, Orders]);
  useEffect(() => {
    if (!singleOrder || !loggedIn?.token) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 8000);
      return () => clearTimeout(timeoutId);
    }
  }, [singleOrder, loggedIn]);
  return !singleOrder || Orders === null || !loggedIn?.token ? (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <>
      <div className="mx-auto mb-4 w-full max-w-screen-lg">
        <div className="my-4 flex justify-between">
          <Link to="/">
            <div className="flex flex-row gap-2 w-fit">
              <GoHome size={20} color="green" />
              <span className="text-[#248F59] font-sans">Back To Home</span>
            </div>
          </Link>
          <div className="flex flex-row gap-2 w-fit">
            <InvoicePDF singleOrder={singleOrder} GrandTotal={GrandTotal} />
          </div>

          {/* STRIPE */}
          {/* <StripePay /> */}
        </div>
        <div
          ref={invoiceRef}
          className="relative overflow-hidden rounded border shadow-sm"
        >
          <div className="bg-light p-6 sm:p-8 lg:p-12">
            {/* ORDER CARDS */}
            <OrderCard singleOrder={singleOrder} GrandTotal={GrandTotal} />

            {/* ORDER DETAILS */}
            <OrderDetail singleOrder={singleOrder} GrandTotal={GrandTotal} />
            {/* ORDER Table */}
            <OrderTable singleOrder={singleOrder} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
