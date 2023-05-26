import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { createUser } from "./auth";
const Register = ({ setauthCon }) => {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password) {
        return toast.error("Please Fill all Fields");
      }
      if (emailError || passwordError) {
        return toast.error("Please Add Valid Email and Password");
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
          setauthCon(false);
        }
      });
    } catch (err) {
      toast.error(err.response.data);
      setloading(false);
    }
  };
  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    
    return emailPattern.test(email);
  };
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  
    if (enteredEmail && !validateEmail(enteredEmail)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
  
    // Validate password
    const regex = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (!regex.test(input)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one special character and number.");
    } else {
      setPasswordError("");
    }
  };
  return  (
    // Register Card
    <>
      <div >
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto  justify-center">
        
          <h1 className="text-[#248F59]  flex justify-center items-center italic mb-6 font-sans">
            Register New Account
          </h1>
          {/* NAME */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              const input = e.target.value;
              const regex = /^[a-zA-Z\s]*$/; // Regex to match alphabetic characters and spaces
              if (regex.test(input)) {
                setName(input);
              }
            }}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
         {emailError && <p className="text-red-500">{emailError}</p>}
          {/* PASSWORD */}
          <label className="font-semibold flex flex-wrap mb-3  text-sm leading-none text-body-dark">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
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
