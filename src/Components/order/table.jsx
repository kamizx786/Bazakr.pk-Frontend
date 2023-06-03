import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const OrderTable = ({ singleOrder }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const submitReview = () => {
    // Here you can implement the logic to save the review and rating to the database
    // You can use APIs or any other method to send the data to the server
    // For simplicity, let's just log the review and rating to the console
    console.log("Review:", review);
    console.log("Rating:", rating);

    closeModal();
  };

  return (
    <>
      {showModal && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white flex flex-col w-1/2 p-6 rounded-lg">
            {/* Modal content goes here */}
            <h2 className="text-3xl flex font-serif justify-center items-center text-[#248F59] font-normal mb-4">
              Review
            </h2>
            <div className="flex border-b-2 mb-2 flex-row justify-start  items-center font-sans font-semibold">
              <img
                src={selectedProduct?.Product?.feature_pic?.url}
                className="h-24 w-24"
                alt={selectedProduct?.Product?.name}
              />

              <span>{selectedProduct?.Product?.name}</span>
            </div>
            <div className="flex flex-col  border-b-2 mb-2 ">
              <p className="font-sans font-semibold text-[#248F59]">
                Give Rating
              </p>
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <FaStar
                    key={value}
                    size={25}
                    className={` ${
                      value <= rating ? "text-[#248F59]" : "text-gray-400"
                    } cursor-pointer`}
                    onClick={() => handleRating(value)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col border-b-2 my-2">
              <p className="font-sans font-semibold text-[#248F59]">Review</p>
              <textarea
                className="font-sans text-base focus:outline-none focus:ring-2 border w-full rounded-md border-[#f2f2f2] focus:ring-green-600"
                placeholder="write a review"
                value={review}
                onChange={handleReviewChange}
              />
            </div>

            <div className="flex justify-end">
              <button
                className="bg-[#248F59] uppercase text-[#f2f2f2] font-sans font-semibold px-4 py-2 mt-4 rounded-lg"
                onClick={submitReview}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="my-6 flex border bg-white rounded">
        <div className="mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg">Order</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans ">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 whitespace-nowrap py-2">Item</th>
                  <th className="px-4 whitespace-nowrap py-2">Image</th>
                  <th className="px-4 whitespace-nowrap py-2">
                    Ordered Quantity
                  </th>
                  <th className="px-4 whitespace-nowrap py-2">Price</th>
                  <th className="px-4 whitespace-nowrap py-2">Total</th>
                  <th className="px-4 whitespace-nowrap py-2">Review</th>
                </tr>
              </thead>

              <tbody>
                {singleOrder?.Products?.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-t font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item?.Product?.name}</td>
                    <td className="px-4 py-2">
                      <img
                        src={item?.Product?.feature_pic?.url}
                        className="h-8 w-8"
                        alt={item?.Product?.name}
                      />
                    </td>
                    <td className="px-4 py-2">{item?.order_quantity}</td>
                    <td className="px-4 py-2">Rs:{item?.Product?.salePrice}</td>
                    <td className="px-4 py-2">
                      Rs:{item?.Product?.salePrice * item?.order_quantity}
                    </td>
                    <td className="px-4 py-2">
                      <div>
                        <button
                          className="m-auto font-sans text-[#248F59] p-2 font-semibold"
                          onClick={() => openModal(item)}
                        >
                          Review
                        </button>
                      </div>
                    </td>
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
