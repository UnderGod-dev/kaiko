import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import { GiWaves } from "react-icons/gi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Download from "./Download";
import React, { Fragment } from "react";

const Footer = () => {
  const footerLinks = [
    {
      header: "Pages",
      links: ["Home", "Features", "Support", "Contact"],
    },
    {
      header: "Company",
      links: ["About Us", "Careers", "Press", "Blog"],
    },
    {
      header: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Security",
      ],
    },
  ];
  return (
    <div className="mx-4 pb-10 mt-16 2xl:mx-0">
      <div className="relative max-w-[300px] md:max-w-screen-sm lg:max-w-screen-md  mx-auto ">
        <Image
          src={"/footerImg.svg"}
          alt="dash"
          height={300}
          width={300}
          className="object-center size-full rounded-br-3xl md:rounded-b-none"
        />
      </div>
      <div className="bg-muted mx-2 lg:mx-20 2xl:mx-0 rounded-2xl">
        <footer className="rounded-3xl p-4 flex flex-col border-2 border-white/15 text-center gap-4 items-center bg-mutedELight space-y-8">
          <div className="flex flex-col items-center md:flex-row  md:justify-between gap-4 w-full">
            <div className="space-y-2">
              <div className="flex items-center gap-4 justify-center">
                <div className="size-12">
                  <Image
                    src={"/logo.svg"}
                    height={40}
                    width={40}
                    alt="logo"
                    className="size-full"
                  />
                </div>
                <Link href={"/"} className="font-bold text-xl">
                  KAIKO
                </Link>
              </div>
              <p className="text-sm">
                Developed by{" "}
                <Link
                  href={"https://adekunle-omega.vercel.app/"}
                  className="text-green"
                >
                  Adekunle
                </Link>
              </p>
              <p className="text-sm">
                Designed by{" "}
                <Link
                  href={"https://templates.gola.io/"}
                  className="text-green"
                >
                  Gola Templates
                </Link>
              </p>
            </div>
            <div className="flex gap-2 text-4xl">
              <Link href={"https://x.com/talk2hardeq"}>
                <BsTwitter className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"https://instagram.com/talk2hardeq"}>
                <BsInstagram className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"/"}>
                <BsLinkedin className="border-2 p-1.5 rounded border-white/15" />
              </Link>
              <Link href={"https://github.com/UnderGod-dev"}>
                <BsGithub className="border-2 p-1.5 rounded border-white/15" />
              </Link>
            </div>
          </div>
          <div className="p-4 w-full">
            <nav className="grid md:grid-cols-3  md:text-start gap-8 md:justify-between">
              {footerLinks.map((link, i) => (
                <React.Fragment key={i}>
                  <div className=" flex flex-col md:w-fit mx-auto">
                    <h3 className="text-white/90 font-semibold text-center md:text-start pb-4">
                      {link.header}
                    </h3>
                    <ul className="space-y-2 w-fit mx-auto text-white/70 bg-rged">
                      {link.links.map((l, i) => (
                        <React.Fragment key={i}>
                          <li className="hover:text-white transition-colors ease-linear">
                            <Link href={"/"}>{l}</Link>
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))}
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-white/75 font-semibold">DOWNLOAD</h3>
            <Download />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
