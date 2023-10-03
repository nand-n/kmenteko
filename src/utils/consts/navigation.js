import {
  MdDashboard,
  MdPolicy,
  MdSubscriptions,
  MdSettings,
} from "react-icons/md";

import { HiUsers } from "react-icons/hi";
import { FaClipboardList } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <HiUsers />,
  },
  {
    key: "roles",
    label: "User Roles",
    path: "/roles",
    icon: <FaClipboardList />,
  },
  {
    key: "permissions",
    label: "Permissions",
    path: "/permissions",
    icon: <MdPolicy />,
  },
  {
    key: "subscriptions",
    label: "Subscriptions",
    path: "/subscriptions",
    icon: <MdSubscriptions />,
  },
  {
    key: "payment",
    label: "Payment Methods",
    path: "/payment",
    icon: <BsCreditCardFill />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdSettings />,
  },
  {
    key: "inbox",
    label: "Inbox",
    path: "/inbox",
    icon: <IoMdMail />,
  },
];
