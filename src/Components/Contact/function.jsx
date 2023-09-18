import axios from "axios";
export const SendMessage = async (values) => {
  const { data } = await axios.post("/contact/message", { values });
  return data;
};
