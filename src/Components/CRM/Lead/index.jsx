import React, { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { MdViewQuilt } from "react-icons/md";
import Button from "../../COMMON/Button";
import KanbanTab from "../../COMMON/KanbanTab";
import Search from "../../COMMON/Search";
import AddLead from "./AddLead";
import LeadKanban from "./LeadKanban";
import LeadTable from "./LeadTable";

export default function Index() {
  const LeadTabs = [
    {
      label: (
        <span className="text-xl ">
          <AiFillDatabase className="text-xl " />
        </span>
      ),
      available: 0,
      content: <LeadTable />,
    },
    {
      label: (
        <span className="text-xl ">
          <MdViewQuilt className="text-x" />
        </span>
      ),
      available: 1,
      content: <LeadKanban />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };
  const [fragments, setfragments] = useState(null);
  function HandleAdd() {
    setfragments("create");
  }
  return (
    <>
      {fragments === null ? (
        <div className="p-5 grid grid-flow-row gap-5">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="flex gap-4 items-center">
              <Button name={"Register Lead"} action={HandleAdd} />
              <Search placeholder={"search lead, owner, contact person"} />
              <KanbanTab
                activeTab={activeTabIndex}
                data={LeadTabs}
                handlechange={handleTabChange}
              />
            </div>
          </div>
          <div>{LeadTabs[activeTabIndex]?.content} </div>
        </div>
      ) : fragments === "create" ? (
        <AddLead setfragments={setfragments} />
      ) : (
        ""
      )}
    </>
  );
}
