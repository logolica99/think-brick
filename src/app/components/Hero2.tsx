import React from "react";

export default function Hero2() {
  return (
    <div className="my-24 lg:my-44">
      <div className="flex justify-center flex-col min-[1240px]:flex-row lg:justify-between items-center">
        <div className="relative">
          <img
            src="/assets/story.png"
            alt=""
            className=" lg:min-w-[460px] relative ml-0 min-[1300px]:ml-[20px] min-[1300px]:mr-12 min-[1550px]:ml-[150px] min-[1550px]:mr-20 z-10"
          />
          <svg
            width="540"
            height="553"
            viewBox="0 0 540 553"
            fill="none"
            className="absolute left-0 -top-32 z-0 hidden min-[1300px]:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="270"
              cy="276.5"
              rx="270"
              ry="276.5"
              fill="url(#paint0_linear_77_80)"
              fill-opacity="0.89"
            />
            <defs>
              <linearGradient
                id="paint0_linear_77_80"
                x1="63.1343"
                y1="-19.4624"
                x2="269.714"
                y2="553.103"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FB9191" />
                <stop offset="1" stop-color="#FB9191" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex flex-col gap-8 mt-6 md:mt-0 ">
          <p className="text-primaryDark font-semibold text-3xl  md:text-5xl ">
            The story behind <br className="hidden min-[1350px]:block" />
            our consulting firm
          </p>
          <p className="text-primaryDark text-base md:text-xl">
            We help you boldly set your ambitions and clearlly define your
            <br className="hidden min-[1350px]:block" />
            future with confidence and flourish your IT firm. We help you boldly
            <br className="hidden min-[1350px]:block" />
            set your ambitions and clearlly define your future with confidence
            <br className="hidden min-[1350px]:block" />
            and flourish your IT firm
          </p>
          <div className="flex gap-10">
            <div>
              {" "}
              <p className="text-primaryDark font-semibold text-3xl  md:text-5xl ">
                500+
              </p>
              <p className="text-primaryDark text-base md:text-xl">
                Companies helped
              </p>
            </div>
            <div>
              {" "}
              <p className="text-primaryDark font-semibold text-3xl  md:text-5xl ">
                100M
              </p>
              <p className="text-primaryDark text-base md:text-xl">
                Revenue Generated
              </p>
            </div>
          </div>
          <div>
            <button className="bg-primary text-white px-10 py-2 md:px-14 md:py-4 font-bold font-josefin text-base md:text-xl rounded-xl hover:opacity-70 transition-all duration-150 ease-in-out">
              About Our Firm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
