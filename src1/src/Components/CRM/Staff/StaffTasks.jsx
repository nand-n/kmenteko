import React from "react";
import AssignedTasks from "./StaffAssignedTasks";
import UnassignedTasks from "./StaffUnassignedTasks";

export default function StaffTasks() {
  return (
    <div className="grid grid-cols-12 gap-4 flex-col">
      <div className="col-span-6 overflow-x-auto">
        <div className=" w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 py-2 px-5 text-[#0F3A62] text-center  font-Open-sans">
                Unassigned Tasks
              </div>
              <div className="p-5">
                <UnassignedTasks />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 overflow-x-auto">
        <div className=" w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 py-2 px-5 text-[#0F3A62] text-center  font-Open-sans">
                Assigned Tasks
              </div>
              <div className="">
                <AssignedTasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
