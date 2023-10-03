import React, { useState } from "react";
import Index from "..";
import Tab from "../../../Components/COMMON/Tab";
import Vendors from "../../../Components/CRM/Vendor";
import Products from "../../../Components/CRM/Product";

export default function Stock() {
  const OpportunityTabData = [
    {
      label: "Vendor",
      available: 0,
      content: <Vendors />,
    },
    {
      label: "Product",
      available: 1,
      content: <Products />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  return (
    <Index>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col  justify-start">
        <h1 className="text-white font px-2 text-3xl">Stock</h1>
        <div className="flex justify-between items-baseline">
          <Tab
            activeTab={activeTabIndex}
            data={OpportunityTabData}
            handlechange={handleTabChange}
          />
        </div>
      </div>
      <div>{OpportunityTabData[activeTabIndex]?.content}</div>
    </Index>
  );
}
