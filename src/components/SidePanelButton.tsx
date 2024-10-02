interface Props {
  label: string;
  icon: any;
  active: boolean;
  onClick: any;
}

function SidePanelButton({ label, icon, active, onClick }: Props) {
  return (
    <button
      className={`flex gap-[10px] items-center justify-center md:justify-start rounded-md shadow-black/10 shadow-lg p-[10px] hover:bg-primary/20 hover:cursor-pointer transition-all delay-150 ease-in-out duration-100 ${
        active ? "bg-primary/20" : "bg-white"
      }`}
      onClick={onClick}
    >
      {icon}
      <h4 className="font-lato font-normal text-[16px] hidden md:block">
        {label}
      </h4>
    </button>
  );
}

export default SidePanelButton;
