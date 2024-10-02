import { IoSettingsOutline } from "react-icons/io5";

function Settings() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="bg-primary/20 p-3 rounded-md">
        <IoSettingsOutline size="24px" color="#5F5F5F" />
      </div>
      <h4 className="font-lato font-normal text-[16px] text-darkGrey">
        Settings
      </h4>
    </div>
  );
}

export default Settings;
