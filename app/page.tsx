"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const text = "are you ok?";

  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    gsap.from(letters, {
      opacity: 0,
      stagger: 0.4,
    });
  });

  return (
    <div className="min-h-screen flex items-center px-8">
      <div>
        <h1 ref={textRef} className="text-6xl font-bold">
          {text.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  );
}
