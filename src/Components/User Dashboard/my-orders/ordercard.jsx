import React from "react";
import moment from "moment"
const OrderCard = ({single,handleDetail}) => {
  let GrandTotal =single?.Products?.reduce((acc, p) => {
    return acc + (p?.Product.salePrice * p.order_quantity);
  }, 0);
  
  return (
    <>
      <div onClick={()=>handleDetail(single?._id)} className="over mb-4 flex  shrink-0 font-sans cursor-pointer flex-col overflow-auto rounded border-2 border-[#248F59] bg-white last:mb-0">
        <div className="flex items-center justify-center border-b py-3 px-2 ">
          <span className="flex shrink-0 text-sm font-bold text-heading ltr:mr-4 rtl:ml-4 lg:text-base">
            Order
            <span className="font-normal">#{single?._id.slice(0,5)}</span>
          </span>
          {/* <span
            // className="max-w-full truncate whitespace-nowrap rounded bg-blue-100 px-3 py-2 text-sm text-blue-500"
            className="max-w-full truncate rounded capitalize  px-3 py-2 text-sm text-[#248F59]"
          >
            {single?.orderStatus}
          </span> */}
        </div>

        <div className="flex flex-col p-2 md:p-3 lg:px-2 lg:py-5">
          <p className="mb-4 flex  items-center justify-between text-sm text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Order Date<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">
           {moment(single?.createdAt).format("MMMM D, YYYY")}
              {/* {dayjs(created_at).format("MMMM D, YYYY")} */}
            </span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Status
              <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="truncate ltr:ml-1 rtl:mr-1">
            {single?.orderStatus}

            </span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
            <span className="w-24 shrink-0 overflow-auto">
              Amount<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">{GrandTotal}/PKR</span>
          </p>
          <p className="mb-4 flex w-full items-center justify-between text-sm font-bold text-heading last:mb-0">
            <span className="w-24 flex-shrink-0 overflow-auto">
              Total Price<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>

            <span className="ltr:ml-1 rtl:mr-1">{GrandTotal}/PKR</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default OrderCard;
