import React from "react";
import { Headings, } from "./reportData";

export const ReportTable = () => {


  return (
    <>
      <div className="flex bg-white w-full flex-col">
        <div className="mb-8 w-full flex flex-col items-center justify-center sm:mb-10">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-serif font-normal text-3xl text-[#248F59]">
             My Reports
            </p>
          </div>
          <div className="container overflow-x-auto">
            <table className="mx-auto w-full my-2 font-sans shadow">
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
                {ReportData.map((item, index) => (
                  <tr
                    className="bg-white h-24 cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.message}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.Date}</td>
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
