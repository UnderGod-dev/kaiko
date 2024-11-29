import Accordion from "@/components/Accordion";
import { SectionHeader } from "@/sections/Features";
import GetStarted from "@/sections/GetStarted";
import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Page = () => {
  const faqData = [
    {
      question: "How secure is Kaiko?",
      answer:
        "Kaiko employs bank-level encryption and stringent security measures to ensure your data remains safe and confidential at all times.",
    },
    {
      question: "Can I link multiple bank accounts to Kaiko?",
      answer:
        "Yes, Kaiko allows you to link accounts from over 30 banks, providing you with a comprehensive view of your financial landscape in one place.",
    },
    {
      question: "Does Kaiko offer budgeting features?",
      answer:
        "Kaiko simplifies contract management by centralizing all your contracts in one platform, allowing you to track deadlines, receive reminders, and stay organized effortlessly.",
    },
    {
      question: "Is Kaiko compliant with data protection?",
      answer:
        "Absolutely! Kaiko is accessible on various devices, including desktops, laptops, smartphones, and tablets, allowing you to manage your finances wherever you are.",
    },
    {
      question: "Is Kaiko compliant with data protection?",
      answer:
        "Absolutely! Kaiko is accessible on various devices, including desktops, laptops, smartphones, and tablets, allowing you to manage your finances wherever you are.",
    },
    {
      question: "Does Kaiko offer customer support?",
      answer:
        "Yes, Kaiko provides dedicated customer support to assist you with any inquiries or issues you may encounter while using the platform.",
    },
  ];
  const cardItems = [
    { icon: "mdi_information-outline", header: "Getting Started" },
    { icon: "mdi_chart-arc", header: "Dashboard" },
    { icon: "mdi_file-document-check-outline", header: "Contracts" },
    { icon: "mdi_chart-line", header: "Analytics" },
    { icon: "mdi_currency-usd", header: "Budgeting" },
    { icon: "mdi_account-outline", header: "Account" },
    { icon: "mdi_bank-transfer", header: "Transactions" },
    { icon: "mdi_chat-question-outline", header: "Troubleshoot" },
  ];
  return (
    <div className="page-padding">
      <SectionHeader
        h6={"DOCS"}
        h1={"Knowledge Hub"}
        p={
          "Experience efficiency and control with our suite of intuitive features designed to streamline your financial management."
        }
      />
      <div className="flex max-w-md gap-4 mx-auto">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className="bg-muted border flex-1 border-border p-4 outline-none placeholder:text-mutedLight rounded"
        />
        <button className="text-black bg-green p-4 rounded w-fit">
          <span className="sm:hidden">
            <BsSearch size={22} />
          </span>
          <span className="hidden sm:block">Search</span>
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {cardItems.map(({ icon, header }, i) => (
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
                  <h3 className="text-2xl font-medium">{header}</h3>
                  <p className="text-[#8b8b8b] text-base">{"10 Articles"}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mb-40">
        <Accordion faqData={faqData} />
      </div>
      <GetStarted />
    </div>
  );
};

export default Page;
