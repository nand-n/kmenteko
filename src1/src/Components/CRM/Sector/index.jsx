import React from "react";
import { useState } from "react";
import Button from "../../COMMON/Button";
import Search from "../../COMMON/Search";
import Sectors from "./Sectors";
import SectorTargetDashBoard from "./SectorTargetDashBoard";
import SectorPerformanceDashBoard from "./SectorPerformanceDashBoard";
import SectorAddTarget from "./SectorAddTarget";
import SectorAddTask from "./SectorAddTask";

export default function Index(props) {
  const [fragments, setfragments] = useState(0);
  const [addTarget, setAddTarget] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const HandleTargetModal = () => {
    setAddTarget(true);
  };
  const HandleTaskModal = () => {
    setAddTask(true);
    console.log(addTask, "surafel");
  };
  return (
    <div className="p-5 grid grid-flow-row gap-5">
      {fragments === 0 ? (
        <SectorTargetDashBoard />
      ) : fragments === 1 ? (
        <SectorPerformanceDashBoard />
      ) : (
        ""
      )}
      {fragments === 0 ? (
        <div class="flex items-center gap-4">
          <Button name={"Add Target"} action={HandleTargetModal} />
          <Search placeholder={"Search sector, manager, employee"} />
        </div>
      ) : fragments === 2 ? (
        <div class="flex items-center gap-4">
          <Button name={"Create Task"} action={HandleTaskModal} />
          <Search placeholder={"Search sector, manager, employee"} />
        </div>
      ) : (
        ""
      )}

      <Sectors setfragments={setfragments} />
      {addTarget ? <SectorAddTarget setAddTarget={setAddTarget} /> : ""}
      {addTask ? <SectorAddTask setAddTask={setAddTask} /> : ""}
    </div>
  );
}
