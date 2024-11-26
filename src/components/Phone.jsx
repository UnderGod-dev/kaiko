import { CiCircleInfo } from "react-icons/ci";

// import { RiArrowDownSLine } from "react-icons/ri";

// import { CiCircleInfo } from "react-icons/ci";

import {
  IoFastFoodOutline,
  IoAirplaneOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { RiArrowDownSLine, RiCalendarScheduleLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import { PiCoffee, PiChartLineUpLight } from "react-icons/pi";
const Phone = () => {
  return (
    <div className="max-w-xs min-w-[400px] h-[80vh] bg-cover bg-center flex flex-col items-center my-8 md:my-72 bg-black border-2 border-gray-500/90  rounded-[4em] pt-2 shadow-sm shadow-white/70 pb-2 -z-10 relative overflow-hidden md:hidden">
      <div className="screen absolute inset-0"></div>
      <div className="flex gap-1 flex-row-reverse">
        <div className="w-12 h-2 rounded-full bg-white/10"></div>
        <div className="size-2 bg-white/10 rounded-full"></div>
      </div>
      <div className="  rounded-[40px] p-6 flex flex-col gap-4 items-center bg-white/5    m-2 mx-auto w-[95%] h-[98%] overflow-y-hidden relative">
        <span className="absolute right-4 border-2 rounded  border-white/15 p-1">
          <CiCircleInfo className="font-bold" />
        </span>
        <h2 className="text-center text-md font-bold">Dashboard</h2>
        <div className="text-center flex justify-between gap-4 w-full">
          <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3 px-4 rounded-md">
            <span className="text-sm text-white/70 font-light">Earnings</span>
            <span className="text-2xl font-bold">$85.222,00</span>
          </h3>
          <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3  px-4 rounded-md">
            <span className="text-sm text-white/70 font-light">Expenses</span>
            <span className="text-2xl font-bold">-$50.222,00</span>
          </h3>
        </div>
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
          <div className="flex gap-[28px] w-full">
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
          <div className="space-y-4">
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
            <div className="flex justify-between items-center border-2 border-white/25 p-2 rounded bg-white/10">
              <div className="flex justify-between items-center gap-2">
                <div className="text-2xl bg-white/15 border border-white/25 p-2 rounded">
                  <GiClothes />
                </div>
                <div className="flex flex-col ">
                  <h4 className="font-semibold text-md">Clothes</h4>
                  <small className="text-white/70 text-xs">Shopping</small>
                </div>
              </div>
              <span className="font-semibold">-$ 3.99</span>
            </div>
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
        </div>
      </div>
      <div className="absolute bg-white/5 border-2 border-white/15 rounded-br-[2.7em] rounded-bl-[2.7em] w-[95%] bottom-3 p-6 flex justify-between gap-4 backdrop-blur text-white/70">
        <div className="flex flex-col items-center font-semibold">
          <div className="">
            <IoHomeOutline />
          </div>
          <span className="text-xs">Dashboard</span>
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
  );
};

export default Phone;
