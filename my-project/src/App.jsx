import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import "./index.css";
import "@ant-design/icons";
import "antd";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Signup from "./Pages/Auth/Signup";
import Store from "./Pages/Store/Store";
import StoreProfile from "./Components/CreateStore/StoreProfile";
import StoreTime from "./Components/CreateStore/StoreTime";
import StoreLinks from "./Components/CreateStore/StoreLinks";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Shop from "./Pages/Shops/Shop";
import ShopProfile from "./Pages/Shops/ShopProfile";
import Footer from "./Components/Footer";
import SellerDashboard from "./Pages/Seller-Bar/SellerDashboard";
import AddProduct from "./Pages/Seller-Bar/AddProduct";
import React from "react";
function App() {
  return (
    <React.Fragment>
      {location.pathname !== "/SellerDashboard" && <Header />}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/Store" element={<Store />} />
        <Route exact path="/StoreProfile" element={<StoreProfile />}></Route>
        <Route exact path="/StoreTime" element={<StoreTime />}></Route>
        <Route exact path="/StoreLinks" element={<StoreLinks />}></Route>
        <Route exact path="/Shop" element={<Shop />}></Route>
        <Route exact path="/ShopProfile" element={<ShopProfile />}></Route>
        <Route exact path="/SellerDashboard" element={<SellerDashboard />}></Route>
        <Route exact path="/AddProduct" element={<AddProduct/>}></Route>
      </Routes>
      {location.pathname !== "/SellerDashboard" && <Footer />}
    </React.Fragment>
  );
}

export default App;
