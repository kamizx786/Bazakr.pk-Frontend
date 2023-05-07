import React from "react";

const OrderDetail = () => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="mb-12 w-full border-2 shadow p-3 border-[#f2f2f2] lg:mb-0 lg:w-1/2 ltr:lg:pr-3 rtl:lg:pl-3">
          <h2 className="mb-6 text-xl text-center font-bold text-heading">
            Total Amount
          </h2>
          <div>
            <p className="mt-5  flex text-body-dark">
              <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                Sub Total<span className="ml-2">:</span>
              </strong>

              <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                {/* {sub_total} */} 22450PKR
              </span>
            </p>
            <p className="mt-5 flex text-body-dark">
              <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                Tax n Shipping Charge<span className="ml-2">:</span>
              </strong>

              <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                {/* {shipping_charge} */} 50 PKR
              </span>
            </p>

            <p className="mt-5 flex text-body-dark">
              <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                Discount<span className="ml-2">:</span>
              </strong>

              <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ">
                {/* {discount} */} 0.000001%
              </span>
            </p>
            <p className="mt-5 flex text-body-dark">
              <strong className="w-5/12 text-sm font-semibold text-heading sm:w-4/12">
                Total<span className="ml-2">:</span>
              </strong>

              <span className="w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12">
                {/* {total} */} 12987.0987 PKR
              </span>
            </p>
          </div>
        </div>
        {/* end of total amount */}

        <div className="w-full  border-2 shadow p-3 border-[#f2f2f2] lg:w-1/2 ltr:lg:pl-3 rtl:lg:pr-3">
          <h2 className="mb-6 text-xl text-center font-bold text-heading">
            Order Details
          </h2>
          <div>
            <p className="mt-5 flex text-body-dark">
              <strong className="w-4/12 text-sm font-semibold text-heading">
                Name <span className="ml-2">:</span>
              </strong>

              <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                {/* {order?.customer_name} */} Kami
              </span>
            </p>

            <p className="mt-5 flex text-body-dark">
              <strong className="w-4/12 text-sm font-semibold text-heading">
                Total Item<span className="ml-2">:</span>
              </strong>

              <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                {/* {formatString(order?.products?.length, t('text-item'))} */}{" "}
                10
              </span>
            </p>

            <p className="mt-5 flex text-body-dark">
              <strong className="w-4/12 text-sm font-semibold text-heading">
                Delivery Time<span className="ml-2">:</span>
              </strong>

              <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">Normal</span>
            </p>

            <p className="mt-5 flex text-body-dark">
              <strong className="w-4/12 text-sm font-semibold text-heading">
                Shipping Address<span className="ml-2">:</span>
              </strong>

              <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4 ">
                {/* {formatAddress(order?.shipping_address!)} */} Gujranwala
              </span>
            </p>

            <p className="mt-5 flex text-body-dark">
              <strong className="w-4/12 text-sm font-semibold text-heading">
                Billing Address<span className="ml-2">:</span>
              </strong>

              <span className="w-8/12 text-sm ltr:pl-4 rtl:pr-4">
                Gujranwala
              </span>
            </p>
          </div>
        </div>
        {/* end of order details */}
      </div>
    </>
  );
};
export default OrderDetail;