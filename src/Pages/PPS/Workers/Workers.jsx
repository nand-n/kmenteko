import React, { useState } from "react";
import PPSIndex from "..";
import AddEmployee from "../../../Components/PPS/Employees/AddEmployee/AddEmployee";
import EmployeeDetail from "../../../Components/PPS/Employees/EmployeeDetail";
import EmployeeList from "../../../Components/PPS/Employees/EmployeeList";

function Workers() {
  const [detail, setdetail] = useState(false);
  const [addEmployee, setaddEmployee] = useState(false);

  const handleDetail = () => {
    setdetail(!detail);
  };

  const handleAddEmployee = () => {
    setaddEmployee(true);
  };

  const hideAddEmployee = () => {
    setaddEmployee(false);
  };

  return (
    <PPSIndex>
      {!detail && !addEmployee ? (
        <EmployeeList
          handleAddEmployee={handleAddEmployee}
          handleDetail={handleDetail}
        />
      ) : detail && !addEmployee ? (
        <EmployeeDetail handleDetail={handleDetail} />
      ) : (
        <AddEmployee hideAddEmployee={hideAddEmployee} />
      )}
    </PPSIndex>
  );
}

export default Workers;
