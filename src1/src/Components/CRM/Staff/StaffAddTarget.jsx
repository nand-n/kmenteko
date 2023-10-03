import React from "react";
import { useState } from "react";
import StaffAddQuarterTarget from "./StaffAddQuarterTarget";
import StaffAddYearlyTarget from "./StaffAddYearlyTarget";

export default function StaffAddTarget(props) {
  const [registration, setRegistration] = useState("Add Quarterly Target");
  function onChangeValue(event) {
    setRegistration(event.target.value);
  }
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => props?.setAddTarget(false)}
      >
        <div
          className="relative w-full my-6 mx-auto max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-0 -lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" p-4 border-b border-solid border-slate-200">
              <div className="text-2xl font-semibold text-center text-[#0F3A62]">
                {registration}
              </div>
            </div>
            <div
              className="flex pt-3 flex-row items-center justify-center gap-3"
              onChange={onChangeValue}
            >
              <input
                checked={registration === "Add Quarterly Target"}
                id="default-radio-1"
                type="radio"
                value="Add Quarterly Target"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-[#0F3A62] "
              />
              <label
                for="default-radio-1"
                class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Quarter
              </label>

              <input
                checked={registration === "Add Yearly Target"}
                id="default-radio-2"
                type="radio"
                value="Add Yearly Target"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 accent-[#0F3A62] "
              />
              <label
                for="default-radio-2"
                class="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Annual
              </label>
            </div>
            {registration === "Add Quarterly Target" ? (
              <div className="px-6 py-3">
                <StaffAddQuarterTarget setAddTarget={props?.setAddTarget} />
              </div>
            ) : (
              <div className="px-6 py-3">
                <StaffAddYearlyTarget setAddTarget={props?.setAddTarget} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
