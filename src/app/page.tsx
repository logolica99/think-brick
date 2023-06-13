import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import WhatWeDoSection from "./components/WhatWeDoSection";

export default function Home() {
  return (
    <main className="font-inter relative">
      <svg
        className="hidden md:block absolute top-[-40vh] w-[400px] md:w-[100vw]  lg:top-[-26vh] right-0 lg:w-[88vw] h-[100vh] z-[-1] "
        width="1308"
        height="712"
        viewBox="0 0 1308 712"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_3)">
          <path
            d="M684.64 -1140.33L24.373 -376.032C-11.7315 -334.239 -7.12012 -271.091 34.6728 -234.986L1101.66 686.773C1143.45 722.877 1206.6 718.266 1242.71 676.473L1902.97 -87.8223C1939.08 -129.615 1934.47 -192.764 1892.67 -228.868L825.686 -1150.63C783.893 -1186.73 720.745 -1182.12 684.64 -1140.33Z"
            fill="url(#paint0_linear_1_3)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_3"
            x1="964"
            y1="141.499"
            x2="1384"
            y2="731.997"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F95959" />
            <stop offset="1" stop-color="#F95959" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_3">
            <rect width="1308" height="712" fill="white" />
          </clipPath>
        </defs>
      </svg>
        <Nav />
      <div className="m-auto w-[90%] md:w-[80%]">
        <Hero />
      </div>
      <WhatWeDoSection />
      <div className="m-auto w-[90%] md:w-[80%]">
        <Services/>
      </div>


    </main>
  );
}
