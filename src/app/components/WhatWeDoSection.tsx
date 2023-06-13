import React from "react";

export default function WhatWeDoSection() {
  return (
    <div className="relative my-12">
      <img
        alt=""
        className="w-full min-h-[400px] object-cover"
        src="/assets/pexels-tima-miroshnichenko-5717556 1.png"
      />
      <div className="absolute left-0 top-0 h-full ">
        <svg
          className="w-full h-full"
          viewBox="0 0 568 657"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-5 0H452.552C452.552 0 564.933 119 567.944 333C570.954 547 452.552 657 452.552 657H-5V0Z"
            fill="url(#paint0_linear_80_269)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_80_269"
              x1="-5"
              y1="364"
              x2="674.742"
              y2="400.466"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F05A5C" />
              <stop offset="1" stop-color="#F47D83" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className="absolute text-white 
            top-[50%] left-[30%] translate-x-[-30%] translate-y-[-50%]
          min-[1240px]:top-[50%] min-[1240px]:left-[50%] min-[1240px]:translate-x-[-50%] min-[1240px]:translate-y-[-50%]
      
          
          "
        >
          <h2 className="font-montserrat lg:text-4xl font-semibold text-xl">
            What we do
          </h2>
          <p className="my-6 text-sm">
            If your startup will need a sales team, but when. With our 100%
            customer satisfaction rate and over a decade of experience building
            successful sales motions within tech startups of all growth stages,
            we bring unparalleled knowledge and insights to help you achieve
            your sales goals.
          </p>
          <svg
            className="cursor-pointer hover:scale-110 transition-all ease-in-out delay-150 w-[70px]"
            viewBox="0 0 93 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="46.5"
              cy="46.5"
              r="46.5"
              fill="white"
              fill-opacity="0.5"
            />
            <path
              d="M62.6329 41.7232C65.9799 43.6237 66.0144 48.4349 62.695 50.3832L43.2762 61.7811C39.9568 63.7295 35.773 61.3538 35.7454 57.5049L35.5839 34.9888C35.5563 31.1399 39.7056 28.7044 43.0526 30.605L62.6329 41.7232Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
