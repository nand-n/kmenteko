import React, { useState } from "react";
import Button from "../../COMMON/Button";
import SettingTabs from "../../COMMON/SettingTabs";
import AllCampaign from "./AllCampaign";
import RegisterEmailModal from "./RegisterEmailModal";

export default function Index() {
  const LeadTabs = [
    {
      label: "All Campaign",
      available: 0,
      content: <AllCampaign />,
    },
    {
      label: "Active",
      available: 1,
      content: <AllCampaign />,
    },
    {
      label: "Draft",
      available: 1,
      content: <AllCampaign />,
    },
    {
      label: "Archived",
      available: 1,
      content: <AllCampaign />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };
  const [registerEmail, setRegisterEmail] = useState(false);
  function HandleModal() {
    setRegisterEmail(true);
    console.log(registerEmail, "you clicked meeee");
  }
  return (
    <>
      <div className="p-5">
        <Button name={"New Campaign"} action={HandleModal} />
        <div className="grid-container grid grid-cols-12">
          <div className="col-span-8">{LeadTabs[activeTabIndex]?.content}</div>
          <div className="col-span-4">
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
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
      {registerEmail ? (
        <RegisterEmailModal setRegisterEmail={setRegisterEmail} />
      ) : (
        ""
      )}
    </>
  );
}
