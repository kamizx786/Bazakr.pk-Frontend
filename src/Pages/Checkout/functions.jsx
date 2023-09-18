import axios from "axios";
import { toast } from "react-toastify";
export const CreateOrder = async (values) => {
  const { data } = await axios.post("/order/create", { values });
  return data;
};
export const StripeOrder = async (values) => {
  const { data } = await axios.post("/order/stripe-create", { values });
  return data;
};

export const UserOrders = async (dispatch) => {
  const { data } = await axios.get("/orders");
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "Orders",
      payload: data.orders,
    });
  }
};
