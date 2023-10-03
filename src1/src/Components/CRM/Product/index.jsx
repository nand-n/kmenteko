import React from "react";
import Button from "../../COMMON/Button";
import Search from "../../COMMON/Search";
import Products from "./Products";

export default function Index() {
  return (
    <div className="p-5 grid grid-flow-row gap-5">
      <div class="flex items-center gap-4">
        <Button name={"Add Product"} />
        <Search placeholder={"Search product, contact name, location"} />
      </div>
      <Products />
    </div>
  );
}
