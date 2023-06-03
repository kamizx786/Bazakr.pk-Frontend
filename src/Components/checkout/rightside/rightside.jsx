import { useState } from "react";
import PaymentMethod from "./choosePayment";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const RightSideView = ({ cart, handleOrder, loading, values, setValues }) => {
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
          <p className="text-black text-2xl font-serif font-normal">
            Your Order
          </p>
        </div>
        <>
          {cart?.map((c) => {
            return (
              <>
                <div className="flex font-sans border-b border-border-200 justify-between py-2">
                  <div className="flex items-center justify-between text-base">
                    <span className="text-sm w-[11.25rem] truncate">
                      <span className="text-sm font-bold">
                        {c.order_quantity}
                      </span>
                      <span className="mx-2">x</span>
                      <span className="">{c.name}</span>
                    </span>
                  </div>
                  <span className="text-sm">
                    {c.salePrice * c.order_quantity} PKR
                  </span>{" "}
                </div>
              </>
            );
          })}
          <div className="flex justify-between mt-2">
            <p className="text-sm text-body font-sans font-semibold">
              Sub Total
            </p>
            <span className="text-sm text-body">{GrandTotal}-PKR</span>
          </div>

          <div className="flex justify-between my-3 border-b-2">
            <p className="text-lg text-body font-sans font-semibold !text-[#248f59]">
              Total
            </p>
            <span className="text-sm text-body">{GrandTotal}-PKR</span>
          </div>

          <PaymentMethod values={values} setValues={setValues} />
          <div>
            <button
              onClick={handleOrder}
              className="bg-[#248F59] w-full mt-3 text-[#f2f2f2] hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold "
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
