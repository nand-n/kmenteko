import React from "react";
import PreviousPage from "../../../COMMON/PreviousPage";
import Escalation from "./Escalation";
import Project from "./Project";
import Ticket from "./Ticket";

export default function ProjectTicketEscalation(props) {
  return (
    <div className="p-5">
      <PreviousPage setfragments={props?.setfragments} />
      <div className="grid-container grid grid-cols-12 gap-3">
        <div className="col-span-8 ">
          <Project />
          <Ticket />
        </div>
        <div className="col-span-4">
          <Escalation />
        </div>
      </div>
    </div>
  );
}
