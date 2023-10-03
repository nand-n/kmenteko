import React from "react";

const FulldayLeave = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="module_name" className="text-[12px] text-[#1C1F1B]">
          Leave Type
        </label>
        <select
          id="module_name"
          className="border text-[12px] focus:outline-none px-4  border-[#D1D1D1] h-10"
        >
          <option>Sick Leave</option>
          <option>Emergency Leave</option>
          <option>Maternity Leave</option>
        </select>
      </div>
      <div className="flex w-full gap-4 mt-4">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="module_name" className="text-[12px] text-[#1C1F1B]">
            Start Date
          </label>
          <input
            id="module_name"
            type="date"
            className="border focus:outline-none px-4 text-[12px] border-[#D1D1D1] h-10"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="module_name" className="text-[12px] text-[#1C1F1B]">
            End Date
          </label>
          <input
            id="module_name"
            type="date"
            className="border focus:outline-none px-4 text-[12px] border-[#D1D1D1] h-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="module_name" className="text-[12px] text-[#1C1F1B]">
          Attach File
        </label>
        <input
          id="module_name"
          type="file"
          className="border focus:outline-none text-[12px] border-[#D1D1D1]"
        />
      </div>
    </div>
  );
};

export default FulldayLeave;
