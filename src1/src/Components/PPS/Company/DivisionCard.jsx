import React from "react";
import { MdSettings, MdKeyboardArrowRight } from "react-icons/md";

const DivisionCard = ({ div, settings, handleSettings }) => {
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
          return <Department department={department} />;
        })}
      </div>
    </div>
  );
};

export const Department = ({ department }) => {
  return (
    <div className="bg-[#ECF2F7] px-4 flex-1 py-4">
      <h2 className="text-black100 text-sm">{department.name}</h2>
      <div className="flex gap-1">
        <span className="text-[#A9ABA9] text-[12px] ">Manager : </span>
        <p className="text-black100 text-[12px]">{department.manager}</p>
      </div>
    </div>
  );
};

export default DivisionCard;
