import React from "react";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import CampaignDetail from "./CampaignDetail";
export default function AllCampaign() {
  let all = [
    {
      id: 1,
      name: "Project launch",
      date: "Oct 11 2022",
      reach: 20,
      opened: "40%",
      click: "40%",
      status: 0,
    },
    {
      id: 2,
      name: "Project launch",
      date: "Seo 21 2022",
      reach: 30,
      opened: "30%",
      click: "40%",
      status: 1,
    },
    {
      id: 3,
      name: "Project Era",
      date: "Jan 14 2022",
      reach: 20,
      opened: "50%",
      click: "10%",
      status: 1,
    },
    {
      id: 1,
      name: "Project name",
      date: "Oct 11 2022",
      reach: 20,
      opened: "40%",
      click: "40%",
      status: 0,
    },
    {
      id: 1,
      name: "Project name",
      date: "Oct 11 2022",
      reach: 20,
      opened: "40%",
      click: "40%",
      status: 0,
    },
  ];
  const [Detail, setDetail] = useState(false);
  function HandleModal() {
    setDetail(true);
  }
  return (
    <div className=" py-1.5 container grid grid-flow-row gap-3">
      {all?.map((items) => (
        <div
          className="hover:bg-[#F5FAFD] bg-[#ECF2F7] cursor-pointer w-full border"
          onClick={HandleModal}
        >
          <div className="flex justify-between items-center py-1 px-3">
            <div className="flex gap-3 items-center p-2">
              {items?.status === 0 ? (
                <div className="bg-white text-[#46B8EC] p-2 rounded-full">
                  <MailIcon />
                </div>
              ) : (
                <div className="bg-white text-[#46B8EC] p-2 rounded-full">
                  <CallToActionIcon />
                </div>
              )}

              <div className="grid">
                <div className="font font-Open-sans text-sm text-[#0F3A62]">
                  {items?.name}
                </div>
                <div className="font font-Open-sans text-xs  text-[#747474]">
                  {items?.date}
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="font font-Open-sans text-sm text-[#0F3A62] text-center">
                {items?.reach}
              </div>
              <div className="font font-Open-sans text-xs  text-[#747474]">
                Reach
              </div>
            </div>
            {items?.status === 0 ? (
              <>
                <div className="grid">
                  <div className="font font-Open-sans text-sm text-[#0F3A62] text-center">
                    {items?.opened}
                  </div>
                  <div className="font font-Open-sans text-xs  text-[#747474]">
                    Opened
                  </div>
                </div>
                <div className="grid">
                  <div className="font font-Open-sans text-sm text-[#0F3A62] text-center">
                    {items?.click}
                  </div>
                  <div className="font font-Open-sans text-xs text-[#747474]">
                    Clicked
                  </div>
                </div>
              </>
            ) : (
              <button className="font font-Open-sans bg-[#46B8EC] text-[#fff] text-sm px-3 py-1 rounded-full mr-4">
                Draft
              </button>
            )}
          </div>
        </div>
      ))}
      {Detail ? <CampaignDetail setDetail={setDetail} /> : ""}
    </div>
  );
}
