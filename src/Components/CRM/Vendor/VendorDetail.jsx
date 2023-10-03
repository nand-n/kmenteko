import React from "react";
import PreviousPage from "../../COMMON/PreviousPage";
import ContactPerson from "./ContactPerson";
import Product from "./Product";
import VendorInformation from "./VendorInformation";

export default function VendorDetail(props) {
  return (
    <div className="p-4">
      <PreviousPage setfragments={props?.setfragments} />
      <div className="grid-container gap-4 grid md:grid-cols-12 ">
        <div className="col-span-7">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className=" w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Contact Person
                    </div>
                    <div className="p-5">
                      {" "}
                      <ContactPerson />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Product
                    </div>
                    <Product />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="w-full inline-block align-middle">
                <div className="overflow-hidden border">
                  <div className="min-w-full divide-y">
                    <div className="bg-gray-50 py-2 px-5 text-[#0F3A62]  font-Open-sans">
                      Vendor Details
                    </div>
                    <div className="p-5 bg-[#F5FAFD]">
                      <VendorInformation setfragments={props?.setfragments} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
