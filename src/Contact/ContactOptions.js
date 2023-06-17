import React from "react";
import emailImg from "../images/contact-email.png";
import phoneImg from "../images/contact-phone.png";
import locationImg from "../images/contact-location.png";

const ContactOptions = () => {
  const openMap = (address) => {
    window.open(
      `https://maps.google.com/maps?q=${encodeURIComponent(address)}`
    );
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 m-auto">
      <div className="flex flex-col gap-16 lg:items-center lg:gap-x-16">
        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
          <h2 className="text-3xl font-bold sm:text-4xl">
            GET IN TOUCH WITH US
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-6 items-center min-w-72 w-72 h-80 rounded-xl border border-gray-100 p-6 shadow-md hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-col gap-2 items-center">
              <img src={emailImg} className="h-28" />

              <h2 className="mt-2 text-2xl">EMAIL US</h2>
            </div>

            <p className="sm:text-sm sm:text-gray-600 text-center">
              tigerkalen@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center min-w-72 w-72 h-80 rounded-xl border border-gray-100 p-6 shadow-md hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-col gap-2 items-center">
              <img src={phoneImg} className="h-28" />

              <h2 className="mt-2 text-2xl">CALL US</h2>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="sm:text-sm sm:text-gray-600">
                Studio - 732-906-9077
              </p>
              <p className="sm:text-sm sm:text-gray-600">
                Master Kalen - 732-207-9357
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center min-w-72 w-72 h-80 rounded-xl border border-gray-100 p-6 shadow-md hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <div className="flex flex-col gap-2 items-center">
              <img src={locationImg} className="h-28" />

              <h2 className="mt-2 text-2xl">OUR LOCATION</h2>
            </div>

            <button
              className="sm:text-sm sm:text-gray-600 text-center hover:underline decoration-dotted"
              onClick={() =>
                openMap("52 Lincoln Highway, Suite 2B, Edison, NJ, 08820")
              }
            >
              52 Lincoln Highway, Suite 2B, Edison, NJ, 08820
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
