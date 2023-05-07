import React from "react";

import { Headings, OrderData } from "./tabledata";

export const OrderTable = () => {
  return (
    <>
      <div className="my-6  flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Order</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  {Headings.map((heading, index) => (
                    <th className="px-4 whitespace-nowrap py-2" key={index}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {OrderData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.Item}</td>
                    <td className="px-4 py-2">{item.Quantity}</td>
                    <td className="px-4 py-2">{item.Price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
