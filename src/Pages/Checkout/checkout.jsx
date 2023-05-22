import { useState, useEffect } from "react";
import ContactGrid from "../../Components/checkout/contactgrid";
import BillingAddress from "../../Components/checkout/billingaddress";
import RightSideView from "../../Components/checkout/rightside/rightside";
import UserLayout from "../Dashboard/UserLayout";
import NoCartItem from "../../Components/checkout/NoCartItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateOrder, StripeOrder, UserOrders } from "./functions";
import { AllProducts } from "../../Pages/Shops/functions";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
const Checkout = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const [savedAddress, setSavedAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Products: [
      {
        Product: "",
        order_quantity: "",
      },
    ],
    store: "",
    orderType: "Sales",
    order_address: "",
    paymentType: "",
    orderContact: "",
  });
  useEffect(() => {
    const products = cart?.map((product) => ({
      Product: product._id,
      order_quantity: product.order_quantity,
    }));
    setValues((prevValues) => ({
      ...prevValues,
      Products: products,
      store: cart[0]?.store?._id,
    }));
  }, [cart]);
  const handleOrder = () => {
    if (!values.paymentType) {
      return toast.error("Please Select Payment method first");
    }
    if (!values.orderContact) {
      return toast.error("Please Add Your Contact Number");
    }
    if (values.paymentType == "cod") {
      hanldeCod();
    } else {
      handleStripeOrder();
    }
  };
  const hanldeCod = () => {
    try {
      setLoading(true);
      CreateOrder(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          console.log(res.order);
          toast.success("Order Placed SuccessFully");
          setLoading(false);
          localStorage.removeItem("cart");
          dispatch({ type: "Cart", payload: [] });
          AllProducts(dispatch);
          UserOrders(dispatch);
          navigate(`/order/${res?.order?._id}`);
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  const handleStripeOrder =() => {
    try {
      setLoading(true);
      StripeOrder(values).then(async(res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          const stripe= await loadStripe(import.meta.env.VITE_PUBLIC_KEY)
          stripe.redirectToCheckout({sessionId:res.sessionId});
          // console.log(res.order);
          // toast.success("Order Placed SuccessFully");
          // setLoading(false);
          // localStorage.removeItem("cart");
          // dispatch({type:"Cart",payload:[]})
          // AllProducts(dispatch);
          // UserOrders(dispatch);
          // navigate(`/order/${res?.order?._id}`);
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    const storedAddress = JSON.parse(localStorage.getItem("location"));
    if (storedAddress) {
      setValues((prevValues) => ({
        ...prevValues,
        order_address: storedAddress.mapAddress,
      }));
      setSavedAddress(storedAddress.mapAddress);
    }
  }, [location]);

  return (
    <>
      <UserLayout>
        <div className="px-4 py-8 bg-gray-100 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
          <div className="flex flex-col items-center w-full max-w-5xl m-auto rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
            <div className="w-full space-y-6 lg:max-w-2xl">
              {/* CONTACT */}

              {/* BILL n SHIP */}
              <ContactGrid
                values={values}
                setValues={setValues}
                className="p-5 bg-light shadow-700 md:p-8"
              />
              <BillingAddress
                savedAddress={savedAddress}
                className="p-5 bg-light shadow-700 md:p-8"
              />
            </div>

            <div className="w-full mt-10 mb-10 sm:mb-12 lg:mb-0 lg:w-96">
              {cart?.length > 0 ? (
                <RightSideView
                  cart={cart}
                  handleOrder={handleOrder}
                  loading={loading}
                  values={values}
                  setValues={setValues}
                />
              ) : (
                <NoCartItem />
              )}
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};
export default Checkout;
