import { MdEmail, MdOutlineDashboard } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsArrowRight, BsCheck, BsPersonAdd } from "react-icons/bs";
import { FaEuroSign, FaSearchDollar } from "react-icons/fa";
import { CgInsights } from "react-icons/cg";
import { IoCall, IoDocument, IoNotifications } from "react-icons/io5";
import { TbAdjustmentsDollar } from "react-icons/tb";
import TextHover from "./TextHover";
const DesktopPlans = ({ plan }) => {
  return (
    <section className="font-[500] px-12 2xl:px-0">
      <div className="grid grid-cols-3  mt-24 items-end">
        <div className="col-span-1">
          <h3 className="text-3xl font-[550]">
            Compare <span className="text-green">Plans</span>
          </h3>
        </div>

        <div className="flex justify-between col-span-2 gap-8 font-[550] tracking-wider">
          <div className="w-full">
            <h3 className="text-center text-xl">Starter</h3>
            <button className="border rounded w-full mt-4 text-base border-white/15 bg-muted">
              <div className="bg-white/15">
                <TextHover className="" content="Get Started" />
              </div>
            </button>
          </div>
          <div className="w-full">
            <h3 className="text-center text-xl">Pro</h3>
            <button className="bg-green text-black rounded mt-4 w-full">
              <TextHover className="" content="Get Started" />
            </button>
          </div>
          <div className="w-full">
            <h3 className="text-center text-xl">Premium</h3>
            <button className="border rounded mt-4 text-base border-white/15 bg-muted w-full">
              <div className="bg-white/15">
                <TextHover className="" content="Get Started" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-muted my-8">
          <h2 className="text-xl tracking-wide bg-white/15 p-4 border border-white/15 rounded font-medium">
            Dashboard & Tracking
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <MdOutlineDashboard className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Dashboard Access</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between text-lg">
            <p className="w-full">Basic</p>
            <p className="w-full">Enhanced</p>
            <p className="w-full">Premium</p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <AiOutlineTransaction className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Transaction Tracking</h4>
          </div>
          <div className="col-span-2 text-center flex justify-around py-6 text-black">
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <FaEuroSign className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Budget Management</h4>
          </div>
          <div className="col-span-2 text-center flex justify-around py-6 text-black">
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <FaSearchDollar className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Expense Analysis</h4>
          </div>
          <div className="col-span-2 text-center flex justify-around py-6 text-black">
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
            <p className=" bg-green p-2 rounded">
              <BsCheck className="mx-auto text-2xl" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <CgInsights className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Dashboard Insight</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between text-lg items-center">
            <div className="w-full">
              <p className=" bg-red w-fit mx-auto p-2 rounded">
                <RxCross2 className="mx-auto text-2xl " />
              </p>
            </div>

            <p className="w-full">Advanced</p>
            <p className="w-full">Premium Customization</p>
          </div>
        </div>
      </div>
      {/*======================= Customer Support ================ */}
      <div className="">
        <div className="bg-muted my-8">
          <h2 className="text-xl tracking-wide bg-white/15 p-4 border border-white/15 rounded font-medium">
            Customer Support
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <MdEmail className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Email Support</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between text-lg">
            <p className="w-full">Basic</p>
            <p className="w-full">Priority</p>
            <p className="w-full">Priority</p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <IoCall className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Phone Support</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <div className="w-full">
              <p className=" bg-red w-fit mx-auto p-2 rounded">
                <RxCross2 className="mx-auto text-2xl " />
              </p>
            </div>
            <div className="w-full">
              <p className=" bg-red w-fit mx-auto p-2 rounded">
                <RxCross2 className="mx-auto text-2xl " />
              </p>
            </div>

            <p className="w-full">Priority</p>
          </div>
        </div>
      </div>
      {/* =============Advance Feautures ======================== */}
      <div className="">
        <div className="bg-muted my-8">
          <h2 className="text-xl tracking-wide bg-white/15 p-4 border border-white/15 rounded font-medium">
            Advance Features
          </h2>
        </div>
        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <TbAdjustmentsDollar className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Transaction Categorization</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <div className="w-full">
              <p className=" bg-red w-fit mx-auto p-2 rounded">
                <RxCross2 className="mx-auto text-2xl " />
              </p>
            </div>
            <p className="w-full">Advanced</p>

            <p className="w-full">Advanced</p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <IoNotifications className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Contract Reminders</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <div className="w-full">
              <p className=" bg-green w-fit mx-auto p-2 rounded">
                <BsCheck className="mx-auto text-2xl text-black" />
              </p>
            </div>
            <div className="w-full">
              <p className=" bg-green w-fit mx-auto p-2 rounded">
                <BsCheck className="mx-auto text-2xl text-black" />
              </p>
            </div>

            <p className="w-full">Priority Reminders</p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <CgInsights className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Budget Tracking</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <div className="w-full">
              <p className=" bg-green w-fit mx-auto p-2 rounded">
                <BsCheck className="mx-auto text-2xl text-black" />
              </p>
            </div>
            <p className="w-full">Comprehensive</p>

            <p className="w-full">Customizable Reports</p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center pb-4 mt-6">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <IoDocument className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Document Storage</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <div className="w-full">
              <p className=" bg-red w-fit mx-auto p-2 rounded">
                <RxCross2 className="mx-auto text-2xl " />
              </p>
            </div>
            <p className="w-full">Expanded</p>

            <p className="w-full">Secure Vault</p>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center border-b-2 border-white/15 pb-4">
          <div className="flex col-span-1 gap-4  items-center">
            <span className="bg-muted inline-flex">
              <span className="p-3 rounded bg-white/10 inline-block border border-white/15 ">
                <BsPersonAdd className="text-xl" />
              </span>
            </span>

            <h4 className="text-lg">Account Integration</h4>
          </div>
          <div className="col-span-2 text-center flex justify-between items-center text-lg">
            <p className="w-full">{"Limited (Up to 3 Banks)"}</p>
            <p className="w-full">Unlimited</p>
            <p className="w-full">VIP Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopPlans;
