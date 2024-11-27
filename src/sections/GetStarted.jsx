import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GetStarted = () => {
  return (
    <section className="flex flex-col items-center mt-16 gap-4 text-center max-w-2xl mx-auto">
      <h3 className="text-xs font-semibold text-green ">GET STARTED</h3>
      <h2 className="text-[2.5em] lg:text-5xl  font-[550] leading-tight max-w-[200px]">
        Unlock Financial <br />{" "}
        <span className="text-green block">Freedom</span>
      </h2>
      <p className="text-white/75 text-lg md:tex:xl">
        Take control of your finances effortlessly with Kaiko. Sign up now for a
        seamless financial management experience.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-black">
          {" "}
          <div className="bg-white/10 border border-white/15 rounded p-2 flex items-center gap-2">
            <FaAppStore className="text-4xl" />{" "}
            <span className="text-sm">
              GET IT ON <br /> <b className="text-xl">AppStore</b>
            </span>
          </div>
        </div>

        <div className="bg-black">
          <div className="bg-white/10 border border-white/15 rounded p-2 flex items-center gap-2">
            <IoLogoGooglePlaystore className="text-4xl" />{" "}
            <span className="text-sm">
              GET IT ON <br /> <b className="text-xl">PlayStore</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
