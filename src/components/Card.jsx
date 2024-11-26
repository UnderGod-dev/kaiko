import { FaCheck } from "react-icons/fa";
const Card = ({ title, heading, paragraph, l1, l2, l3 }) => {
  return (
    <div className="backdrop-blur-md border border-white/15 space-y-2 p-8 rounded-lg max-h-fit max-w-[400px]">
      <h3 className="text-green text-sm uppercase font-semibold">{title}</h3>
      <h2 className="w-24 text-3xl font-semibold">{heading}</h2>
      <p className="text-white/75 text-lg">{paragraph}</p>
      <ul className="py-4 space-y-4">
        <li className="flex items-center gap-4 text-white font-medium">
          <span className="bg-green p-2 rounded text-black">
            <FaCheck />
          </span>{" "}
          {l1}
        </li>
        <li className="flex items-center gap-4 text-white font-medium">
          <span className="bg-green p-2 rounded text-black">
            <FaCheck />
          </span>{" "}
          {l2}
        </li>
        <li className="flex items-center gap-4 text-white font-medium">
          <span className="bg-green p-2 rounded text-black">
            <FaCheck />
          </span>{" "}
          {l3}
        </li>
      </ul>
    </div>
  );
};

export default Card;
