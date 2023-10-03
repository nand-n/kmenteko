import React from "react";
import { MdMoreVert } from "react-icons/md";

const CertificateCard = ({ department }) => {
  return (
    <div className="col-span-1 flex flex-col gap-y-2 bg-surface border border-outline py-4">
      <div className="flex justify-between px-4">
        <h4 className="text-sm text-black100">{department.goal}</h4>
        <MdMoreVert />
      </div>
      <hr />
      <div className="py-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <h4>{department.start_date}</h4>
            <p>Start date</p>
          </div>
          <div className="flex flex-col justify-end">
            <h4>{department.end_date}</h4>
            <p>End date</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default CertificateCard;
