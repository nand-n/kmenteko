import React from "react";
import { MdArrowBack } from "react-icons/md";

export default function PreviousPage(props) {
  const handleDetail = () => {
    props.setfragments(null);
  };
  return (
    <button
      onClick={handleDetail}
      className="bg-[#0F3A62] px-6 py-2 text-sm flex items-center gap-3 text-white self-start hover:cursor-pointer mb-3"
    >
      <MdArrowBack color="white" size="22px" />
      Previous page
    </button>
  );
}
