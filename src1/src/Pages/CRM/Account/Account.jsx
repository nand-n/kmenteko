import React, { useState } from "react";
import Index from "..";
import Tab from "../../../Components/COMMON/Tab";
import { AiFillSetting } from "react-icons/ai";
import Customer from "../../../Components/CRM/Customer";
import Contact from "../../../Components/CRM/Contact/Index.jsx";

export default function Account() {
  const AccountTabData = [
    {
      label: "Customer",
      available: 0,
      content: <Customer />,
    },
    {
      label: "Contact",
      available: 1,
      content: <Contact />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };
  return (
    <Index>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col  justify-start">
        <h1 className="text-white font px-2 text-3xl">Account</h1>
        <div className="flex justify-between items-baseline">
          <Tab
            activeTab={activeTabIndex}
            data={AccountTabData}
            handlechange={handleTabChange}
          />
          <AiFillSetting className="text-xl text-white" />
        </div>
      </div>

      <div>{AccountTabData[activeTabIndex]?.content} </div>
    </Index>
  );
}
