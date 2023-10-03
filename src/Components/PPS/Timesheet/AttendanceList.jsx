import { HiOutlineSearch } from "react-icons/hi";

const ATTENDANCE = [
  {
    id: 1,
    employee: "Abdulsemed Mohammad",
    date: "12-04-2022",
    sign_in_time: "12:00pm",
    sign_out_time: "12:00pm",
    total: "9 hours",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Abdulsemed Mohammad",
    date: "12-04-2022",
    sign_in_time: "12:00pm",
    sign_out_time: "12:00pm",
    total: "9 hours",
    status: "Approved",
  },
  {
    id: 3,
    employee: "Abdulsemed Mohammad",
    date: "12-04-2022",
    sign_in_time: "12:00pm",
    sign_out_time: "12:00pm",
    total: "9 hours",
    status: "Approved",
  },
  {
    id: 4,
    employee: "Abdulsemed Mohammad",
    date: "12-04-2022",
    sign_in_time: "12:00pm",
    sign_out_time: "12:00pm",
    total: "9 hours",
    status: "Approved",
  },
  {
    id: 5,
    employee: "Abdulsemed Mohammad",
    date: "12-04-2022",
    sign_in_time: "12:00pm",
    sign_out_time: "12:00pm",
    total: "9 hours",
    status: "Pending",
  },
];

const AttendanceList = ({ handleDetail }) => {
  return (
    <div className="px-8 py-8 flex flex-col">
      <div className="flex gap-2">
        <button className="px-8 bg-[#0F3A62] py-2 text-sm text-white">
          Import Data
        </button>
        <div className="relative flex-1">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            className="bg-white focus:outline-none active:outline-none border border-[#D1D1D1] w-full h-10 pl-11 pr-4"
          />
        </div>
      </div>

      <div className="mt-4">
        <div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr className="border border-[#D1D1D1] h-12">
                <th className="!rounded-none !bg-[#ECF2F7]">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="!rounded-none ml-3 font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Employee
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Date
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Sign In Time
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Sign Out Time
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Total Time
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Approval Status
                </th>
              </tr>
            </thead>
            <tbody>
              {ATTENDANCE.map((attendance) => {
                return (
                  <tr
                    onClick={handleDetail}
                    className="border border-[#D1D1D1] hover:cursor-pointer"
                  >
                    <th className="!rounded-none h-16">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>

                    <td className="text-[12px] text-[#1c1f1b]">
                      {attendance.employee}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {attendance.date}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {attendance.sign_in_time}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {attendance.sign_out_time}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {attendance.total}
                    </td>
                    <td className="!rounded-none text-left text-sm font-Open-sans">
                      <div
                        className={
                          attendance.status === "Approved"
                            ? "bg-[#0FA16D] text-center text-[12px] rounded-md text-white py-2 w-20"
                            : "bg-[#96DAFF] text-center text-[12px] rounded-md text-black100 py-2 w-20"
                        }
                      >
                        {attendance.status}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
