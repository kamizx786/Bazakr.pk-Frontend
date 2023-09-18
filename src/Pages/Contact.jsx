import React from "react";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14">
        {/* sidebar */}
        <div className="border border-[#f2f2f2] rounded order-2 md:order-1 w-full shrink-0 bg-white p-5  md:w-72 lg:w-96">
          <div className="mb-8 flex w-full items-center justify-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/die5mkbau/image/upload/v1682706349/contact-illustration.2f6adc05_qrno6i.svg"
              alt="contact"
              className="h-auto w-full"
            />
          </div>

          <div className="mb-8 flex flex-col">
            <span className="mb-3 font-semibold text-heading">Address</span>
            <span className="text-sm text-body">Gujranwala,Pakistan</span>
          </div>

          <div className="mb-8 flex flex-col">
            <span className="mb-3 font-semibold text-heading">Phone</span>
            <span className="text-sm text-body">+129290122122</span>
          </div>
          <div className="mb-8 flex flex-col">
            <span className="mb-3 font-semibold text-heading">Website</span>
            <div className="flex items-center justify-between gap-2">
              <a
                href="https://bazakr-pk-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-sans transition-transform hover:scale-95 text-[#248F59]
                 font-semibold whitespace-nowrap focus:outline-none"
              >
                Bazar.pk
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="border border-[#f2f2f2]  rounded order-1 md:order-2 mb-8 w-full bg-white p-5 md:mb-0 md:p-8 md:ml-7 md:mr-7 lg:ml-9 lg:mr-9">
          <h1 className="mb-7 font-body text-xl text-[#248f59] font-serif text-heading md:text-3xl">
            Questions, Comments, Or Concerns?
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
