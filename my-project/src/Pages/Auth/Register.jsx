import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  // console.log(email)
  return (
    // Register Card
    <div className="grid place-content-center">
      <div className="flex flex-col gap-[2.5rem] items-center px-[5.25rem] py-[1.125rem] border border-neutral-300 rounded-lg w-fit">
        {/* Title */}
        <h3 className="text-4xl font-serif">Register</h3>
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
            className="h-16 w-[23.4375rem] px-5 border rounded-lg border-neutral-300"
          />
          {/* Button */}
          <button className="h-16 w-[23.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
            Register
          </button>
        </div>
        {/* OR */}
        <div>
          <div className="h-0.5 -mb-3.5 w-[23.4375rem] bg-neutral-300"></div>
          <div className="w-fit px-2 m-auto bg-white">OR</div>
        </div>
        {/* Google Button */}
        <button className="h-16 w-[23.4375rem] flex gap-4 items-center justify-center border border-neutral-300 rounded-lg">
          <img src="Group.jpg" />
          <div className="font-sans font-semibold text-neutral-800 uppercase">
            Register with Google
          </div>
        </button>
        <p className="font-sans text-base">
          Already have an account?{" "}
          <span className="text-[#248F59]">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Register;
