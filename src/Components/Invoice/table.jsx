import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { UserOrders } from "../../Pages/Checkout/functions";
import {
  AllProducts,
  CreateandUpateRatings,
} from "../../Pages/Shops/functions";
import SaveButton from "../common/save";

export const OrderTable = ({ singleOrder }) => {

  const [showModal, setShowModal] = useState(false);
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(null);
  const { loggedIn } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  useEffect(() => {
    const filter = selectedProduct?.Product?.rating?.filter((r) => {
      return r.postedBy === loggedIn?.user?._id;
    });
    if (filter?.length) {
      setStar(filter[0].star);
      setReview(filter[0].review);
    } else {
      setStar(0);
      setReview("");
    }
  }, [selectedProduct]);

  const handleRating = (value) => {
    setStar(value);
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
    if (!star || !review) {
      return toast.error("Please Add rating and review");
    }
    setLoading(true);
    CreateandUpateRatings(selectedProduct?.Product?.slug, star, review).then(
      (res) => {
        if (res.error) {
          setLoading(false);
          toast.error(res.error);
        } else {
          toast.success("Thanks It will Update Soon");
          AllProducts(dispatch);
          UserOrders(dispatch);
          setLoading(false);
          closeModal();
        }
      }
    );
  };

  return (
    <>
      {/* MODAL FOR REVIEW AND RATING */}
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
                <StarRatings
                  rating={star}
                  starHoverColor="#248F59"
                  starRatedColor="#248F59"
                  numberOfStars={5}
                  name="rating"
                  changeRating={(rating) => handleRating(rating)}
                  starDimension="20px"
                  starSpacing="5px"
                  className="text-[#248F59] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col border-b-2 my-2">
              <p className="font-sans font-semibold text-[#248F59]">Review</p>
              <textarea
                className="font-sans text-base focus:outline-none focus:ring-2 border w-full rounded-md border-[#f2f2f2] focus:ring-green-600"
                placeholder=" Write a review"
                value={review}
                onChange={handleReviewChange}
              />
            </div>

            <div className="flex justify-between">
              <SaveButton onClick={submitReview}/>
              <button
                className="bg-[#248F59] text-sm uppercase transition-transform hover:scale-95 hover:text-white text-[#f2f2f2] font-sans font-semibold px-2 py-2 mt-4 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* END OF MODAL */}

      {/* ORDER TABLE */}
      <div className="my-6 flex border bg-white rounded">
        <div className="mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg">Order</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans whitespace-nowrap">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">
                    Ordered Quantity
                  </th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Total</th>
                  {singleOrder?.orderStatus === "delivered" && (
                    <th className="px-4 py-2">Review</th>
                  )}
                </tr>
              </thead>

              <tbody>
                {singleOrder?.Products?.map((item, index) => (
                  <tr
                    className="bg-white text-center cursor-default hover:!bg-gray-100 border-t font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item?.Product?.name}</td>
                    <td className=" flex justify-center">
                      <img
                        src={item?.Product?.feature_pic?.url}
                        className="h-10 w-10"
                        alt={item?.Product?.name}
                      />
                    </td>
                    <td className="px-4 py-2">{item?.order_quantity}</td>
                    <td className="px-4 py-2">Rs:{item?.Product?.salePrice}</td>
                    <td className="px-4 py-2">
                      Rs:{item?.Product?.salePrice * item?.order_quantity}
                    </td>
                    {singleOrder?.orderStatus === "delivered" && (
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
                    )}
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
