import React from "react";

type Props = {
  id: string;
  onchange: any;
  label: string;
  type?: string;
  value: string;
};

const Input = (props: Props) => {
  return (
    <div className="relative">
      <input
        onChange={props.onchange}
        id={props.id}
        value={props.value}
        className="
  block
  rounded-md
  px-6
  pt-6
  pb-1
  bg-neutral-700
  w-full
  text-white
  text-lg
  appearance-none
  focus:outline-none
  focus:ring-0
  peer
  "
        placeholder=" "
      />
      <label
        htmlFor={props.id}
        className="
      absolute
      text-lg
      text-zinc-400
      duration-150
      transform
      -translate-y-3
      scale-75
      top-4
      z-10
      origin-[0]
      left-7
      peer-placeholder-shown:-translate-y-0 
      peer-placeholder-shown:scale-100
      peer-focus:-translate-y-3
      peer-focus:scale-75
      "
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
