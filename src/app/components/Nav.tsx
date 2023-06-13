"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Nav({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`${
        openMenu && "fixed"
      } relative  flex min-h-[14vh] w-full items-center justify-between`}
    >
      <div className="flex w-[200px] items-center gap-2 md:w-[250px] ">
        <img alt="" src="/assets/logo-lg.png" />
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <Link
          href={""}
          className="text-white hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Home
        </Link>
        <Link
          href={""}
          className="text-white hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Services
        </Link>
        <Link
          href={""}
          className="text-white hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Blog
        </Link>
        <Link
          href={""}
          className="text-white hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          About us
        </Link>
        <Link
          href={""}
          className="text-primary hover:opacity-70 transition-all duration-150 ease-in-out bg-white px-4 py-2 rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
