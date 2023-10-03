import React from "react";

const InfoCard = ({ type, title, description }) => {
  return (
    <div
      className={
        type === "success"
          ? "border-b-4 border-[#0FA16D] bg-[#F5FAFD] w-48"
          : type === "error"
          ? "border-b-4 border-[#A10F0F] bg-[#F5FAFD] w-48"
          : type === "warning"
          ? "border-b-4 border-[#9EA10F] bg-[#F5FAFD] w-48"
          : type === "info"
          ? "border-b-4 border-[#96DAFF] bg-[#F5FAFD] w-48"
          : "bg-[#F5FAFD] w-48"
      }
    >
      <div className="flex flex-col px-6 py-4">
        <h4
          className={
            type === "success"
              ? " text-[#0FA16D] text-sm font-medium"
              : type === "error"
              ? " text-[#A10F0F] text-sm font-medium"
              : type === "warning"
              ? " text-[#9EA10F] text-sm font-medium"
              : type === "info"
              ? " text-[#9EA10F] text-sm font-medium"
              : " text-black100 text-sm font-medium"
          }
        >
          {title}
        </h4>
        <p className="text-[12px] text-[#747474]">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
