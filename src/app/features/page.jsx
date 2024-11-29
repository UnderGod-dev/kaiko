"use client";
import { featureCardItems } from "@/components/Animation";
import Card from "@/components/Card";
import Download from "@/components/Download";
import Features from "@/sections/Features";
import GetStarted from "@/sections/GetStarted";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

const features = [
  {
    icon: "mdi_chart-arc",
    title: "Instant Financial Overview",
    text: "Get quick insights into your finances at a glance.",
  },
  {
    icon: "mdi_currency-usd",
    title: "Effortless Budget Management",
    text: "Set and track budgets for better financial control.",
  },
  {
    icon: "mdi_robot-outline",
    title: "Automated Transaction Sorting",
    text: "Transactions sorted automatically.",
  },
  {
    icon: "mdi_account-outline",
    title: "Account Management",
    text: "Access all your accounts from various banks in one place.",
  },
  {
    icon: "mdi_file-document-check-outline",
    title: "Timely Contract Notifications",
    text: "Never miss a contract deadline with automated reminders.",
  },
  {
    icon: "mdi_chart-line",
    title: "Detailed Expense Insights",
    text: "Gain in-depth insights into your spending habits and patterns.",
  },
  {
    icon: "mdi_lock-check-outline",
    title: "Secure Document Repository",
    text: "Store and access important documents securely.",
  },
  {
    icon: "mdi_widgets-outline",
    title: "Personalized Dashboard Widgets",
    text: "Tailor your dashboard to suit your preferences.",
  },
];
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Create refs for each section
  const headerRef = useRef(null);
  const featureCardsRef = useRef(null);
  const featuresRef = useRef(null);
  const overviewRef = useRef(null);
  const featureGridRef = useRef(null);
  const getStartedRef = useRef(null);

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

    // Feature cards animation
    gsap.from(featureCardsRef.current.children, {
      scrollTrigger: {
        trigger: featureCardsRef.current,
        start: "top bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    // Features animation
    gsap.from(featuresRef.current.children, {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top bottom",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

    // Overview section animation
    gsap.from(overviewRef.current.children, {
      scrollTrigger: {
        trigger: overviewRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    // Feature grid animation
    gsap.from(featureGridRef.current.children, {
      scrollTrigger: {
        trigger: featureGridRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    });

    // Get Started section animation
    gsap.from(getStartedRef.current, {
      scrollTrigger: {
        trigger: getStartedRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <div className="page-padding">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-16 tracking-widest">
        <h6 className="text-sm text-green capitalize">FEATURES</h6>
        <h1 className="text-5xl md:text-8xl font-semibold">
          All accounts. <br />
          <span className="text-teal-300">One App.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/65 max-w-screen-sm text-center mx-auto mt-4">
          Discover the range of powerful features designed to streamline your
          financial management journey.
        </p>
        <div className="mx-auto w-2/4 mt-8 md:w-fit">
          <Download />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div ref={featureCardsRef} className="flex flex-col gap-8">
        {featureCardItems.map((card, i) => (
          <div
            className={`flex flex-col lg:flex-row gap-8 justify-around ${
              i === 1 ? "lg:flex-row-reverse" : ""
            } items-center`}
            key={i}
          >
            <div className="w-full flex justify-center">
              <Image
                src={`/phone${i + 1}.svg`}
                height={350}
                width={350}
                className="object-contain object-center size-[500px]"
              />
            </div>
            <div className="w-full flex justify-center">
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

      {/* Features Component */}
      <div ref={featuresRef}>
        <Features />
      </div>

      {/* Overview Section */}
      <div className="text-center">
        <div ref={overviewRef} className="my-4 lg:my-16 space-y-4">
          <h6 className="text-sm text-green uppercase">Overview</h6>
          <h1 className="text-4xl lg:text-5xl max-w-xs md:max-w-md mx-auto font-[550]">
            Explore Our <br /> Key Features
          </h1>
        </div>

        {/* Feature Grid */}
        <div
          ref={featureGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ icon, title, text }, i) => (
            <React.Fragment key={i}>
              <div className="bg-muted">
                <div className="border border-border bg-mutedELight p-8  rounded size-full">
                  <div className="bg-green rounded p-3 w-fit mb-8">
                    <Image
                      src={`/icons/${icon}.svg`}
                      alt={icon}
                      height={18}
                      width={18}
                      className=""
                    />
                  </div>
                  <div className="text-start space-y-4">
                    <h3 className="text-2xl font-medium">{title}</h3>
                    <p className="text-[#8b8b8b] text-base">{text}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div ref={getStartedRef}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Page;
