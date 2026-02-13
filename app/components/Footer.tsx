"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-end items-center text-gray-500 text-1xl selection:bg-gray-800 selection:text-white px-2 py-2 font-serif">
      <p>2026 Copyright</p>
      <span className="mx-1">•</span>
      <Link
        href="https://github.com/andre4383"
        className="hover:text-black cursor-pointer"
      >
        github
      </Link>
    </div>
  );
}
