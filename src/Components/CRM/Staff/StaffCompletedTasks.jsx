import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function StaffCompletedTasks() {
  return (
    <div className="grid gap-3">
      <div className="bg-[#ECF2F7]">
        <div className="bg-[#606060]">
          <div className="text-xs font-normal text-[#FFFFFF] p-2">
            Finalize IE Networks digital marketing campaign including the events
          </div>
        </div>
        <div className="flex py-5 px-3 justify-between">
          <div className="grid">
            <div className="font font-Open-sans text-sm text-[#0F3A62] ">
              Oct 12 2022
            </div>
            <div className="font font-Open-sans text-xs  text-[#747474]">
              Due Date
            </div>
          </div>
          <div className="grid">
            <div className="font font-Open-sans text-sm text-[#0F3A62] ">
              Meried Bekele
            </div>
            <div className="font font-Open-sans text-xs text-[#747474]">
              Create By
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="bg-[#606060] rounded-full p-2">
            <div className="flex gap-3 justify-center ">
              <BsFillCheckCircleFill className="text-white text-xl" />
              <RiDeleteBin6Fill className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECF2F7]">
        <div className="bg-[#606060]">
          <div className="text-xs font-normal text-[#FFFFFF] p-2">
            Finalize IE Networks digital marketing campaign including the events
          </div>
        </div>
        <div className="flex py-5 px-3 justify-between">
          <div className="grid">
            <div className="font font-Open-sans text-sm text-[#0F3A62] ">
              Oct 12 2022
            </div>
            <div className="font font-Open-sans text-xs  text-[#747474]">
              Due Date
            </div>
          </div>
          <div className="grid">
            <div className="font font-Open-sans text-sm text-[#0F3A62] ">
              Meried Bekele
            </div>
            <div className="font font-Open-sans text-xs text-[#747474]">
              Create By
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="bg-[#606060] rounded-full p-2">
            <div className="flex gap-3 justify-center ">
              <BsFillCheckCircleFill className="text-white text-xl" />
              <RiDeleteBin6Fill className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
