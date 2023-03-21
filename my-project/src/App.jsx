import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import "./index.css";
import "@ant-design/icons";
import "antd";
import Home from "./Pages/Home";
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

function App() {
  return (
    <div>
      {location.pathname !== "/SellerDashboard" && <Header />}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route eaxct path="/Register" element={<Register />} />
        <Route eaxct path="/Signup" element={<Signup />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route eaxct path="/Store" element={<Store />} />
        <Route eaxct path="/StoreProfile" element={<StoreProfile />}></Route>
        <Route eaxct path="/StoreTime" element={<StoreTime />}></Route>
        <Route eaxct path="/StoreLinks" element={<StoreLinks />}></Route>
        <Route eaxct path="/Shop" element={<Shop />}></Route>
        <Route eaxct path="/ShopProfile" element={<ShopProfile />}></Route>
        <Route exact path="/SellerDashboard" element={<SellerDashboard />} ></Route>
      </Routes>
      {location.pathname !== "/SellerDashboard" && <Footer />}
    </div>
  );
}

export default App;
