"use client";
import Download from "@/components/Download";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GetStarted = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current.children, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  return (
    <section
      className="flex flex-col items-center mt-16 gap-4 text-center max-w-2xl mx-auto"
      ref={headerRef}
    >
      <h3 className="text-xs font-semibold text-green ">GET STARTED</h3>
      <h2 className="text-[2.5em] md:text-6xl  font-[550] leading-tight">
        Unlock Financial <br />{" "}
        <span className="text-green block">Freedom</span>
      </h2>
      <p className="text-white/70 text-lg md:text-xl max-w-md md:max-w-none">
        Take control of your finances effortlessly with Kaiko. Sign up now for a
        seamless financial management experience.
      </p>
      <div className="w-2/4">
        <Download />
      </div>
    </section>
  );
};

export default GetStarted;
