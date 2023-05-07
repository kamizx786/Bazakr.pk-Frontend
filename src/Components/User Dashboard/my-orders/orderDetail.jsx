import React from "react";
import { OrderTable } from "../../order/table";
import DetailPack from "./detailpack";
import RefundModal from "./refundModel";
const OrderDetail = () => {
  const [showRefundModal, setShowRefundModal] = React.useState(false);

  return (
    <>
      <div className="flex w-full flex-col font-sans border border-border-200 bg-white lg:w-2/3">
        <div className="flex shadow border-2 border-[#f2f2f2] w-full flex-col items-center p-5 md:flex-row md:justify-between">
          <h2 className="mb-2 flex text-sm font-semibold text-heading md:text-lg">
            Order Details <span className="px-2">-</span>{" "}
            {/* {tracking_number} */} 122334455
          </h2>
          <div
            className="flex items-center border border-[#248F59] rounded p-2 cursor-pointer text-[#248F59]"
            onClick={() => setShowRefundModal(true)}
          >
            Refund
          </div>
        </div>
        {/* <div className="relative mx-5 mb-6 overflow-hidden rounded"></div> */}

        <DetailPack />

        {/* Order Table */}
        <div>
          <div className="flex w-full items-center justify-center px-6">
            <OrderTable />
          </div>
        </div>
        {showRefundModal && (
          <RefundModal closeModal={() => setShowRefundModal(false)} />
        )}
      </div>
    </>
  );
};
export default OrderDetail;
