import React from "react";
import OurTeam from "./OurTeam";
import PendingTasks from "./PendingTasks";

export default function PendindandOurTeam() {
  return (
    <div className="p-5">
      <div className="grid-container grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <PendingTasks />
        </div>
        <div className="col-span-4">
          <OurTeam />
        </div>
      </div>
    </div>
  );
}
