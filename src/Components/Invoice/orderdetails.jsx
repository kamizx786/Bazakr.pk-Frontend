import React from "react";

const OrderDetail = ({ singleOrder, GrandTotal }) => {

  return (
    <>
      {/* ORDER DETAILS */}
      <div className="flex flex-col gap-2 font-sans lg:flex-row">
        {/* TOTAL AMOUNT DETAILS */}
        <div className="mb-12 w-full border rounded bg-white p-4 border-[#f2f2f2] lg:mb-0 lg:w-1/2 ltr:lg:pr-3 rtl:lg:pl-3">
          <h2 className="mb-6 text-xl font-bold">Total Amount</h2>
          <div>
            <p className="flex items-center justify-between px-2">
              <strong className=" text-sm font-semibold  ">
                Sub Total<span className="ml-2">:</span>
              </strong>

              <span className=" text-sm  ">{GrandTotal}/PKR</span>
            </p>
            <p className="mt-3 flex items-center justify-between px-2">
              <strong className="whitespace-nowrap text-sm font-semibold">
                Tax n Shipping Charge<span className="ml-2">:</span>
              </strong>

              <span className="text-sm">0.00</span>
            </p>

            <p className="mt-3 flex items-center justify-between px-2  ">
              <strong className="text-sm font-semibold ">
                Discount<span className="ml-2">:</span>
              </strong>

              <span className="text-sm">0.00</span>
            </p>
            <p className="mt-3 text-[#248f59] flex items-center border-t border-[#248f59] justify-between px-2">
              <strong className="font-semibold">
                Total<span className="ml-2">:</span>
              </strong>

              <span className="font-semibold">{GrandTotal}/PKR</span>
            </p>
          </div>
        </div>
        {/* end of total amount */}

        {/* PRODUCT DETAILS */}
        <div className="w-full  border rounded bg-white p-4 border-[#f2f2f2] lg:w-1/2 ltr:lg:pl-3 rtl:lg:pr-3">
          <h2 className="mb-6 text-xl  font-bold  ">Order Details</h2>
          <div>
            <p className="  flex items-center justify-between px-2 ">
              <strong className="text-sm font-semibold  ">
                Order By <span className="ml-2">:</span>
              </strong>

              <span className="text-sm">{singleOrder?.orderBy?.name}</span>
            </p>

            <p className="mt-3 flex items-center justify-between px-2  ">
              <strong className="text-sm font-semibold  ">
                Total Item<span className="ml-2">:</span>
              </strong>

              <span className=" text-sm  ">
                {singleOrder?.Products?.length}
              </span>
            </p>

            <p className="mt-3 flex items-center justify-between px-2   ">
              <strong className=" text-sm font-semibold  ">
                Store Name<span className="ml-2">:</span>
              </strong>

              <span className="text-sm  ">{singleOrder?.store?.Storename}</span>
            </p>

            <p className="mt-3 flex items-center justify-between px-2  ">
              <strong className="text-sm font-semibold whitespace-nowrap ">
                Shipping Address<span className="ml-2">:</span>
              </strong>

              <span className="text-sm truncate ml-1">{singleOrder?.order_address}</span>
            </p>

            {singleOrder?.paymentType === "cod" && (
              <p className="mt-3  flex items-center justify-between px-2">
                <strong className="text-sm  whitespace-nowrap font-semibold">
                  Billing Address<span className="ml-2">:</span>
                </strong>

                <span className="text-sm truncate ml-1">{singleOrder?.order_address}</span>
              </p>
            )}
          </div>
        </div>
        {/* end of order details */}
      </div>
    </>
  );
};
export default OrderDetail;
