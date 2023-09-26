import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOrders } from "../Pages/Checkout/functions";
import { AllCategories, AllProducts, AllShops } from "../Pages/Shops/functions";
import { GetSettings } from "../Pages/site/functions";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    token: "",
    user: {},
  });
  const { loggedIn } = useSelector((state) => ({ ...state }));
  //Default setting
  axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API;
  let token = loggedIn?.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //When Token Expire Logout automatically
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (Error) {
      let res = Error.response;
      if (res.status === 401 && res.config && !res.config._isRetryREquest) {
        window.localStorage.removeItem("auth");
        window.location.href = "/";
      }
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      UserOrders(dispatch);
    }
  }, [loggedIn]);
  useEffect(() => {
    GetSettings(dispatch);
    AllShops(dispatch);
    AllProducts(dispatch);
    AllCategories(dispatch);
  }, []);
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
