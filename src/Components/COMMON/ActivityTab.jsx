import { React } from "react";

const ActivityTab = (props) => {
  return (
    <div className="mt-6">
      <div className="flex space-x-12 text-sm ">
        {/* Loop through tab data and render button for each. */}
        {props.data.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`border-b-2 px-2 text-sm border-primary duration-300 ${
                idx === props.activeTab
                  ? "border-white text-primary"
                  : "border-none text-primary"
              }`}
              // Change the active tab on click.
              onClick={() => props.handlechange(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityTab;
