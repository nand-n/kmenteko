import React from "react";
import { MdSettings, MdKeyboardArrowRight } from "react-icons/md";

const TeamCard = ({ div, settings, handleSettings }) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="bg-[#ECF2F7] border px-4 py-2 items-center border-outline flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-primary text-sm">{div.name}</h4>
          <div className="flex items-center gap-1">
            <span className="text-[#A9ABA9] text-[12px] ">Director :</span>
            <p className="text-black100 text-[12px]">{div.director}</p>
          </div>
        </div>
        <button onClick={handleSettings}>
          {settings ? (
            <MdKeyboardArrowRight size="22px" color="#1C1F1B" />
          ) : (
            <MdSettings size="22px" color="#1C1F1B" />
          )}
        </button>
      </div>
      <div className="bg-white border flex flex-wrap gap-2 border-outline px-6 py-6">
        {div.departments.map((department) => {
          return <Employee department={department} />;
        })}
      </div>
    </div>
  );
};

export const Employee = ({ department }) => {
  return (
    <div className="bg-[#ECF2F7] min-w-[300px] border mx-2 border-outline px-2 py-4 gap-1 inline-block">
      <div className="flex gap-2 items-center">
        <img
          className="h-14 w-14 rounded-full"
          src="https://source.unsplash.com/80x80?face"
          alt="ceo profile"
        />
        <div className="flex items-start justify-start flex-col">
          <h4 className="text-black100">Abdusemed Mohammad</h4>
          <p className="text-[#747474] text-[12px]">meried@ienetworks.com</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
