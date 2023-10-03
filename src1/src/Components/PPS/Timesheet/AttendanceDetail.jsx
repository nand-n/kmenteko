import React from "react";
import { MdRemove, MdLink, MdPhotoCamera, MdArrowBack } from "react-icons/md";
import InfoCard from "./InfoCard";

const HISTORY = [
  {
    id: 1,
    role: "Software Developer",
    start_date: "12 Aug 2021",
    end_date: "Recent",
    ongoing: true,
  },
  {
    id: 1,
    role: "Software Developer",
    start_date: "12 Aug 2021",
    end_date: "12-Jun-2022",
    ongoing: false,
  },
  {
    id: 1,
    role: "Software Developer",
    start_date: "12 Aug 2021",
    end_date: "12-Jun-2022",
    ongoing: false,
  },

  {
    id: 1,
    role: "Software Developer",
    start_date: "12 Aug 2021",
    end_date: "12-Jun-2022",
    ongoing: false,
  },
  {
    id: 1,
    role: "Software Developer",
    start_date: "12 Aug 2021",
    end_date: "12-Jun-2022",
    ongoing: false,
  },
];

const AttendanceDetail = ({ handleDetail }) => {
  return (
    <div className="px-8 py-2 mt-8 flex flex-col">
      <div
        onClick={handleDetail}
        className="bg-[#0F3A62] px-6 py-2 text-sm flex items-center gap-3 text-white self-start hover:cursor-pointer"
      >
        <MdArrowBack color="white" size="22px" />
        Previous page
      </div>

      <div className="mt-4 flex flex-col">
        <div className="flex gap-4">
          <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5FAFD]">
            <div>
              <img
                src="https://source.unsplash.com/80x80?face"
                alt="Abraham Dulla"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-black100">Abraham Dulla</h5>
              <p className="text-[12px] text-[#A9ABA9]">Digital Marketer</p>
            </div>
          </div>
          <InfoCard type="none" title="7:15 am" description="Sign In Time" />
          <InfoCard type="none" title="6:00 pm" description="Sign Out Time" />
          <InfoCard
            type="none"
            title="12:30 pm"
            description="Lunch Break Out Time"
          />
          <InfoCard
            type="none"
            title="1:30 pm"
            description="Lunch Break In Time"
          />
        </div>
        <div className="mt-6">
          <h4 className="text-primary border-b-2 px-2 w-fit py-1 border-b-primary text-sm font-medium">
            Additional Information
          </h4>
          <div className="flex gap-4 mt-4">
            <div className="flex-1 flex items-center justify-center gap-2 bg-[#F5FAFD]">
              <div>
                <img
                  src="https://source.unsplash.com/80x80?face"
                  alt="Abraham Dulla"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm text-black100">Abraham Dulla</h5>
                <p className="text-[12px] text-[#A9ABA9]">Record added by</p>
              </div>
            </div>
            <InfoCard
              type="none"
              title="Data Import"
              description="Attendance Method"
            />
            <InfoCard type="none" title="No" description="Work from home" />
            <InfoCard
              type="none"
              title="Oct 14, 2022"
              description="Attendance Date"
            />
            <InfoCard
              type="none"
              title="Oct 14, 2022: 4:42"
              description="Recorded added on"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetail;
