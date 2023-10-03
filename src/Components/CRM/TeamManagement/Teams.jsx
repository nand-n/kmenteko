import React from "react";
import Button from "../../COMMON/Button";
import TeamMembers from "./TeamMembers";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import TeamSetting from "./TeamSetting";
import { RiArrowRightSLine } from "react-icons/ri";
import { Tooltip } from "@mui/material";
export default function Teams() {
  const [Setting, setSetting] = useState(null);
  const [style, setStyle] = useState("col-span-12");
  const [Memberstyle, setmemberStyle] = useState("col-span-4");
  const HandleSetting = () => {
    setSetting("setting");
    setStyle("col-span-7");
    setmemberStyle("col-span-6");
  };
  const HandleBack = () => {
    setSetting(null);
    setStyle("col-span-12");
    setmemberStyle("col-span-4");
  };
  return (
    <div>
      <div className="mb-3">
        <Button name={"Add Staff"} />
      </div>
      <div className="grid-container gap-5 grid md:grid-cols-12 ">
        <div className={`${style}`}>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-[#ECF2F7] w-full px-4 font-medium text-left text-gray-500 border  border-gray-200 ">
                      <div className="flex justify-between items-center">
                        <div className="grid">
                          <span className="text-md text-[#0F3A62]">
                            Governmental
                          </span>
                          <div className="flex gap-1">
                            <span className="text-xs">Team Leader:</span>
                            <span className="text-xs text-[#1C1F1B]">
                              Dawit Fikru
                            </span>
                          </div>
                        </div>
                        <div>
                          {Setting !== "setting" ? (
                            <Tooltip title="Setting">
                              <div>
                                <AiFillSetting
                                  className="text-xl cursor-pointer"
                                  onClick={HandleSetting}
                                />
                              </div>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Back">
                              <div>
                                <RiArrowRightSLine
                                  className="text-2xl cursor-pointer"
                                  onClick={HandleBack}
                                />
                              </div>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      {" "}
                      <TeamMembers Memberstyle={Memberstyle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {Setting === "setting" ? (
          <div className="col-span-5">
            <TeamSetting />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
