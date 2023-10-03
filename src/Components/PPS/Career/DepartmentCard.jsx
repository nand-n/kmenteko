import React from "react";

const DepartmentCard = ({ handleDetail, department }) => {
  return (
    <div className="bg-surface border border-outline col-span-1 px-6 py-10 flex flex-col items-center">
      <h2 className="text-black100 font-medium">{department.department}</h2>
      <button
        onClick={handleDetail}
        className="text-[12px] text-primary  hover:underline hover:underline-offset-1"
      >
        View Details
      </button>
    </div>
  );
};

export default DepartmentCard;
