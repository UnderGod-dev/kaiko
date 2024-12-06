"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { BsCarFront, BsHouse, BsX } from "react-icons/bs";
import { FaDumbbell, FaHospital } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";

export const SectionHeader = ({ h6, h1, p }) => {
  return (
    <div className="flex items-center flex-col tracking-wider gap-4 text-center mb-10 lg:mb-20">
      <h6 className="uppercase text-green text-sm md:text-lg font-normal">
        {h6}
      </h6>
      <h1
        className="text-3xl md:text-4xl lg:text-6xl font-[550]"
        dangerouslySetInnerHTML={{ __html: h1 }}
      />
      <p className="text-white/75 max-w-xs md:max-w-sm lg:max-w-xl lg:text-xl">
        {p}
      </p>
    </div>
  );
};
const IconComponent = ({ iconName }) => {
  const icons = {
    FaHospital,
    FaDumbbell,
    BsX,
    BsCarFront,
    BsHouse,
    PiTelevision,
  };

  const Icon = icons[iconName];
  return Icon ? <Icon /> : null;
};
const cardsDetails = [
  {
    title: "Dashboard",
    header: "Financial Control",
    text: "Take charge of your finances with a comprehensive dashboard, providing instant insights",
    bottom: [{ type: "img", img: "phone1.webp" }],
  },
  {
    title: "Analytics",
    header: "Financial Patterns",
    text: "Unravel insights into your financial behavior with detailed analytics, smarter decisions.",
    bottom: [{ type: "img", img: "phone1.webp" }],
  },
  {
    title: "Banks",
    header: "Bank Account Integration",
    text: "Link 30+ banks seamlessly for comprehensive financial management.",
    bottom: [{ type: "cards", img: ["", "", "", "", "", "", "", ""] }],
  },
  {
    title: "Contracts",
    header: "Contract Handling",
    text: "Centralize and manage contracts with ease for better organization.",
    bottom: [
      {
        type: "lists",
        lists: [
          {
            icon: "FaHospital",
            title: "Health Insurance",
            small: "Insurance",
            amount: "-$ 130.99",
          },
          {
            icon: "BsCarFront",
            title: "Car Leasing",
            small: "Transport",
            amount: "-$ 280.99",
          },
          {
            icon: "FaDumbbell",
            title: "Gym Membership",
            small: "Sport",
            amount: "-$ 85.99",
          },
        ],
      },
    ],
  },
  {
    title: "Overview",
    header: "Instant Transaction",
    text: "Get a quick, comprehensive overview of all your transactions.",
    bottom: [
      {
        type: "lists",
        lists: [
          { icon: "BsX", title: "X", small: "Media", amount: "-$ 8.99" },
          {
            icon: "PiTelevision",
            title: "Streaming",
            small: "Media",
            amount: "-$ 80.99",
          },
          {
            icon: "BsHouse",
            title: "House Rent",
            small: "Utilities",
            amount: "-$ 85.99",
          },
        ],
      },
    ],
  },
];
const CardBottom = ({ content }) => {
  switch (content.type) {
    case "img":
      return (
        <div className="size-full flex justify-center mt-4">
          <Image
            src={`/${content.img}`}
            height={350}
            width={350}
            alt="phone"
            className="object-contain size-full"
          />
        </div>
      );

    case "cards":
      return (
        <div className="grid gap-2 grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {content.img.map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center card-border bg-green/60 hover:bg-transparent border-2 shadow-inner shadow-white/75 border-white/75 size-full"
            >
              <Image
                src={`/logos/${index + 1}.svg`}
                height={80}
                width={80}
                className="object-contain hover:scale-125 duration-300 transition-all size-full"
                alt={`Bank logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      );

    case "lists":
      return (
        <div className="flex flex-col gap-4">
          {content.lists.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center border-2 border-border p-2 rounded ${
                index === 2 ? "bg-green text-black" : "bg-mutedELight"
              }`}
            >
              <div className="flex justify-between items-center gap-2">
                <div className="text-xl bg-white/15 border border-border p-1 rounded">
                  <IconComponent iconName={item.icon} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-md">{item.title}</h4>
                  <small
                    className={`${
                      index === 2 ? "text-black" : "text-white/70"
                    } text-xs`}
                  >
                    {item.small}
                  </small>
                </div>
              </div>
              <span className="font-semibold">{item.amount}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};
const Card = ({ data, index, cardRef }) => {
  const isFullWidth = index <= 1;

  return (
    <div className={`bg-muted ${isFullWidth ? "w-full" : ""}`} ref={cardRef}>
      <div
        className={`card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col ${
          isFullWidth ? "items-center justify-center pb-0 h-full" : "h-full"
        }`}
      >
        <h3 className="uppercase text-green font-semibold">{data.title}</h3>
        <h4
          className={`${
            isFullWidth ? "text-3xl lg:text-4xl" : "text-3xl"
          } font-[550]`}
        >
          {data.header}
        </h4>
        <p className="text-white/75">{data.text}</p>
        {data.bottom.map((bottomContent, index) => (
          <CardBottom key={index} content={bottomContent} />
        ))}
      </div>
    </div>
  );
};
const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const headerRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

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

    // Card animations
    cardRefs.current.forEach((ref) => {
      gsap.from(ref.children, {
        scrollTrigger: {
          trigger: ref,
          start: "top bottom",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    });
  });

  return (
    <section className="my-40 space-y-8">
      <div ref={headerRef}>
        <SectionHeader
          h1="Powerful Tools, <br /> Seamless Integration"
          h6="features"
          p="Experience efficiency and control with our suite of intuitive features designed to streamline your financial management."
        />
      </div>

      <div className="space-y-4 md:space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          {cardsDetails.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              data={card}
              index={index}
              cardRef={(el) => addToRefs(el)}
            />
          ))}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsDetails.slice(2).map((card, index) => (
            <Card
              key={index + 2}
              data={card}
              index={index + 2}
              cardRef={(el) => addToRefs(el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
