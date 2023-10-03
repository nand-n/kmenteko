import React from "react";
import { useState } from "react";
import Accordions from "../../COMMON/Accordions";
export default function Target() {
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
    <div>
      {data.map((data) => {
        return (
          <Accordions
            title={data?.Name}
            subtitle={data?.Manager}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          >
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
          </Accordions>
        );
      })}
    </div>
  );
}
