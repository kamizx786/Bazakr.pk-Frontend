import React from "react";
const OrderCard = () => {
  return (
    <>
      <div className="mb-4 flex  shrink-0 font-sans cursor-pointer flex-col overflow-auto rounded border-2 border-[#248F59] bg-white last:mb-0">
        <div className="flex items-center justify-between border-b border-border-200 py-3 px-5 md:px-3 lg:px-5 ">
          <span className="flex shrink-0 text-sm font-bold text-heading ltr:mr-4 rtl:ml-4 lg:text-base">
            Order
            <span className="font-normal">#234</span>
          </span>
          <span
            // className="max-w-full truncate whitespace-nowrap rounded bg-blue-100 px-3 py-2 text-sm text-blue-500"
            className="max-w-full truncate rounded capitalize  px-3 py-2 text-sm text-[#248F59]"
          >
            pending
          </span>
        </div>

        <div className="flex flex-col p-5 md:p-3 lg:px-4 lg:py-5">
          <p className="mb-4 flex w-full items-center justify-between text-sm text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Order Date<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">
              12/12/12
              {/* {dayjs(created_at).format("MMMM D, YYYY")} */}
            </span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Delievery Time
              <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="truncate ltr:ml-1 rtl:mr-1">Express</span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Amount<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">2500PKR</span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
            <span className="w-24 flex-shrink-0 overflow-auto">
              Total Price<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">2800PKR</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default OrderCard;
