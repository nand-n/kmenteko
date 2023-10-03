import React, { useState } from "react";
import Button from "../../../COMMON/Button";
import Search from "../../../COMMON/Search";
import CreateProject from "./CreateProject";
import ProjectContainer from "./ProjectContainer";
import ProjectDetail from "./ProjectDetail";

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
        <div className="p-5 grid grid-flow-row gap-5">
          <div class="flex items-center gap-4">
            <Button name={"Create Project"} action={HandleAdd} />
            <Search placeholder={"Search for client, project"} />
          </div>
          <ProjectContainer setfragments={setfragments} />
        </div>
      ) : fragments === "detail" ? (
        <ProjectDetail setfragments={setfragments} />
      ) : (
        ""
      )}
      {modal ? <CreateProject setModal={setModal} /> : ""}
    </>
  );
}
