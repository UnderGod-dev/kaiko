import Image from "next/image";

import Hero from "@/components/Hero";
import Features from "@/sections/Features";
import Testimonial from "@/sections/Testimonial";
import Enquiries from "@/sections/Enquiries";
import GetStarted from "@/sections/GetStarted";

export default function Home() {
  return (
    <main className="min-h-[100vh] mx-8">
      <Hero />
      <Features />
      <Testimonial />
      <Enquiries />
      <GetStarted />
    </main>
  );
}
