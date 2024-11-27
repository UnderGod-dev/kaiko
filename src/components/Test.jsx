"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  BsArrowLeft,
  BsArrowRightShort,
  BsBag,
  BsCarFront,
  BsHouse,
  BsPlus,
  BsTwitterX,
} from "react-icons/bs";
import { CiCircleInfo, CiCoffeeCup } from "react-icons/ci";
import { MdFlightTakeoff } from "react-icons/md";
import { GiClothes, GiPowerLightning, GiTrade } from "react-icons/gi";
import { NotificationBar } from "@/components/DesktopPhone";
import Card from "@/components/Card";
import PhoneAnalytics from "@/components/PhoneAnalytics";
import PhoneContracts from "@/components/PhoneContracts";
import { PiChartLineUpLight, PiCoffee } from "react-icons/pi";
import {
  IoAirplaneOutline,
  IoFastFoodOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { RiArrowDownSLine, RiNetflixFill } from "react-icons/ri";
import { FaArrowLeft, FaDumbbell, FaHospital, FaYoutube } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Dashboard = () => {
  return (
    <div className="screen absolute left-1.5 inset-0 bg-red-300 size-full flex items-center justify-center">
      <div className="bg-black border-2r h-[65vh] absolute -left-6 inset-0 w-full bottom-0 z-[1000] text-sm p-1 space-y-4">
        <div className="  rounded-[2.5em] p-2 px-4 flex flex-col gap-4 items-center bg-white/5  mb-8   mx-2 w-[95%] min-h-full overflow-y-hidden relative">
          <span className="absolute right-4 border-2 rounded  border-white/15 p-1">
            <CiCircleInfo className="font-bold" />
          </span>
          <h2 className="text-center text-md font-bold">Dashboard</h2>
          <div className="text-center flex justify-between gap-4 w-full">
            <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3 px-4 rounded-md">
              <span className="text-sm text-white/70 font-light">Earnings</span>
              <span className="text-xl font-bold">$85.222,00</span>
            </h3>
            <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3  px-4 rounded-md">
              <span className="text-sm text-white/70 font-light">Expenses</span>
              <span className="text-xl font-bold">-$9.222,00</span>
            </h3>
          </div>
          {/* ================= charts =============== */}
          <div className="w-full text-sm text-white/70 space-y-6">
            <div className="flex justify-between ">
              <div className="flex gap-4 ">
                <h3 className="space-x-2 inline-flex items-center">
                  <div className="size-4 bg-emerald-300 rounded-full"></div>
                  <span className="">Earnings</span>
                </h3>
                <h3 className="space-x-2 inline-flex items-center">
                  <div className="size-4 bg-red-500 rounded-full"></div>
                  <span className="">Expenses</span>
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 border-2 border-white/15 p-1.5 rounded-md bg-white/10">
                <span className="">Year</span>
                <RiArrowDownSLine />
              </div>
            </div>

            <div className="flex gap-[26px] w-full">
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[30%] w-full bg-emerald-300 rounded-sm"></div>
                  <div className="h-[50%] w-full bg-red-500"></div>
                </div>
                <span className="">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[75%] w-full bg-emerald-300"></div>
                  <div className="h-[20%] w-full bg-red-500"></div>
                </div>
                <span className="">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[20%] w-full bg-emerald-300"></div>
                  <div className="h-[35%] w-full bg-red-500"></div>
                </div>
                <span className="">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[29%] w-full bg-emerald-300"></div>
                  <div className="h-[47%] w-full bg-red-500"></div>
                </div>
                <span className="">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[53%] w-full bg-emerald-300"></div>
                  <div className="h-[35%] w-full bg-red-500"></div>
                </div>
                <span className="">May</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[60%] w-full bg-emerald-300"></div>
                  <div className="h-[39%] w-full bg-red-500"></div>
                </div>
                <span className="">Jun</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[10%] w-full bg-emerald-300"></div>
                  <div className="h-[22%] w-full bg-red-500"></div>
                </div>
                <span className="">Jul</span>
              </div>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <div className="flex justify-between">
              <h3 className="font-semibold">Transactions</h3>
              <div className="inline-flex items-center text-sm gap-2">
                <span>View All</span>
                <div className="border border-white/70 p-0.5 rounded-sm bg-white/10">
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded">
                    <PiCoffee />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Coffee</h4>
                    <small className="text-white/70 text-xs">Restaurants</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 3.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded">
                    <PiCoffee />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Coffee</h4>
                    <small className="text-white/70 text-xs">Restaurants</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 3.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded">
                    <IoFastFoodOutline />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Fast Food</h4>
                    <small className="text-white/70 text-xs">Restaurants</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 3.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded">
                    <IoAirplaneOutline />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Parklane Resort</h4>
                    <small className="text-white/70 text-xs">Travel</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 3.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded-b-[3em] bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded"></div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md"></h4>
                    <small className="text-white/70 text-xs"></small>
                  </div>
                </div>
                <span className="font-semibold"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white/5 border-2 border-white/15 rounded-br-[3em] rounded-bl-[3em] w-[94%] -translate-x-[50.5%] left-1/2 -bottom-32 h-fit p-6 flex justify-between gap-4 backdrop-blur text-white/70">
          <div className="flex flex-col items-center font-semibold text-white">
            <div className="">
              <IoHomeOutline />
            </div>
            <span className="text-xs ">Dashboard</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <PiChartLineUpLight />
            </div>
            <span className="text-xs">Analytics</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <RiArrowDownSLine />
            </div>
            <span className="text-xs">Contracts</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <IoPersonOutline />
            </div>
            <span className="text-xs">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Analytics = () => {
  return (
    <div className="screen absolute left-1.5 inset-0 bg-red-300 size-full flex items-center justify-center">
      <div className="bg-black border-2r h-[65vh] absolute -left-6 inset-0 w-full bottom-0 z-[1000] text-sm p-1 space-y-4">
        <div className="  rounded-[2.5em] p-2 px-4 flex flex-col gap-4 items-center bg-white/5  mb-8   mx-2 w-[95%] min-h-full overflow-y-hidden relative pb-20">
          <div className="text-center flex flex-col justify-between gap-2 w-full">
            <div className="flex justify-between">
              <span className="border-2 rounded  border-white/15 p-1">
                <BsArrowLeft className="font-bold" />
              </span>
              <h2 className="text-center text-lg font-bold">Analytics</h2>
              <span className="border-2 rounded  border-white/15 p-1">
                <CiCircleInfo className="font-bold" />
              </span>
            </div>

            <div className="text-center flex justify-between gap-4 w-full mt-6">
              <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3 px-6 rounded-md">
                <span className="text-sm text-white/70 font-light">
                  Earnings
                </span>
                <span className="text-xl font-bold">$85.222,00</span>
              </h3>
              <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3  px-6 rounded-md">
                <span className="text-sm text-white/70 font-light">
                  Expenses
                </span>
                <span className="text-xl font-bold">-$9.222,00</span>
              </h3>
            </div>
            <div className="flex justify-between text-base font-medium mt-2">
              <p className="">Monthly Expenses</p>
              <p>$1.2389,50</p>
            </div>
          </div>
          <div className="flex justify-between bg-white/10 border border-white/15 space-y-2 rounded-lg p-4 items-center w-full">
            <div
              className="relative size-36 rounded-full"
              style={{
                background:
                  "conic-gradient(goldenrod 0% 40%, #6ee7b7 40% 70%, #ef4444 70% 100%)",
              }}
            >
              {/* Inner circle for the donut effect */}
              <div className="absolute inset-0 rounded-full bg-black size-16 m-auto"></div>
            </div>
            <div className="flex flex-col text-base font-normal gap-4">
              <span className="inline-flex items-center gap-2">
                <div className="size-3 bg-green rounded-full"></div> Rents
              </span>
              <span className="inline-flex items-center gap-2">
                <div className="size-3 bg-red-500 rounded-full"></div> Travels
              </span>
              <span className="inline-flex items-center gap-2">
                <div className="size-3 bg-[goldenrod] rounded-full"></div>{" "}
                Feedings
              </span>
            </div>
          </div>

          {/* ================= charts =============== */}
          <div className="w-full text-sm text-white/70 space-y-6 mt-4">
            <div className="flex justify-between ">
              <div className="flex gap-4 ">
                <h3 className="space-x-2 inline-flex items-center">
                  <div className="size-4 bg-emerald-300 rounded-full"></div>
                  <span className="">Earnings</span>
                </h3>
                <h3 className="space-x-2 inline-flex items-center">
                  <div className="size-4 bg-red-500 rounded-full"></div>
                  <span className="">Expenses</span>
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 border-2 border-white/15 p-1.5 rounded-md bg-white/10">
                <span className="">Year</span>
                <RiArrowDownSLine />
              </div>
            </div>

            <div className="flex gap-[26px] w-full">
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[30%] w-full bg-emerald-300 rounded-sm"></div>
                  <div className="h-[50%] w-full bg-red-500"></div>
                </div>
                <span className="">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[75%] w-full bg-emerald-300"></div>
                  <div className="h-[20%] w-full bg-red-500"></div>
                </div>
                <span className="">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[20%] w-full bg-emerald-300"></div>
                  <div className="h-[35%] w-full bg-red-500"></div>
                </div>
                <span className="">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[29%] w-full bg-emerald-300"></div>
                  <div className="h-[47%] w-full bg-red-500"></div>
                </div>
                <span className="">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[53%] w-full bg-emerald-300"></div>
                  <div className="h-[35%] w-full bg-red-500"></div>
                </div>
                <span className="">May</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[60%] w-full bg-emerald-300"></div>
                  <div className="h-[39%] w-full bg-red-500"></div>
                </div>
                <span className="">Jun</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
                  <div className="h-[10%] w-full bg-emerald-300"></div>
                  <div className="h-[22%] w-full bg-red-500"></div>
                </div>
                <span className="">Jul</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white/5 border-2 border-white/15 rounded-br-[3em] rounded-bl-[3em] w-[94%] -translate-x-[50.5%] left-1/2 -bottom-32 h-fit p-6 flex justify-between gap-4 backdrop-blur text-white/70">
          <div className="flex flex-col items-center font-semibold ">
            <div className="">
              <IoHomeOutline />
            </div>
            <span className="text-xs ">Dashboard</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="">
              <PiChartLineUpLight />
            </div>
            <span className="text-xs">Analytics</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <RiArrowDownSLine />
            </div>
            <span className="text-xs">Contracts</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <IoPersonOutline />
            </div>
            <span className="text-xs">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Contracts = () => {
  return (
    <div className="screen absolute left-1.5 inset-0 bg-red-300 size-full flex items-center justify-center">
      <div className="bg-black border-2r h-[65vh] absolute -left-6 inset-0 w-full bottom-0 z-[1000] text-sm p-1 space-y-4">
        <div className="  rounded-[2.5em] p-2 px-4 flex flex-col gap-4 items-center bg-white/5  mb-8   mx-0 w-[95%] min-h-full overflow-y-hidden relative pb-20">
          <div className="flex justify-between w-full pt-1">
            <span className="border-2 rounded  border-white/15 p-1">
              <FaArrowLeft className="font-bold text-xl" />
            </span>
            <h2 className="text-center text-lg font-medium">Contracts</h2>
            <span className="border-2 rounded  border-white/15 p-1">
              <CiCircleInfo className="font-bold text-xl" />
            </span>
          </div>
          <div className="overflow-y-clip w-full">
            <div className="bg-white/10 border border-white/15 space-y-2 rounded-lg flex flex-col items-center p-2">
              <span className="text-white/75 ">Monthly Expenses</span>
              <span className="font-bold text-lg">$2.421,50</span>
            </div>
            <div className="flex justify-between my-4">
              <h2 className="text-center text-base font-bold">Contracts</h2>
              <h2 className="text-center text-base font-bold inline-flex items-center gap-1">
                Add Contracts
                <span className="border-2 rounded  border-white/15">
                  <BsPlus className="font-bold" />
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <RiNetflixFill />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold">Netflix</h4>
                    <small className="text-white/70 text-xs font-extralight">
                      Media
                    </small>
                  </div>
                </div>
                <span className="font-semibold">-$ 9.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <BsTwitterX />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">X</h4>
                    <small className="text-white/70 text-xs">Media</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 8.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <BsHouse />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Rent</h4>
                    <small className="text-white/70 text-xs">Household</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 1350.00</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <FaYoutube />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Youtube Premium</h4>
                    <small className="text-white/70 text-xs">Media</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 13.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <FaHospital />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Health Insurance</h4>
                    <small className="text-white/70 text-xs">Insurance</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 130.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <BsCarFront />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Car Leasing</h4>
                    <small className="text-white/70 text-xs">Transport</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 280.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <FaDumbbell />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Gym Membership</h4>
                    <small className="text-white/70 text-xs">Sport</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 85.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <GiPowerLightning />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Energy</h4>
                    <small className="text-white/70 text-xs">Household</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 45.99</span>
              </div>
              <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-xl bg-white/15 border border-white/25 p-1 rounded">
                    <FaHospital />
                  </div>
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-md">Health Insurance</h4>
                    <small className="text-white/70 text-xs">Insurance</small>
                  </div>
                </div>
                <span className="font-semibold">-$ 130.99</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white/5 border-2 border-white/15 rounded-br-[3em] rounded-bl-[3em] w-[94%] -translate-x-[50.5%] left-1/2 -bottom-32 h-fit p-6 flex justify-between gap-4 backdrop-blur text-white/70">
          <div className="flex flex-col items-center font-semibold ">
            <div className="">
              <IoHomeOutline />
            </div>
            <span className="text-xs ">Dashboard</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <PiChartLineUpLight />
            </div>
            <span className="text-xs">Analytics</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="">
              <RiArrowDownSLine />
            </div>
            <span className="text-xs">Contracts</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="">
              <IoPersonOutline />
            </div>
            <span className="text-xs">Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);

  useGSAP(() => {
    // Pin the phone
    ScrollTrigger.create({
      trigger: phoneRef.current,
      start: "top top",
      endTrigger: ".card-3",
      end: "bottom center",
      pin: true,
      pinSpacing: false,
      markers: false,
    });

    // Animate screens based on scroll position
    const screens = gsap.utils.toArray(".screen");
    const cards = gsap.utils.toArray(".card");

    // Set initial positions for screens
    gsap.set(screens[0], { x: "0%" });
    gsap.set(screens[1], { x: "100%" });
    gsap.set(screens[2], { x: "-100%" }); // Third screen starts from left

    // Create animations for each card-screen pair
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first screen as it's visible by default

      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "bottom 40%",
        markers: false,
        delay: 1,
        scrub: 1, // Smooth animation tied to scroll
        onUpdate: (self) => {
          // Calculate progress (0 to 1)
          const progress = self.progress;

          if (index === 1) {
            // Second screen comes from right
            gsap.set(screens[1], { x: `${100 - progress * 100}%` });
            gsap.set(screens[0], { x: `${-progress * 100}%` });
          } else if (index === 2) {
            // Third screen comes from left
            gsap.set(screens[2], { x: `${-100 + progress * 100}%` });
            gsap.set(screens[1], { x: `${progress * 100}%` });
          }
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-screen relative pb-[26em]"
    >
      {/* Main Content */}
      <div className="relative mx-auto">
        {/* Phone Container */}
        <div
          ref={phoneRef}
          id="phone"
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <div className="space-y-10 absolute w-full z-10 text-sm text-white/75 font-semibold max-w-screen-lg left-1/2 -translate-x-1/2 bg-violet-400f top-0">
            <div className="flex justify-between px-12">
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 animate-move-top delay-300"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="bg-green p-1 rounded text-black">
                  <BsBag />
                </span>
                <span className="">+ $4.250 Salary</span>
              </div>
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 ml-12 animate-move-top delay-[3s]"
                style={{ animationDelay: ".2s" }}
              >
                <span className="bg-green p-1 rounded text-black">
                  <CiCoffeeCup />
                </span>
                <span className="">+ $3.5 Coffee</span>
              </div>
            </div>
            <div className="flex justify-between px-32">
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 animate-move-top delay-1000"
                style={{ animationDelay: ".5s" }}
              >
                <span className="bg-red-400 p-1 rounded">
                  <MdFlightTakeoff />
                </span>
                <span className="">+ $4000 Holidays</span>
              </div>
              <div
                className="border border-white/15 w-fit flex items-center p-2 rounded gap-2 ml-12 animate-move-top delay-500"
                style={{ animationDelay: "1s" }}
              >
                <span className="bg-red-400 p-1 rounded ">
                  <GiTrade />
                </span>
                <span className="">+ $3590 Dividend</span>
              </div>
            </div>
          </div>
          <div className="h-[80vh] w-[380px] border-2 border-white/20 rounded-[4em] pt-1 !pb-4 px-4 overflow-hidden relative flex flex-col">
            <div className="bg-whitei flex justify-center">
              <NotificationBar />
            </div>
            <div className="relative overflow-x-visible">
              {/* Screens */}
              <Dashboard />
              <Analytics />
              <Contracts />
            </div>
          </div>
        </div>

        {/* Cards Section - Increased z-index and added background */}
        <div className="relative z-10 w-[100vw] lg:w-[80vw] mx-auto max-w-screen-lg">
          <div className="card card-1 h-screen flex items-center p-4">
            <div className="">
              <Card
                title="dashboard"
                heading="Financial 
Overview"
                paragraph="Access all your financial data at a glance, streamlining your management process and enhancing your financial decision-making."
                l1="Real-time balance updates"
                l2="Transaction categorization"
                l3="Budget tracking"
              />
            </div>
          </div>
          <div className="card card-2 h-screen flex items-center justify-end p-4">
            <Card
              title="Analytics"
              heading="Financial
Insights 
"
              paragraph="Gain comprehensive insights into your spending patterns and financial behaviors with detailed analytics, empowering informed financial choices."
              l1="Expense breakdown charts

"
              l2="Income trends analysis

"
              l3="Savings growth tracking

"
            />
          </div>
          <div className="card card-3 h-screen flex items-center p-4 ">
            <Card
              title="Contracts

"
              heading="Contract 
Management
 
"
              paragraph="Keep track of all your contracts in one place, ensuring clarity and compliance with automated reminders and easy access."
              l1="Contract expiration alerts



"
              l2="Document storage



"
              l3="Renewal notifications



"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
