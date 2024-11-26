import { twMerge } from "tailwind-merge";

const CardBody = ({ children, className }) => {
  return (
    <div className="bg-black">
      <div
        className={twMerge(
          "border border-white/15 space-y-2 rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CardBody;
