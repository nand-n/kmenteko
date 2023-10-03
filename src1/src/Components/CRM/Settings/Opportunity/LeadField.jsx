import { Pagination } from "@mui/material";
import React from "react";
import { useState } from "react";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import usePagination from "../../../COMMON/Pagination";

export default function LeadField() {
  let lead = [
    {
      id: 1,
      lead: "SD:ERA",
      lead_stage: "New",
      client: "ERA",
    },
    {
      id: 2,
      lead: "SD:MOTL",
      lead_stage: "on progress",
      client: "ERA",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
    },
  ];
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(lead?.length / PER_PAGE);
  const _DATA = usePagination(lead, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs  text-left text-[#0F3A62]  "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs  text-left text-[#0F3A62]  "
                    >
                      Next
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs  text-center
                       text-[#0F3A62]  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {_DATA?.currentData()?.map((items) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {items?.lead}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {items?.lead_stage}
                      </td>
                      <td className="flex gap-1 justify-center  py-4 text-lg font-medium">
                        <MdOutlineEdit className="text-[#0F3A62] " />
                        <MdDelete className="text-[#0F3A62] " />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center  bg-[#fff] py-4 border border-sm border-gray">
                <Pagination
                  page={page}
                  onChange={handleChange}
                  count={count}
                  showFirstButton
                  showLastButton
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
