"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useMemo, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const positiveMessages = [
  "Our work spans beauty, real estate, and hospitality—distinct worlds connected by design and storytelling.",
  "You are stronger than you think, braver than you believe, and more capable than you imagine.",
  "Every day is a new beginning. Take a deep breath, smile, and start again.",
  "Your potential is endless. Go do what you were created to do.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The best time for new beginnings is now.",
  "You are worthy of love, success, and happiness.",
  "Rejecting what doesn't suit you is part of respecting yourself",
  "Your story isn't over yet. Keep going.",
  "Every good (you do) comes back to you.",
];

function ItsOkContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const textRef = useRef<HTMLHeadingElement>(null);

  const message = useMemo(() => {
    const messageIndex = searchParams.get("msg");
    if (messageIndex !== null) {
      const index = parseInt(messageIndex);
      return positiveMessages[index] || positiveMessages[0];
    }
    return positiveMessages[0];
  }, [searchParams]);

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
  }, [message]);

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
          className="text-[clamp(3rem,7vw,6rem)] font-serif font-semibold leading-[1.15] tracking-tight text-black cursor-pointer hover:opacity-80 transition-opacity selection:bg-black selection:text-white opacity-0 indent-16"
        >
          {message}
        </h1>
      </div>
    </div>
  );
}

export default function ItsOkPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ItsOkContent />
    </Suspense>
  );
}
