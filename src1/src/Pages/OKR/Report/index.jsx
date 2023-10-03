import { React, useState } from "react";
import OKRIndex from "..";
import Tab from "../../../Components/COMMON/Tab";

const Timesheet = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  const CompanyTabData = [
    {
      label: "Dashboard",
      // content: <TimesheetDashboard />,
    },
    {
      label: "Engagement",
      // content: <Attendance />,
    },
    {
      label: "KPI",
      // content: <Leave />,
    },
    {
      label: "Task",
      // content: <Holiday />,
    },
  ];

  return (
    <OKRIndex>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col items-start justify-start">
        <h1 className="text-white font px-2 text-3xl">Reports</h1>
        <Tab
          activeTab={activeTabIndex}
          data={CompanyTabData}
          handlechange={handleTabChange}
        />
      </div>
      <div>{CompanyTabData[activeTabIndex]?.content}</div>
    </OKRIndex>
  );
};

export default Timesheet;
