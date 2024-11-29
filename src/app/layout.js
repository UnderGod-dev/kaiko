import localFont from "next/font/local";
import bgImage from "./assets/bg.avif";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import { AnimationProvider } from "@/context/AnimationContext/AnimationProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Kaiko",
  description: "Digital Finance App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable}  antialiased !overflow-x-hidden relative max-w-screen-2xl mx-auto`}
      >
        <Navbar />
        {/* <AnimationProvider> */}
        <div className="">
          <Image
            src={bgImage}
            className="size-full opacity-10 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-top object-cover -z-10"
          />
          <div className="absolute -z-10 size-full inset-0 bg-[#00000099]"></div>
          {children}
        </div>
        {/* </AnimationProvider> */}

        <Footer />
      </body>
    </html>
  );
}
