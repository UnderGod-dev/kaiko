import { PiInfoFill } from "react-icons/pi";

import TextHover from "./TextHover";
import Phone from "./Phone";
import Card from "./Card";
import Logo from "./Logo";
import SecondCard from "./SecondCard";
import PhoneAnalytics from "./PhoneAnalytics";
import PhoneContracts from "./PhoneContracts";
import Test from "./Test";
const Hero = () => {
  return (
    <div className="flex flex-col mt-10 lg:my-20 items-center gap-4 z-10  mx-auto">
      <div className="inline-flex btn-light p-1.5 gap-2 items-center w-fit">
        <span className="bg-teal-300 p-0.5 lg:p-2 text-black rounded">
          <PiInfoFill />
        </span>
        <span className="font-bold text-sm lg:text-base">
          Version 2.2 out now
        </span>
      </div>
      <div className="text-center tracking-widest my-8 space-y-8">
        <h1 className="text-5xl md:text-8xl font-semibold">
          Your Money. <br />
          <span className="text-teal-300">One App.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/70 max-w-screen-sm">
          Your all-in-one solution for organizing bank accounts, tracking
          expenses, and managing contracts seemlessly.
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <TextHover
            className="bg-teal-400 p-2 lg:p-3 lg:px-10 rounded-lg text-black/60 font-semibold"
            content="Download"
          />
          <TextHover
            className="btn-light bg-black rounded-lg text-white p-2 outline-none md:hidden"
            content="Features"
          />
          <TextHover
            className="bg-black border border-white/15 rounded-lg btn-light outline-none hidden md:block"
            content="Explore Features"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Test />
      </div>
      <div className="relative md:hidden">
        <div className="flex flex-col items-center">
          <div className="">
            <Phone />
          </div>

          <Card
            title="dashboard"
            heading="Financial 
Overview"
            paragraph="Access all your financial data at a glance, streamlining your management process and enhancing your financial decision-making."
            l1="Real-time balance updates"
            l2="Transaction categorization"
            l3="Budget tracking"
          />
        </div>
        <div className="flex flex-col justify-center">
          <PhoneAnalytics />
          <Card
            title="Analytics"
            heading="Financial
Insights 
"
            paragraph="Gain comprehensive insights into your spending patterns and financial behaviors with detailed analytics, empowering informed financial choices."
            l1="Expense breakdown charts

"
            l2="Income trends analysis

"
            l3="Savings growth tracking

"
          />
        </div>
        <div className="flex flex-col justify-center">
          <PhoneContracts />
          <Card
            title="Contracts

"
            heading="Contract 
Management
 
"
            paragraph="Keep track of all your contracts in one place, ensuring clarity and compliance with automated reminders and easy access."
            l1="Contract expiration alerts



"
            l2="Document storage



"
            l3="Renewal notifications



"
          />
        </div>
      </div>

      <div className="mt-24 mb-16">
        <h3 className="  text-white/75 text-center text-lg font-medium">
          The Preferred Choice for top instituitions
        </h3>
        <div className="flex items-center justify-center mx-8 [mask-image:linear-gradient(to_right,transparent,white_10%,black_90%,transparent)]">
          <Logo />
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SecondCard
          numbers="30+"
          title="Bank"
          content="Access any accounts securely from 30+ leading banks worldwide."
        />
        <SecondCard
          numbers="100%"
          title="Happy Customers"
          content="Every customer delighted with our seamless financial solutions."
        />
        <SecondCard
          numbers="100%"
          title="Secure"
          content="Your data is 100% secure with our advanced encryption methods.
"
        />
        <SecondCard
          numbers="100k+"
          title="Users"
          content="Join over 100,000 satisfied users enjoying simplified financial management."
        />
      </div>
    </div>
  );
};

export default Hero;
