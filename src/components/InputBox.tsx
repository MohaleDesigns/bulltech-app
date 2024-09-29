import React from "react";

interface Props {
  placeholder?: string;
  value: string;
}

function InputBox({ placeholder, value }: Props) {
  return (
    <div className="w-full flex flex-col mb-2">
      <div className="w-full rounded-md bg-lightGrey/20 px-3 py-2">
        <input
          type="text"
          id="search"
          name="search"
          placeholder={placeholder}
          value={value}
          className="outline-none text-[15px] text-darkGrey bg-transparent w-full"
        />
      </div>
    </div>
  );
}

export default InputBox;
