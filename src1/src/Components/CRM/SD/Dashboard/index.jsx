import React from "react";
import PendindandOurTeam from "./PendindandOurTeam";
import SDDashboard from "./SDDashboard";

export default function Index() {
  return (
    <>
      <div className="p-5 grid grid-flow-row gap-5">
        <SDDashboard />
      </div>
      <div>
        <PendindandOurTeam />
      </div>
    </>
  );
}
