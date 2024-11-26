"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="p-8 bg-black">
      <div className="gallery flex bg-grad">
        <div className="left w-2/4 ml-auto text-white">
          <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto  text-[3rem] font-black   ">
            BRAND PRODUCT
          </div>
          <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-[3rem] font-black">
            PRODUCT DETAILS
          </div>
          <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-[3rem] font-black border">
            DESIGN AGENGY
          </div>
        </div>
        <div className="rightblock w-2/4 h-screen flex flex-col justify-center">
          <div className="w-[40vw] h-[40vh] relative">
            <div className="photo absolute size-full">
              <img src="/img1.jpeg" alt="img-1" className="size-full" />
            </div>
            <div className="photo absolute size-full">
              <img src="/img2.jpeg" alt="img-2" className="size-full" />
            </div>
            <div className="photo absolute size-full">
              <img src="/img3.jpeg" alt="img-3" className="size-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
