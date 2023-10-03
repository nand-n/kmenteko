import React, { useState } from "react";
import CreateTicket from "./CreateTicket";
import Tickets from "./Tickets";
import Button from "../../../COMMON/Button";
import Search from "../../../COMMON/Search";
import TicketDetail from "./TicketDetail";

export default function Index() {
  const [fragments, setfragments] = useState(null);
  const [modal, setModal] = useState(false);
  function HandleAdd() {
    setModal(true);
  }
  return (
    <>
      {fragments === null ? (
        <div className="p-5 grid grid-flow-row gap-5">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="flex gap-4 items-center">
              <Button name={"Create Ticket"} action={HandleAdd} />
              <Search
                placeholder={"Search for client, project or ticket number"}
              />
            </div>
          </div>
          <div>
            <Tickets page={5} setfragments={setfragments} />
          </div>
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
