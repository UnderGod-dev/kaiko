import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";

const PhoneFrame = ({ h, w, children }) => {
  return (
    <div
      className={`w-[300px] max-h-[85vh] h-full bg-cover bg-center flex flex-col items-center my-8 md:my-72 bg-black/90 border-2 border-gray-500/90  rounded-[4em] pt-2 shadow-sm shadow-white/70 pb-2 -z-10 relative mx-auto overflow-y-clip`}
    >
      <div className="flex gap-1 flex-row-reverse">
        <div className="w-12 h-2 rounded-full bg-white/10">{}</div>
        <div className="size-2 bg-white/10 rounded-full"></div>
      </div>
      <div className="  rounded-[3em] p-4 flex flex-col gap-4 items-center justify-center bg-white/5 m-1  mx-auto w-[95%] h-[98%] overflow-y-hidden relative flex-wrap">
        {children}
      </div>
      <div className="absolute bg-transparent border-2 border-white/15 rounded-br-[2.7em] rounded-bl-[2.7em] w-[95%] bottom-3 p-4 flex justify-between gap-4 backdrop-blur text-white/7 0">
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

export default PhoneFrame;
