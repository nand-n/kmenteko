import React from "react";
import CertificateCard from "./CertificateCard";

const CERTIFICATES = [
  {
    id: 1,
    owner: "Abraham Dulla",
    start_date: "12-04-2022",
    end_date: "12-03-2023",
    commitment: "3 months",
    course_price: "123 USD",
  },
  {
    id: 2,
    owner: "Abraham Dulla",
    start_date: "12-04-2022",
    end_date: "12-03-2023",
    commitment: "3 months",
    course_price: "123 USD",
  },
  {
    id: 3,
    owner: "Abraham Dulla",
    start_date: "12-04-2022",
    end_date: "12-03-2023",
    commitment: "3 months",
    course_price: "123 USD",
  },
  {
    id: 4,
    owner: "Abraham Dulla",
    start_date: "12-04-2022",
    end_date: "12-03-2023",
    commitment: "3 months",
    course_price: "123 USD",
  },
];

const DepartmentDetail = () => {
  return (
    <div className="px-8 py-8 flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        {CERTIFICATES.map((certificate) => {
          return (
            <CertificateCard key={certificate.id} certificate={certificate} />
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentDetail;
