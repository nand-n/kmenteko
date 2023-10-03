import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { DASHBOARD_SIDEBAR_LINKS } from "../utils/consts/navigation";
import classNames from "classnames";
import Logo from "../assets/SVG/PEPBranding.svg";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2  hover:no-underline text-sm h-12";

const Sidebar = (props) => {
  return (
    <div className="flex flex-col w-60 p-3 bg-[#ECF2F7] text-[#0F3A62]">
      <div className="flex flex-col justify-center items-center gap-2 px-1 py-3">
        <img src={Logo} alt="user profile" className="rounded-full w-28" />
      </div>
      <div className="flex-1 py-4 flex-col gap-0.5">
        {props?.side?.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-[#96DAFF] font-semibold px-6 font-Open-sans text-[#0F3A62] h-14"
          : "text-[#0F3A62] px-6 font-Open-sans font-semibold h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
