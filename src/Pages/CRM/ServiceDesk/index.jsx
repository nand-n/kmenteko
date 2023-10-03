import React, { useState } from "react";
import Index from "..";
import Tab from "../../../Components/COMMON/Tab";
import Staff from "../../../Components/CRM/Staff";
import SupportTeam from "../../../Components/CRM/SD/Support Team";
import Dashboard from "../../../Components/CRM/SD/Dashboard";
import ActiveTicket from "../../../Components/CRM/SD/ActiveTicket";
import Project from "../../../Components/CRM/SD/Project";
import FAQ from "../../../Components/CRM/SD/FAQ";

export default function ServiceDesk() {
  const OpportunityTabData = [
    {
      label: "Dashboard",
      available: 0,
      content: <Dashboard />,
    },
    {
      label: "Active Tickets",
      available: 1,
      content: <ActiveTicket />,
    },
    {
      label: "Ticket History",
      available: 3,
      content: <Staff />,
    },
    {
      label: "Project",
      available: 4,
      content: <Project />,
    },
    {
      label: "FAQ",
      available: 4,
      content: <FAQ />,
    },
    {
      label: "Support Team",
      available: 4,
      content: <SupportTeam />,
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
          <h1 className="text-white font px-2 text-3xl">Service Desk</h1>
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
