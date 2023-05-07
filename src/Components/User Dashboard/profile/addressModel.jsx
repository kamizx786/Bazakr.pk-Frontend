import React from "react";

const AddressModal = ({
  isOpen,
  closeModal,
  handleSubmit,
  country,
  setCountry,
  city,
  setCity,
  street,
  setStreet,
  zipCode,
  setZipCode
}) => {
  return (
    <>
       {isOpen && (
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
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <h2
                        className="text-lg font-serif font-bolid leading-6 text-[#248F59] sm:mt-0 sm:mr-4"
                        id="modal-headline"
                      >
                        Add Address
                      </h2>
                      <button
                        className="ml-auto bg-transparent border-0 text-[#248F59] float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={closeModal}
                      >
                        <span>×</span>
                      </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-4">
                        <label
                          htmlFor="country"
                          className="block text-[#248F59] font-medium mb-2"
                        >
                          Country:
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={country}
                          onChange={(event) => setCountry(event.target.value)}
                          required
                          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-outline"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="city"
                          className="block text-[#248F59] font-medium mb-2"
                        >
                          City:
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          required
                          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-outline"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="street"
                          className="block text-[#248F59] font-medium mb-2"
                        >
                          Street Address:
                        </label>
                        <input
                          type="text"
                          id="street"
                          name="street"
                          value={street}
                          onChange={(event) => setStreet(event.target.value)}
                          required
                          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-outline"
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="zipCode"
                          className="block text-[#248F59] font-medium mb-2"
                        >
                          Zip Code:
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={zipCode}
                          onChange={(event) => setZipCode(event.target.value)}
                          required
                          className="appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-600 leading-tight focus:shadow-outline"
                        />
                      </div>
                      <div className="mt-4 text-right">
                        <button
                          type="submit"
                          className="bg-[#248F59] text-white font-bold py-2 px-4 rounded"
                        >
                          Done
                        </button>
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

export default AddressModal;
