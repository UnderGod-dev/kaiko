"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  BsArrowLeft,
  BsArrowRightShort,
  BsBag,
  BsCarFront,
  BsHouse,
  BsPlus,
  BsTwitterX,
} from "react-icons/bs";
import { CiCircleInfo, CiCoffeeCup } from "react-icons/ci";
import { MdFlightTakeoff } from "react-icons/md";
import { GiClothes, GiPowerLightning, GiTrade } from "react-icons/gi";
import { NotificationBar } from "@/components/DesktopPhone";
import Card from "@/components/Card";
import PhoneAnalytics from "@/components/PhoneAnalytics";
import PhoneContracts from "@/components/PhoneContracts";
import { PiChartLineUpLight, PiCoffee } from "react-icons/pi";
import {
  IoAirplaneOutline,
  IoFastFoodOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { RiArrowDownSLine, RiNetflixFill } from "react-icons/ri";
import { FaArrowLeft, FaDumbbell, FaHospital, FaYoutube } from "react-icons/fa";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const img = ["screen1", "screen2", "screen3"];

const Animation = () => {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);

  useGSAP(() => {
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

    // Animate screens based on scroll position
    const screens = gsap.utils.toArray(".screen");
    const cards = gsap.utils.toArray(".card");

    // Set initial positions for screens
    gsap.set(screens[0], { x: "0%" });
    gsap.set(screens[1], { x: "100%" });
    gsap.set(screens[2], { x: "-100%" }); // Third screen starts from left

    // Create animations for each card-screen pair
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first screen as it's visible by default

      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "bottom 40%",
        markers: false,
        delay: 1,
        scrub: 1, // Smooth animation tied to scroll
        onUpdate: (self) => {
          // Calculate progress (0 to 1)
          const progress = self.progress;

          if (index === 1) {
            // Second screen comes from right
            gsap.set(screens[1], { x: `${100 - progress * 100}%` });
            gsap.set(screens[0], { x: `${-progress * 100}%` });
          } else if (index === 2) {
            // Third screen comes from left
            gsap.set(screens[2], { x: `${-100 + progress * 100}%` });
            gsap.set(screens[1], { x: `${progress * 100}%` });
          }
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-screen relative pb-[26em]"
    >
      {/* Main Content */}
      <div className="relative mx-auto w-full flex flex-col items-center">
        {/* Phone Container */}
        <div
          ref={phoneRef}
          id="phone"
          className="min-h-screen flex flex-col justify-center items-center  min-w-full"
        >
          <div className="space-y-10 absolute w-full z-10 text-sm text-white/75 font-semibold max-w-screen-lg left-1/2 -translate-x-1/2 bg-violet-400f top-20">
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
          <div
            className="h-[68vh] max-w-[320px] w-full 2xl:w-[22%] border-2 border-white/20 rounded-[4em] pt-1 !pb-4 overflow-hidden relative flex flex-col bg-greent mx-auto"
            style={{ aspectRatio: "300/700" }}
          >
            <div className="absolute size-full inset-x-0 border-x-8 border-black z-10 rounded-3xl"></div>
            <div className="bg-whitei flex justify-center">
              <NotificationBar />
            </div>
            <div className="overflow-x-visibleb bg-yellow-600">
              {/* Screens */}
              {img.map((image, i) => (
                <div className="screen absolute h-full bg-white/5">
                  <Image
                    src={`/${image}.svg`}
                    alt="screen"
                    height={700}
                    width={400}
                    className={`object-center object-fill max-w-[320px] h-full bg-red-400t ${
                      i == 0 ? "-ml-16" : i == 1 ? "-ml-52" : "-ml-16"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Section - Increased z-index and added background */}
        <div className="relative z-10 w-[100vw] lg:w-[80vw] mx-auto max-w-screen-lg">
          <div className="card card-1 h-screen flex items-center p-4">
            <div className="">
              <Card
                title="dashboard"
                heading="Financial 
Overview"
                paragraph="Access all your financial data at a glance, streamlining your management process and enhancing your financial decision-making."
                l1="Real-time balance updates"
                l2="Transaction categorization"
                l3="Budget tracking"
              />
            </div>
          </div>
          <div className="card card-2 h-screen flex items-center justify-end p-4">
            <Card
              title="Analytics"
              heading="Financial
Insights 
"
              paragraph="Gain comprehensive insights into your spending patterns and financial behaviors with detailed analytics, empowering informed financial choices."
              l1="Expense breakdown charts

"
              l2="Income trends analysis

"
              l3="Savings growth tracking

"
            />
          </div>
          <div className="card card-3 h-screen flex items-center p-4 ">
            <Card
              title="Contracts

"
              heading="Contract 
Management
 
"
              paragraph="Keep track of all your contracts in one place, ensuring clarity and compliance with automated reminders and easy access."
              l1="Contract expiration alerts



"
              l2="Document storage



"
              l3="Renewal notifications



"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
