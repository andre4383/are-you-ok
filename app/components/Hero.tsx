"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Hero() {
  const text = "are you ok?";
  const secondText = "welcome back";
  const textRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    if (!textRef.current || !secondTextRef.current || !cursorRef.current)
      return;
    const letters =
      textRef.current.querySelectorAll<HTMLSpanElement>(".letter");
    const tl = gsap.timeline();
    letters.forEach((letter) => {
      tl.to(letter, { opacity: 1, duration: 0.4 });
      tl.to(
        cursorRef.current,
        { x: letter.offsetLeft + letter.offsetWidth, duration: 0.05 },
        "<",
      );
    });
    tl.to(secondTextRef.current, { opacity: 1, duration: 0.5 }, "+=0.2");
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
      delay: letters.length * 0.05,
    });
  });
  return (
    <>
      <div className="flex flex-col justify-center px-2 h-full">
        <div className="flex flex-col">
          <h1
            ref={textRef}
            className="text-6xl font-bold flex items-center relative selection:bg-black selection:text-white"
          >
            {text.split("").map((letter, index) => (
              <span key={index} className="letter opacity-0 relative">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}

            <span
              ref={cursorRef}
              className="absolute w-0.75 h-[1em] bg-current"
              style={{ top: 0, left: 0 }}
            />
          </h1>

          <h2
            ref={secondTextRef}
            className="text-gray-500 mt-2 text-xl opacity-0 selection:bg-gray-800 selection:text-white"
          >
            {secondText}
          </h2>
        </div>
      </div>
    </>
  );
}
