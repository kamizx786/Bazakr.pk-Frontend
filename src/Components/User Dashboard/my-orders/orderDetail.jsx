import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { UserOrders } from "../../../Pages/Checkout/functions";
import { AllProducts } from "../../../Pages/Shops/functions";
import { OrderTable } from "../../Invoice/table";
import { cancelOrder } from "./function";

const OrderDetail = ({ singleOrder }) => {

  let GrandTotal = singleOrder?.Products?.reduce((acc, p) => {
    return acc + p?.Product?.salePrice * p.order_quantity;
  }, 0);
 
  const dispatch = useDispatch();
  
  const CancelOrder = () => {
    let status = "cancelled";
    try {
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          cancelOrder(singleOrder?._id, status)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Your Order Has Been Cancelled", {
                  icon: "success",
                });
                UserOrders(dispatch);
                AllProducts(dispatch);
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
    {/* MY SINGLE  ORDER'S LIST DETAIL */}
      <div className="flex w-full flex-col  rounded mt-3 border border-[#f2f2f2] font-sans rouonded bg-white lg:w-2/3">
        <div className="flex font-sans flex-col items-center p-3 md:flex-row md:justify-between">
          <h2 className="mb-2 flex text-sm font-semibold   md:text-lg">
            Detail <span className="px-2">-</span>
            <span className="text-sm flex items-center">
              {" "}
              #{singleOrder?._id}
            </span>
          </h2>
          {singleOrder?.orderStatus === "processing" ||
          singleOrder?.orderStatus === "Not Processed" ? (
            <div
              onClick={CancelOrder}
              className="flex transition-transform hover:scale-95 items-center border border-[#248F59] rounded p-2 cursor-pointer text-[#248F59]"
            >
              Cancel
            </div>
          ) : (
            ""
          )}
          <div className="flex transition-transform sm:my-2 hover:scale-95 items-center border border-[#248F59] rounded p-2 cursor-pointer text-[#248F59]">
            <Link to={`/order/${singleOrder?._id}`}> View Invoice</Link>
          </div>
        </div>

        <div className="flex flex-col font-sans border-b  sm:flex-row">
          <div className="flex w-full flex-col border-b  px-3 py-4 sm:border-b-0 ltr:sm:border-r rtl:sm:border-l md:w-2/5">
            <div className="mb-4">
              <span className="mb-2 block text-sm font-bold  ">
                Shipping Address
              </span>

              <span className="text-sm    ">
                {singleOrder?.order_address}
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col px-3 py-4 md:w-3/5">
            <div className="mb-3 flex w-full justify-between">
              <span className="text-sm    ">
                Sub Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm  ">{GrandTotal}/PKR</span>
            </div>

            <div className="mb-3 flex w-full  justify-between">
              <span className="text-sm">
                Delivery Fee
                <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm">0.00</span>
            </div>
            <div className="mb-3 flex w-full  justify-between">
              <span className="text-sm">
                TAX<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm">0.00</span>
            </div>

            <div className="flex w-full text-[#248f59] border-t border-[#248f59] justify-between">
              <span className="text-sm font-bold  ">
                Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
              </span>
              <span className="text-sm font-bold  ">
                {GrandTotal}/PKR
              </span>
            </div>
          </div>
        </div>

        {/* Order Table */}

        <div className="overflow-x-auto flex flex-col p-3 justify-center">
          <OrderTable singleOrder={singleOrder} />
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
