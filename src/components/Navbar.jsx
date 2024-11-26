"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GiWaves, GiHamburgerMenu } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    <div
      ref={navContainerRef}
      className="flex justify-between p-4 items-center relative max-w-screen-2xl mx-auto"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4">
        <div className="size-10 bg-teal-400 rounded-lg text-3xl text-black flex justify-center items-center">
          <GiWaves />
        </div>
        <span className="font-bold text-base lg:text-xl">KAIKO</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block border border-white/15 shadow-2xl py-1.5 px-2 backdrop-blur-lg rounded bg-white/5">
        <ul className="flex items-center text-lg">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="capitalize border px-4 py-2 border-transparent hover:border-white/15 transition-all ease-in-out rounded hover:bg-white/10"
            >
              <Link href={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Action and Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button className="bg-teal-400 p-2 rounded-lg text-black/60 font-semibold">
          Download
        </button>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-white/70 text-2xl border-2 border-white/15 p-2 backdrop-blur rounded-lg cursor-pointer"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        ref={mobileNavRef}
        className="hidden lg:hidden fixed inset-x-0 top-20 z-50 px-4"
        style={{ display: "none" }}
      >
        <ul className="border border-white/15 rounded-lg bg-white/10 backdrop-blur-lg p-6 space-y-2 font-medium text-xl text-center shadow-2xl overflow-hidden">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="border border-white/15 bg-black/20 hover:bg-white/10 transition-colors rounded capitalize"
            >
              <Link
                href={`/${link}`}
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
