"use client";
import React, { useRef, useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Accordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle accordion state
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Open clicked accordion, close others
  };
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);
  const bottomRef = useRef(null);
  const cardRef = useRef([]);

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
  useGSAP(() => {
    gsap.from(cardRef.current.children, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  // useGSAP(() => {
  //   cardRef.current.forEach((card, index) => {
  //     gsap.from(card, {
  //       scrollTrigger: {
  //         trigger: card,
  //         start: "top bottom",
  //       },
  //       y: 100,
  //       opacity: 0,
  //       duration: 1,
  //       delay: index * 0.1,
  //     });
  //   });
  // });
  useGSAP(() => {
    gsap.from(bottomRef.current.children, {
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <div className="space-y-10">
      <div className="max-w-2xl mt-20 lg:mt-40" ref={headerRef}>
        <div className="mx-auto w-full mb-10  text-center space-y-4">
          <h4 className="text-green">FAQ</h4>
          <h2 className="text-4xl lg:text-6xl font-[550]">
            Your Questions <br /> Answered
          </h2>
        </div>
        <div className="space-y-4" ref={cardRef}>
          {faqData.map((faq, index) => (
            <React.Fragment key={index}>
              <div
                className="bg-muted"
                // ref={(el) => (cardRef.current[index] = el)}
              >
                <div className="border p-4 py-6 rounded border-white/15 bg-mutedELight border-gray-200">
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex justify-between items-center font-[550] text-base lg:text-lg text-white/80"
                  >
                    {faq.question}
                    <span className="bg-green p-1 rounded text-black ml-8">
                      <PiPlusBold
                        className={`transition-transform transform duration-300  ${
                          activeIndex === index ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500  ease-in-out ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className=" py-2">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2" ref={bottomRef}>
        <TfiHeadphoneAlt className="bg-green p-2 text-5xl text-black rounded" />
        <div className="space-y-2">
          <p className="">More Questions?</p>
          <Link href={"/contact"} className="text-green">
            Chat with our support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
