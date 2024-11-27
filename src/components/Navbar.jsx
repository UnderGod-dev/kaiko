"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GiWaves, GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsX } from "react-icons/bs";

const navLinks = ["features", "pricing", "blog", "support", "change log"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const navContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    if (mobileNavRef.current) {
      if (isOpen) {
        // Open animation
        gsap.fromTo(
          mobileNavRef.current,
          {
            y: -50,
            opacity: 0,
            display: "none",
          },
          {
            y: 0,
            opacity: 1,
            display: "block",
            duration: 0.3,
            ease: "power2.out",
          }
        );
      } else {
        // Close animation
        gsap.to(mobileNavRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(mobileNavRef.current, { display: "none" });
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="relative lg:[position:none] pb-20">
      <div
        ref={navContainerRef}
        className="flex justify-between p-2  items-center fixed top-3 w-[90%] left-1/2  -translate-x-1/2 backdrop-blur-lg rounded-lg border lg:border-transparent border-white/10  max-w-screen-2xl mx-auto z-[1000]"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="size-10 bg-teal-400 rounded-lg text-3xl text-black flex justify-center items-center">
            <GiWaves />
          </div>
          <span className="font-bold text-base lg:text-xl">KAIKO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <nav className="w-full border border-white/15 shadow-2xl py-1.5 px-2 backdrop-blur-lg rounded bg-white/5">
            <ul className="flex items-center text-lg">
              {navLinks.map((link, i) => (
                <li
                  key={i}
                  className="capitalize border px-4 py-2 border-transparent hover:border-white/15 transition-all ease-in-out rounded hover:bg-white/10"
                >
                  <Link href={`/${link === "pricing" ? "pricing" : ""}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Action and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="bg-teal-400 p-2 rounded-lg text-black/60 font-semibold hidden lg:block">
            Download
          </button>

          {/* Mobile Menu Toggle */}
          <div
            className="lg:hidden text-white/70 text-2xl border-2 border-white/15 p-2 backdrop-blur rounded-lg cursor-pointer"
            onClick={toggleMenu}
          >
            {!isOpen ? <GiHamburgerMenu /> : <BsX />}
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <nav
        ref={mobileNavRef}
        className="hidden lg:hidden fixed inset-x-0 top-20 z-50 px-4"
        style={{ display: "none" }}
      >
        <ul className="border border-white/15 rounded-lg bg-white/10 backdrop-blur-lg p-6 space-y-2 font-medium text-xl text-center shadow-2xl overflow-hidden mx-1">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="border border-white/15 bg-black/20 hover:bg-white/10 transition-colors rounded capitalize"
            >
              <Link
                href={`/${link === "pricing" ? "pricing" : ""}`}
                className="block p-2 w-full text-white/90 hover:text-white"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
