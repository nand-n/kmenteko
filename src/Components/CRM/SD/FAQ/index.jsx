import React, { useState } from "react";
import Button from "../../../COMMON/Button";
import CircleProgress from "../../../COMMON/CircleProgress";
import FaqAccordion from "../../../COMMON/FaqAccordion";
import Search from "../../../COMMON/Search";
import Faqs from "./Faqs";

export default function Index() {
  const [fragments, setfragments] = useState(null);
  console.log(fragments, "surafel");
  const [modal, setModal] = useState(false);
  function HandleAdd() {
    setModal(true);
  }

  return (
    <>
      {fragments === null ? (
        <>
          <div className="p-5 grid grid-flow-row gap-5">
            <div class="flex items-center gap-4">
              <Button name={"Answer Question"} action={HandleAdd} />
              <Search placeholder={"Search for client, project"} />
            </div>
          </div>
          <div className="p-5">
            <Faqs />
          </div>
        </>
      ) : fragments === "detail" ? (
        <div>detail</div>
      ) : (
        ""
      )}
    </>
  );
}
