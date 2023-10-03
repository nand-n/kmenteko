import React from "react";
import Subscriptions from "./Dashboard/Subscriptions";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-2">
        <div className="bg-[#F5FAFD] w-[20%] h-28">1</div>
        <div className="bg-[#F5FAFD] w-[20%] h-28">2</div>
        <div className="bg-[#F5FAFD] w-[20%] h-28">3</div>
        <div className="bg-[#F5FAFD] flex-1 h-28">4</div>
      </div>
      <div className="flex gap-2">
        <div className="bg-[#F5FAFD] flex-1 h-56">
          <Subscriptions />
        </div>
        <div className="bg-[#F5FAFD] flex-1 h-56">1</div>
      </div>
      <div className="bg-[#F5FAFD] h-56">1</div>
    </div>
  );
};

export default Dashboard;
