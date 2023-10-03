import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import SettingSidebar from "../../COMMON/SettingSidebar";
import EmergencyContact from "./EmergencyContact";
import EmployeeDocuments from "./EmployeeDocuments";
import EmployeeInformation from "./EmployeeInformation";
import PersonalInformation from "./PersonalInformation";

const AddEmployee = ({ hideAddEmployee }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  const CompanyTabData = [
    {
      label: "Employee Information",
      content: <EmployeeInformation />,
    },
    {
      label: "Personal Information",
      content: <PersonalInformation />,
    },
    {
      label: "Employee Documents",
      content: <EmployeeDocuments />,
    },
    {
      label: "Emergency Contact",
      content: <EmergencyContact />,
    },
  ];

  return (
    <div className="px-8 py-2 mt-8 flex flex-col">
      <button
        onClick={hideAddEmployee}
        className="bg-[#0F3A62] px-6 py-2 text-sm flex items-center gap-3 text-white self-start hover:cursor-pointer"
      >
        <MdArrowBack color="white" size="22px" />
        Previous page
      </button>

      <div className="grid grid-cols-12 gap-2 mt-6">
        <div className="col-span-8">
          {CompanyTabData[activeTabIndex]?.content}
        </div>
        <div className="bg-surface sticky top-28 h-fit col-span-4 py-4 px-4 flex flex-col items-start justify-start border border-outline">
          <SettingSidebar
            activeTab={activeTabIndex}
            data={CompanyTabData}
            handlechange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
