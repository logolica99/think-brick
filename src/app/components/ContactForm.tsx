import React from "react";

export default function ContactForm() {
  return (
    <div className=" my-28 lg:my-44 flex flex-col lg:flex-row  items-center gap-20 relative justify-evenly">
      <div className="absolute right-0 hidden lg:block lg:top-[10%]">
        <svg
          className=" "
          width="550"
          height="702"
          viewBox="0 0 550 702"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="351" cy="351" r="351" fill="url(#paint0_linear_82_408)" />
          <defs>
            <linearGradient
              id="paint0_linear_82_408"
              x1="567"
              y1="82.4999"
              x2="-99.5"
              y2="717.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F95959" />
              <stop offset="1" stop-color="#FFA8AC" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="font-montserrat hidden lg:block">
        <h2 className="font-medium  text-6xl">Contact Us</h2>
        <h3 className="font-black text-6xl mt-6">
          NEED <br /> SOMETHING <br /> DONE?
        </h3>
        <h3 className="font-semibold text-6xl">
          We are <br /> here to <br /> help!
        </h3>
      </div>
      <div className="font-montserrat lg:hidden text-center">
        <h2 className="font-medium  text-3xl">Contact Us</h2>
        <h3 className="font-black text-3xl mt-6">NEED SOMETHING DONE?</h3>
        <h3 className="font-semibold text-3xl">We are here to help!</h3>
      </div>
      <div
        className="bg-white p-6 lg:p-8 rounded-xl   w-full lg:w-[50%]"
        style={{
          filter: "drop-shadow(13px 14px 29px rgba(123, 40, 41, 0.31))",
        }}
      >
        <form className="flex flex-col justify-between h-full gap-4 lg:gap-8">
          <input
            placeholder="Name"
            className=" border-2 border-primary rounded-xl py-2 font-inter text-xl px-4 placeholder:font-light"
          />
          <input
            placeholder="Email"
            className=" border-2 border-primary rounded-xl py-2 font-inter text-xl px-4 placeholder:font-light"
          />
          <input
            placeholder="Phone"
            className=" border-2 border-primary rounded-xl py-2 font-inter text-xl px-4 placeholder:font-light"
          />
          <input
            placeholder="Company Name"
            className=" border-2 border-primary rounded-xl py-2 font-inter text-xl px-4 placeholder:font-light "
          />
          <textarea
            placeholder="How can we help?"
            rows={5}
            className="resize-none  border-2 border-primary rounded-xl py-2 font-inter text-xl px-4 placeholder:font-light"
          />
          <button
            type="submit"
            className="bg-primary rounded-xl text-white font-montserrat font-semibold py-3 text-2xl hover:opacity-75 duration-150 ease-in-out transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
