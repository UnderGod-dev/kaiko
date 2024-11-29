"use client";
import { PiInfoFill } from "react-icons/pi";

import TextHover from "./TextHover";
import Phone from "./Phone";
import Card from "./Card";
import Logo from "./Logo";
import SecondCard from "./SecondCard";
import PhoneAnalytics from "./PhoneAnalytics";
import PhoneContracts from "./PhoneContracts";
import Test from "./Test";
import Animation, { featureCardItems } from "./Animation";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
const Hero = () => {
  const cardsItems = [
    {
      numbers: "100%",
      title: "Happy Customers",
      content:
        "Every customer delighted with our seamless financial solutions.",
    },
    {
      numbers: "100k+",
      title: "Users",
      content:
        "Join over 100,000 satisfied users enjoying simplified financial management.",
    },
    {
      numbers: "30+",
      title: "Bank",
      content: "Access any accounts securely from 30+ leading banks worldwide.",
    },
    {
      numbers: "100%",
      title: "Secure",
      content: "Your data is 100% secure with our advanced encryption methods.",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  // Create refs for each section
  const updateRef = useRef(null);
  const headerRef = useRef(null);
  const phoneRef = useRef([]);
  const phoneCardRef = useRef([]);
  const cardRef = useRef([]);

  useGSAP(() => {
    // Header animation
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
  useGSAP(() => {
    // Header animation
    gsap.from(updateRef.current.children, {
      scrollTrigger: {
        trigger: updateRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    phoneRef.current.forEach((phone, index) => {
      gsap.from(phone, {
        scrollTrigger: {
          trigger: phone,
          start: "top bottom",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.1, // Optional: adds slight delay between phone
      });
    });
  });
  useGSAP(() => {
    phoneCardRef.current.forEach((phoneCard, index) => {
      gsap.from(phoneCard, {
        scrollTrigger: {
          trigger: phoneCard,
          start: "top bottom",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.1, // Optional: adds slight delay between phoneCard
      });
    });
  });
  useGSAP(() => {
    cardRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.1, // Optional: adds slight delay between card
      });
    });
  });
  return (
    <div className="flex flex-col lg:my-20 items-center gap-4 z-10  mx-auto">
      <div
        className="inline-flex btn-light p-1.5 gap-2 items-center w-fit"
        ref={updateRef}
      >
        <span className="bg-teal-300 p-0.5 lg:p-2 text-black rounded">
          <PiInfoFill />
        </span>
        <span className="font-bold text-sm lg:text-base">
          Version 2.2 out now
        </span>
      </div>
      <div
        className="text-center tracking-widest my-8 space-y-8"
        ref={headerRef}
      >
        <h1 className="text-5xl md:text-8xl font-semibold">
          Your Money. <br />
          <span className="text-teal-300">One App.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/65 max-w-screen-sm">
          Your all-in-one solution for organizing bank accounts, tracking
          expenses, and managing contracts seemlessly.
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <TextHover
            className="bg-teal-400 p-3 lg:px-10 rounded-lg text-black/60 font-semibold"
            content="Download"
          />
          <TextHover
            className="bg-muted border border-white/15 rounded-lg btn-light outline-none md:hidden"
            content="Features"
          />
          <TextHover
            className="bg-muted border border-white/15 p-2.5 rounded-lg btn-light outline-none hidden md:block"
            content="Explore Features"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Animation />
      </div>
      <div className="flex flex-col gap-8 md:hidden">
        {featureCardItems.map((card, i) => (
          <div
            className={`flex flex-col lg:flex-row gap-8 justify-around ${
              i === 1 ? "lg:flex-row-reverse" : ""
            } items-center`}
            key={i}
          >
            <div
              className="w-full flex justify-center"
              ref={(el) => (phoneRef.current[i] = el)}
            >
              <Image
                src={`/phone${i + 1}.svg`}
                height={350}
                width={350}
                className="object-contain object-center size-[500px] md:size-fit"
              />
            </div>
            <div
              className="w-full flex justify-center"
              ref={(el) => (phoneCardRef.current[i] = el)}
            >
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

      <div className="mt-24 mb-16">
        <h3 className="  text-white/75 text-center text-lg font-medium">
          The Preferred Choice for top instituitions
        </h3>
        <div className="flex items-center justify-center mx-8 [mask-image:linear-gradient(to_right,transparent,white_10%,black_90%,transparent)] !overflow-x-hidden">
          <Logo />
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsItems.map(({ numbers, title, content }, i) => (
          <React.Fragment key={i}>
            <div ref={(el) => (cardRef.current[i] = el)}>
              <SecondCard numbers={numbers} title={title} content={content} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Hero;
