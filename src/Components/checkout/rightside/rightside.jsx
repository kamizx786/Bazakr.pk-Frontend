import { useState } from "react";
import PaymentMethod from "./choosePayment";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const RightSideView = ({
  cart,
  handleOrder,
  loading,
  values,
  setValues
}) => {
  let GrandTotal =
    cart &&
    cart.length &&
    cart.reduce((acc, product) => {
      return acc + product.salePrice * product.order_quantity;
    }, 0);

  return (
    <>
      <div className="flex flex-col p-2 w-full">
        <div className="flex items-center mb-4 justify-center">
          <p className="text-black font-sans font-semibold">Your Order</p>
        </div>
        <>
          {cart?.map((c) => {
            return (
              <>
                <div className="flex font-sans border-b border-border-200 justify-between py-2">
                  <div className="flex items-center justify-between text-base">
                    <span className="text-sm">
                      <span className="text-sm font-bold">
                        {c.order_quantity}
                      </span>
                      <span className="mx-2">x</span>
                      <span>{c.name}</span> |{" "}
                      <span>
                        {c.order_quantity}*{c.salePrice}
                      </span>
                    </span>
                  </div>
                  <span className="text-sm">
                    {c.salePrice * c.order_quantity} PKR
                  </span>{" "}
                </div>
              </>
            );
          })}
          <div className="flex justify-between">
            <p className="text-sm text-body">Sub Total</p>
            <span className="text-sm text-body">{GrandTotal}-PKR</span>
          </div>

          <div className="flex justify-between my-3 border-b-2">
            <p className="text-sm text-body">Total</p>
            <span className="text-sm text-body">{GrandTotal}-PKR</span>
          </div>

          <PaymentMethod
            values={values}
            setValues={setValues}
          />
          <div>
            <button
              onClick={handleOrder}
              className="w-full h-fit p-3 shadow bg-[#248F59] text-[#f2f2f2] rounded font-sans font-normal uppercase my-3"
            >
              <Link>{loading ? <LoadingOutlined /> : "Palce Order"}</Link>
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default RightSideView;
