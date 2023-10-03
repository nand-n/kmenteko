import React, { useState } from "react";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import usePagination from "../../COMMON/Pagination";
import { Pagination } from "@mui/material";
export default function Products() {
  let lead = [
    {
      id: 1,
      lead: "SD:ERA",
      lead_stage: "New",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@era.com",
    },
    {
      id: 2,
      lead: "SD:MOTL",
      lead_stage: "on progress",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@motl.com",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@ess.com",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@ess.com",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@ess.com",
    },
    {
      id: 1,
      lead: "SD:ESS",
      lead_stage: "Lost",
      client: "ERA",
      contact_phone: "+25195252456332",
      contact_email: "abebe@ess.com",
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
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Vendor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Vendor Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Registration Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center text-[#0F3A62]  "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {_DATA?.currentData()?.map((items) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 text-sm  text-gray-800 ">
                      {items?.lead}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.lead_stage}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.client}
                    </td>

                    <td className="px-6 py-4 text-sm  text-left ">
                      {items?.contact_phone}
                    </td>
                    <td className="px-6 py-4 text-sm  text-left ">
                      {items?.contact_phone}
                    </td>
                    <td className="px-6 py-4 text-sm  text-left ">
                      {items?.contact_phone}
                    </td>
                    <td className="flex gap-1 justify-center py-4 text-lg ">
                      <MdOutlineEdit className="text-[#0F3A62] " />
                      <MdDelete className="text-[#0F3A62] " />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center bg-[#fff] py-4 border border-sm border-gray">
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
  );
}
