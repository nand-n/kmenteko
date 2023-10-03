import React from "react";
import { IoMdAttach, IoMdSend } from "react-icons/io";

export default function Communication() {
  return (
    <div className="flex flex-col p-5">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full divide-y">
              <div className="bg-gray-50 flex justify-between py-2 px-5">
                <div className=" text-[#0F3A62]  font-Open-sans">
                  Communication
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 p-5">
                <div className="bg-[#747474] col-start-1 col-span-6 rounded-[23px]">
                  <div className="grid justify-left gap-2 p-4">
                    <div className="font font-Open-sans text-xs text-[#fff]">
                      Hic nam modi laboriosam quo ex nam amet occaecati
                      exercitationem. Qui sunt dolores laborum beatae odit
                      tenetur ut placeat nemo. Necessitatibus ut harum molestiae
                      maiores quia quo tempora
                    </div>
                  </div>
                </div>
                <div className="bg-[#96DAFF]  col-start-6 col-span-6 rounded-[23px] ">
                  <div className="grid justify-left gap-2 p-4">
                    <div className="font font-Open-sans text-xs text-[#1C1F1B]">
                      Hic nam modi laboriosam quo ex nam amet occaecati
                      exercitationem. Qui sunt dolores laborum beatae odit
                      tenetur ut placeat nemo. Necessitatibus ut harum molestiae
                      maiores quia quo tempora
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5 border-none">
                <div className="bg-[#747474] col-start-1 col-span-6 rounded-[23px]">
                  <div className="grid justify-left gap-2 p-4">
                    <div className="font font-Open-sans text-xs text-[#fff]">
                      Hic nam modi laboriosam quo ex nam amet occaecati
                      exercitationem. Qui sunt dolores laborum beatae odit
                      tenetur ut placeat nemo. Necessitatibus ut harum molestiae
                      maiores quia quo tempora
                    </div>
                  </div>
                </div>
                <div className="bg-[#96DAFF] col-start-6 col-span-6 rounded-[23px] ">
                  <div className="grid justify-left gap-2 p-4">
                    <div className="font font-Open-sans text-xs text-[#1C1F1B]">
                      Hic nam modi laboriosam quo ex nam amet occaecati
                      exercitationem. Qui sunt dolores laborum beatae odit
                      tenetur ut placeat nemo. Necessitatibus ut harum molestiae
                      maiores quia quo tempora
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 border-none">
                <div class="relative w-full ">
                  <label for="voice-search" class="sr-only">
                    Search
                  </label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoMdAttach className="text-xl" />
                  </div>
                  <input
                    type="text"
                    class="bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm   w-full pl-10 p-2.5 "
                    required
                  />
                </div>
                <IoMdSend className="text-2xl text-[#0F3A62]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
