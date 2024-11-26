"use client";
// src/context/AnimationContext/AnimationProvider.js
import { createContext, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create context
export const AnimationContext = createContext({});

export const AnimationProvider = ({ children }) => {
  useLayoutEffect(() => {
    // Select all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");

    animatedElements.forEach((element) => {
      const animation = element.dataset.animate; // Get animation type
      const delay = element.dataset.delay || 0; // Get delay if specified

      // Default animation settings
      const defaultConfig = {
        opacity: 0,
        duration: 1,
        delay: parseFloat(delay),
        ease: "power2.out",
      };

      // Animation variations
      const animations = {
        fadeUp: {
          ...defaultConfig,
          y: 50,
        },
        fadeDown: {
          ...defaultConfig,
          y: -50,
        },
        fadeLeft: {
          ...defaultConfig,
          x: 50,
        },
        fadeRight: {
          ...defaultConfig,
          x: -50,
        },
        fadeIn: {
          ...defaultConfig,
        },
        scale: {
          ...defaultConfig,
          scale: 0.8,
        },
      };

      // Create animation
      gsap.from(element, {
        ...animations[animation],
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>
  );
};
