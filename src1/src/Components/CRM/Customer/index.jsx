import React from "react";
import { useState } from "react";
import { MdOutlineFileDownload, MdOutlineFileUpload } from "react-icons/md";
import Button from "../../COMMON/Button";
import Search from "../../COMMON/Search";
import AddCustomer from "./AddCustomer";
import Customers from "./Customer";
import CustomerDetail from "./CustomerDetail";

export default function Index() {
  const [fragments, setfragments] = useState(null);
  const [detailData, setDetailData] = useState(null);
  console.log(fragments, "surafel");
  function HandleAdd() {
    setfragments("create");
  }
  return (
    <>
      {fragments === null ? (
        <div className="p-5 grid grid-flow-row gap-5">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="flex gap-4 items-center">
              <Button name={"Add Customer"} action={HandleAdd} />
              <Search placeholder={"search customer"} />
              <MdOutlineFileDownload className="text-4xl text-[#0F3A62]" />
              <MdOutlineFileUpload className="text-4xl text-[#0F3A62]" />
            </div>
          </div>
          <Customers
            setfragments={setfragments}
            setDetailData={setDetailData}
          />
        </div>
      ) : fragments === "create" ? (
        <AddCustomer setfragments={setfragments} />
      ) : fragments === "detail" ? (
        <CustomerDetail setfragments={setfragments} detailData={detailData} />
      ) : (
        ""
      )}
    </>
  );
}
