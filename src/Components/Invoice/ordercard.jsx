import React from "react";
import { DateTime } from "luxon";

const OrderCard = ({ singleOrder }) => {
  return (
    <>
      {/* ORDER DEATILS HEAD CARDS */}
      <div className="mb-6 grid font-sans gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4">
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          {/* TRACKING NUMBER */}
          <h3 className="mb-2 text-sm font-semibold">Tracking Number</h3>
          <p className="text-xs">{singleOrder?._id}</p>
        </div>
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          {/* DATE */}
          <h3 className="mb-2 text-sm font-semibold">Date</h3>
          <p className="text-sm">
            {DateTime.fromISO(singleOrder?.createdAt).toLocaleString(
              DateTime.DATE_FULL
            )}
          </p>
        </div>
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          {/* ORDER STATUS */}
          <h3 className="mb-2 text-sm font-semibold">Order Status</h3>
          <p className="text-sm">{singleOrder?.orderStatus}</p>
        </div>
        {/* PAYMENT METHOD */}
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          <h3 className="mb-2 text-sm font-semibold">Payment Method</h3>
          <p className="text-sm uppercase">{singleOrder?.paymentType}</p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
