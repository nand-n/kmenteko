import React from "react";
import NavBar from "../../Layout/NavBar";
import Sidebar from "../../Layout/Sidebar";
import { mgmt_Navigation } from "../../utils/consts/mgmt_NAVIGATION";

export default function PPSIndex(props) {
  return (
    <div className="flex bg-white h-screen w-screen overflow-hidden">
      <Sidebar side={mgmt_Navigation} />
      <div className="flex flex-col flex-1">
        <div>
          <NavBar />
        </div>
        <div className="grid overflow-y-auto overflow-x-auto">
          {props?.children}
        </div>
      </div>
    </div>
  );
}
