import * as React from "react";

export interface ITestimonialProps {
  imgSrc: string;
  name: string;
  title: string;
  description: string;
}

export default function Testimonial({
  imgSrc,
  name,
  title,
  description,
}: ITestimonialProps) {
  return (
    <div className="bg-white rounded-xl p-8">
      <p className=" text-lg md:text-xl font-medium">{description}</p>
      <div className="flex gap-2 items-center mt-6">
        <img src={imgSrc} alt="" className="w-14 md:w-28" />
        <div className="">
          <p className="text-lg md:text-2xl font-extrabold font-montserrat">
            {name}
          </p>
          <p className="text-sm md:text-lg text-primaryBlue font-medium font-montserrat text-primary">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
