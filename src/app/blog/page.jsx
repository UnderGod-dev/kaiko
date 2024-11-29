"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionHeader } from "@/sections/Features";
import { blogCards } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate header
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Animate cards with stagger
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }); // No dependencies needed with useGSA
  function convertToSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  return (
    <div className="page-padding">
      <div ref={headerRef}>
        <SectionHeader
          h6={"Blog"}
          h1={"Latest News"}
          p={
            "Explore our insightful blog for tips, trends, and news related to finance, technology, and productivity."
          }
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-0 md:mt-10">
        {blogCards.map(({ h6, h3 }, i) => (
          <React.Fragment key={i}>
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-muted rounded border-border group"
            >
              <div className="bg-mutedELight group-hover:bg-white/5 rounded p-4 size-full 2xl:p-8 space-y-2 transition-all ease-in-out duration-300">
                <Link href={`/blog/${convertToSlug(h3)}`}>
                  <div className="rounded relative">
                    <Image
                      src={`/blog${i + 1}.svg`}
                      height={300}
                      width={300}
                      alt="blog img"
                      className="size-full rounded group-hover:scale-105 transition-all ease-in-out duration-300"
                    />
                    <span className="border border-border text-sm backdrop-blur-md absolute bottom-4 right-4 rounded p-1 w-fit">
                      Support
                    </span>
                  </div>
                </Link>

                <h6 className="text-green text-sm md:text-base">{h6}</h6>
                <h3 className="text-xl md:text-2xl font-[550]">{h3}</h3>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
