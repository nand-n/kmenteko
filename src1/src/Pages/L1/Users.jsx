import { React, useState } from "react";
import Tab from "../../Components/COMMON/Tab";
import Allusers from "../../Components/USERS/Allusers";
import Freetrial from "../../Components/USERS/Freetrial";
import Monthly from "../../Components/USERS/Monthly";
import Yearly from "../../Components/USERS/Yearly";

const profileTabData = [
  {
    label: "All Users",
    available: 4,
    content: <Allusers />,
  },
  {
    label: "Yearly",
    available: 0,
    content: <Yearly />,
  },
  {
    label: "Monthly",
    available: 0,
    content: <Monthly />,
  },
  {
    label: "Free Trial",
    available: 0,
    content: <Freetrial />,
  },
];

const Users = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (idx) => {
    setActiveTabIndex(idx);
  };

  return (
    <div>
      <div className="bg-[#0F3A62] h-24 py-1 px-8 flex flex-col items-start justify-start">
        <h1 className="text-white font px-2 text-3xl">Users</h1>
        <Tab
          activeTab={activeTabIndex}
          data={profileTabData}
          handlechange={handleTabChange}
        />
      </div>
      <div>{profileTabData[activeTabIndex].content}</div>
    </div>
  );
};

export default Users;
