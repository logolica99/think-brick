import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="mt-[20px] md:mt-[90px]">
      <div className="flex justify-center flex-col-reverse min-[1240px]:flex-row lg:justify-between items-center">
        <div className="flex flex-col gap-8 mt-6 md:mt-0">
          <p className="text-primaryDark font-semibold text-3xl  md:text-5xl ">
            Best IT solution and <br className="hidden min-[1350px]:block" /> we
            bring <span className="text-primary">success</span> to you
          </p>
          <p className="text-primaryDark text-base md:text-xl">
            We help you boldly set your ambitions and clearlly define your
            future <br className="hidden lg:block" />
            with confidence.
          </p>
          <div>
            <button className="bg-primary text-white px-10 py-2 md:px-14 md:py-4 font-bold font-josefin text-base md:text-xl rounded-xl hover:opacity-70 transition-all duration-150 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
        <img
          src="/assets/hero.png"
          alt=""
          className="relative lg:left-[47px]"
        />
      </div>
    </div>
  );
}
