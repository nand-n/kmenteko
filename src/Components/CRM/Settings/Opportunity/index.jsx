import React, { useState } from "react";
import LeadStageSetting from "./LeadStageSetting";
import SettingTabs from "../../../COMMON/SettingTabs";
import Button from "../../../COMMON/Button";
import LeadField from "./LeadField";
export default function Index() {
  const LeadTabs = [
    {
      label: "Lead Stage",
      available: 0,
      content: <LeadStageSetting />,
    },
    {
      label: "Lead Field",
      available: 1,
      content: <LeadField />,
    },
    {
      label: "Deal Stage",
      available: 1,
      content: <LeadStageSetting />,
    },
    {
      label: "Deal Field",
      available: 1,
      content: <LeadStageSetting />,
    },
    {
      label: "Marketing",
      available: 1,
      content: <LeadStageSetting />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  return (
    <div className="p-5">
      <div className="mb-5">
        <Button name={"Add Lead Stage"} />
      </div>
      <div className="grid-container grid grid-cols-12 gap-4">
        <div className="col-span-8">{LeadTabs[activeTabIndex]?.content}</div>
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className=" w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Setting
                    </div>
                    <div className="p-5">
                      <SettingTabs
                        activeTab={activeTabIndex}
                        data={LeadTabs}
                        handlechange={handleTabChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
