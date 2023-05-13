import "@ant-design/icons";
import "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RegisterComplete from "./Pages/Auth/registerComplete";
import Checkout from "./Pages/Checkout/checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/Products/ProductsDetail";
import Shop from "./Pages/Shops/Shop";
import ShopProfile from "./Pages/Shops/ShopProfile";
import Reports from "./Pages/UserDashboard/Reports";
import WishList from "./Pages/UserDashboard/Wishlist";
import Cards from "./Pages/UserDashboard/cards";
import MyOrders from "./Pages/UserDashboard/orders";
import Profile from "./Pages/UserDashboard/profile";
import Refund from "./Pages/UserDashboard/refund";
import Order from "./Pages/order/order";
import "./index.css";
import NotFound from "./Pages/404";
function App() {
const {loggedIn}=useSelector((state)=>({...state}));
 
//Default setting
axios.defaults.baseURL =import.meta.env.VITE_PUBLIC_API;
let token=loggedIn?.token
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
      window.location.href = "/login";
    }
  }
);

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="*" element={<NotFound />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/my-cards" element={<Cards />} />
        <Route exact path="/registerComplete" element={<RegisterComplete/>}/>
        <Route exact path="/Shops" element={<Shop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/shop/:name" element={<ShopProfile />} />
        <Route exact path="/order/payment" element={<Order />} />
        <Route exact path="/my-orders" element={<MyOrders />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/my-refunds" element={<Refund />} />
        <Route exact path="/my-reports" element={<Reports />} />
        <Route exact path="/my-wishlist" element={<WishList />} />
        <Route exact path="/product/:slug" element={<ProductDetails />} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
