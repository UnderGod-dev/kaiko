import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Download = () => {
  return (
    <div className="space-y-2 md:space-y-0 md:flex gap-4">
      <div className="bg-muted">
        <div className="bg-mutedELight border-2 border-white/15 rounded p-2 flex items-center gap-2">
          <FaAppStore className="text-2xl" />{" "}
          <span className="text-xs">
            GET IT ON <br /> <b className="text-base lg:text-lg">AppStore</b>
          </span>
        </div>
      </div>
      <div className="bg-muted">
        <div className="bg-mutedELight border-2 border-white/15 rounded p-2 flex items-center gap-2 h-full">
          <IoLogoGooglePlaystore className="text-2xl" />{" "}
          <span className="text-xs">
            GET IT ON <br /> <b className="text-base lg:text-lg">PlayStore</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Download;
