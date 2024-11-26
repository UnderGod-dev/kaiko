import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsArrowRight, BsPersonAdd } from "react-icons/bs";
import { FaEuroSign, FaSearchDollar } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoAlert, IoCall, IoDocument, IoNotifications } from "react-icons/io5";
import { TbAdjustmentsDollar } from "react-icons/tb";
import TextHover from "./TextHover";
const planInfo = [
  {
    type: "starter",
  },
];

const MobilePlans = ({ plan }) => {
  return (
    <section className="text-center mx-4 mt-20">
      <div className="">
        <h2 className="text-4xl font-[550">
          {plan === "premium" ? "Premium" : plan === "pro" ? "Pro" : "Starter"}
        </h2>

        <button className="bg-green text-black rounded w-4/5 mt-4">
          <TextHover className="" content="Get Started" />
        </button>

        <div className=" my-4">
          <div className="bg-black space-y-4">
            <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
              Dashboard & Tracking
            </h3>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <MdOutlineDashboard className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Dashboard Access</h4>
            <p>
              {plan === "premium"
                ? "Premium"
                : plan === "pro"
                ? "Enhanced"
                : "Basic"}
            </p>
          </div>

          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <AiOutlineTransaction className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Transaction Tracking</h4>
            <p className="mx-auto bg-green w-fit p-2 rounded text-black">
              <BsArrowRight />
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <FaEuroSign className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Budget Management</h4>
            <p className="mx-auto bg-green w-fit p-2 rounded text-black">
              <BsArrowRight />
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <FaSearchDollar className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Expense Analysis</h4>
            <p className="mx-auto bg-green w-fit p-2 rounded text-black">
              <BsArrowRight />
            </p>
          </div>
          <div className="space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <CgInsights className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Dashboard Insights</h4>
            <p
              className={`mx-auto ${
                plan == undefined ? "bg-red-400" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Premium Customization"
              ) : plan === "pro" ? (
                "Advance"
              ) : (
                <BsArrowRight className="text-white" />
              )}
            </p>
          </div>
        </div>
        <div className=" mt-8 ">
          <div className="bg-black space-y-4">
            <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
              Customer Support
            </h3>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <MdOutlineDashboard className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Email Support</h4>
            <p>
              {plan === "premium"
                ? "Priority"
                : plan === "pro"
                ? "Priority"
                : "Basic"}
            </p>
          </div>
          <div className="space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <IoCall className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Phone Support</h4>
            <p
              className={`mx-auto ${
                plan !== "premium" ? "bg-red-400" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Priority"
              ) : (
                <BsArrowRight className="text-white" />
              )}
            </p>
          </div>
        </div>
        <div className=" mt-8 ">
          <div className="bg-black space-y-4">
            <h3 className="bg-white/10 rounded p-3 border border-white/15 text-xl font-[550]">
              Advanced Features
            </h3>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <TbAdjustmentsDollar className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Transaction Categorization</h4>
            <p
              className={`mx-auto ${
                plan == undefined ? "bg-red-400" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Advance"
              ) : plan === "pro" ? (
                "Advance"
              ) : (
                <BsArrowRight className="text-white mx-auto" />
              )}
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <IoCall className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Budget Tracking</h4>
            <p
              className={`mx-auto ${
                plan == undefined ? "bg-green" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Customizable Reports"
              ) : plan === "pro" ? (
                "Comprehensive"
              ) : (
                <BsArrowRight className="text-black" />
              )}
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <IoNotifications className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Contract Reminders</h4>
            <p
              className={`mx-auto ${
                plan !== "premium" ? "bg-green" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Priority Reminders"
              ) : (
                <BsArrowRight className="text-black mx-auto" />
              )}
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <IoDocument className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Document Storage</h4>
            <p
              className={`mx-auto ${
                plan == undefined ? "bg-red-400" : ""
              } w-fit p-2 rounded`}
            >
              {plan === "premium" ? (
                "Secure Vault"
              ) : plan === "pro" ? (
                "Expanded"
              ) : (
                <BsArrowRight className="text-white mx-auto" />
              )}
            </p>
          </div>
          <div className="border-b-2 border-white/10 space-y-4 py-4">
            <span className="bg-black inline-block">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 -mb-2">
                <BsPersonAdd className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Account Aggregation</h4>
            <p className={`mx-auto w-fit p-2 rounded`}>
              {plan === "premium"
                ? "VIP Access"
                : plan === "pro"
                ? "Unlimited"
                : "Limited (Up to 3 Banks)"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePlans;
