import React from "react";
import { useState } from "react";
import Button from "../../COMMON/Button";
import Staff from "./Staff";
import StaffAddTarget from "./StaffAddTarget";

export default function Index(props) {
  const [fragments, setfragments] = useState(0);
  const [addTarget, setAddTarget] = useState(false);
  const HandleTargetModal = () => {
    setAddTarget(true);
  };

  return (
    <div className="p-5 grid grid-flow-row gap-5">
      {fragments === 0 ? (
        <div class="flex items-center gap-4">
          <Button name={"Add Target"} action={HandleTargetModal} />
        </div>
      ) : (
        ""
      )}

      <Staff setfragments={setfragments} />
      {addTarget ? <StaffAddTarget setAddTarget={setAddTarget} /> : ""}
     
    </div>
  );
}
