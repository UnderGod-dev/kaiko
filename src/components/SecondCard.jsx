const SecondCard = ({ numbers, title, content }) => {
  return (
    <div className="bg-muted h-full">
      <div className="card-border p-8 border-2 border-white/15 bg-mutedELight space-y-6 h-full">
        <span className="text-green text-3xl font-[550]">{numbers}</span>
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl lg:text-3xl font-[550]">{title}</h3>
          <p className="text-white/75 lg:text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
