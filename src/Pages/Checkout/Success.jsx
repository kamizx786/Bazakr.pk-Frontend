import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { CreateOrder, UserOrders } from "./functions";
import { AllProducts } from "../../Pages/Shops/functions";
const Success = () => {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("values"))
  );
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let no=0;
  const hanldeorder = () => {
    if(no==1){
    try {
      CreateOrder(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          localStorage.removeItem("values");
          localStorage.removeItem("cart");
          dispatch({ type: "Cart", payload: [] });
          AllProducts(dispatch);
          UserOrders(dispatch);
          navigate(`/order/${res?.order?._id}`);
          toast.success("Order Placed SuccessFully");
        }
      });
    } catch (error) {
      toast.error(error);
    }
  }
  };
  useEffect(() => {
    if (!values) {
      navigate("/");
    } else {
      setTimeout(() => {
        no++;
        hanldeorder();
      }, 3000);
    }
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Payment Processing
        </span>
      </div>
    </div>
  );
};

export default Success;
