import React, { useState } from "react";

const StoreLinks = () => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="mx-20">
      <h3 className="text-4xl font-serif mt-3 ]">Social Media Links</h3>
      <div>
        <img className="h-[2.1rem] mt-3" src="StoreSteps3.png" alt="" />
      </div>
      <div className="col-md-6 float-left my-10">
        {/* Whatsapp */}
        <h4 className="font-sans font-semibold  uppercase mt-1">WhatsApp</h4>
        <input
          type="tel"
          id="name"
          name="name"
          placeholder="+92"
          className="h-12 my-2 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        <h4 className="font-sans font-semibold  uppercase mt-1">Facebook</h4>
        <input
          type="url"
          placeholder="Facebook"
          className="h-12 my-2 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />
        <h4 className="font-sans font-semibold  uppercase mt-1">Instagram</h4>
        <input
          type="url"
          placeholder="Instagram"
          className="h-12 my-2 w-[20.4375rem] px-5 border rounded-lg border-neutral-300"
        />

        {/* Button */}
        <div>
        <button
          className="h-12 mt-3 w-[7.4375rem] text-[#248F59] border-[#248F59] bg-white rounded-lg font-sans uppercase font-semibold"
          Style={"border:1px solid"}
        >
          Back
        </button>{" "}
        <button className="h-12 mt-3 w-[10.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          Save & Continue
        </button>
        </div>
      </div>
      <div className="col-md-6 float-right">
        <img className="-mt-14" src="slink.png" alt="" />
      </div>
    </div>
  );
};
export default StoreLinks;
