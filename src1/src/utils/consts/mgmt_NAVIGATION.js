import {
  MdDashboard,
  MdCorporateFare,
  MdWork,
  MdBadge,
  MdWatchLater,
  MdBarChart,
  MdLocalLibrary,
  MdForum,
  MdPayments,
  MdSettings,
} from "react-icons/md";

export const mgmt_Navigation = [
  // {
  //   label: "Dashboard",
  //   key: "dashboard",
  //   path: "/mgmt",
  //   icon: <MdDashboard />,
  // },
  {
    label: "Fish Cage",
    key: "company",
    path: "/mgmt/fishcage",
    icon: <MdCorporateFare />,
  },
  {
    label: "Fish Stage",
    key: "fishstage",
    path: "/mgmt/fishstage",
    icon: <MdWork />,
  },

  {
    label: "Incubation",
    key: "incubation",
    path: "/mgmt/incubation",
    icon: <MdBadge />,
  },
  {
    label: "Reports",
    key: "reports",
    path: "/mgmt/reports",
    icon: <MdWatchLater />,
  },
  {
    label: "Harvest",
    key: "harvest",
    path: "/mgmt/harvest",
    icon: <MdBarChart />,
  },
  {
    label: "Workers",
    key: "workers",
    path: "/mgmt/workers",
    icon: <MdLocalLibrary />,
  },
  {
    label: "Market",
    key: "market",
    path: "/mgmt/market",
    icon: <MdForum />,
  },
  {
    label: "Logistics",
    key: "logistics",
    path: "/mgmt/logistics",
    icon: <MdPayments />,
  },
  {
    label: "Clients",
    key: "client",
    path: "/mgmt/clients",
    icon: <MdSettings />,
  },
];
