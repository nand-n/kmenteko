import React from "react";
import { useState } from "react";
import Button from "../../COMMON/Button";
import Search from "../../COMMON/Search";
import TaskDashBoard from "./TargetDashBoard";
import Sectors from "./Sectors";
import PerformanceDashBoard from "./PerformanceDashBoard";
import AddTarget from "./AddTarget";
import AddTask from "./AddTask";

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
        <TaskDashBoard />
      ) : fragments === 1 ? (
        <PerformanceDashBoard />
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
      {addTarget ? <AddTarget setAddTarget={setAddTarget} /> : ""}
      {addTask ? <AddTask setAddTask={setAddTask} /> : ""}
    </div>
  );
}
