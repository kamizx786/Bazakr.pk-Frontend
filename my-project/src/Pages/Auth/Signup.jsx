import React, { useState } from "react";
  
const Signup=()=>{
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [number,setNumber]=useState("")
  const [address,setAddress]=useState("")
  // console.log(email, password, address, number, name)
  return(
    <div className="mx-20 ">
        <div className="col-md-6 float-left">
         <h3 className="text-4xl font-serif my-4">Sign Up</h3>
          {/* Email */}
         <h4 className="font-sans font-semibold uppercase">Email</h4>
         <input
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="h-12 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        {/* Name */}
        <h4 className="font-sans font-semibold  uppercase mt-1">Name</h4>
         <input
           value={name}
           onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          className="h-12 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        {/* Address */}
        <h4 className=" font-sans font-semibold uppercase mt-1">Address</h4>
         <input
           value={address}
           onChange={(e) => setAddress(e.target.value)}
          type="text"
          id="address"
          name="address"
          placeholder="Enter Your Address"
          className="h-12 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        {/* Phone No# */}
        <h4 className=" font-sans font-semibold uppercase mt-1">WhatsApp </h4>
         <input
           value={number}
           onChange={(e) => setNumber(e.target.value)}
          type="tel"
          id="number"
          pattern="[0-9]{4}-[0-9]{6}-[0-9]{1}"
          name="number"
          placeholder="Enter Your WhatsApp Number"
          className="h-12 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        {/* Password */}
        <h4 className=" font-sans uppercase font-semibold mt-1">Password </h4>
         <input
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          className="h-12 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
          {/* Button */}
          <button className="h-12 mt-3 w-[20.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Sign Up
        </button>
        </div>
        <div className="col-md-6 float-right my-20">
            <img className="  mx-auto" src="pana.png" alt=""/>
        </div>
        </div>
  
   
      
    );
}
export default Signup;