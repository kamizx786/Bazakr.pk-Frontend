import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { createUser } from "./auth";
const Register = ({ setauthCon }) => {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email)
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        return toast.error("Please Fill all Fields");
      }
      if (password.length < 6) {
        return toast.error("Please Enter Strong Password");
      }
      setloading(true);
      createUser(name, email, password).then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          setloading(false);
          setEmail("");
          setName("");
          setPassword("");
          window.localStorage.setItem("Email", email);
          swal("Please Check your Email and Complete Resgistration");
        }
      });
    } catch (err) {
      toast.error(err.response.data);
      setloading(false);
    }
  };
  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000); // 5 seconds
    }console.log(loggedIn.token);
  }, [loggedIn && loggedIn.token]);
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
    // Register Card
    <>
      <div className="bg-[#f2f2f2] flex flex-wrap h-screen lg:p-4  mx-auto justify-center">
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
          <img
            src="https://res.cloudinary.com/dc367rgig/image/upload/v1682767512/Logo_lokccn.svg"
            className="h-10"
            alt=""
          />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Register New Account
          </h1>
          {/* NAME */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* PASSWORD */}
          <label className="font-semibold flex flex-wrap mb-3  text-sm leading-none text-body-dark">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="h-12 mb-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]"
          >
            {loading ? <LoadingOutlined /> : " Register"}
          </button>
          {/* OR */}
          <div className="relative flex flex-col mt-2 items-center justify-center text-sm text-heading">
            <hr className="w-full " />
            <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
              OR
            </span>
          </div>
          <span className="font-sans text-base font-normal my-3 text-center">
            Already have an Account?
            <p
              onClick={() => setauthCon(false)}
              className="text-[#248F59] cursor-pointer"
            >
              Login
            </p>
          </span>
        </div>
      </div>
    </>
  );
};
export default Register;
