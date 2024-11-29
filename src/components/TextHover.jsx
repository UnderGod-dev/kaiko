import { twMerge } from "tailwind-merge";

const TextHover = ({ content, className }) => {
  return (
    <button
      className={twMerge(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ",
        className
      )}
    >
      <span className="relative inline-flex overflow-hidden text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {content}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {content}
        </div>
      </span>
    </button>
  );
};

export default TextHover;
