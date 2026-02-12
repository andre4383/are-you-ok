"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const text = "are you ok?";
  const secondText = "welcome back";

  const textRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    if (!secondTextRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    const tl = gsap.timeline();

    tl.from(letters, {
      opacity: 0,
      stagger: 0.4,
    });

    tl.from(secondTextRef.current, {
      opacity: 0,
      stagger: 2,
    });
  });

  return (
    <div className="min-h-screen flex items-center px-8">
      <div className="Header flex flex-col">
        <h1 ref={textRef} className="text-6xl font-bold">
          {text.split("").map((letter, index) => (
            <span key={index} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <h2 ref={secondTextRef} className="text-gray-500 mt-2 text-xl">
          {secondText}
        </h2>
      </div>
    </div>
  );
}
