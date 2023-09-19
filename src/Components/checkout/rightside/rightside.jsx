import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PaymentMethod from "./choosePayment";

const RightSideView = ({ cart, handleOrder, loading, values, setValues }) => {
  let GrandTotal =
    cart &&
    cart.length &&
    cart.reduce((acc, product) => {
      return acc + product.salePrice * product.order_quantity;
    }, 0);

  return (
    <>
      <div className="flex flex-col p-2 w-full">
        <div className="flex items-center mt-2 mb-4 justify-center">
          {/* ORDER DETAIL */}
          <p className="text-black text-2xl font-serif font-normal">
            Your Order
          </p>
        </div>
        <>
          {cart?.map((c) => {
            return (
              <>
                <div className="flex font-sans border-b border-[#248f59] justify-between py-2">
                  <div className="flex items-center justify-between text-base">
                    <span className="text-sm w-[11.25rem] truncate">
                      <span className="text-sm font-sans font-bold">
                        {c.order_quantity}
                      </span>
                      <span className="mx-2">x</span>
                      <span className="font-serif">{c.name}</span>
                    </span>
                  </div>
                  <span className="text-sm font-sans">
                    {c.salePrice * c.order_quantity} PKR
                  </span>
                </div>
              </>
            );
          })}
          <div className="flex font-sans justify-between mt-2">
            <p className="text-sm font-semibold">Sub Total</p>
            <span className="text-sm">{GrandTotal}-PKR</span>
          </div>

          <div className="flex font-sans justify-between my-3 border-b border-[#248f59]">
            <p className="text-lg font-semibold text-[#248f59]">Total</p>
            <span className="text-sm">{GrandTotal}/PKR</span>
          </div>
          {/* PAYMENT METHODS */}
          <PaymentMethod values={values} setValues={setValues} />
          {/* PLACE ORDER */}
          <div>
            <button
              onClick={handleOrder}
              className="bg-[#248F59] w-full mt-3 text-[#f2f2f2] hover:text-white font-sans py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold "
            >
              <Link>{loading ? <LoadingOutlined /> : "Palce Order"}</Link>
            </button>
          </div>
        </>
      </div>
    </>
  );
};
export default RightSideView;
