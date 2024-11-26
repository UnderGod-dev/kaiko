import CardBody from "./cardBody";

const SecondCard = ({ numbers, title, content }) => {
  return (
    <div className="bg-black">
      <div className="card-border p-8 border-2 border-white/15 bg-white/10 space-y-6 h-full">
        <span className="text-green text-4xl font-semibold">{numbers}</span>
        <div className="flex flex-col space-y-4">
          <h3 className="text-3xl font-[550]">{title}</h3>
          <p className="text-white/75 text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
