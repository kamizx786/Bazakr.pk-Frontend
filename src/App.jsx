import "@ant-design/icons";
import "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import ScrollToTop from "./Helper/ScrollToTop";
import NotFound from "./Pages/404";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import RegisterComplete from "./Pages/Auth/registerComplete";
import Cancel from "./Pages/Checkout/Cancel";
import Success from "./Pages/Checkout/Success";
import Checkout from "./Pages/Checkout/checkout";
import { UserOrders } from "./Pages/Checkout/functions";
import Contact from "./Pages/Contact/Contact";
import PrivacynPolicy from "./Pages/FooterPages/privacynpolicy";
import RefundPolicy from "./Pages/FooterPages/refund";
import Security from "./Pages/FooterPages/security";
import TermsnCodition from "./Pages/FooterPages/termsncodition";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/Products/ProductsDetail";
import Shop from "./Pages/Shops/Shop";
import ShopProfile from "./Pages/Shops/ShopProfile";
import { AllCategories, AllProducts, AllShops } from "./Pages/Shops/functions";
import MyOrders from "./Pages/UserDashboard/orders";
import Profile from "./Pages/UserDashboard/profile";
import Order from "./Pages/order/order";
import { GetSettings } from "./Pages/site/functions";
import "./index.css";
function App() {
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
    <React.Fragment>
      <ScrollToTop/>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register-complete" element={<RegisterComplete />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/shops" element={<Shop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/shop/:slug" element={<ShopProfile />} />
        <Route exact path="/order/:_id" element={<Order />} />
        <Route exact path="/my-orders" element={<MyOrders />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/product/:slug" element={<ProductDetails />} />
        <Route exact path="/privacy-policy" element={<PrivacynPolicy />} />
        <Route exact path="/terms-n-codition" element={<TermsnCodition />} />
        <Route exact path="/security" element={<Security />} />
        <Route exact path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
