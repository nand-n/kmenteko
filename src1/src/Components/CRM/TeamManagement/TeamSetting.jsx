import React from "react";
import TeamDetail from "./TeamDetail";
export default function TeamSetting() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                Governmental
              </div>
              <div className="p-5 bg-[#F5FAFD]">
                <TeamDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
