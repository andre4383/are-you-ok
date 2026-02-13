"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ItsOkPage() {
  const router = useRouter();
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      },
    );
  }, []);

  const handleClick = () => {
    gsap.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        router.push("/");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32 bg-white">
      <div className="max-w-[1400px] w-full">
        <h1
          ref={textRef}
          onClick={handleClick}
          className="text-[clamp(3rem,7vw,6rem)] font-serif font-semibold leading-[1.15] tracking-tight text-black cursor-pointer hover:opacity-80 transition-opacity selection:bg-black selection:text-white opacity-0 indent-35"
        >
          Every good (you do) comes back to you.
        </h1>
      </div>
    </div>
  );
}
