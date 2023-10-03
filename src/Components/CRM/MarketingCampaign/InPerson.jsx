import React from "react";

export default function InPerson() {
  return (
    <div className="px-6">
      <label
        for="company"
        class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
      >
        Company
      </label>
      <input
        type="text"
        id="company"
        class="text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
      />
      <label
        for="email"
        class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
      >
        Email
      </label>
      <textarea
        id="email"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 "
      ></textarea>
      <div className="flex items-center py-3 text-[#0F3A62]">
        <button
          type="submit"
          class="text-[#fff] bg-[#0F3A62] hover:bg-[#06223d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-[#0F3A62]  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </div>
    </div>
  );
}
