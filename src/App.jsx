import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import "./index.css";
import "@ant-design/icons";
import "antd";
import Home from "./Pages/Home/Home";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Shop from "./Pages/Shops/Shop";
import ShopProfile from "./Pages/Shops/ShopProfile";
import Footer from "./Components/Footer";
import React from "react";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/Products/ProductsDetail";
function App() {
  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/Shops" element={<Shop />} />
        <Route exact path="/shop/:name" element={<ShopProfile />} />
        <Route exact path="/product/:slug" element={<ProductDetails />} />
      </Routes>
    <Footer />
    </React.Fragment>
  );
}

export default App;
