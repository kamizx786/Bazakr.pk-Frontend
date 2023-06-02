import React from "react";
import { OrderTable } from "../../order/table";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {toast} from "react-toastify"
import { cancelOrder } from "./function";
import { UserOrders } from "../../../Pages/Checkout/functions";
import { useDispatch } from "react-redux";
const OrderDetail = ({singleOrder}) => {
  let GrandTotal = singleOrder?.Products?.reduce((acc, p) => {
    return acc + p?.Product?.salePrice * p.order_quantity;
  }, 0);
  const dispatch=useDispatch()
  const CancelOrder = () => {
  let  status="cancelled";
    try {
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
         cancelOrder(singleOrder?._id,status)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Your Order Has Been Cancelled", {
                  icon: "success",
                });
                UserOrders(dispatch)
              }
            })
            .catch((error) => {
              toast.error(error);
            });
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div className="flex w-full flex-col font-sans border border-border-200 bg-white lg:w-2/3">
        <div className="flex shadow border-2 border-[#f2f2f2] w-full flex-col items-center p-5 md:flex-row md:justify-between">
          <h2 className="mb-2 flex text-sm font-semibold text-heading md:text-lg">
            Detail <span className="px-2">-</span> #{singleOrder?._id}
          </h2>
   {singleOrder?.orderStatus==="processing" ||singleOrder?.orderStatus==="Not Processed"?
         <div onClick={CancelOrder} className="flex items-center border border-[#248F59] rounded p-2 cursor-pointer text-[#248F59]">
             Cancel
          </div>:""}
          <div className="flex items-center border border-[#248F59] rounded p-2 cursor-pointer text-[#248F59]">
            <Link to={`/order/${singleOrder?._id}`}> View Invoice</Link>
          </div>
        </div>
        {/* <div className="relative mx-5 mb-6 overflow-hidden rounded"></div> */}

        <div className="flex flex-col border-b border-border-200 sm:flex-row">
          <div className="flex w-full flex-col border-b border-border-200 px-5 py-4 sm:border-b-0 ltr:sm:border-r rtl:sm:border-l md:w-2/5">
            <div className="mb-4">
              <span className="mb-2 block text-sm font-bold text-heading">
                Shipping Address
              </span>

              <span className="text-sm text-body">
                {singleOrder?.order_address}
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col px-5 py-4 md:w-3/5">
            <div className="mb-3 flex w-full justify-between">
              <span className="text-sm text-body">
                Sub Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm text-heading">{GrandTotal}/PKR</span>
            </div>

            <div className="mb-3 flex w-full  justify-between">
              <span className="text-sm text-body">
                Delivery Fee
                <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm text-heading">0.00</span>
            </div>
            <div className="mb-3 flex w-full  justify-between">
              <span className="text-sm text-body">
                TAX<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm text-heading">0.00</span>
            </div>

            <div className="flex w-full  justify-between">
              <span className="text-sm font-bold text-heading">
                Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm font-bold text-heading">
                {GrandTotal}/PKR
              </span>
            </div>
          </div>
        </div>

        {/* Order Table */}

        <div className="overflow-x-auto flex flex-col justify-center">
          <OrderTable singleOrder={singleOrder} />
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
