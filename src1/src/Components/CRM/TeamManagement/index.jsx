import React from "react";
import { useState } from "react";
import Structure from "./Structure";
import Teams from "./Teams";

export default function Index() {
  const [State, setState] = useState("Structure");
  const HandleChange = () => {
    setState("Structure");
  };
  const HandleTeamChange = () => {
    setState("Teams");
  };
  return (
    <div className="p-5">
      <div className="flex flex-row justify-center">
        <button
          class={
            State === "Structure"
              ? `text-[#fff] bg-[#0F3A62] py-2 px-6 border hover:bg-[#06223d] border`
              : `text-black bg-[#F5FAFD] py-2 px-6 border`
          }
          onClick={HandleChange}
        >
          Structure
        </button>
        <button
          class={
            State === "Teams"
              ? `text-[#fff] bg-[#0F3A62] py-2 px-6 border hover:bg-[#06223d] border`
              : `text-black bg-[#F5FAFD] py-2 px-6 border`
          }
          onClick={HandleTeamChange}
        >
          Teams
        </button>
      </div>
      {State === "Structure" ? (
        <Structure />
      ) : State === "Teams" ? (
        <Teams />
      ) : (
        ""
      )}
    </div>
  );
}
