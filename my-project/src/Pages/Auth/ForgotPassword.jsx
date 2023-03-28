import React , {useState} from "react";
const ForgotPassword = () => {
    const [email,setEmail]=useState("");
  return (
    <div className="grid place-content-center sm:text-center mt-[5.125rem] sm:justify-center">
      <div className="flex flex-col gap-[2.5rem] items-center px-[5.25rem] py-[1.125rem]  border border-neutral-300 rounded-lg w-fit">
        {/* Title */}
        <h3 className="text-4xl font-serif">Reset Password</h3>

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
            className="focus:outline-none focus:ring-2 focus:ring-green-600 h-16 w-[23.4375rem] px-5 border rounded-lg border-neutral-300"
          />
          {/* Button */}
          <button className="h-16 w-[23.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
