import { Pagination } from "@mui/material";
import React from "react";
import { useState } from "react";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import usePagination from "./Pagination";

export default function Table(props) {
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(props?.data?.length / PER_PAGE);
  const _DATA = usePagination(props?.data, PER_PAGE);
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
                <tr className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  ">
                  {props?.header?.map((headers) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                    >
                      {headers?.header}
                    </th>
                  ))}

                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Website
                  </th> */}

                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {_DATA.currentData()?.map((props) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    //onClick={(e) => HandleDetail(e)}
                  >
                    <td className="px-6 py-4 text-sm  text-gray-800 ">
                      {props?.lead}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {props?.lead_stage}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {props?.client}
                    </td>

                    <td className="px-6 py-4 text-sm  text-left ">
                      {props?.contact_phone}
                    </td>
                    <td className="px-6 py-4 text-sm  text-left ">
                      {props?.contact_phone}
                    </td>
                    <td className="flex gap-1 text-right py-4 text-lg ">
                      <MdOutlineEdit className="text-[#0F3A62] " />
                      <MdDelete className="text-[#0F3A62] " />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center bg-[#fff] py-4 border border-sm border-gray">
              <Pagination
                page={props?.page}
                onChange={props?.handleChange}
                count={props?.count}
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
