import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsArrowRight, BsPersonAdd } from "react-icons/bs";
import { FaEuroSign, FaSearchDollar } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { IoCall, IoDocument, IoNotifications } from "react-icons/io5";
import { TbAdjustmentsDollar } from "react-icons/tb";
import React from "react";

const FEATURES = [
  { icon: MdOutlineDashboard, title: "Dashboard Access" },
  { icon: AiOutlineTransaction, title: "Transaction Tracking" },
  { icon: FaEuroSign, title: "Budget Management" },
  { icon: FaSearchDollar, title: "Expense Analysis" },
  { icon: CgInsights, title: "Dashboard Insights" },
];

const SUPPORT_FEATURES = [
  { icon: MdOutlineDashboard, title: "Email Support" },
  { icon: IoCall, title: "Phone Support" },
];

const ADVANCED_FEATURES = [
  { icon: TbAdjustmentsDollar, title: "Transaction Categorization" },
  { icon: IoCall, title: "Budget Tracking" },
  { icon: IoNotifications, title: "Contract Reminders" },
  { icon: IoDocument, title: "Document Storage" },
  { icon: BsPersonAdd, title: "Account Aggregation" },
];

const getPlanDetails = (plan, feature) => {
  switch (feature.title) {
    case "Dashboard Access":
      return plan === "premium"
        ? "Premium"
        : plan === "pro"
        ? "Enhanced"
        : "Basic";
    case "Transaction Tracking":
    case "Budget Management":
    case "Expense Analysis":
      return <BsArrowRight />;
    case "Dashboard Insights":
      return plan === "premium" ? (
        "Premium Customization"
      ) : plan === "pro" ? (
        "Advanced"
      ) : (
        <BsArrowRight />
      );
    // Add similar cases for support and advanced features
    default:
      return <BsArrowRight />;
  }
};

const AIMobilePlans = ({ plan = "starter" }) => {
  return (
    <section className="text-center mx-4 mt-20">
      <div className="">
        <h2 className="text-4xl font-[550]">
          {plan === "premium" ? "Premium" : plan === "pro" ? "Pro" : "Starter"}
        </h2>
        <button className="bg-green text-black rounded w-4/5 mt-4 p-3">
          Get Started
        </button>

        {/* Plan Features */}
        <div className="my-4">
          <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
            Dashboard & Tracking
          </h3>
          {FEATURES.map((feature) => (
            <React.Fragment key={feature.title}>
              <div className="border-b-2 border-white/10 space-y-4 py-4">
                <span className="bg-muted inline-block">
                  <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                    <feature.icon className="text-xl" />
                  </span>
                </span>
                <h4 className="text-lg">{feature.title}</h4>
                <p className="mx-auto bg-green w-fit p-2 rounded text-black">
                  {getPlanDetails(plan, feature)}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Customer Support */}
        <div className="mt-8">
          <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
            Customer Support
          </h3>
          {SUPPORT_FEATURES.map((feature) => (
            <React.Fragment key={feature.title}>
              <div className="border-b-2 border-white/10 space-y-4 py-4">
                <span className="bg-muted inline-block">
                  <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                    <feature.icon className="text-xl" />
                  </span>
                </span>
                <h4 className="text-lg">{feature.title}</h4>
                <p className="mx-auto bg-green w-fit p-2 rounded text-black">
                  {plan === "premium"
                    ? "Priority"
                    : plan === "pro"
                    ? "Priority"
                    : "Basic"}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Advanced Features */}
        <div className="mt-8">
          <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
            Advanced Features
          </h3>
          {ADVANCED_FEATURES.map((feature) => (
            <React.Fragment key={feature.title}>
              <div className="border-b-2 border-white/10 space-y-4 py-4">
                <span className="bg-muted inline-block">
                  <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                    <feature.icon className="text-xl" />
                  </span>
                </span>
                <h4 className="text-lg">{feature.title}</h4>
                <p className="mx-auto bg-green w-fit p-2 rounded text-black">
                  {plan === "premium" ? (
                    "Advance"
                  ) : plan === "pro" ? (
                    "Comprehensive"
                  ) : (
                    <BsArrowRight className="text-white" />
                  )}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIMobilePlans;
