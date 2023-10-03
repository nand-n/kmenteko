import React, { useState } from "react";
import Index from "..";
import Tab from "../../../Components/COMMON/Tab";
import Sector from "../../../Components/CRM/Sector";
import Staff from "../../../Components/CRM/Staff";
import Organization from "../../../Components/CRM/Organization";
import TeamManagement from "../../../Components/CRM/TeamManagement";

export default function Company() {
  const OpportunityTabData = [
    {
      label: "Organization",
      available: 0,
      content: <Organization />,
    },
    {
      label: "Sector",
      available: 1,
      content: <Sector />,
    },
    {
      label: "Staff",
      available: 3,
      content: <Staff />,
    },
    {
      label: "Team Management",
      available: 4,
      content: <TeamManagement />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };
  return (
    <Index navName={"Company"}>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col  justify-start">
        <div className="flex flex-row items-center">
          <h1 className="text-white font px-2 text-3xl">Company</h1>
        </div>

        <div className="flex justify-between items-baseline">
          <Tab
            activeTab={activeTabIndex}
            data={OpportunityTabData}
            handlechange={handleTabChange}
          />
        </div>
      </div>

      <div>{OpportunityTabData[activeTabIndex]?.content} </div>
    </Index>
  );
}
