import React, { useState } from "react";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import usePagination from "../../COMMON/Pagination";
import { Pagination } from "@mui/material";
export default function Customers(props) {
  let customers = [
    {
      id: 1,
      client: "ERA",
      address: "Addis Ababa,Mexico",
      sector: "Governmental",
      contact_phone: "+25195252456332",
      contact_email: "abebe@era.com",
      representatives: [
        {
          name: "Abraham Dull",
          email: "Abraham@ienetworks.co",
        },
        {
          name: "Surafel Dull",
          email: "surafel@ienetworks.co",
        },
        {
          name: "Kirubel Dull",
          email: "kirubel@ienetworks.co",
        },
      ],
    },
    {
      id: 2,
      client: "EthSwitch",
      address: "Addis Ababa,Kasanchis",
      sector: "Financial",
      contact_phone: "+25195252456332",
      contact_email: "ethswitch@era.com",
      representatives: [
        {
          name: "Abraham Dull",
          email: "Abraham@ienetworks.co",
        },
        {
          name: "Surafel Dull",
          email: "surafel@ienetworks.co",
        },
        {
          name: "Kirubel Dull",
          email: "kirubel@ienetworks.co",
        },
      ],
    },
    {
      id: 3,
      client: "Addis Ababa University",
      address: "Addis Ababa,4kilo",
      sector: "Educational",
      contact_phone: "+25195252456332",
      contact_email: "ethswitch@era.com",
      representatives: [
        {
          name: "Abraham Dull",
          email: "Abraham@ienetworks.co",
        },
        {
          name: "Surafel Dull",
          email: "surafel@ienetworks.co",
        },
        {
          name: "Kirubel Dull",
          email: "kirubel@ienetworks.co",
        },
      ],
    },
    {
      id: 4,
      client: "Bardar University",
      address: "Gonder,Kasanchis",
      sector: "Educational",
      contact_phone: "+25195252456332",
      contact_email: "ethswitch@era.com",
      representatives: [
        {
          name: "Abraham Dull",
          email: "Abraham@ienetworks.co",
        },
        {
          name: "Surafel Dull",
          email: "surafel@ienetworks.co",
        },
        {
          name: "Kirubel Dull",
          email: "kirubel@ienetworks.co",
        },
      ],
    },
    {
      id: 5,
      client: "Amahra Bank",
      address: "Desie, Ethiopia",
      sector: "Financial",
      contact_phone: "+25195252456332",
      contact_email: "Amahrabank@era.com",
      representatives: null,
    },
    {
      id: 6,
      client: "Oromiya Bank",
      address: "Unknown, Ethiopia",
      sector: "Financial",
      contact_phone: "+25195252456332",
      contact_email: "Amahrabank@era.com",
      representatives: null,
    },
  ];
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(customers?.length / PER_PAGE);
  const _DATA = usePagination(customers, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const HandleDetail = (e, items) => {
    props?.setfragments("detail");
    props?.setDetailData(items);
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
                    Client
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Addresss
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Sector
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-[#0F3A62]  "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {_DATA?.currentData()?.map((items) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    onClick={(e) => HandleDetail(e, items)}
                  >
                    <td className="px-6 py-4 text-sm  text-gray-800 ">
                      {items?.client}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.address}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 ">
                      {items?.sector}
                    </td>
                    <td className="px-6 py-4 text-sm  text-left ">
                      {" "}
                      {items?.contact_phone}
                    </td>
                    <td className="px-6 py-4 text-sm  text-left ">
                      {items?.contact_email}
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
