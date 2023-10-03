import React, { useState } from "react";
import { MdDelete, MdReadMore } from "react-icons/md";
import usePagination from "../../../COMMON/Pagination";
import { Pagination, Tooltip } from "@mui/material";
export default function Tickets(props) {
  let lead = [
    {
      id: 1,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "High",
    },
    {
      id: 2,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "Low",
    },
    {
      id: 3,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "Medium",
    },
    {
      id: 1,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "High",
    },
    {
      id: 2,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "Low",
    },
    {
      id: 3,
      client: "ERA",
      project: "ERA-MOT Data Center",
      ticket_title: "SharePoint error",
      ticket_number: "4703417007",
      priority: "Medium",
    },
  ];
  let [page, setPage] = useState(1);
  const PER_PAGE = props.page;
  const count = Math.ceil(lead?.length / PER_PAGE);
  const _DATA = usePagination(lead, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const HandleDetail = (e) => {
    props?.setfragments("detail");
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
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Client
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Project
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Ticket Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Ticket Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {_DATA?.currentData()?.map((items) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {items?.client}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {items?.project}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {items?.ticket_title}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
                      {" "}
                      {items?.ticket_number}
                    </td>
                    <td
                      className={`text-sm font-medium text-center whitespace-nowrap ${
                        items.priority === "High"
                          ? "bg-[#770A0A] text-[#fff] rounded w-1.5 h-1"
                          : items.priority === "Low"
                          ? "bg-[#0FA16D] text-[#fff] rounded"
                          : items.priority === "Medium"
                          ? "bg-[#9EA10F] text-[#fff] rounded"
                          : ""
                      }`}
                    >
                      {items?.priority}
                    </td>
                    <td className="flex gap-1 justify-center  py-4 text-lg font-medium">
                      <Tooltip title={"Read More"}>
                        <div className="">
                          <MdReadMore
                            className="text-[#0F3A62] text-2xl font-medium"
                            onClick={HandleDetail}
                          />
                        </div>
                      </Tooltip>

                      <MdDelete className="text-[#0F3A62] text-2xl font-medium " />
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
