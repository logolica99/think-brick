"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Swiper as SwiperType } from "swiper";
import Testimonial from "./Testimonial";

export default function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="my-24">
      <div className="relative m-auto w-[90%] md:w-[80%]">
        <h2 className="text-center text-4xl font-semibold text-[#483B3B] font-montserrat my-12 lg:my-20">
          Testimonial
        </h2>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-14 lg:top-0  z-10  text-6xl lg:right-0 bg-[#CECECE] rounded-full p-4"
        >
          {" "}
          <svg
          className=" h-3 md:h-4"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L6.77249 5.92891L2 9.85783"
            stroke="#373261"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-20  top-14 lg:top-0  z-10  text-6xl lg:right-20 bg-[#CECECE] rounded-full p-4"
        >
          {" "}
          <svg
            className=" h-3 md:h-4"
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77246 2L1.99997 5.92891L6.77246 9.85783"
              stroke="#373261"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative mx-7 mb-20 md:mx-0 my-12">
        {" "}
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={90}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            850: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimonial
              imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
              name={"James Bond"}
              title={"CEO of BBF"}
              description={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
              name={"James Bond"}
              title={"CEO of BBF"}
              description={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
              name={"James Bond"}
              title={"CEO of BBF"}
              description={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              imgSrc={"/assets/portrait-white-man-isolated_53876-40306 1.png"}
              name={"James Bond"}
              title={"CEO of BBF"}
              description={
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
