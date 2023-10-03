import { Tooltip } from "@mui/material";
import { React } from "react";

const KanbanTab = (props) => {
  return (
    <div className="">
      <div className="flex text-sm">
        {/* Loop through tab data and render button for each. */}
        {props.data.map((tab, idx) => {
          return (
            <Tooltip title={tab?.available === 0 ? "List" : "Kanban"}>
              <button
                key={idx}
                className={`border-1 py-3 px-3 transition-colors duration-300 ${
                  idx === props.activeTab
                    ? "bg-[#0F3A62] text-white"
                    : "border-none text-[#0F3A62]"
                }`}
                // Change the active tab on click.
                onClick={() => props.handlechange(idx)}
              >
                {tab.label}
              </button>
            </Tooltip>
          );
        })}
      </div>
      {/* Show active tab content. */}
      {/* <div className="py-4">{profileTabData[activeTabIndex].content}</div> */}
    </div>
  );
};

export default KanbanTab;
