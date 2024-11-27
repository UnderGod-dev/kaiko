"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsBag } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { MdFlightTakeoff } from "react-icons/md";
import { GiTrade } from "react-icons/gi";
import Card from "@/components/Card";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const img = ["screen1", "screen2", "screen3"];
const cards = [
  {
    title: "dashboard",
    heading: "Financial Overview",
    paragraph:
      "Access all your financial data at a glance, streamlining your management process and enhancing your financial decision-making.",
    l1: "Real-time balance updates",
    l2: "Transaction categorization",
    l3: "Budget tracking",
  },
  {
    title: "Analytics",
    heading: "Financial Insights",
    paragraph:
      "Gain comprehensive insights into your spending patterns and financial behaviors with detailed analytics, empowering informed financial choices.",
    l1: "Expense breakdown charts",
    l2: "Income trends analysis",
    l3: "Savings growth tracking",
  },
  {
    title: "Contracts",
    heading: "Contract Management",
    paragraph:
      "Keep track of all your contracts in one place, ensuring clarity and compliance with automated reminders and easy access.",
    l1: "Contract expiration alerts",
    l2: "Document storage",
    l3: "Renewal notifications",
  },
];

const Animation = () => {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);
  const screensRef = useRef([]);

  useGSAP(() => {
    // Ensure we have refs for all screens
    screensRef.current = screensRef.current.slice(0, img.length);

    // Pin the phone
    ScrollTrigger.create({
      trigger: phoneRef.current,
      start: "top top",
      endTrigger: ".card-3",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    // Prepare initial screen positions
    gsap.set(screensRef.current[0], { x: "0%" });
    gsap.set(screensRef.current[1], { x: "100%" });
    gsap.set(screensRef.current[2], { x: "-100%" });

    // Create scroll-based screen transitions
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card/screen

      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "bottom 40%",
        markers: false,
        scrub: 1, // Smooth scroll-linked animation
        onUpdate: (self) => {
          const progress = self.progress;

          if (index === 1) {
            // Transition from first to second screen
            gsap.set(screensRef.current[1], { x: `${100 - progress * 100}%` });
            gsap.set(screensRef.current[0], { x: `${-progress * 100}%` });
          } else if (index === 2) {
            // Transition from second to third screen
            gsap.set(screensRef.current[2], { x: `${-100 + progress * 100}%` });
            gsap.set(screensRef.current[1], { x: `${progress * 100}%` });
          }
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-screen relative pb-[26em] bg-violegt-500"
    >
      {/* Main Content */}
      <div className="relative mx-auto flex flex-col">
        {/* Phone Container */}
        <div
          ref={phoneRef}
          id="phone"
          className="min-h-screen flex flex-col justify-center items-center w-screen"
        >
          <div className="space-y-10 absolute w-full z-10 text-sm text-white/75 font-semibold max-w-screen-lg left-1/2 -translate-x-1/2 top-20">
            <div className="flex justify-between px-12">
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 animate-move-top delay-300"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="bg-green p-1 rounded text-black">
                  <BsBag />
                </span>
                <span className="">+ $4.250 Salary</span>
              </div>
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 ml-12 animate-move-top delay-[3s]"
                style={{ animationDelay: ".2s" }}
              >
                <span className="bg-green p-1 rounded text-black">
                  <CiCoffeeCup />
                </span>
                <span className="">+ $3.5 Coffee</span>
              </div>
            </div>
            <div className="flex justify-between px-32">
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 animate-move-top delay-1000"
                style={{ animationDelay: ".5s" }}
              >
                <span className="bg-red-400 p-1 rounded">
                  <MdFlightTakeoff />
                </span>
                <span className="">+ $4000 Holidays</span>
              </div>
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 ml-12 animate-move-top delay-500"
                style={{ animationDelay: "1s" }}
              >
                <span className="bg-red-400 p-1 rounded ">
                  <GiTrade />
                </span>
                <span className="">+ $3590 Dividend</span>
              </div>
            </div>
          </div>
          <div className="relative size-full flex justify-center items-center">
            <Image
              src={`/frame.svg`}
              alt="screen frame"
              height={400}
              width={400}
              className={`absolute z-1 object-center object-contain h-[520px] 2xl:h-[720px]`}
            />
            {/* Screens Container */}
            <div
              className="absolute 
               left-1/2 -translate-x-1/2 
               top-1/2 -translate-y-1/2 
               w-[238px] h-[510px]  // Slightly narrower than frame
               2xl:w-[338px] 2xl:h-[700px] 
               overflow-hidden rounded-3xl 2xl:rounded-[40px] bg-gradient-to-b from-[#111] to-[#1b1b1b]"
            >
              {img.map((image, i) => (
                <Image
                  key={image}
                  ref={(el) => (screensRef.current[i] = el)}
                  src={`/${image}.svg`}
                  alt={`screen ${i + 1}`}
                  height={400}
                  width={400}
                  className={`
          absolute 
          object-center object-cover 
          w-full h-full
        `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 w-[100vw] lg:w-[80vw] mx-auto max-w-screen-lg">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`card card-${i + 1} h-screen flex items-center ${
              i === 1 ? "justify-end" : ""
            } p-4`}
          >
            <div>
              <Card
                title={card.title}
                heading={card.heading}
                paragraph={card.paragraph}
                l1={card.l1}
                l2={card.l2}
                l3={card.l3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animation;
