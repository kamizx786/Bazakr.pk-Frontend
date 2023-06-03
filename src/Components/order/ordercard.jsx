import React from "react";
const OrderCard = ({ singleOrder, GrandTotal }) => {
  const dateStr = singleOrder?.createdAt;
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString();
  return (
    <>
      <div className="mb-6 grid font-sans gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4">
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            Tracking Number
          </h3>
          <p className="text-xs  text-body-dark">{singleOrder?._id}</p>
        </div>
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          <h3 className="mb-2 text-sm font-semibold text-heading">Date</h3>
          <p className="text-sm text-body-dark">{formattedDate}</p>
        </div>
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            Order Status
          </h3>
          <p className="text-sm text-body-dark">{singleOrder?.orderStatus}</p>
        </div>
        <div className="bg-white rounded border border-[#f2f2f2] py-4 px-3">
          <h3 className="mb-2 text-sm font-semibold text-heading">
            Payment Method
          </h3>
          <p className="text-sm uppercase text-body-dark">
            {singleOrder?.paymentType}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
