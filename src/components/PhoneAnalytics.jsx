import { RiArrowDownSLine } from "react-icons/ri";
import PhoneFrame from "./PhoneFrame";
import { CiCircleInfo } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";

const PhoneAnalytics = () => {
  return (
    <PhoneFrame w={500} h={100}>
      <div className="text-center flex flex-col justify-between gap-2 w-full ">
        <div className="flex justify-between">
          <span className="border-2 rounded  border-white/15 p-1">
            <BsArrowLeft className="font-bold" />
          </span>
          <h2 className="text-center text-md font-bold">Analytics</h2>
          <span className="border-2 rounded  border-white/15 p-1">
            <CiCircleInfo className="font-bold" />
          </span>
        </div>

        <div className="flex justify-between gap-1">
          <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3  px-2 rounded-md">
            <span className="text-sm text-white/70 font-light">Earnings</span>
            <span className="text-lg font-bold">$85.222,00</span>
          </h3>
          <h3 className="flex flex-col items-center border-2 border-white/15 bg-white/10 p-3  px-2 rounded-md">
            <span className="text-sm text-white/70 font-light">Expenses</span>
            <span className="text-lg font-bold">-$50.222,00</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-between bg-white/10 border border-white/15 space-y-2 rounded-lg p-4 items-center w-full">
        <div
          className="relative size-28 rounded-full"
          style={{
            background:
              "conic-gradient(goldenrod 0% 40%, #6ee7b7 40% 70%, #ef4444 70% 100%)",
          }}
        >
          {/* Inner circle for the donut effect */}
          <div className="absolute inset-0 rounded-full bg-black size-16 m-auto"></div>
        </div>
        <div className="flex flex-col text-xs">
          <span className="inline-flex items-center gap-2">
            <div className="size-3 bg-green rounded-full"></div> Rents
          </span>
          <span className="inline-flex items-center gap-2">
            <div className="size-3 bg-red-500 rounded-full"></div> Travels
          </span>
          <span className="inline-flex items-center gap-2">
            <div className="size-3 bg-[goldenrod] rounded-full"></div> Feedings
          </span>
        </div>
      </div>

      <div className="w-full text-sm text-white/70 space-y-6">
        <div className="flex justify-between ">
          <div className="flex gap-2 text-xs">
            <h3 className="space-x-2 inline-flex items-center">
              <div className="size-4 bg-green rounded-full"></div>
              <span className="">Earnings</span>
            </h3>
            <h3 className="space-x-2 inline-flex items-center">
              <div className="size-4 bg-red-500 rounded-full"></div>
              <span className="">Expenses</span>
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 border-2 border-white/15 p-1.5 rounded-md bg-white/10 text-xs">
            <span className="">Year</span>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="flex gap-[14px] w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[30%] w-full bg-green rounded-sm"></div>
              <div className="h-[50%] w-full bg-red-500"></div>
            </div>
            <span className="">Jan</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[75%] w-full bg-green"></div>
              <div className="h-[20%] w-full bg-red-500"></div>
            </div>
            <span className="">Feb</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[20%] w-full bg-green"></div>
              <div className="h-[35%] w-full bg-red-500"></div>
            </div>
            <span className="">Mar</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[29%] w-full bg-green"></div>
              <div className="h-[47%] w-full bg-red-500"></div>
            </div>
            <span className="">Apr</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[53%] w-full bg-green"></div>
              <div className="h-[35%] w-full bg-red-500"></div>
            </div>
            <span className="">May</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[60%] w-full bg-green"></div>
              <div className="h-[39%] w-full bg-red-500"></div>
            </div>
            <span className="">Jun</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[12em] w-4 rounded-sm flex flex-col-reverse bg-gray-500/50">
              <div className="h-[10%] w-full bg-green"></div>
              <div className="h-[22%] w-full bg-red-500"></div>
            </div>
            <span className="">Jul</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default PhoneAnalytics;
