import React from "react";
import DashboardLayout from "../Dashboard/dashboardlayout";
import { RefundTable } from "../../Components/User Dashboard/refund/refundTable";



const Refund = () => {
  return (
    <DashboardLayout className="flex w-full max-w-[1920] flex-col items-start  ">
      <div className=" lg:!flex-row my-2 w-full ">
        <RefundTable />
      </div>
    </DashboardLayout>
  );
};
export default Refund;
