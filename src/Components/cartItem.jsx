import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const removeCartItem = (p) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    const updatedCart = cart.filter((item) => item._id !== p);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({
      type: "Cart",
      payload: updatedCart,
    });
  };

  const IncreaseQuan = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(window.localStorage.getItem("cart"));
    }
  
    const updatedCart = cart.map((cartItem, i) => {
      if (i === index) {
        const newQuantity = cartItem.order_quantity + 1;
        if (newQuantity > cartItem.quantity) {
          toast.error("Exceeded stock quantity");
          return cartItem;
        }
        return {
          ...cartItem,
          order_quantity: newQuantity,
        };
      }
      return cartItem;
    });
  
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({
      type: "Cart",
      payload: updatedCart,
    });
  };
  
  const DecreaseQuan = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(window.localStorage.getItem("cart"));
    }
  
    const updatedCart = cart.map((cartItem, i) => {
      if (i === index) {
        const newQuantity = cartItem.order_quantity - 1;
        if (newQuantity < 1) {
          return null;
        }
        return {
          ...cartItem,
          order_quantity: newQuantity,
        };
      }
      return cartItem;
    }).filter(cartItem => cartItem !== null);
  
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({
      type: "Cart",
      payload: updatedCart,
    });
  };
  
  return (
    <div
      className="flex items-center
     border-b border-solid border-border-200
      border-opacity-75 py-4 text-sm sm:px-6"
    >
      <div className="flex-shrink-0">
        <div className="flex overflow-hidden flex-col    ">
          <button
            onClick={DecreaseQuan}
            className="p-2 
            duration-200 hover:bg-accent-hover focus:outline-none
            px-3 py-3 sm:px-2 
            border border-gray-300  hover:border-accent "
          >
            <span className="sr-only">Minus</span>
            <MinusIcon className="h-3 w-3 stroke-2.5" />
          </button>
          <div
            className="flex flex-1 items-center justify-center px-3 text-sm font-semibold
         text-heading"
          >
            {item.order_quantity}
          </div>
          <button
            onClick={IncreaseQuan}
            className="p-2 
        duration-200 hover:bg-accent-hover focus:outline-none
        px-3 py-3 sm:px-2
        border border-gray-300  hover:border-accent "
          >
            <span className="sr-only">Plus</span>
            <PlusIcon className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5" />
          </button>
        </div>
      </div>

      <div className="relative mx-4 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
        <img
          src={item?.feature_pic?.url}
          alt={item.name}
          className="object-contain"
        />
      </div>
      <br />
      <div>
        <h3 className="font-bold text-heading">{item.name} </h3>
        <span className="text-xs text-body">
          {item.order_quantity} X {item.salePrice}
        </span>
      </div>
      <span className="font-bold text-heading">
        {item.order_quantity * item.salePrice}/Rs
      </span>
      <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2">
        <span className="sr-only">Close</span>
        <XCircleIcon
          onClick={() => removeCartItem(item._id)}
          className="h-3 w-3"
        />
      </button>
    </div>
  );
};

export default CartItem;
