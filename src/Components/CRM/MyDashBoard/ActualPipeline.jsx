import React, { useState } from "react";
import usePagination from "../../COMMON/Pagination";
import { Pagination } from "@mui/material";
export default function ActualPipeline() {
  let pipeline = [
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "CBE bank symmetra APC central UPS high performance battery and APC",
      solution: "MDCC",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "USD",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "CBE bank symmetra APC central UPS high performance battery and APC",
      solution: "ITF",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "USD",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "CBE bank symmetra APC central UPS high performance battery and APC",
      solution: "ITF",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "USD",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "CBE bank symmetra APC central UPS high performance battery and APC",
      solution: "ITF",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "USD",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "CBE bank symmetra APC central UPS high performance battery and APC",
      solution: "ITF",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "USD",
      stage: "Close",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
  ];
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(pipeline?.length / PER_PAGE);
  const _DATA = usePagination(pipeline, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  let no = 0;
  return (
    <div className="flex flex-col p-3">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full bg-gray-50 py-4 border-b">
              <div className="text-center text-[#0F3A62] divide-y divide-gray-200  font font-Open-sans text-md">
                Actual Pipeline
              </div>
            </div>

            <table className="table-fixed min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    NO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Amount Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Solution
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Vertical
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Stage
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Current Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Next Step
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {_DATA?.currentData()?.map((items) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 text-sm font-normal text-gray-800 ">
                      {(no += 1)}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-gray-800 ">
                      {items?.account_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.solution}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.vertical}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {" "}
                      {items?.amount}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.currency}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.stage}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.current_status}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.next_step}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center bg-[#fff] py-4  border-sm border-gray">
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
