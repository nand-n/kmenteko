import React, { useState } from "react";
import Index from "..";
import Tab from "../../../Components/COMMON/Tab";
import Lead from "../../../Components/CRM/Lead";
import Deal from "../../../Components/CRM/Deal";
import Setting from "../../../Components/CRM/Settings/Opportunity";
import MarketingCampaign from "../../../Components/CRM/MarketingCampaign";
import MyDashboard from "../../../Components/CRM/MyDashBoard";
import { AiFillSetting } from "react-icons/ai";

export default function Opportunity() {
  const OpportunityTabData = [
    {
      label: "Lead",
      available: 0,
      content: <Lead />,
    },
    {
      label: "Deal",
      available: 1,
      content: <Deal />,
    },
    {
      label: "Marketing Campaign",
      available: 3,
      content: <MarketingCampaign />,
    },
    {
      label: "My Dashboard",
      available: 4,
      content: <MyDashboard />,
    },
    {
      label: <AiFillSetting className="text-xl text-white" />,
      available: 5,
      content: <Setting />,
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
          <h1 className="text-white font px-2 text-3xl">Opportunity</h1>
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
