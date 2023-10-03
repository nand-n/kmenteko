import React from "react";
import { useState } from "react";
import Button from "../../COMMON/Button";
import Search from "../../COMMON/Search";
import AddVendor from "./AddVendor";
import VendorDetail from "./VendorDetail";
import Vendors from "./Vendors";

export default function Index(props) {
  const [fragments, setfragments] = useState(null);
  console.log(fragments, "surafel");
  function HandleAdd() {
    setfragments("create");
  }
  return (
    <>
      {fragments === null ? (
        <div className="p-5 grid grid-flow-row gap-5">
          <div class="flex items-center gap-4">
            <Button name={"Add Vendor"} action={HandleAdd} />
            <Search placeholder={"Search vendor, contact name, location"} />
          </div>
          <Vendors setfragments={setfragments} />
        </div>
      ) : fragments === "detail" ? (
        <VendorDetail setfragments={setfragments} />
      ) : fragments === "create" ? (
        <AddVendor setfragments={setfragments} />
      ) : (
        ""
      )}
    </>
  );
}
