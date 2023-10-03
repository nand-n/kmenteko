import React from "react";
import PreviousPage from "../../COMMON/PreviousPage";
import CustomerActivity from "./CustomerActivity";
import CustomerInformation from "./CustomerInformation";
import Representative from "./Representative";

export default function CustomerDetail(props) {
  console.log(props?.detailData, "detailData");
  return (
    <div className="p-4">
      <PreviousPage setfragments={props?.setfragments} />
      <div className="grid-container grid md:grid-cols-12 ">
        <div className="col-span-7">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Representative
                    </div>
                    <div className="p-5">
                      <Representative detailData={props?.detailData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Activity
                    </div>
                    <CustomerActivity />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Customer Details
                    </div>
                    <div className="p-5 bg-[#F5FAFD]">
                      <CustomerInformation setfragments={props?.setfragments} />
                    </div>
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
