"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsBag } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  //   useEffect(() => {
  //     // Pin the phone container at 20vh
  //     ScrollTrigger.create({
  //       trigger: ".phone-container",
  //       start: "top 20vh",
  //       pin: true,
  //       end: "+=3000", // Last for the entire scroll duration
  //       scrub: true,
  //     });

  // Create a timeline for the screens and cards
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".phone-container",
  //     start: "top 20vh",
  //     end: "+=2000",
  //     scrub: true,
  //     pin: true,
  //   },
  // });

  // Animate the first screen and card
  // tl.to(".screen-1", { left: "0%", duration: 1 }) // Screen-1 slides into view
  //   .to(".card-1", { x: "0%", duration: 1 }, "-=1") // Card-1 slides in from the right
  //   .to(".screen-1", { left: "-100%", duration: 1 }) // Screen-1 slides out left
  //   .to(".card-1", { x: "100%", duration: 1 }, "-=1"); // Card-1 slides out to the right

  // // Animate the second screen and card
  // tl.to(".screen-2", { left: "0%", duration: 1 }) // Screen-2 slides into view
  //   .to(".card-2", { x: "0%", duration: 1 }, "-=1") // Card-2 slides in from the left
  //   .to(".screen-2", { left: "-100%", duration: 1 }) // Screen-2 slides out left
  //   .to(".card-2", { x: "-100%", duration: 1 }, "-=1"); // Card-2 slides out to the left

  // // Animate the third screen and card
  // tl.to(".screen-3", { left: "0%", duration: 1 }) // Screen-3 slides into view
  //   .to(".card-3", { x: "0%", duration: 1 }, "-=1") // Card-3 slides in from the right
  //   .to(".screen-3", { left: "-100%", duration: 1 }) // Screen-3 slides out left
  //   .to(".card-3", { x: "100%", duration: 1 }, "-=1"); // Card-3 slides out to the right

  // // After all screens, allow the phone container to scroll out of view
  // ScrollTrigger.create({
  //   trigger: ".next-section",
  //   start: "top bottom",
  //   end: "bottom top",
  //   scrub: true,
  //   onEnter: () => {
  //     gsap.to(".phone-container", { y: "-100%", duration: 1 });
  //   },
  // });
  //   }, []);

  return (
    <div className="">
      <div className="h-screen w-screen flex flex-col items-center justify-center relative border">
        {/* Transaction Keyframes */}
        <div className="">
          <div className="border border-white/15">
            <span className="bg-green p-2">
              <BsBag />
            </span>
            <span className="">+ $4.250 Salary</span>
          </div>
        </div>
        {/* Phone Container */}
        <div className="phone-container h-2/3 w-2/4 border-green border-4 rounded shadow p-4 flex flex-nowrap overflow-x-auto space-x-4 sticky top-40">
          <div className="screen screen-1 size-full flex items-center justify-center bg-red-400">
            red
          </div>
          <div className="screen screen-2 size-full flex items-center justify-center bg-yellow-400">
            yellow
          </div>
          <div className="screen screen-3 size-full flex items-center justify-center bg-cyan-400 inset-0">
            cyan
          </div>
        </div>
      </div>
      <div className="">
        {/* Cards */}
        <div className="h-screen w-screen border relative">
          <div className="card card-1 w-2/4 h-2/5 border rounded border-red-400 bg-white/15 backdrop-blur absolute bottom-0 z-10">
            red
          </div>
        </div>
      </div>
      {/* Next Section */}
      <div className="next-section w-full h-screen bg-blue-400 flex items-center justify-center">
        <h1>Next Section</h1>
      </div>
    </div>
  );
};

export default Page;
