import { BiSupport } from "react-icons/bi";

function Support() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="bg-primary/20 p-3 rounded-md">
        <BiSupport size="24px" color="#5F5F5F" />
      </div>
      <h4 className="font-lato font-normal text-[16px] text-darkGrey">
        Support
      </h4>
    </div>
  );
}

export default Support;
