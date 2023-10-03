import React from "react";

export default function PendingTasks() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                Pending Tasks
              </div>
              <div className="grid gap-5 px-6 py-6">
                <div className="hover:bg-[#ECF2F7] bg-[#F5FAFD] px-4 py-3 cursor-pointer">
                  <div className="text-[#0F3A62]  text-sm font-semibold">
                    ERA-MOT Data Center - Ticket Created
                  </div>
                  <div className="text-xs text-[#0F3A62]">
                    John has created ticket for ERA-MOT Data Center
                  </div>
                </div>
                <div className="hover:bg-[#ECF2F7] bg-[#F5FAFD] px-4 py-3 cursor-pointer">
                  <div className="text-[#0F3A62]  text-sm font-semibold">
                    ERA-MOT Data Center - Ticket Created
                  </div>
                  <div className="text-xs text-[#0F3A62]">
                    John has created ticket for ERA-MOT Data Center
                  </div>
                </div>
                <div className="hover:bg-[#ECF2F7] bg-[#F5FAFD] px-4 py-3 cursor-pointer">
                  <div className="text-[#0F3A62]  text-sm font-semibold">
                    ERA-MOT Data Center - Ticket Created
                  </div>
                  <div className="text-xs text-[#0F3A62]">
                    John has created ticket for ERA-MOT Data Center
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
