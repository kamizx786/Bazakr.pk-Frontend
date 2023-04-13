import { RiseOutlined } from "@ant-design/icons";
import { CheckOutlined, ClockCircleOutlined, FallOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import SellerDashboard from "../../Pages/Seller-Bar/SellerDashboard";

const SellerHome = () => {
  return (
    <>
    <div className="flex flex-col w-screen-viewports  ml-24 my-2 px-2 py-2">
      {" "}
      <div className="flex flex-row ">
        <div className="flex flex-col ">
          <div className="border shadow-inner flex flex-row w-[45.4375rem] h-fit px-2 py-2 rounded">
            <div className="flex flex-col w-full">
              <p className="font-sans flex my-2 font-normal text-lg text-[#248F59]">
                Good Morning, Salman!
              </p>
              <span className="font-sans font-normal flex my-2 text-lg">
                Here’s what happening with <br /> your store today!
              </span>
              <p className="font-sans flex mt-4 font-semibold text-2xl">
                15,350
              </p>
              <p className="font-sans flex font-normal text-lg">
                Today’s Visit
              </p>
              <p className="font-sans flex mt-4 font-semibold text-2xl">
                US$10,360.66
              </p>
              <p className="font-sans flex font-normal text-lg">
                Today’s total sales
              </p>
            </div>
            <div className="flex flex-col w-full">
              <img src="../Dashboard/bro.png" alt="" />
            </div>
          </div>
          <div className="border h-fit flex flex-col rounded shadow-inner py-2 mt-2">
            <div className="flex flex-row justify-between">
              <p className="flex font-sans text-lg px-2">Analytics</p>
              <select className="flex font-sans outline-none  text-sm ">
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
                <option>Daily</option>
              </select>
            </div>
            <img
              className="w-fit px-2 py-2 "
              src="../Dashboard/Bar.png"
              alt=""
            />
            <div className="flex justify-center space-x-10 flex-row">
              <div className="flex flex-row">
                <div className="w-6 border-black h-3 rounded-md bg-green-900"></div>
                <p className="font-sans ml-1 -mt-1">Sales</p>
              </div>
              <div className="flex flex-row ">
                <div className="w-6 flex rounded-md h-3 bg-black"></div>
                <p className="font-sans ml-1 -mt-1">Expenses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="border rounded-md shadow-inner flex flex-col mx-5 mt-6 px-2 py-2 h-fit w-[25rem] ">
            <h5 className="font-sans flex  ">Weekly Sales</h5>
            <p className="font-sans flex my-4 font-semibold text-2xl">
              US$10,360.66{" "}
            </p>
            <div className="flex flex-row  font-sans justify-between">
              This Weeks Total Sales
              <div>
                <RiseOutlined className="align-middle text-[#248F59]" /> 25.25%
              </div>
            </div>
          </div>
          <div className="border rounded-md shadow-inner flex flex-col mx-5 mt-2 mb-3 px-2 py-2 h-fit w-[25rem] ">
            <h5 className="font-sans flex  ">Weekly Orders</h5>
            <p className="font-sans flex my-4 font-semibold text-2xl">123</p>
            <div className="flex flex-row  font-sans justify-between">
              This Week’s total orders
              <div>
                <RiseOutlined className="align-middle text-[#248F59]" /> 25.25%
              </div>
            </div>
          </div>
          <div className="border rounded-md shadow-inner flex flex-col mx-5 mt-20 mb-2 px-2 py-2 h-fit w-[25rem] ">
            <h5 className="font-sans flex  ">Sold Items</h5>
            <p className="font-sans flex my-4 font-semibold text-2xl">123</p>
            <div className="flex flex-row  font-sans justify-between">
              This Week’s total orders
              <div>
                <FallOutlined className="align-middle text-red-700" /> 25.25%
              </div>
            </div>
          </div>
          <div className="border rounded-md shadow-inner flex flex-col mx-5  px-2 py-2 h-fit w-[25rem] ">
            <h5 className="font-sans flex  ">Sold Items</h5>
            <p className="font-sans flex my-4 font-semibold text-2xl">123</p>
            <div className="flex flex-row  font-sans justify-between">
              This Week’s total orders
              <div>
                <FallOutlined className="align-middle text-red-700" /> 25.25%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-auto">
      <div className="flex mx-auto mt-2 flex-col h-fit w-fit border">
        <div className="flex flex-row justify-between mx-2 my-2">
          <p className="flex font-sans text-lg ">Recent Purchases</p>
          <div className="text-[#248F59] mr-2 px-4 py-2 font-sans rounded-md border border-green-700">
            All Orders
          </div>
        </div>
        <table className="mx-2 my-2">
          <thead>
            <tr className="bg-[#F2F2F2]">
              <th className=" px-4 py-2">Order ID</th>
              <th className=" px-4 py-2">Product</th>
              <th className=" px-4 py-2">Payment</th>
              <th className=" px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2">#6d3wedo5</td>
              <td className="px-4 py-2">
                Premium Shirt For Men
              </td>
              <td className="px-4 py-2">
                <div className="h-fit w-fit px-2 py-2 rounded text-[#248F59] text-xs font-sans bg-[#DEEEE6]">
                  Success
                  <CheckOutlined className="text-[#248F59] align-middle ml-2" />
                </div>
              </td>
              <td className=" px-4 py-2">US$152.25</td>
            </tr>
            <tr className="bg-white">
              <td className=" px-4 py-2">#6d3wedo5</td>
              <td className=" px-4 py-2">
                Premium Shirt For Men
              </td>
              <td className=" px-4 py-2"> 
              <div className="h-fit w-fit px-2 py-2 rounded text-xs  text-[#EB5757]  font-sans bg-[#EEDEDE]">
                  Pending
                  <ClockCircleOutlined className="text-[#EB5757] align-middle ml-2" />
                </div></td>
              <td className=" border-green-500 px-4 py-2">US$152.25</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex mx-auto mt-2 flex-col h-fit w-fit border">
        <div className="flex flex-row justify-between mx-2 my-2">
          <p className="flex font-sans text-lg ">Recent Purchases</p>
          <div className="text-[#248F59] mr-2 px-4 py-2 font-sans rounded-md border border-green-700">
            All Orders
          </div>
        </div>
        <table className="mx-2 my-2">
          <thead>
            <tr className="bg-[#F2F2F2]">
              <th className=" px-4 py-2">Order ID</th>
              <th className=" px-4 py-2">Product</th>
              <th className=" px-4 py-2">Payment</th>
              <th className=" px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2">#6d3wedo5</td>
              <td className="px-4 py-2">
                Premium Shirt For Men
              </td>
              <td className="px-4 py-2">
                <div className="h-fit w-fit px-2 py-2 rounded text-[#248F59] text-xs font-sans bg-[#DEEEE6]">
                  Success
                  <CheckOutlined className="text-[#248F59] align-middle ml-2" />
                </div>
              </td>
              <td className=" px-4 py-2">US$152.25</td>
            </tr>
            <tr className="bg-white">
              <td className=" px-4 py-2">#6d3wedo5</td>
              <td className=" px-4 py-2">
                Premium Shirt For Men
              </td>
              <td className=" px-4 py-2"> 
              <div className="h-fit w-fit px-2 py-2 rounded text-xs  text-[#EB5757]  font-sans bg-[#EEDEDE]">
                  Pending
                  <ClockCircleOutlined className="text-[#EB5757] align-middle ml-2" />
                </div></td>
              <td className=" border-green-500 px-4 py-2">US$152.25</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </>
  );
};
export default SellerHome;
