import { IoMdAttach } from "react-icons/io";

export default function CreateProject(props) {
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
                Create Project
              </div>
            </div>
            <form className="px-[50px] py-[24px]">
              <div class="grid gap-3 mb-6 md:grid-cols-2">
                <div className="col-span-2">
                  <label class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white">
                    Project Name
                  </label>
                  <input
                    type="text"
                    class="border border-gray-300 text-gray-900 text-sm   w-full pl-10 p-2.5 "
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    for="company"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Maintenance Cycle
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
                <div className="col-span-1">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="vendor_name"
                    class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="vendor_name"
                    class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
