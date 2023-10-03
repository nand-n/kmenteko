import React from "react";
import PreviousPage from "../../../COMMON/PreviousPage";
import Communication from "./Communication";
import ProjectTicketEscalation from "./ProjectTicketEscalation";

export default function TicketDetail(props) {
  return (
    <div>
      <ProjectTicketEscalation setfragments={props?.setfragments} />
      <Communication />
    </div>
  );
}
