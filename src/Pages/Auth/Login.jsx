import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({setauthCon,setOpenModal}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password)
  return (
    <div className="grid place-content-center sm:text-center sm:justify-center">
      <div className="flex flex-col gap-[2.5rem] items-center px-[3.25rem] py-[1.125rem]  rounded-lg w-fit">
        {/* Title */}
        <h3 className="text-2xl font-serif">Login</h3>

        {/* Login With Email */}

        <div className="flex flex-col gap-3">
          {/* Field */}
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter Your Email"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[18.4375rem] md:w-[23.4375rem] px-5 border rounded-lg border-neutral-300"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[18.4375rem] md:w-[23.4375rem] px-5 border rounded-lg border-neutral-300"
          />
          <Link
            to="/forgotpassword"
            className="-mr-[16rem] relative text-[#248F59] "
            onClick={()=>setOpenModal(false)}
          >
            Forgot Password?
          </Link>
          {/* Button */}
          <button className="h-16 w-[18.4375rem] md:w-[23.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
            Login
          </button>
        </div>

        {/* OR */}
        <div>
          <div className="h-0.5 -mb-3.5 w-[18.4375rem] md:w-[23.4375rem] bg-neutral-300"></div>
          <div className="w-fit px-2 m-auto bg-white">OR</div>
        </div>

        {/* Google Button */}
        <button className="h-16 w-[18.4375rem] md:w-[23.4375rem] -mt-5 flex gap-3 items-center justify-center border border-neutral-300 rounded-lg">
          <img src="Group.jpg" />
          <div className="font-sans font-semibold text-neutral-800 uppercase">
            Login with Google
          </div>
        </button>

        <p className="font-sans text-base -mt-5">
          Don't have an Account?
          <span className="text-[#248F59]">
            <Link onClick={()=>setauthCon(true)}> Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;
