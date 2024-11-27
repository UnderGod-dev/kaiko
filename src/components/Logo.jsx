"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Logo = () => {
  const logoSrc = [
    "pngegg.png",
    "pngegg (1).png",
    "pngegg (2).png",
    "pngegg (3).png",
    "pngegg (4).png",
    "pngegg (5).png",
    "pngegg (6).png",
    "pngegg (7).png",
    "pngegg (8).png",
    "pngegg (9).png",
  ];

  const containerRef = useRef(null);
  const firstRowRef = useRef(null);

  useEffect(() => {
    const marquee = containerRef.current;
    const firstRow = firstRowRef.current;

    if (!marquee || !firstRow) return;

    // GSAP animation
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(marquee, {
      x: `-${firstRow.offsetWidth}px`,
      duration: 20,
      ease: "none",
    });

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        tl.pause();
      } else {
        tl.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Optional: Pause on hover
    marquee.addEventListener("mouseenter", () => tl.pause());
    marquee.addEventListener("mouseleave", () => tl.play());

    return () => {
      tl.kill();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="overflow-hidden max-w-[300px] md:max-w-none md:w-full">
      <div ref={containerRef} className="inline-flex gap-8 items-center">
        <div
          ref={firstRowRef}
          className="flex gap-8 items-center flex-shrink-0"
        >
          {logoSrc.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={`/${logo}`}
                height={150}
                width={150}
                alt={`Logo ${index + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex gap-8 items-center flex-shrink-0">
          {logoSrc.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <Image
                src={`/${logo}`}
                height={150}
                width={150}
                alt={`Logo ${index + 1}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
