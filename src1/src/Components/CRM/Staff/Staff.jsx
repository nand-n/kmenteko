import React from "react";
import { useState } from "react";
import SettingTabs from "../../COMMON/SettingTabs";
import StaffActivity from "./StaffActivity";
import StaffPerformanceDashBoard from "./StaffPerformanceDashBoard";
import StaffTargetDashBoard from "./StaffTargetDashBoard";
import StaffTasks from "./StaffTasks";

export default function Staff(props) {
  const LeadTabs = [
    {
      label: "Target",
      available: 0,
      content: <StaffTargetDashBoard />,
    },
    {
      label: "Performance",
      available: 1,
      content: <StaffPerformanceDashBoard />,
    },
    {
      label: "Tasks",
      available: 1,
      content: <StaffTasks />,
    },
    {
      label: "Activity",
      available: 1,
      content: <StaffActivity />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
    props?.setfragments(idx);
  };
  return (
    <div className="grid-container grid grid-cols-12 gap-4">
      <div className="col-span-8">{LeadTabs[activeTabIndex]?.content}</div>
      <div className="col-span-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className=" w-full inline-block align-middle">
              <div className="overflow-hidden border">
                <div className="min-w-full divide-y">
                  <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                    Activities
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
  );
}
