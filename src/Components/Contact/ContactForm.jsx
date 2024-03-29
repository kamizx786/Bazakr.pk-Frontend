import { useState } from "react";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { SendMessage } from "./function";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    discription: "",
  });

  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setValues({ ...values, email: enteredEmail });
    if (enteredEmail && !validateEmail(enteredEmail)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.discription ||
      !values.email ||
      !values.name ||
      !values.subject
    ) {
      toast.error("Please fill all the fields.");
      setLoading(false);
      return;
    }
    if (emailError) {
      toast.error("Please add a valid email.");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      SendMessage(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success(
            "Message delivered successfully.We will be in touch with you shortly."
          );
          setValues({
            name: "",
            email: "",
            subject: "",
            discription: "",
          });
          setLoading(false);
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <form>
        <div className="flex flex-col gap-3 ">
          {/* Field */}
          <div className='"grid grid-cols-2'>
            <div className="flex flex-col gap-1 mb-4">
              {/* EMAIL */}
              <h4 className="font-sans mb-2">Email</h4>
              <input
                type="text"
                id="email"
                value={values.email}
                name="email"
                placeholder="Enter Your Email"
                onChange={handleEmailChange}
                className="focus:outline-none font-sans focus:border-none focus:ring-2 focus:ring-green-600 h-12  px-3 border rounded-lg border-neutral-300"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              {/* NAME */}
              <h4 className="font-sans mb-2">Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={(e) => {
                  const input = e.target.value;
                  const regex = /^[a-zA-Z\s]*$/; // Regex to match alphabetic characters and spaces
                  if (regex.test(input)) {
                    setValues({ ...values, name: input });
                  }
                }}
                placeholder="Enter Your Name"
                className="focus:outline-none font-sans focus:border-none focus:ring-2 focus:ring-green-600 h-12  px-3 border rounded-lg border-neutral-300"
              />
            </div>
          </div>
          {/* SUBJECT */}
          <h4 className="font-sans">Subject</h4>
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
            className="focus:outline-none mb-2 font-sans focus:border-none focus:ring-2 focus:ring-green-600 h-12 w-full px-3 border rounded-lg border-neutral-300"
          />
          {/* DESCRIPTION */}
          <h4 className="font-sans">Description</h4>
          <textarea
            onChange={handleChange}
            value={values.discription}
            name="discription"
            className="focus:outline-none font-sans focus:border-none focus:ring-2 focus:ring-green-600 h-48 w-full px-3 border rounded-lg border-neutral-300"
          />

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="h-12 mt-5 text-[#f2f2f2] hover:text-white transition-transform hover:scale-95 bg-[#248F59] rounded-lg font-sans uppercase font-semibold"
          >
            {loading ? <LoadingOutlined /> : "Send"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
