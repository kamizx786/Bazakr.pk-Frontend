import React from "react";
const DetailPack = () => {
  return (
    <>
      <div className="flex flex-col border-b border-border-200 sm:flex-row">
        <div className="flex w-full flex-col border-b border-border-200 px-5 py-4 sm:border-b-0 ltr:sm:border-r rtl:sm:border-l md:w-2/5">
          <div className="mb-4">
            <span className="mb-2 block text-sm font-bold text-heading">
              Shipping Address
            </span>

            <span className="text-sm text-body">Gujranwala</span>
          </div>
        </div>

        <div className="flex w-full flex-col px-5 py-4 md:w-3/5">
          <div className="mb-3 flex w-full justify-between">
            <span className="text-sm text-body">Sub Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span></span>
            <span className="text-sm text-heading">23455PKR</span>
          </div>

          <div className="mb-3 flex w-full  justify-between">
            <span className="text-sm text-body">Delivery Fee<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span></span>
            <span className="text-sm text-heading">500</span>
          </div>
          <div className="mb-3 flex w-full  justify-between">
            <span className="text-sm text-body">TAX<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span></span>
            <span className="text-sm text-heading">0.000012%</span>
          </div>

          <div className="flex w-full  justify-between">
            <span className="text-sm font-bold text-heading">Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span></span>
            <span className="text-sm font-bold text-heading">2800PKR</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPack;
