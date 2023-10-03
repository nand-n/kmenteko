import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const EMPLOYEES = [
  {
    id: 1,
    pp: "https://source.unsplash.com/80x80?face",
    full_name: "Abebe Bikila",
    role: "Fisher",
    department: "Proceesing",
    email: "abdusemedsommi@gmail.com",
    date_hired: "12-04-2022",
    status: "out",
  },
  {
    id: 2,
    pp: "https://source.unsplash.com/80x80?face",
    full_name: "Haile Gebresilase",
    role: "Labour",
    department: "Logistics",
    email: "abdusemedsommi@gmail.com",
    date_hired: "12-04-2022",
    status: "active",
  },
  {
    id: 3,
    pp: "https://source.unsplash.com/80x80?face",
    full_name: "Kenenisa Bekele",
    role: "Driver",
    department: "Logistics",
    email: "abdusemedsommi@gmail.com",
    date_hired: "12-04-2022",
    status: "inactive",
  },
  {
    id: 4,
    pp: "https://source.unsplash.com/80x80?face",
    full_name: "Derartu Tulu",
    role: "Disecting Fishes",
    department: "Processing",
    email: "abdusemedsommi@gmail.com",
    date_hired: "12-04-2022",
    status: "active",
  },
  {
    id: 5,
    pp: "https://source.unsplash.com/80x80?face",
    full_name: "Meseret Defar",
    role: "Quality Tester",
    department: "Quality Assurance",
    email: "abdusemedsommi@gmail.com",
    date_hired: "12-04-2022",
    status: "active",
  },
];

const EmployeeList = ({ handleDetail, handleAddEmployee }) => {
  return (
    <div className="px-8 py-8 flex flex-col">
      <div className="flex gap-2">
        <button
          onClick={handleAddEmployee}
          className="px-8 bg-[#0F3A62] py-2 text-sm text-white"
        >
          Add Employee
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
                  Department
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Email
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Date Hired
                </th>
                <th className="!rounded-none font-medium !text-[#0F3A62] text-sm text-left font-Open-sans !bg-[#ECF2F7]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {EMPLOYEES.map((employee) => {
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
                    <td className="!rounded-none ml-4 text-left text-sm font-Open-sans">
                      <div className="flex items-center gap-2">
                        <div>
                          <img
                            className="w-12 h-12 rounded-full"
                            src={employee.pp}
                            alt={employee.full_name}
                          />
                        </div>
                        <div>
                          <h5 className="font-medium text-[14px] text-[#1C1F1B]">
                            {employee.full_name}
                          </h5>
                          <p className="text-[12px] text-[#A9ABA9]">
                            {employee.role}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {employee.department}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {employee.email}
                    </td>
                    <td className="text-[12px] text-[#1c1f1b]">
                      {employee.date_hired}
                    </td>
                    <td className="!rounded-none text-left text-sm font-Open-sans">
                      <div
                        className={
                          employee.status === "active"
                            ? "bg-[#0FA16D] text-center rounded-md text-white py-2 w-20"
                            : employee.status === "out"
                            ? "bg-[#9EA10F] text-center rounded-md text-white py-2 w-20"
                            : "bg-[#A10F0F] text-center rounded-md text-white py-2 w-20"
                        }
                      >
                        {employee.status}
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

export default EmployeeList;
