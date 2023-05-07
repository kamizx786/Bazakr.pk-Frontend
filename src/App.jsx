import "@ant-design/icons";
import "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Checkout from "./Pages/Checkout/checkout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/Products/ProductsDetail";
import Shop from "./Pages/Shops/Shop";
import ShopProfile from "./Pages/Shops/ShopProfile";
import Reports from "./Pages/UserDashboard/Reports";
import WishList from "./Pages/UserDashboard/Wishlist";
import Cards from "./Pages/UserDashboard/cards";
import Profile from "./Pages/UserDashboard/profile";
import Refund from "./Pages/UserDashboard/refund";
import Order from "./Pages/order/order";
import "./index.css";
import MyOrders from "./Pages/UserDashboard/orders";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/my-cards" element={<Cards />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
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
    </React.Fragment>
  );
}

export default App;
