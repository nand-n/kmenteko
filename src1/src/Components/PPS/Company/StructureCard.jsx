import React from "react";
import { MdSettings } from "react-icons/md";

const StructureCard = () => {
  return (
    <div className="bg-[#ECF2F7] min-w-[304px] border mx-4 border-outline px-2 py-4 inline-block">
      <div className="flex justify-end">
        <div>
          <MdSettings color="#0F3A62" size="24px" />
        </div>
      </div>
      <div className="flex px-2 pb-2 items-center justify-center ">
        <h4 className="text-black100 text-sm">Business Development Director</h4>
      </div>
    </div>
  );
};

export default StructureCard;
