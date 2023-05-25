import axios from "axios"
import {toast} from "react-toastify"
import { UserOrders } from "../Checkout/functions";
export const createUser = async (name, email, password) => {
  const { data } = await axios.post("/register", {
    name,
    email,
    password,
  });
  return data;
};
export const LOGIN = async (email, password,setloading,dispatch,setOpenModal) => {
  try{
    const { data } = await axios.post("/login", { email, password });
    if (data.error) {
      setloading(false);
      toast.error(data.error);
    } else {
      setloading(false);
      const auth={
        user:data.user,
        token:data.token
      }
      window.localStorage.setItem("auth",JSON.stringify(auth));
      dispatch({
        type:"LOGGED_IN_USER",
        payload:{
          user:auth.user,
          token:auth.token
        }
      })
      dispatch({type:"Visible",payload:false})
     
    }
}
catch (err) {
    console.log("catch",err)
    toast.error(err);
    setloading(false);
  }
};
export const registerComplete = async (email, secret) => {
    const { data } = await axios.put("/register/complete", { email, secret });
    return data;
  };
  export const ForgotEmail = async (email) => {
    const { data } = await axios.put("/forgot", { email});
    return data;
  };
  export const Reset = async (email,Newpassword,secret) => {
    const { data } = await axios.put("/forgot/complete", { email,Newpassword,secret});
    return data;
  };
  export const UpdateProfile = async (name,email,password,whatsapp,address) => {
    const { data } = await axios.put("profile-update", { name,email,password,whatsapp,address});
    return data;
  };