import { useState } from "react";
import SearchField from "./SearchField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({
      type: "LOCATION",
      payload: values,
    });
    localStorage.removeItem("cart");
    dispatch({ type: "Cart", payload: [] });
    localStorage.setItem("location", JSON.stringify(values));
    navigate("/shops");
    setValues({});
  };
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="h-screen bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/die5mkbau/image/upload/v1682702053/home_sdg0v2.svg')",
        }}
      >
        {/* Hero Content */}
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <div className="flex flex-col gap-2">
            <h1 className="flex text-[3.5rem] md:text-[3.5rem] font-serif font-normal tracking-tighter leading-tight text-[#FFFFFF] text-center justify-center">
              Shop Online,
              <br /> In Your Area!
            </h1>
            <p className="flex font-sans text-lg font-normal text-[#FFFFFF]  leading-6 tracking-normal text-center w-[15rem] md:w-[25rem] opacity-90">
              Enter your address and we’ll take you to your local bazaar.
            </p>
          </div>
          <div className="flex flex-col">
            <SearchField values={values} setValues={setValues} />
            <button
              disabled={Object.keys(values).length === 0}
              onClick={handleClick}
              className="my-2 h-16 w-[18.4375rem] transition-transform hover:scale-95 cursor-pointer  md:w-[23.4375rem]  text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold"
            >
              Find My Bazar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
