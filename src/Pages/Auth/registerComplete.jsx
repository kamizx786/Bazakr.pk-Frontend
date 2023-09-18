import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerComplete } from "./auth";

const RegisterComplete = () => {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setloading] = useState(false);
  const [emailError, setEmailError] = useState("");
  //state
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  //useEffect for PreFilled Email
  useEffect(() => {
    setEmail(window.localStorage.getItem("Email", email));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !secret) {
        return toast.error("Please Fill all Fields");
      }
      if (emailError) {
        return toast.error("Please Add Valid Email");
      }
      setloading(true);
      registerComplete(email, secret).then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          setloading(false);
          setEmail("");
          setSecret("");
          window.localStorage.removeItem("Email", email);
          navigate("/");
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
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };
  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000); // 5 seconds
    }
  }, [loggedIn && loggedIn.token]);
  return loggedIn && loggedIn.token ? (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Redirecting to Homepage...
        </span>
      </div>
    </div>
  ) : (
    <>
      <div>
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto h-screen justify-center ">
          {/* LOGO */}
          <h1 className="text-[#248F59]  flex justify-center items-center italic mb-6 font-sans">
            Complete Registration
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* ERROR */}
          {emailError && <p className="text-red-500">{emailError}</p>}

          {/* SECRET */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Secret
          </label>
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="password"
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* COMPLETE REGISTRATION */}
          <button
            onClick={handleSubmit}
            className="h-12 my-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]"
          >
            {loading ? <LoadingOutlined /> : "Complete Registration"}
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterComplete;
