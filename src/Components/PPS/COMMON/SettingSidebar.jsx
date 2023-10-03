import { React } from "react";
import { MdLink } from "react-icons/md";

const SettingSidebar = (props) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-sm">
        {/* Loop through tab data and render button for each. */}
        {props.data.map((tab, idx) => {
          return (
            <div className=" flex gap-2 items-center">
              <MdLink color="#1C1F1B" size="20px" />
              <button
                key={idx}
                className={`border-b-2 px-1 text-sm ${
                  idx === props.activeTab
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-black100"
                }`}
                // Change the active tab on click.
                onClick={() => props.handlechange(idx)}
              >
                <span>{tab.label}</span>
              </button>
            </div>
          );
        })}
      </div>
      {/* Show active tab content. */}
      {/* <div className="py-4">{profileTabData[activeTabIndex].content}</div> */}
    </div>
  );
};

export default SettingSidebar;
