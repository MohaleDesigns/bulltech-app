import React from "react";

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: any;
}

function InputBox({ label, placeholder, value, onChange }: Props) {
  return (
    <div className="w-full flex flex-col">
      <h4 className="text-[15px] text-darkGrey font-normal">{label}</h4>

      <div className="w-full rounded-md bg-lightGrey/20 px-3 py-2">
        <input
          type="text"
          id="search"
          name="search"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none text-[15px] text-darkGrey bg-transparent w-full"
        />
      </div>
    </div>
  );
}

export default InputBox;
