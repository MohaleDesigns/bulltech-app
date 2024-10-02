interface Props {
  label: string;
  onClick: any;
  icon: any;
}

function PrimaryButton({ label, onClick, icon }: Props) {
  return (
    <button
      className="bg-[#93C23D] w-full flex items-center justify-center gap-2 py-2 rounded-md border border-[#A5FF00] hover:bg-gradient-to-br hover:from-[#93C23D] hover:to-[#B8E5DE] hover:cursor-pointer transition-all delay-150 ease-in-out duration-150"
      onClick={onClick}
    >
      {icon}
      <h4 className="font-lato font-normal text-[16px] text-white hidden md:block">
        {label}
      </h4>
    </button>
  );
}

export default PrimaryButton;
