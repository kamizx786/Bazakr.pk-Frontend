import React from "react";
import DashboardLayout from "../Dashboard/dashboardlayout";
import OrderCard from "../../Components/User Dashboard/my-orders/ordercard";
import OrderDetail from "../../Components/User Dashboard/my-orders/orderDetail";

const MyOrders = () => {
  return (
    <DashboardLayout className="flex w-full gap-2 max-w-[1920] flex-col items-start  ">
      <div className="flex flex-col md:!flex-row gap-3 border-3 border-yellow-400 my-2 w-full items-center justify-center">
        <OrderCard />

        <OrderDetail />
      </div>
    </DashboardLayout>
  );
};
export default MyOrders;
