import Hero from "@/components/Hero";
import Features from "@/sections/Features";
import Testimonial from "@/sections/Testimonial";
import Enquiries from "@/sections/Enquiries";
import GetStarted from "@/sections/GetStarted";

const cardsDetails = [
  {
    title: "Dashboard",
    header: "Financial Control",
    text: "Take charge of your finances with a comprehensive dashboard, providing instant insights",
    bottom: [{ type: "img", img: "phone1.webp" }],
  },
  {
    title: "Analytics",
    header: "Financial Patterns",
    text: "Unravel insights into your financial behavior with detailed analytics, smarter decisions.",
    bottom: [{ type: "img", img: "phone1.webp" }],
  },
  {
    title: "Banks",
    header: "Bank Account Integration",
    text: "Link 30+ banks seamlessly for comprehensive financial management.",
    bottom: [{ type: "cards", img: ["", "", "", "", "", "", "", ""] }],
  },
  {
    title: "Contracts",
    header: "Contract Handling",
    text: "Centralize and manage contracts with ease for better organization.",
    bottom: [
      {
        type: "lists",
        lists: [
          {
            icon: "FaHospital",
            title: "Health Insurance",
            small: "Insurance",
            amount: "-$ 130.99",
          },
          {
            icon: "BsCarFront",
            title: "Car Leasing",
            small: "Transport",
            amount: "-$ 280.99",
          },
          {
            icon: "FaDumbbell",
            title: "Gym Membership",
            small: "Sport",
            amount: "-$ 85.99",
          },
        ],
      },
    ],
  },
  {
    title: "Overview",
    header: "Instant Transaction",
    text: "Get a quick, comprehensive overview of all your transactions.",
    bottom: [
      {
        type: "lists",
        lists: [
          { icon: "BsX", title: "X", small: "Media", amount: "-$ 8.99" },
          {
            icon: "PiTelevision",
            title: "Streaming",
            small: "Media",
            amount: "-$ 80.99",
          },
          {
            icon: "BsHouse",
            title: "House Rent",
            small: "Utilities",
            amount: "-$ 85.99",
          },
        ],
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="page-padding">
      <Hero />
      <Features />
      <Testimonial />
      <Enquiries />
      <GetStarted />
    </main>
  );
}
