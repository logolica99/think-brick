"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";

type Props = {};

export default function Nav({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`   flex min-h-[14vh]  items-center px-6 md:px-10  w-full z-10 justify-between  ${
        openMenu && "fixed  top-0 left-0  bg-white"
      }`}
    >
      <Menu open={openMenu} />
      <div className="flex w-[200px] items-center gap-2 md:w-[250px] ">
        <img alt="" src="/assets/logo-lg.png" />
      </div>
      <div className="lg:hidden">
        <button
          className="cursor-pointer"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <RxHamburgerMenu className="text-3xl " />
        </button>
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
