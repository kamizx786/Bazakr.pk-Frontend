import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({setauthCon}) => {
  const [email, setEmail] = useState("");
  // console.log(email)
  return (
    // Register Card
    <div className="grid place-content-center">
      <div className="flex flex-col gap-[2.5rem] items-center px-[2.25rem] py-[1.125rem] rounded-lg w-fit">
        {/* Title */}
        <h3 className="text-2xl font-serif">Register</h3>
        {/* Login With Email */}
        <div className="flex flex-col gap-2">
          {/* Field */}
          <h4 className="font-sans font-semibold uppercase">Email</h4>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter Your Email"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
          />
           <h4 className="font-sans font-semibold uppercase">Name</h4>
          <input
            type="text"
            id="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Name"
            placeholder="Enter Your Name"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
          />
             <h4 className="font-sans font-semibold uppercase">Address</h4>
          <input
            type="text"
            id="address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="address"
            placeholder="Enter Your Address"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
          />
             <h4 className="font-sans font-semibold uppercase">Whatsapp</h4>
          <input
            type="tel"
            id="Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Number"
            placeholder="Enter Your Number"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
          />
              <h4 className="font-sans font-semibold uppercase">Password</h4>
          <input
            type="password"
            id="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="password"
            placeholder="Enter Your password"
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
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
            <Link onClick={()=>setauthCon(false)}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Register;
