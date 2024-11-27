"use client";
import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";
import { motion } from "motion/react";

const Accordion = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle accordion state
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Open clicked accordion, close others
  };

  return (
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-2xl mt-20 lg:mt-40"
    >
      <div className="mx-auto w-full mb-10  text-center space-y-4">
        <h4 className="text-green">FAQ</h4>
        <h2 className="text-4xl lg:text-6xl font-[550]">
          Your Questions <br /> Answered
        </h2>
      </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div className="bg-black" key={index}>
            <div className="border p-4 rounded border-white/15 bg-white/10 border-gray-200">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center py-4 font-[550] text-base lg:text-lg text-white/80"
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
        ))}
      </div>
    </div>
  );
};

export default Accordion;
