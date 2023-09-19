import axios from "axios";
export const cancelOrder = async (_id, status) => {
  const { data } = await axios.put(`/order/cancel/${_id}`, { status });
  return data;
};
