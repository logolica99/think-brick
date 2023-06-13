import Link from "next/link";
import React from "react";

export default function Menu({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed left-0 z-10  top-0 mt-[10vh] h-[100vh] w-full bg-white transition duration-150 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" flex flex-col items-center justify-center gap-8 mt-16">
        <Link
          href={""}
          className="text-primary hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Home
        </Link>
        <Link
          href={""}
          className="text-primary hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Services
        </Link>
        <Link
          href={""}
          className="text-primary hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          Blog
        </Link>
        <Link
          href={""}
          className="text-primary hover:opacity-70 transition-all duration-150 ease-in-out"
        >
          About us
        </Link>
        <Link
          href={""}
          className="text-white hover:opacity-70 transition-all duration-150 ease-in-out bg-primary px-4 py-2 rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
