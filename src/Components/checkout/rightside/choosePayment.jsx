import { FaStripe } from "react-icons/fa";

const PaymentMethod = ({ values, setValues }) => {
  const handleStripeSelect = () => {
    setValues((prevValues) => ({
      ...prevValues,
      paymentType: "stripe",
    }));
  };
  const handleCODSelect = () => {
    setValues((prevValues) => ({
      ...prevValues,
      paymentType: "cod",
    }));
  };

  return (
    <>
      <div className="flex flex-col font-sans mt-2.5 bg-white rounded border p-4">
        <h2 className="text-black text-center font-sans font-semibold">
          Choose a Payment Method
        </h2>
        <div className="my-4 flex flex-row gap-2">
          <div
            className={`bg-white flex justify-center items-center p-3 h-fit w-full cursor-pointer shadow rounded  ${
              values.paymentType === "stripe" ? "border-green-500 border-2" : ""
            }`}
            onClick={handleStripeSelect}
          >
            <FaStripe color="blue" size={50} />
          </div>
          <div
            className={`bg-white flex justify-center items-center text-center font-medium p-3  w-full cursor-pointer shadow rounded ${
              values.paymentType === "cod" ? "border-green-500 border-2" : ""
            }`}
            onClick={handleCODSelect}
          >
            <p>Cash on Delivery</p>
          </div>
        </div>

        <div>
          {values.paymentType === "stripe" && (
            <p className="text">
              Please click Place order to make order and payment
            </p>
          )}
          {values.paymentType === "cod" && (
            <p>Please Pay After You Receive Your Goods!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
