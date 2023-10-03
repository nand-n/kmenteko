import React from "react";

export default function Product() {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-6">
        <div className="bg-[#ECF2F7]">
          <div className="flex flex-row gap-3 items-center p-3">
            <div className="flex flex-col">
              <div className="text-md">PowerEdge tower servers</div>
              <div className="flex flex-row items-center gap-1">
                <div className="text-sm text-[#A9ABA9]">Model</div>
                <div className="text-sm">2300</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <div className="bg-[#ECF2F7]">
          <div className="flex flex-row gap-3 items-center p-3">
            <div className="flex flex-col">
              <div className="text-md">Taishan Servers</div>
              <div className="flex flex-row items-center gap-1">
                <div className="text-sm text-[#A9ABA9]">Model</div>
                <div className="text-sm">2300</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
