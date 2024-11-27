import Image from "next/image";
import { BsCarFront, BsHouse, BsX } from "react-icons/bs";
import { FaDumbbell, FaHospital } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";

const Features = () => {
  const logoSrc = [
    "pngegg (1).png",
    "pngegg (2).png",
    "pngegg (3).png",
    "pngegg (4).png",
    "pngegg (5).png",
    "pngegg (7).png",
    "pngegg (8).png",
    "pngegg (9).png",
  ];
  return (
    <section className="my-40 space-y-8">
      <div className="flex items-center flex-col tracking-wider gap-4 text-center mb-20">
        <h3 className="uppercase text-green font-normal">features</h3>
        <p className="text-4xl lg:text-6xl font-[550]">
          Powerful Tools, <br /> Seamless Integration
        </p>
        <p className="text-white/75 max-w-xs md:max-w-sm lg:max-w-xl lg:text-xl">
          Experience efficiency and control with our suite of intuitive features
          designed to streamline your financial management.
        </p>
      </div>
      <div className="space-y-4 md:space-y-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="bg-black">
            <div className="card-border border-2 border-white/15 bg-white/10 p-8 px-4 lg:px-8 space-y-4 flex flex-col items-center justify-center pb-0">
              <h3 className="uppercase text-green font-semibold">Dashboard</h3>
              <p className="text-3xl lg:text-4xl font-[550]">
                Financial Control
              </p>
              <p className="text-white/75">
                Take charge of your finances with a comprehensive dashboard,
                providing instant insights
              </p>
              {/* Place the image inside the flex container without absolute positioning */}
              <div className="size-full flex justify-center mt-4">
                {" "}
                {/* Add margin to give space between text and image */}
                <Image
                  src={"/phone.webp"}
                  height={350}
                  width={350}
                  alt="phone"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-black">
            <div className="card-border border-2 border-white/15 bg-white/10 p-8 px-4 lg:px-8 space-y-4 flex flex-col items-center justify-center pb-0">
              <h3 className="uppercase text-green font-semibold">Analytics</h3>
              <p className="text-3xl lg:text-4xl font-[550]">
                Financial Patterns
              </p>
              <p className="text-white/75">
                Unravel insights into your financial behavior with detailed
                analytics, smarter decisions.
              </p>
              {/* Place the image inside the flex container without absolute positioning */}
              <div className="size-full flex justify-center mt-4">
                {" "}
                {/* Add margin to give space between text and image */}
                <Image
                  src={"/phone1.webp"}
                  height={400}
                  width={350}
                  alt="phone"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Bank Section */}
          <div className="bg-black">
            <div className="card-border border-2 border-white/15 bg-white/10 p-8 px-4 lg:px-8 space-y-4 flex flex-col justify-center items-center">
              <h3 className="text-green font-semibold uppercase">Banks</h3>
              <h4 className="text-3xl lg:text-4xl font-[550]">
                Bank Account Integration
              </h4>
              <p className="text-white/75">
                Link 30+ banks seamlessly for comprehensive financial
                management.
              </p>
              <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
                {logoSrc.map((logo, id) => (
                  <div
                    className={`h-20 min-w-[100px] flex place-content-center card-border bg-green/60 hover:bg-transparent border-2 shadow-inner shadow-white/75 border-white/75 ${
                      id === logoSrc.length - 1 ? "py-0" : ""
                    }`}
                    key={id}
                  >
                    <Image
                      src={`/${logo}`}
                      height={80}
                      width={80}
                      className="object-contain hover:scale-125 duration-300 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contracts Section */}
          <div className="bg-black">
            <div className="card-border border-2 border-white/15 bg-white/10 p-8 px-4 lg:px-8 space-y-4 flex flex-col md:basis-1/2 lg:basis-[30%] h-full">
              <h3 className="text-green font-semibold uppercase text-center">
                Contracts
              </h3>
              <h4 className="text-3xl lg:text-4xl font-[550]">
                Contract Handling
              </h4>
              <p className="text-white/75">
                Centralize and manage contracts with ease for better
                organization.
              </p>
              <div className="flex flex-col gap-4">
                {/* Health Insurance */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <FaHospital />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">
                        Health Insurance
                      </h4>
                      <small className="text-white/70 text-xs">Insurance</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 130.99</span>
                </div>

                {/* Car Leasing */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <BsCarFront />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Car Leasing</h4>
                      <small className="text-white/70 text-xs">Transport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 280.99</span>
                </div>

                {/* Gym Membership */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-green text-black">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <FaDumbbell />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Gym Membership</h4>
                      <small className="text-black text-xs">Sport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 85.99</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-black">
            <div className="card-border border-2 border-white/15 bg-white/10 p-8 px-4 lg:px-8 space-y-4 flex flex-col md:basis-1/2 lg:basis-[30%] h-full">
              <h3 className="text-green font-semibold uppercase">Overview</h3>
              <h4 className="text-3xl font-semibold capitalize">
                Instant Transaction
              </h4>
              <p className="text-white/75">
                Get a quick, comprehensive overview of all your transactions.
              </p>
              <div className="flex flex-col gap-4">
                {/* Twitter */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <BsX />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Twitter</h4>
                      <small className="text-white/70 text-xs">Insurance</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 130.99</span>
                </div>

                {/* Streaming */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <PiTelevision />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">Streaming</h4>
                      <small className="text-white/70 text-xs">Transport</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 280.99</span>
                </div>

                {/* House Rent */}
                <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-red-500">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                      <BsHouse />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-md">House Rent</h4>
                      <small className="text-white/70 text-xs">Rent</small>
                    </div>
                  </div>
                  <span className="font-semibold">-$ 85.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
