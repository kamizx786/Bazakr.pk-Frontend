import { useState, useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LOGIN } from "./auth";
import { LoadingOutlined } from "@ant-design/icons";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { useDispatch } from "react-redux";
const Login = ({setauthCon, handleForgotPassword}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const {loggedIn}=useSelector((state)=>({...state}));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    setloading(true);
    LOGIN(email, password,setloading,navigate,dispatch);
  };
  useEffect(()=>{
    if(loggedIn && loggedIn.token){
    setTimeout(() => {
      navigate("/");
    }, 3000); // 5 seconds
    }
},[loggedIn && loggedIn.token]);
return loggedIn && loggedIn.token ? (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
      <span className="mt-4 text-gray-500 text-lg font-semibold">
        Redirecting to Homepage...
      </span>
    </div>
  </div>
) : (
  <>
    <div className="bg-[#f2f2f2] flex flex-wrap h-screen lg:p-4   mx-auto justify-center">
      <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
        {/* LOGO */}
        <img
          src="https://res.cloudinary.com/dc367rgig/image/upload/v1682767512/Logo_lokccn.svg"
          className="h-10"
          alt=""
        />
        <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
          Login
        </h1>
        {/* EMAIL */}
        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        {/* PASSWORD */}
        <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
          Password
        </label>
        <p
          className="text-end cursor-pointer justify-end text-sm flex flex-wrap text-[#248F59] italic mb-2 -mt-6 align-middle"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        {/* LOGIN */}
        <button
          onClick={handleSubmit}
          className="h-12 my-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]"
        >
          {loading ? <LoadingOutlined /> : " Login"}
        </button>
        {/* OR */}
        <div className="relative flex my-5 flex-col items-center justify-center text-sm text-heading">
          <hr className="w-full" />
          <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
            OR
          </span>
        </div>
        {/* REGISTER */}
        <span className="font-sans text-base font-normal my-2 text-center">
          Don't have any account?
          <p
            onClick={() => setauthCon(true)}
            className="text-[#248F59] cursor-pointer"
          >
            Register
          </p>
        </span>
      </div>
    </div>
  </>
);
};
export default Login;
