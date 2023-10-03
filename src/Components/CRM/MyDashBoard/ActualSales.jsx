import React, { useState } from "react";
import usePagination from "../../COMMON/Pagination";
import { Pagination } from "@mui/material";
export default function ActualSales() {
  let sales = [
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      profitability: "200,000,000",
      cost_error: "0",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      profitability: "200,000,000",
      cost_error: "0",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      profitability: "200,000,000",
      cost_error: "0",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      profitability: "200,000,000",
      cost_error: "0",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
    {
      id: 1,
      account_name:
        "Dashen bank symmetra APC central UPS high performance battery and APC",
      solution: "BAI",
      vertical: "Financial Institution",
      amount: "1,391,897",
      currency: "ETB",
      stage: "Close",
      profitability: "200,000,000",
      cost_error: "0",
      current_status:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
      next_step:
        "Beatae dolor ratione eos sint iste provident et esse et. Dolore omnis exercitationem officia ",
    },
  ];
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(sales?.length / PER_PAGE);
  const _DATA = usePagination(sales, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  let no = 0;
  return (
    <div className="flex flex-col p-3">
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <div className="min-w-full bg-gray-50 py-4 border-b">
              <div className="text-center text-[#0F3A62] divide-y divide-gray-200  font font-Open-sans text-md">
                Actual Sales
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
                    Cost of Good
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Profitability
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Cost of Error
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
                      {items?.currency}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.amount}
                      {items?.currency}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.profitability}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-left ">
                      {items?.cost_error}
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
