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
const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);
  const dashboardRef = useRef(null);
  const analyticsRef = useRef(null);
  const bankRef = useRef(null);
  const contractRef = useRef(null);
  const overviewRef = useRef(null);

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
    gsap.from(dashboardRef.current.children, {
      scrollTrigger: {
        trigger: dashboardRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    gsap.from(analyticsRef.current.children, {
      scrollTrigger: {
        trigger: analyticsRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    gsap.from(bankRef.current.children, {
      scrollTrigger: {
        trigger: bankRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      markers: true,
    });
  });
  useGSAP(() => {
    gsap.from(contractRef.current.children, {
      scrollTrigger: {
        trigger: contractRef.current,
        start: "top bottom",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
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
  });
  return (
    <section className="my-40 space-y-8">
      <div className="" ref={headerRef}>
        <SectionHeader
          h1="Powerful Tools, <br /> Seamless Integration"
          h6="features"
          p="Experience efficiency and control with our suite of intuitive features
          designed to streamline your financial management."
        />
      </div>

      <div className="space-y-4 md:space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 ">
          <div className="bg-muted w-full" ref={dashboardRef}>
            <div className="card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col items-center justify-center pb-0 h-full">
              <h3 className="uppercase text-green font-semibold">Dashboard</h3>
              <p className="text-3xl lg:text-4xl font-[550]">
                Financial Control
              </p>
              <p className="text-white/75">
                Take charge of your finances with a comprehensive dashboard,
                providing instant insights
              </p>
              {/* Place the image inside the flex container without absolute positioning */}
              <div className="size-full flex justify-center mt-4">
                {" "}
                {/* Add margin to give space between text and image */}
                <Image
                  src={"/phone1.webp"}
                  height={350}
                  width={350}
                  alt="phone"
                  className="object-contain size-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-muted w-full rounded" ref={analyticsRef}>
            <div className="card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col items-center justify-center pb-0 size-full">
              <h3 className="uppercase text-green font-semibold">Analytics</h3>
              <p className="text-3xl lg:text-4xl font-[550]">
                Financial Patterns
              </p>
              <p className="text-white/75">
                Unravel insights into your financial behavior with detailed
                analytics, smarter decisions.
              </p>
              {/* Place the image inside the flex container without absolute positioning */}
              <div className="size-full flex justify-center mt-4">
                {" "}
                {/* Add margin to give space between text and image */}
                <Image
                  src={"/phone1.webp"}
                  height={400}
                  width={350}
                  alt="phone"
                  className="object-contain size-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Bank Section */}
          <div className="bg-muted" ref={bankRef}>
            <div className="card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col justify-center items-center h-full">
              <h3 className="text-green font-semibold uppercase">Banks</h3>
              <h4 className="text-3xl lg:text-4xl font-[550]">
                Bank Account Integration
              </h4>
              <p className="text-white/75">
                Link 30+ banks seamlessly for comprehensive financial
                management.
              </p>
              <div className="grid gap-2 grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                  <div
                    className={`flex justify-center items-center card-border bg-green/60 hover:bg-transparent border-2 shadow-inner shadow-white/75 border-white/75 size-full ${
                      id === "7" - 1 ? "py-0b" : ""
                    }`}
                    key={id}
                  >
                    <Image
                      src={`/logos/${id}.svg`}
                      height={80}
                      width={80}
                      className="object-contain hover:scale-125 duration-300 transition-all size-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contracts Section */}
          <div className="bg-muted" ref={contractRef}>
            <div className="card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col md:basis-1/2 lg:basis-[30%] h-full">
              <h3 className="text-green font-semibold uppercase text-center">
                Contracts
              </h3>
              <h4 className="text-3xl lg:text-4xl font-[550]">
                Contract Handling
              </h4>
              <p className="text-white/75">
                Centralize and manage contracts with ease for better
                organization.
              </p>
              <div className="flex flex-col gap-4">
                {/* Health Insurance */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-mutedELight">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <FaHospital />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">
                        Health Insurance
                      </h4>
                      <small className="text-white/70 text-xs">Insurance</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 130.99</span>
                </div>

                {/* Car Leasing */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-mutedELight">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <BsCarFront />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Car Leasing</h4>
                      <small className="text-white/70 text-xs">Transport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 280.99</span>
                </div>

                {/* Gym Membership */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-green text-black">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <FaDumbbell />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Gym Membership</h4>
                      <small className="text-black text-xs">Sport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 85.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-muted" ref={overviewRef}>
            <div className="card-border border-2 border-border bg-mutedELight p-8 px-4 lg:px-8 space-y-4 flex flex-col md:basis-1/2 lg:basis-[30%] h-full">
              <h3 className="text-green font-semibold uppercase">Overview</h3>
              <h4 className="text-3xl font-semibold capitalize">
                Instant Transaction
              </h4>
              <p className="text-white/75">
                Get a quick, comprehensive overview of all your transactions.
              </p>
              <div className="flex flex-col gap-4">
                {/* Twitter */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-mutedELight">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <BsX />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Twitter</h4>
                      <small className="text-white/70 text-xs">Insurance</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 130.99</span>
                </div>

                {/* Streaming */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-mutedELight">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <PiTelevision />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Streaming</h4>
                      <small className="text-white/70 text-xs">Transport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 280.99</span>
                </div>

                {/* House Rent */}
                <div className="flex justify-between items-center border-2 border-border p-2 rounded bg-red">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-border p-1 rounded">
                      <BsHouse />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">House Rent</h4>
                      <small className="text-white/70 text-xs">Rent</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 85.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
