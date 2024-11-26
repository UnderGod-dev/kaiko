import PhoneFrame from "./PhoneFrame";
import {
  IoFastFoodOutline,
  IoAirplaneOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import {
  GiClothes,
  GiEnergyArrow,
  GiEnergyShield,
  GiPowerLightning,
  GiWeightLiftingDown,
} from "react-icons/gi";
import { PiCoffee } from "react-icons/pi";
import { RiNetflixFill } from "react-icons/ri";
import {
  FaArrowLeft,
  FaDumbbell,
  FaHospital,
  FaWeight,
  FaYoutube,
} from "react-icons/fa";
import { BsCarFront, BsHouse, BsPlus, BsTwitterX } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";

const PhoneContracts = () => {
  return (
    <PhoneFrame>
      <div className="space-y-4 text-xs w-full pt-14">
        <div className="flex justify-between">
          <span className="border-2 rounded  border-white/15 p-1">
            <FaArrowLeft className="font-bold" />
          </span>
          <h2 className="text-center text-md font-bold">Contracts</h2>
          <span className="border-2 rounded  border-white/15 p-1">
            <CiCircleInfo className="font-bold" />
          </span>
        </div>

        <div className="space-y-2 overflow-y-clip">
          <div className="bg-white/10 border border-white/15 space-y-2 rounded-lg flex flex-col items-center p-2">
            <span className="text-white/75 ">Monthly Expenses</span>
            <span className="font-bold text-lg">$2.421,50</span>
          </div>
          <div className="flex justify-between">
            <h2 className="text-center text-md font-bold">Contracts</h2>
            <h2 className="text-center text-md font-bold inline-flex items-center gap-1">
              Add Contracts
              <span className="border-2 rounded  border-white/15">
                <BsPlus className="font-bold" />
              </span>
            </h2>
          </div>
          <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10 ">
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
        </div>
      </div>
    </PhoneFrame>
  );
};

export default PhoneContracts;
