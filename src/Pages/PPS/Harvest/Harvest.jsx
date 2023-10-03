import React, { useState } from "react";
import PPSIndex from "..";
// import { React, useState } from "react";
import OKRIndex from "..";
import Tab from "../../../Components/COMMON/Tab";
import OrganizationProgress from "../../../Components/OKR/Progress/organizationProgress";
import organizationOkr from "./organizationOkr.json";
import StatusBar from "../../../Components/OKR/Progress/statusBar";

function Harvest() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  const CompanyTabData = [
    {
      label: "Cage",
      content: <OrganizationProgress data={organizationOkr} />,
    },
    {
      label: "Incubation",
      content: <StatusBar />,
    },
    {
      label: "Processed",
      // content: <Leave />,
    },
    {
      label: "Packaged",
      // content: <Holiday />,
    },
    {
      label: "Transported",
      // content: <Holiday />,
    },
  ];

  return (
    <OKRIndex>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col items-start justify-start">
        <h1 className="text-white font px-2 text-3xl">Progress</h1>
        <Tab
          activeTab={activeTabIndex}
          data={CompanyTabData}
          handlechange={handleTabChange}
        />
      </div>
      <div>{CompanyTabData[activeTabIndex]?.content}</div>
    </OKRIndex>
  );
}

export default Harvest;
