import React from "react";

export default function Header() {
  return (
    <header className="w-full py-2 px-2 flex">
      <h1 className="inline-block font-bold text-[16pt] text-gray-500 hover:text-black cursor-default transition-colors duration-300 ease-in-out selection:bg-black selection:text-white">
        ok.
      </h1>
      <h2 className="inline-block font-bold text-[12pt] text-gray-500 hover:text-black cursor-default transition-colors duration-300 ease-in-out selection:bg-black selection:text-white ml-auto">
        github
      </h2>
    </header>
  );
}
