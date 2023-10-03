import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function ProjectContainer(props) {
  let project = [
    { name: "ERA", date: " Oct 27 2023" },
    { name: "MOTL", date: " Oct 12 2023" },
    { name: "BDU", date: " Oct 30 2023" },
    { name: "ETHSwitch", date: " Oct 07 2023" },
  ];
  const HandleDetail = (e) => {
    props?.setfragments("detail");
  };
  return (
    <div className="container grid grid-cols-12 gap-3 mb-3">
      {project?.map((items) => (
        <div
          className="bg-[#F5FAFD] border border-gray col-span-4"
          onClick={HandleDetail}
        >
          <div className="grid gap-2 p-4">
            <div className="font font-Open-sans text-md text-[#0F3A62]">
              {items?.name}
            </div>
            <div className="flex justify-between mt-[23px]">
              <div>
                <div className="font font-Open-sans text-md text-[#1C1F1B]">
                  {items?.date}
                </div>
                <div className="font font-Open-sans  text-xs text-[#A9ABA9] ">
                  Expiry Date
                </div>
              </div>
              <RiDeleteBin6Fill className="text-[24px] text-[#0F3A62]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
