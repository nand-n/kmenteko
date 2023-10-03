import React from "react";

export default function StaffTargetDashBoard() {
  return (
    <div className="container grid grid-cols-2 gap-3 ">
      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual ETB Target
          </div>
          <div className="flex items-baseline gap-1">
            <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Quarter ETB Target
          </div>
          <div className="flex items-baseline gap-1">
            <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual USD Target
          </div>
          <div className="flex items-baseline gap-1">
            <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs"> USD </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Quarter USD Target
          </div>
          <div className="flex items-baseline gap-1">
            <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs"> USD </div>
          </div>
        </div>
      </div>
    </div>
  );
}
