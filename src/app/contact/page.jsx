import TextHover from "@/components/TextHover";
import { SectionHeader } from "@/sections/Features";
import GetStarted from "@/sections/GetStarted";
import Image from "next/image";
import React from "react";

const Page = () => {
  const cards = [
    {
      icon: "mdi_file-document-check-outline",
      header: "Documentation",
      text: "Access documentation now for detailed guidance.",
      btn: "View Docs",
    },
    {
      icon: "mdi_chat-question-outline",
      header: "Submit a Ticket",
      text: "Submit a support ticket for personalized assistance.",
      btn: "submit ticket",
    },
    {
      icon: "mdi_face-agent",
      header: "Chat with Support",
      text: "Chat instantly with our support team for real-time assistance.",
      btn: "chat now",
    },
  ];
  return (
    <div className="px-10 lg:px-16 pt-20">
      <SectionHeader
        h6={"contact"}
        h1={"Let's talk"}
        p={
          "Connect with us easily. Reach out for inquiries, support, or collaboration opportunities. We're here to help."
        }
      />

      <div className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name=""
          id=""
          className="rounded p-3 bg-muted placeholder-mutedLight w-full outline-none"
          placeholder="Name"
        />
        <input
          type="email"
          name=""
          id=""
          className="rounded p-3 bg-muted placeholder-mutedLight w-full outline-none"
          placeholder="Email"
        />
        <textarea
          name=""
          id=""
          rows="5"
          placeholder="Message"
          className="rounded p-3 bg-muted placeholder-mutedLight w-full outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full font-[550] p-3 rounded bg-green text-black"
        >
          Sign Up
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-28">
        {cards.map((item, i) => (
          <React.Fragment key={i}>
            <div className="bg-muted">
              <div className="size-full bg-mutedELight border border-border p-8">
                <div className="bg-green p-3 rounded mb-8 w-fit">
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    width={18}
                    height={18}
                    alt="icon"
                  />
                </div>
                <h3 className="capitalize font-[550] text-2xl mb-2">
                  {item.header}
                </h3>
                <p className="mb-4 text-[#8b8b8b]">{item.text}</p>
                {/* <button className="text-black rounded bg-green w-full p-3 capitalize">
                  {item.btn}
                </button> */}
                <TextHover
                  content={item.btn}
                  className={`text-black rounded ${
                    item.btn == "chat now"
                      ? "bg-green text-black border-transparent"
                      : "bg-mutedELight text-white border-border"
                  }  w-full p-3 capitalize border`}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <GetStarted />
    </div>
  );
};

export default Page;
