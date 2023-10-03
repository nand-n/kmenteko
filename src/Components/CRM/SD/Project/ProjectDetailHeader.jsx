import React from "react";

export default function ProjectDetailHeader() {
  return (
    <div className="container grid grid-cols-7 gap-3 mb-3">
      <div className="bg-[#F5FAFD] border border-gray col-span-2">
        <div className="grid gap-2 px-4 py-2">
          <div className="font font-Open-sans text-[14px] text-[#0F3A62]">
            Productivity Enhancement Platform (PEP)
          </div>
          <div className="flex justify-between mt-[3px]">
            <div>
              <div className="font font-Open-sans  text-xs text-[#A9ABA9] ">
                Project
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD] border border-gray col-span-2">
        <div className="grid gap-2 px-4 py-3">
          <div className="font font-Open-sans text-[14px] text-[#0F3A62]">
            IE Networks
          </div>
          <div className="flex justify-between mt-[3px]">
            <div>
              <div className="font font-Open-sans  text-xs text-[#A9ABA9] ">
                Client
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD] border border-gray col-span-1">
        <div className="grid  px-4 py-4 justify-center">
          <div className="font font-Open-sans text-center text-[14px] text-[#0F3A62]">
            4/5
          </div>
          <div className="flex justify-between mt-[3px]">
            <div>
              <div className="font font-Open-sans   text-xs text-[#A9ABA9] ">
                Tickets Used
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD] border border-gray col-span-1">
        <div className="grid  px-4 py-4 justify-center">
          <div className="font font-Open-sans text-center text-[14px] text-[#0F3A62]">
            Jul 11 2022
          </div>
          <div className="flex justify-between mt-[3px]">
            <div>
              <div className="font font-Open-sans text-center   text-xs text-[#A9ABA9] ">
                Start Date
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFD] border border-gray col-span-1">
        <div className="grid  px-4 py-4 justify-center">
          <div className="font font-Open-sans text-center text-[14px] text-[#0F3A62]">
            Aug 11 2023
          </div>
          <div className="flex justify-between mt-[3px]">
            <div>
              <div className="font font-Open-sans text-center text-xs text-[#A9ABA9] ">
                End Date
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
