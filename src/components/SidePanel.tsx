import React from "react";
import Logo from "../assets/logo.png";
import LogoIcon from "../assets/logo-icon.png";
import SidePanelButton from "./SidePanelButton";
import { MdOutlineDashboard, MdOutlinePeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

import PrimaryButton from "./PrimaryButton";

function SidePanel() {
  return (
    <div className="flex flex-col gap-[50px] h-full p-[10px]">
      <img src={Logo} alt="logo" className="hidden md:block" />
      <img src={LogoIcon} alt="logo" className="md:hidden" />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[10px]">
          <SidePanelButton
            label="Dashboard"
            icon={<MdOutlineDashboard size="24px" color="#5F5F5F" />}
          />
          <SidePanelButton
            label="Employers"
            icon={<MdOutlinePeopleAlt size="24px" color="#5F5F5F" />}
          />
          <SidePanelButton
            label="Employees"
            icon={<MdOutlinePeopleAlt size="24px" color="#5F5F5F" />}
          />
          <SidePanelButton
            label="Notifications"
            icon={<MdOutlineNotificationsNone size="24px" color="#5F5F5F" />}
          />
          <SidePanelButton
            label="Support"
            icon={<BiSupport size="24px" color="#5F5F5F" />}
          />
          <SidePanelButton
            label="Settings"
            icon={<IoSettingsOutline size="24px" color="#5F5F5F" />}
          />
        </div>

        <PrimaryButton
          label="Logout"
          icon={<BiLogOut size="24px" color="white" />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default SidePanel;
