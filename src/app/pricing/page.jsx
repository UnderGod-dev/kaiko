"use client";
import AIMobilePlans from "@/components/AIMobilePlans";
import DesktopPlans from "@/components/DesktopPlans";
import MobilePlans from "@/components/MobilePlans";
import TextHover from "@/components/TextHover";
import Features from "@/sections/Features";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

const Pricing = () => {
  const [plan, setPlan] = useState("yearly");
  // const [plan, setPlan] = useState("Monthly")
  const freeFeatures = [
    "Basic Dashboard Access",
    "Transaction Tracking",
    "Budget Management",
    "Expense Analysis",
    "Email Support",
  ];
  const proFeatures = [
    "Enhanced Dashboard",

    "Transaction Categories",

    "Budget Tracking",

    "Detailed Expense Analysis",

    "Priority Email Support",
  ];
  const PremiumFeatures = [
    "Premium Dashboard",

    "Advanced Transaction",

    "Budget Reports",

    "Deep Expense Analytics",

    "Priority Phone Support",
  ];
  return (
    <main className="mt-20 px-4 space-y-4 w-screen">
      {/* ===========Top============= */}
      <div className="px-4 text-center max-w-lg space-y-4 flex flex-col justify-center items-center w-full mx-auto">
        <h3 className="text-green uppercase font-[550] ">pricing</h3>
        <h2 className="text-5xl font-[550] lg:text-6xl">Pricing Plans</h2>
        <p className="text-white/75 text-lg lg:text-xl">
          Explore our flexible pricing plans designed to meet your needs,
          offering a range of features to streamline your finances.
        </p>
        <div className="bg-black">
          <div className="border border-white/15 p-1.5 rounded tracking-wider w-fit bg-white/10 text-sm lg:text-base relative">
            <div className="absolute inset-0 pointer-events-none top-1/2 -translate-y-1/2 bg-yellow-500g w-[85%] left-1/2 -translate-x-1/2">
              {/* Animated Background */}
              <div
                className="absolute h-full w-1/2 bg-white/20 border border-white/15 rounded transition-all duration-500 ease-out"
                style={{
                  transform:
                    plan === "yearly" ? "translateX(0%)" : "translateX(100%)",
                }}
              />
            </div>

            <button
              onClick={() => setPlan("yearly")}
              className={`relative z-10 mx-4 pl-3 py-2 bg-yellow-30h0 rounded uppercase transition-colors duration-300 ${"text-white/80"}`}
            >
              Yearly
            </button>
            <button
              onClick={() => setPlan("monthly")}
              className={`relative z-10 px-4 py-2 rounded uppercase transition-colors duration-300 ${"text-white/80"}`}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
      {/* ===========packages cards============= */}
      <div className="grid md:grid-cols-3 gap-4 mx-4">
        <div className="bg-black">
          <div className="bg-white/5">
            <div className="border border-white/15 rounded bg-white/5 p-8 md:p-6">
              <h3 className="text-green uppercase h-7">starter</h3>
              <h2 className="text-4xl font-[500] py-6">Free</h2>
              <span className="inline-block text-white/75 pb-4 md:text-sm">
                Features included:
              </span>
              <ul className="space-y-1">
                {freeFeatures.map((feature, index) => (
                  <li
                    className="flex items-center gap-4 border rounded text-lg border-white/15 p-2 bg-white/10"
                    key={index}
                  >
                    <span className="border rounded text-2xl border-white/15">
                      <BsCheck />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="border rounded w-full mt-8 text-base bg-white/10 border-white/15">
                <TextHover className="" content="Get Started" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="bg-white/5">
            <div className="border border-white/15 rounded bg-white/5 p-8 md:p-6">
              <div className="flex justify-between h-8">
                <h3 className="text-green uppercase ">Pro</h3>
                <div className="text-sm space-x-2">
                  {plan === "yearly" && (
                    <span className="bg-green text-black p-1 rounded">
                      -20%
                    </span>
                  )}
                  <span className="bg-red-500 p-1 rounded">Popular</span>
                </div>
              </div>

              <h2 className="text-3xl font-[500] py-6 flex items-center gap-2">
                {plan === "monthly" ? "15" : "12"}{" "}
                <span className="text-white/75 text-base">/month</span>
              </h2>
              <span className="inline-block text-white/75 pb-4 md:text-sm">
                Features included:
              </span>
              <ul className="space-y-1">
                {proFeatures.map((feature, index) => (
                  <div className="bg-black">
                    <li
                      className="flex items-center gap-4 border rounded text-lg border-white/15 p-2 bg-white/15"
                      key={index}
                    >
                      <span className="border rounded text-2xl border-white/15">
                        <BsCheck />
                      </span>{" "}
                      {feature}
                    </li>
                  </div>
                ))}
              </ul>
              <button className="border rounded w-full mt-8 text-base bg-green text-black border-green">
                <TextHover className="shadow-none" content="Get Started" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="bg-white/5">
            <div className="border border-white/15 rounded bg-white/5 p-8 md:p-6">
              <div className="flex justify-between h-8">
                <h3 className="text-green uppercase">Premium</h3>

                {plan === "yearly" && (
                  <span className="bg-green text-black p-1 rounded text-sm">
                    -20%
                  </span>
                )}
              </div>

              <h2 className="text-3xl font-[500] py-6 flex items-center gap-2">
                {plan === "monthly" ? "30" : "28"}{" "}
                <span className="text-white/75 text-base">/month</span>
              </h2>
              <span className="inline-block text-white/75 pb-4 md:text-sm">
                Features included:
              </span>
              <ul className="space-y-1">
                {PremiumFeatures.map((feature, index) => (
                  <li
                    className="flex items-center gap-4 border rounded text-lg border-white/15 p-2 bg-white/10"
                    key={index}
                  >
                    <span className="border rounded text-2xl border-white/15">
                      <BsCheck />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="border rounded w-full mt-8 text-base border-white/15 bg-white/10">
                <TextHover className="" content="Get Started" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ===========compare plans============= */}
      <div className="md:hidden">
        <MobilePlans />
        <MobilePlans plan="pro" />
        <MobilePlans plan="premium" />
      </div>
      <div className="sm:hidden md:block">
        <DesktopPlans />
      </div>
    </main>
  );
};

export default Pricing;
