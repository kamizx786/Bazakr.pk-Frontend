import _ from "lodash"
import { toast } from "react-toastify";
export const handleCart = (p, dispatch, setOpen) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(window.localStorage.getItem("cart"));
    }
    const existingProduct = cart.find(item => item._id === p._id);
    if (existingProduct) {
      toast("You have Already added this Item to Cart")
    } else if (cart.length > 0 && cart[0].store._id !== p.store._id) {
        toast("You cannot add products from different shops to the cart.Please Remove Others First");
      }  else {
      cart.push({
        ...p,
        order_quantity: 1
      });
    }
  
    const unique = _.uniqWith(cart, _.isEqual);
    window.localStorage.setItem("cart", JSON.stringify(unique));
    dispatch({
      type: "Cart",
      payload: unique
    });
    dispatch({ type: "CartDrawer", payload: true });
    setOpen(false);
  };
  