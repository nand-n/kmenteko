import React from "react";

export default function PipelineDashboard() {
  return (
    <div className="container grid grid-cols-4 gap-3 p-3">
      <div className="bg-[#F5FAFD]">
        <div className="bg-[#96DAFF]">
          <div className="text-sm text-center py-2">ETB</div>
        </div>
        <div className="flex py-5 px-3 justify-between">
          <div className="grid">
            <div className="font font-Open-sans text-lg text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs  text-[#747474]">
              Actual
            </div>
          </div>
          <div className="grid">
            <div className="font font-Open-sans text-lg text-[#0F3A62] ">
              800,000,000
            </div>
            <div className="font font-Open-sans text-xs text-[#747474]">
              Target
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD]">
        <div className="bg-[#96DAFF]">
          <div className="text-sm text-center py-2">USD</div>
        </div>
        <div className="flex py-5 px-3 justify-between">
          <div className="grid">
            <div className="font font-Open-sans text-lg text-[#0F3A62] ">
              800,000
            </div>
            <div className="font font-Open-sans text-xs  text-[#747474]">
              Actual
            </div>
          </div>
          <div className="grid">
            <div className="font font-Open-sans text-lg text-[#0F3A62] ">
              800,000
            </div>
            <div className="font font-Open-sans text-xs text-[#747474]">
              Target
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-md text-[#747474]">
            Pipeline
          </div>
          <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
            800,000,000
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD]">
        <div className="grid p-5">
          <div className="font font-Open-sans text-md text-[#747474]">
            Incentive
          </div>
          <div className="font font-Open-sans text-3xl text-[#0F3A62] ">
            800,000,000
          </div>
        </div>
      </div>
    </div>
  );
}
