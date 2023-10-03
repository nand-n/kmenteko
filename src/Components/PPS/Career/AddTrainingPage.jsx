import React from "react";
import CertificateCard from "./CertificateCard";
import DepartmentCard from "./DepartmentCard";

const DEPARTMENTS = [
  {
    id: 1,
    department: "SaaS",
  },
  {
    id: 2,
    department: "Sourcing",
  },
  {
    id: 3,
    department: "Logistics",
  },
  {
    id: 4,
    department: "Finance",
  },
  {
    id: 5,
    department: "BAI",
  },
  {
    id: 6,
    department: "MDCC",
  },
  {
    id: 7,
    department: "People",
  },
];

const AddTrainingPage = ({ handleDetail }) => {
  return (
    <div className="px-8 py-8 flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        {DEPARTMENTS.map((department) => {
          return (
            <CertificateCard
              handleDetail={handleDetail}
              department={department}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddTrainingPage;
