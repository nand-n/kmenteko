import React from "react";
import NavBar from "../../Layout/NavBar";
import Sidebar from "../../Layout/Sidebar";
import { OKR_Navigation } from "../../utils/consts/OKR_NAVIGATION";

export default function OKRIndex(props) {
  return (
    <div className="flex bg-white h-screen w-screen overflow-hidden">
      <Sidebar side={OKR_Navigation} />
      <div className="flex flex-col flex-1">
        <div>
          <NavBar />
        </div>
        <div className="overflow-y-auto">{props?.children}</div>
      </div>
    </div>
  );
}
