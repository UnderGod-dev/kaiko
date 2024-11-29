import { SectionHeader } from "@/sections/Features";
import GetStarted from "@/sections/GetStarted";
import Image from "next/image";
import React from "react";

const Page = () => {
  const cardData = [
    {
      small: ["v.2.2", "Nov 27, 2024"],
      header: "Version 2.2 Update",
      src: "changelog",
      text: "Unlock powerful new capabilities and improvements with our latest update. From enhanced security measures to streamlined features, we're committed to providing you with the best financial management experience.",
      lists: [
        "Implemented two-factor authentication",
        "Added multi-language support",
        "Fixed issue with budget tracking accuracy",
        "Optimized user interface for better usability",
      ],
    },
    {
      small: ["v.2.1.1", "Sept 07, 2024"],
      header: "Patch 2.1 Release",
      src: "changelog1",
      text: "Get ready for a smoother experience with our latest patch release. We've addressed several issues and added new features to make your financial management journey even better.",
      lists: [
        "Added support for additional bank integrations",
        "Improved stability on mobile devices",
        "Resolved login error for some users",
        "Fixed bug causing occasional crashes",
      ],
    },
    {
      small: ["v.2.1", "April 13, 2024"],
      header: "Version 2.0 Update",
      src: "changelog",
      text: "Experience enhanced performance and new features with our latest update. We've listened to your feedback and made significant improvements to elevate your experience",
      lists: [
        "Improved dashboard loading times",
        "Added customizable budget categories",
        "Enhanced transaction categorization accuracy",
        "Fixed issue with contract reminders",
      ],
    },
  ];
  return (
    <div className="page-padding">
      <SectionHeader
        h6={"changelog"}
        h1={"Latest Updates"}
        p={
          "Stay updated with our latest product changes and enhancements. See what's new and improved!"
        }
      />
      <div className="my-20 lg:my-40 max-w-2xl mx-auto md:px-10">
        {cardData.map(({ small, header, src, text, lists }, i) => (
          <React.Fragment key={i}>
            <div className="bg-muted border border-border rounded mb-6">
              <div className="bg-mutedELight p-10 flex flex-col justify-center">
                <div className="w-fit mb-4 mx-auto">
                  {small.map((sml, i) => (
                    <React.Fragment key={i}>
                      <span
                        className={`${
                          i === 0
                            ? "bg-green text-black border-transparent"
                            : "bg-mutedLight border-border"
                        } border p-1 w-fit mr-2 rounded text-sm`}
                      >
                        {sml}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <h4 className="text-3xl font-[550] text-center">{header}</h4>
                <div className="rounded my-4 w-full">
                  <Image
                    src={`/${src}.svg`}
                    height={400}
                    width={400}
                    className="object-contain object-center rounded size-full"
                  />
                </div>
                <p className="">{text}</p>
                <div className="mt-8">
                  <p className="mb-4 font-[550] text-2xl">Fixes</p>
                  <ul className="space-y-2 w-full">
                    {lists.map((list, i) => (
                      <React.Fragment key={i}>
                        <li className="w-full rounded border border-border p-3 md:p-2 flex flex-col md:flex-row gap-2 md:gap-4 bg-muted">
                          <span
                            className={`${
                              i <= 1 ? "bg-green text-black" : "bg-red"
                            } w-fit rounded p-1 text-sm`}
                          >
                            {i <= 1 ? "New" : "Fixed"}
                          </span>{" "}
                          <span className="text-white/60">{list}</span>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
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
