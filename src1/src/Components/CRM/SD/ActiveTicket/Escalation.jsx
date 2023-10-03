import React from "react";

export default function Escalation() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className=" w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                Escalation History
              </div>

              <div className="grid gap-1 border border-b-1 p-2">
                <div className="flex pt-3 flex-row items-center  gap-3">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="Register Email"
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <div className="grid">
                    <label
                      for="default-radio-1"
                      class="ml-1 text-sm font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                    <label
                      for="default-radio-1"
                      class="ml-1 text-xs font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                  </div>
                </div>
                <div className="flex pt-3 flex-row items-center  gap-3">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="Register Email"
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <div className="grid">
                    <label
                      for="default-radio-1"
                      class="ml-1 text-sm font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                    <label
                      for="default-radio-1"
                      class="ml-1 text-xs font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                  </div>
                </div>
                <div className="flex pt-3 flex-row items-center  gap-3">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="Register Email"
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <div className="grid">
                    <label
                      for="default-radio-1"
                      class="ml-1 text-sm font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                    <label
                      for="default-radio-1"
                      class="ml-1 text-xs font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                  </div>
                </div>
                <div className="flex pt-3 flex-row items-center  gap-3">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value="Register Email"
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <div className="grid">
                    <label
                      for="default-radio-1"
                      class="ml-1 text-sm font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                    <label
                      for="default-radio-1"
                      class="ml-1 text-xs font-medium text-[#0F3A62] dark:text-gray-300"
                    >
                      Henrietta Stiedemann
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex-initial text-[#0F3A62] bg-[#96DAFF] hover:bg-[#06223d] hover:text-[#FFF] px-5 py-2 w-full">
              Escalate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
