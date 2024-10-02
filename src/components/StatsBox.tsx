interface Props {
  label: string;
  number: number;
  icon: any;
}

function StatsBox({ label, number, icon }: Props) {
  return (
    <div className="flex items-center justify-between shadow-black/10 shadow-lg p-3 rounded-md bg-gradient-to-br from-[#93C23D] to-[#B8E5DE]">
      <div>
        <h4 className="font-overpass text-[16px] font-medium text-white">
          {label}
        </h4>
        <p className="font-lato text-[15px] font-normal text-white">{number}</p>
      </div>

      <div className="flex items-center justify-center p-3 rounded-md bg-white">
        {icon}
      </div>
    </div>
  );
}

export default StatsBox;
