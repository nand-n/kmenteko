import React from "react";
import { MdMoreVert } from "react-icons/md";

const GoalCard = ({ child }) => {
  return (
    <div className="col-span-1 flex flex-col gap-y-2 bg-surface border border-outline py-4">
      <div className="flex justify-between px-4">
        <h4 className="text-sm text-black100">{child.goal}</h4>
        <MdMoreVert />
      </div>
      <hr />
      <div className="py-4">
        {child.content && (
          <div className="flex  pb-4 justify-between px-6 gap-4 items-center">
            <div className="flex-1 bg-[#D9D9D9] h-2 rounded-full"></div>
            <p className=" text-sm"> 82%</p>
          </div>
        )}
        {child.content ? (
          child.content.map((goal) => {
            return (
              <div className="flex gap-2 px-8 py-1">
                <input type="checkbox" />
                <p className="text-[12px] text-black100">{goal.data}</p>
              </div>
            );
          })
        ) : (
          <div className="flex gap-2 px-8">
            <input type="checkbox" />
            <p className="text-[12px] text-black100">Achieve Goal</p>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default GoalCard;
