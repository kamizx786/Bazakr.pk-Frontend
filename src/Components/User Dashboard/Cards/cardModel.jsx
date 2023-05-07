import React from "react";

const CardModal = ({
  showModal,
  setShowModal,
  formData,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-3xl text-[#248F59] font-serif text-center font-normal mb-4">
                  Add Card
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="text-lg font-sans font-medium text-[#248F59] capitalize text-heading lg:text-xl">
                      {" "}
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border border-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-lg font-sans font-medium text-[#248F59] capitalize text-heading lg:text-xl">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border border-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-lg font-sans font-medium text-[#248F59] capitalize text-heading lg:text-xl">
                      {" "}
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNo"
                      name="cardNo"
                      value={formData.cardNo}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border border-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-lg font-sans font-medium text-[#248F59] capitalize text-heading lg:text-xl">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border border-[#f2f2f2] focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#248F59]  text-[#f2f2f2] px-4 py-2 rounded"
                    >
                      Add Card
                    </button>
                    <span
                      onClick={() => setShowModal(false)}
                      className="ml-2 cursor-pointer text-red-600 border-2 border-red-600 px-4 py-2"
                    >
                      Cancel
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CardModal;
