import React from "react";

export default function Button(props) {
  return (
    <button
      className="flex-initial text-[#ECF2F7] bg-[#0F3A62] hover:bg-[#06223d] px-5 py-2 w-1/5"
      onClick={(e) => {
        props.action();
      }}
    >
      {props.name}
    </button>
  );
}
