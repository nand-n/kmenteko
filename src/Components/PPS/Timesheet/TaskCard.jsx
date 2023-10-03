import React from "react";
import { MdCheckCircle, MdOutlineFileDownload, MdCancel } from "react-icons/md";

const TaskCard = () => {
  return (
    <div className="bg-[#F5FAFD] flex justify-between py-4 px-12 mt-4 items-center gap-4">
      <div>
        <h4 className="text-black100 text-sm">Natnael Hailemariam</h4>
        <p className="text-[#747474] text-[12px]">Sick leave</p>
      </div>
      <div className="w-1/5">
        <p className="text-black100 text-sm ">
          I tested positive for covid-19 and I need some time to recover
        </p>
      </div>
      <p className="text-black100 text-sm">Oct 17, 2022 - Oct 21, 2022</p>
      <div>
        <h4 className="text-black100 text-sm">Abebe Kebede</h4>
        <p className="text-[#747474] text-[12px]">Substitute Employee</p>
      </div>
      <div className="flex gap-1">
        <MdCheckCircle color="#0F3A62" size="24px" />
        <MdOutlineFileDownload color="#0F3A62" size="24px" />
        <MdCancel color="#0F3A62" size="24px" />
      </div>
    </div>
  );
};

export default TaskCard;
