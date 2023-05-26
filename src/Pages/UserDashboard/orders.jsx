import React, { useEffect, useState } from "react";
import DashboardLayout from "../Dashboard/dashboardlayout";
import OrderCard from "../../Components/User Dashboard/my-orders/ordercard";
import OrderDetail from "../../Components/User Dashboard/my-orders/orderDetail";
import { useSelector } from "react-redux";
const MyOrders = () => {
const {Orders}=useSelector((state)=>({...state}));
const [order,setOrder]=useState([]);
const [singleOrder,setSingleOrder]=useState({});
useEffect(()=>{
if(Orders&&Orders.length){
setOrder(Orders);
setSingleOrder(Orders[0]);
}
},[Orders])
const handleDetail=(_id)=>{
const updated=Orders?.filter((o)=>{
return o._id===_id;
})
setSingleOrder(updated[0]);
}
  return (
    <DashboardLayout className="flex w-full gap-2 max-w-[1920] flex-col items-start  ">
      <div className="flex flex-col lg:!flex-row gap-3 border-3 border-yellow-400 my-2 w-full items-center justify-center">
        <div className="flex flex-col overflow-y-scroll h-96">
          {order?.map((o) => {
            return (
              <OrderCard handleDetail={handleDetail} single={o} key={o._id} />
            );
          })}
        </div>
        <OrderDetail singleOrder={singleOrder} />
      </div>
    </DashboardLayout>
  );
};
export default MyOrders;
