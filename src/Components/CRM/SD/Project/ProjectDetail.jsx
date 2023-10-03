import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ActivityTab from "../../../COMMON/ActivityTab";
import Button from "../../../COMMON/Button";
import PreviousPage from "../../../COMMON/PreviousPage";
import Search from "../../../COMMON/Search";
import CreateTicket from "../ActiveTicket/CreateTicket";
import TicketDetail from "../ActiveTicket/TicketDetail";
import Tickets from "../ActiveTicket/Tickets";
import ProjectDetailHeader from "./ProjectDetailHeader";

export default function ProjectDetail(props) {
  const [fragments, setfragments] = useState(null);
  console.log(fragments, "surafel");
  const TabData = [
    {
      label: "Active Tickets",
      available: 0,
      content: <Tickets setfragments={setfragments} page={3} />,
    },
    {
      label: "Closed Tickets",
      available: 1,
      content: <Tickets page={3} />,
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };
  const [modal, setModal] = useState(false);
  const HandleAdd = () => {
    setModal(true);
    console.log("hahhaha");
  };

  return (
    <>
      {fragments === null ? (
        <div className="p-5">
          <PreviousPage setfragments={props?.setfragments} />
          <ProjectDetailHeader />
          <ActivityTab
            activeTab={activeTabIndex}
            data={TabData}
            handlechange={handleTabChange}
          />
          <div className="flex gap-4 items-center my-4">
            <Button name={"Create Ticket"} action={HandleAdd} />
            <Search
              placeholder={"Search for client, project or ticket number"}
            />
          </div>
          <div>{TabData[activeTabIndex]?.content} </div>
        </div>
      ) : fragments === "detail" ? (
        <TicketDetail setfragments={setfragments} />
      ) : (
        ""
      )}
      {modal ? <CreateTicket setModal={setModal} /> : ""}
    </>
  );
}
