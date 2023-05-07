import React, { useState } from "react";
import { CardData, Headings } from "./cardData";
import CardModal from "./cardModel";

export const CardTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    cvc: "",
    name: "",
    cardNo: "",
    expiryDate: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in local storage
    const updatedCardData = [...CardData, formData];
    localStorage.setItem("cardData", JSON.stringify(updatedCardData));
    // Reset the form data
    setFormData({
      cvc: "",
      name: "",
      cardNo: "",
      expiryDate: "",
    });
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <div className="flex bg-white w-full flex-col">
        <div className="mb-8 w-full flex flex-col items-center justify-center sm:mb-10">
          <div className="flex flex-row w-full justify-between px-3 items-center mx-2 my-2">
            <p className="flex font-serif font-normal text-3xl text-[#248F59]">
              My Cards
            </p>
            <div
              className="text-[#248F59] cursor-pointer flex text-sm"
              onClick={() => setShowModal(true)}
            >
              <span>+ Add</span>
            </div>
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
                {CardData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.cardNo}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.cvc}</td>
                    <td className="px-4 py-2">{item.expiryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CardModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
