import React from "react";

interface Props {
  label: string;
  icon: any;
}

function SidePanelButton({ label, icon }: Props) {
  return (
    <div className="flex gap-[10px] items-center justify-center md:justify-start bg-white rounded-md shadow-black/20 shadow-lg p-[10px] hover:bg-primary/20 hover:cursor-pointer transition-all delay-150 ease-in-out duration-100">
      {icon}
      <h4 className="font-lato font-normal text-[16px] hidden md:block">
        {label}
      </h4>
    </div>
  );
}

export default SidePanelButton;
