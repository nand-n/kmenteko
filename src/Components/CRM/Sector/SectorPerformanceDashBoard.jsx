import React from "react";
import CircleProgress from "../../COMMON/CircleProgress";

export default function SectorPerformanceDashBoard() {
  let test1 = "100";
  let test = "30";

  return (
    <div className="container grid grid-cols-4 gap-3">
      <div className="flex items-center bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual ETB
          </div>
          <div className="grid items-baseline gap-1">
            <div className="font font-Open-sans text-xl text-[#0F3A62] ">
              178,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
        <CircleProgress percentage={test1} />
      </div>
      <div className="flex items-center bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual ETB
          </div>
          <div className="grid items-baseline gap-1">
            <div className="font font-Open-sans text-xl text-[#0F3A62] ">
              178,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
        <CircleProgress percentage={test} />
      </div>
      <div className="flex items-center bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual ETB
          </div>
          <div className="grid items-baseline gap-1">
            <div className="font font-Open-sans text-xl text-[#0F3A62] ">
              178,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
        <CircleProgress />
      </div>
      <div className="flex items-center bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-xs text-[#747474]">
            Annual ETB
          </div>
          <div className="grid items-baseline gap-1">
            <div className="font font-Open-sans text-xl text-[#0F3A62] ">
              178,000,000
            </div>
            <div className="font font-Open-sans text-xs"> Birr </div>
          </div>
        </div>
        <CircleProgress />
      </div>
    </div>
  );
}
