import React from "react";
import NoRecordImg from "../../assets/SVG/NoRecord.svg";

export default function NoRecord(props) {
  return (
    <div className="grid justify-center p-5">
      <div className="flex justify-center">
        <img
          src={NoRecordImg}
          alt="norecord"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <p className="text-[#0F3A62]">{props?.message}</p>
    </div>
  );
}
