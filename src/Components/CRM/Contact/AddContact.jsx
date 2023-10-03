import React from "react";
import { useState } from "react";

export default function AddContact(props) {
  return (
    <div className="p-5">
      <div className="bg-[#ECF2F7] py-2 px-5 text-[#0F3A62] mb-3 text-center  font-Open-sans">
        Add Contact
      </div>
      <form>
        <div class="grid gap-3 mb-6 md:grid-cols-2">
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
              Customer
            </label>
            <select
              id="countries"
              class="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Customer</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              Country
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
              for="visitors"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              City
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
              for="visitors"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              State
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
              for="visitors"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              Position
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
              for="visitors"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              Job Title
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
              for="visitors"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
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
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              class=" text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-normal text-[#0F3A62]  dark:text-white"
            >
              Mobile number
            </label>
            <input
              type="tel"
              id="phone"
              class=" text-[#0F3A62]  border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              props.setfragments(null);
            }}
            type="cancel"
            class="text-white bg-[#A9ABA9] hover:bg-[#A9ABA9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal 3 text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
