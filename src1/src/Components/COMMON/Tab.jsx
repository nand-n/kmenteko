import { React } from "react";

const Tab = (props) => {
  return (
    <div className="mt-6">
      <div className="flex space-x-12 text-sm">
        {/* Loop through tab data and render button for each. */}
        {props.data.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`border-b-2 px-2 text-sm transition-colors duration-300 ${
                idx === props.activeTab
                  ? "border-white text-white"
                  : "border-none text-white"
              }`}
              // Change the active tab on click.
              onClick={() => props.handlechange(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      {/* <div className="py-4">{profileTabData[activeTabIndex].content}</div> */}
    </div>
  );
};

export default Tab;
