import React from "react";
import { useState } from "react";
import CompletedTasks from "./SectorCompletedTasks";

export default function SectorAssignedTasks() {
  const [checked, setchecked] = useState("Completed");
  function onChangeValue(event) {
    setchecked(event.target.value);
  }
  return (
    <>
      <div
        className="flex pt-3 flex-row items-center justify-center gap-3"
        onChange={onChangeValue}
      >
        <input
          checked={checked === "In Progress"}
          id="default-radio-1"
          type="radio"
          value="In Progress"
          name="default-radio"
          class="w-4 h-4 accent-[#9EA10F]"
        />
        <label
          for="default-radio-1"
          class="ml-1 text-sm font-medium text-[#9EA10F] dark:text-gray-300"
        >
          In Progress
        </label>

        <input
          checked={checked === "Completed"}
          id="default-radio-2"
          type="radio"
          value="Completed"
          name="default-radio"
          class="w-4 h-4 accent-[#0FA16D]"
        />
        <label
          for="default-radio-2"
          class="ml-1 text-sm font-medium text-[#0FA16D] dark:text-gray-300"
        >
          Completed
        </label>
      </div>
      {checked === "Completed" ? (
        <div className="px-5 py-3">
          <CompletedTasks />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
