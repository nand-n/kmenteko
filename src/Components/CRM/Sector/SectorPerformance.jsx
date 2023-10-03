import React from "react";
import { useState } from "react";
import Accordions from "../../COMMON/Accordions";
import CircleProgress from "../../COMMON/CircleProgress";

export default function SectorPerformance() {
  const [Index, setIndex] = useState(false);
  const data = [
    {
      id: 1,
      Name: "Governmental ",
      Manager: "Dawit Fikru",
    },
    {
      id: 2,
      Name: "Financial ",
      Manager: "Samrait Taddesse",
    },
    {
      id: 3,
      Name: "Educational",
      Manager: "kibr Tenaw",
    },
  ];
  return (
    <>
      {data.map((data) => {
        return (
          <Accordions
            title={data.Manager}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          >
            <div className="container grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between bg-[#F5FAFD]">
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
                <CircleProgress percentage={"90"} />
              </div>
              <div className="flex items-center justify-between bg-[#F5FAFD]">
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
                <CircleProgress percentage={"50"} />
              </div>
              <div className="flex items-center justify-between bg-[#F5FAFD]">
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
                <CircleProgress percentage={"10"} />
              </div>
              <div className="flex items-center justify-between bg-[#F5FAFD]">
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
                <CircleProgress percentage={"100"} />
              </div>
            </div>
          </Accordions>
        );
      })}
    </>
  );
}
