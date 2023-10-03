import React from "react";

export default function SDDashboard() {
  return (
    <div>
      <div className="container grid grid-cols-5  gap-3 ">
        <div className="bg-[#F5FAFD] border border-gray">
          <div className="grid justify-center gap-2 p-5">
            <div className="font font-Open-sans text-xs text-[#747474]">
              Projects
            </div>
            <div className="font font-Open-sans text-center text-3xl text-[#0F3A62] ">
              14
            </div>
          </div>
        </div>
        <div className="bg-[#F5FAFD] border border-gray">
          <div className="grid justify-center gap-2 p-5">
            <div className="font font-Open-sans text-xs text-[#747474]">
              Active Tickets
            </div>
            <div className="font font-Open-sans text-center text-3xl text-[#0F3A62] ">
              14
            </div>
          </div>
        </div>
        <div className="bg-[#F5FAFD] border border-gray">
          <div className="grid justify-center gap-2 p-5">
            <div className="font font-Open-sans text-xs text-[#747474]">
              Closed Ticket
            </div>
            <div className="font font-Open-sans text-center text-3xl text-[#0F3A62] ">
              14
            </div>
          </div>
        </div>
        <div className="bg-[#F5FAFD] border border-gray">
          <div className="grid justify-center gap-2 p-5">
            <div className="font font-Open-sans text-xs text-[#747474]">
              Assigned Personnel
            </div>
            <div className="font font-Open-sans text-center text-3xl text-[#0F3A62] ">
              14
            </div>
          </div>
        </div>
        <div className="bg-[#F5FAFD] border border-gray">
          <div className="grid justify-center gap-2 p-5">
            <div className="font font-Open-sans text-xs text-[#747474]">
              Unassigned Personnel
            </div>
            <div className="font font-Open-sans text-center text-3xl text-[#0F3A62] ">
              14
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
