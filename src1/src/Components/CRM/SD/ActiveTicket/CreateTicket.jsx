import { IoMdAttach } from "react-icons/io";

export default function CreateTicket(props) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => props?.setModal(false)}
      >
        <div
          className="relative w-full my-6 mx-auto max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-0 -lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" p-4 border-b border-solid border-slate-200">
              <div className="text-2xl font-semibold text-center text-[#0F3A62]">
                Create Ticket
              </div>
            </div>
            <form className="px-[50px] py-[24px]">
              <div class="grid gap-3 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Project
                  </label>
                  <select
                    id="countries"
                    class="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Currency</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Issue
                  </label>
                  <input
                    type="text"
                    id="vendor_name"
                    class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Issue Description
                  </label>
                  <input
                    type="text"
                    id="vendor_name"
                    class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Issue Faced Date
                  </label>
                  <input
                    type="text"
                    id="vendor_name"
                    class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Priority Type
                  </label>
                  <select
                    id="countries"
                    class="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Currency</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Tag Type
                  </label>
                  <select
                    id="countries"
                    class="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Currency</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  for="Document"
                  class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                >
                  Document
                </label>
                <div class="relative w-full mb-3">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoMdAttach className="text-xl" />
                  </div>
                  <input
                    id="Document"
                    type="file"
                    class="border border-gray-300 text-gray-900 text-sm   w-full pl-10 p-2.5 "
                    required
                  />
                </div>
              </div>

              <div className="flex flex-row gap-3">
                <button
                  type="submit"
                  class="text-[#fff] bg-[#0F3A62] hover:bg-[#06223d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-[#0F3A62]  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={(e) => {
                    props.setModal(false);
                  }}
                  type="cancel"
                  class="text-white bg-[#A9ABA9] hover:bg-[#A9ABA9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal 3 text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
