import React from "react";

const EmployeeDocuments = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label className="text-black100 text-[12px]" htmlFor="first_name">
              Job Offer Letter
            </label>
            <input
              id="first_name"
              type="text"
              className="border border-outline h-10"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label className="text-black100 text-[12px]" htmlFor="first_name">
              Identification
            </label>
            <input
              id="first_name"
              type="text"
              className="border border-outline h-10"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label className="text-black100 text-[12px]" htmlFor="first_name">
              Guarantee Letter
            </label>
            <input
              id="first_name"
              type="text"
              className="border border-outline h-10"
            />
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-1 gap-2">
          <button className="bg-[#0F3A62] px-6 py-2 text-sm flex items-center gap-3 text-white self-start hover:cursor-pointer">
            Save
          </button>
          <button className="bg-[#A9ABA9] px-6 py-2 text-sm flex items-center gap-3 text-white self-start hover:cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDocuments;
