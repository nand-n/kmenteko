import React from "react";
import { MdSettings } from "react-icons/md";

const ManagerialCard = () => {
  return (
    <div className="bg-[#ECF2F7] min-w-[304px] border mx-4 border-outline px-6 py-4 gap-1 inline-block">
      <div className="flex justify-end">
        <div>
          <MdSettings color="#0F3A62" size="24px" />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <img
          className="h-14 w-14 rounded-full"
          src="https://source.unsplash.com/80x80?face"
          alt="ceo profile"
        />
        <div className="flex w-[80%] items-start justify-start flex-col">
          <h4 className="text-black100">Abdusemed Mohammad</h4>
          <p className="text-[#747474] text-[12px]">meried@ienetworks.com</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerialCard;
