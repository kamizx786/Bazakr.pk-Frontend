import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
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

    const updatedCart = cart
      .map((cartItem, i) => {
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
      })
      .filter((cartItem) => cartItem !== null);

    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({
      type: "Cart",
      payload: updatedCart,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-solid border-opacity-75 py-4 text-sm">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="flex overflow-hidden items-center justify-center gap-1 flex-col">
              {/* INCREASE N DECREASE */}
              <button onClick={DecreaseQuan}>
                <AiOutlineMinusSquare color="green" size={25} />
              </button>
              <div className="flex flex-1 font-sans items-center justify-center px-4 text-sm font-semibold">
                {item.order_quantity}
              </div>
              <button onClick={IncreaseQuan}>
                <AiOutlinePlusSquare color="green" size={25} />
              </button>
            </div>
          </div>
          {/* image */}
          <div className=" flex gap-2.5 justify-evenly items-center">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
              <img
                src={item?.feature_pic?.url}
                alt={item.name}
                className="object-contain"
              />
            </div>
            <br />
            {/* QUNATITY & SALE PRICE */}
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="font-semibold flex font-sans">{item.name} </h3>
              <span className="text-xs flex whitespace-nowrap font-sans    ">
                {item.order_quantity} X {item.salePrice}
              </span>
            </div>
            {/* TOTAL */}
            <div className="flex ml-4">
              <span className="font-bold font-sans">
                {item.order_quantity * item.salePrice}/Rs
              </span>
            </div>
          </div>
        </div>
        {/* DELETE ITEM */}
        <button className="flex h-7 w-7 shrink-0 items-center justify-center transition-all duration-200 ">
          <RiDeleteBack2Line
            onClick={() => removeCartItem(item._id)}
            color="red"
            size={17}
          />
        </button>
      </div>
    </>
  );
};

export default CartItem;
