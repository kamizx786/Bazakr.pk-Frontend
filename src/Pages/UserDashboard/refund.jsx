import React from "react";
import DashboardLayout from "../Dashboard/dashboardlayout";
import { RefundTable } from "../../Components/User Dashboard/refund/refundTable";



const Refund = () => {
  return (
    <DashboardLayout className="flex w-full max-w-[1920] flex-col items-start bg-gray-100  lg:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <div className="flex flex-col my-2 w-full items-center justify-center">
        <RefundTable/>
      </div>
    </DashboardLayout>
  );
};
export default Refund;
