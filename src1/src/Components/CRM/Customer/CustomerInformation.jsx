import React from "react";

export default function CustomerInformation(props) {
  const HandleBack = () => {
    props?.setfragments(null);
  };
  return (
    <div className="">
      <form>
        <div class="grid gap-4 mb-6 md:grid-cols-1">
          <div>
            <label
              for="vendor_name"
              class="block mb-2 text-sm font-normal text-[#0F3A62] dark:text-white"
            >
              Vendor Name
            </label>
            <input
              type="text"
              id="vendor_name"
              class="text-[#0F3A62] bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-normal text-[#0F3A62] dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class=" text-[#0F3A62] bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              for="address"
              class="block mb-2 text-sm font-normal text-[#0F3A62] dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              class=" text-[#0F3A62] bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-normal text-[#0F3A62] dark:text-white"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              class=" text-[#0F3A62] bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-normal text-[#0F3A62] dark:text-white"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              class=" text-[#0F3A62] bg-[#F5FAFD] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-[#ECF2F7] bg-[#0F3A62] hover:bg-[#06223d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
      <div
        className="flex justify-center my-3 cursor-pointer"
        onClick={HandleBack}
      >
        <p className="text-[#0F3A62] border-b-2 border-b-1 px-0.5  text-sm  border-[#0F3A62]">
          Back to List
        </p>
      </div>
    </div>
  );
}
