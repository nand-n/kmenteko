import React from "react";

export default function Project() {
  return (
    <div className="container grid grid-cols-11 gap-3 mb-3">
      <div className="bg-[#F5FAFD] border border-gray col-span-4">
        <div className="grid justify-center gap-2 p-4">
          <div className="font font-Open-sans text-md text-[#1C1F1B]">
            Mary Jacobi
          </div>
          <div className="font font-Open-sans text-xs text-[#A9ABA9]">
            Kenneth.Beahan@hotmail.com
          </div>
          <div className="font font-Open-sans  text-xs font-bold text-[#0F3A62] ">
            Owner
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD] border border-gray col-span-4">
        <div className="grid justify-center gap-2 py-5 px-5">
          <div className="font font-Open-sans text-md text-[#1C1F1B]">
            ERA-MOT Data Center
          </div>
          <div className="font font-Open-sans font-bold text-xs text-[#0F3A62]">
            Project
          </div>
        </div>
      </div>

      <div className="bg-[#F5FAFD] border border-gray col-span-3">
        <div className="grid justify-center gap-2 py-5 px-5">
          <div className="font font-Open-sans text-md text-[#1C1F1B]">
            Thu Jan 05 2023
          </div>
          <div className="font font-Open-sans font-bold text-xs text-[#0F3A62]">
            Date
          </div>
        </div>
      </div>
    </div>
  );
}
