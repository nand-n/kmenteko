import React from "react";

export default function AddYearlyTarget(props) {
  return (
    <form>
      <div class="grid gap-3 mb-3 md:grid-cols-2">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
          >
            Name
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
            Year
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
            for="first_name"
            class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
          >
            Amount
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
            Currency
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
      <div className="mb-3">
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
            props.setAddTarget(false);
          }}
          type="cancel"
          class="text-white bg-[#A9ABA9] hover:bg-[#A9ABA9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal 3 text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
