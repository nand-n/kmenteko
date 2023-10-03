import React from "react";
import { MdPhotoCamera, MdRemove } from "react-icons/md";

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

const EmployeeInformationDetail = () => {
  return (
    <div>
      <div className="mt-6 gap-4">
        <div>
          <div className="relative w-fit">
            <img
              src="https://source.unsplash.com/80x80?face"
              alt="alemayehu kora"
              className="w-28 h-28 rounded-full"
            />
            <div className="absolute top-1 right-1 bg-[#ECF2F7] flex items-center justify-center w-8 h-8 rounded-full">
              <MdPhotoCamera color="#0F3A62" />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex gap-6">
              <div className="flex flex-col flex-1 gap-2">
                <label
                  className="text-black100 text-[12px]"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  className="border border-outline h-10"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label
                  className="text-black100 text-[12px]"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  type="text"
                  className="border border-outline h-10"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <label
                className="text-black100 text-[12px]"
                htmlFor="job_history"
              >
                Job History
              </label>
              <div
                id="job_history"
                className="border border-outline  px-12 py-6"
              >
                {HISTORY.map((history) => {
                  return (
                    <div className="flex items-start gap-2">
                      <div className="flex flex-col items-center">
                        <div
                          className={
                            history.ongoing
                              ? "bg-primary w-2 h-2 rounded-full"
                              : "bg-[#A9ABA9] w-2 h-2 rounded-full"
                          }
                        ></div>
                        <div className="h-12 border-l border-[#A9ABA9]"></div>
                      </div>
                      <div className="flex flex-col -translate-y-1 pb-2">
                        <h4
                          className={
                            history.ongoing
                              ? "text-[12px] text-primary font-medium"
                              : "text-[12px] text-black100"
                          }
                        >
                          {history.role}
                        </h4>
                        <p className="text-[12px] text-[#A9ABA9] flex items-center gap-2">
                          <span>{history.start_date}</span>
                          <MdRemove />
                          <span>{history.end_date}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <button className="bg-primary px-4 py-2 text-white text-sm">
                Add New Position
              </button>
            </div>
          </div>
          <div className="my-8">
            <div className="flex flex-col flex-1 gap-2">
              <label
                className="text-black100 text-[12px]"
                htmlFor="direct_manager"
              >
                Direct Manager
              </label>
              <input
                id="direct_manager"
                type="text"
                className="border border-outline h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformationDetail;
