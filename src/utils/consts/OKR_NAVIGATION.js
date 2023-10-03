import {
  MdDashboard,
  MdCorporateFare,
  MdOutlineHotelClass,
  MdSummarize,
  MdSettings,
  MdPending,
} from "react-icons/md";

export const OKR_Navigation = [
  {
    label: "Dashboard",
    key: "dashboard",
    path: "/okr",
    icon: <MdDashboard />,
  },
  {
    label: "Company",
    key: "company",
    path: "/okr/company",
    icon: <MdCorporateFare />,
  },
  {
    label: "Progress",
    key: "progress",
    path: "/okr/progress",
    icon: <MdPending />,
  },

  {
    label: "Checkins",
    key: "checkins",
    path: "/okr/checkins",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 14.2004C11.6667 14.2004 11.3834 14.0837 11.15 13.8504C10.9167 13.6171 10.8 13.3337 10.8 13.0004C10.8 12.6671 10.9167 12.3837 11.15 12.1504C11.3834 11.9171 11.6667 11.8004 12 11.8004C12.3334 11.8004 12.6167 11.9171 12.85 12.1504C13.0834 12.3837 13.2 12.6671 13.2 13.0004C13.2 13.3337 13.0834 13.6171 12.85 13.8504C12.6167 14.0837 12.3334 14.2004 12 14.2004ZM8.00002 14.2004C7.66669 14.2004 7.38336 14.0837 7.15002 13.8504C6.91669 13.6171 6.80002 13.3337 6.80002 13.0004C6.80002 12.6671 6.91669 12.3837 7.15002 12.1504C7.38336 11.9171 7.66669 11.8004 8.00002 11.8004C8.33336 11.8004 8.61669 11.9171 8.85002 12.1504C9.08336 12.3837 9.20002 12.6671 9.20002 13.0004C9.20002 13.3337 9.08336 13.6171 8.85002 13.8504C8.61669 14.0837 8.33336 14.2004 8.00002 14.2004ZM16 14.2004C15.6834 14.2004 15.4044 14.0837 15.163 13.8504C14.921 13.6171 14.8 13.3337 14.8 13.0004C14.8 12.6671 14.921 12.3837 15.163 12.1504C15.4044 11.9171 15.6917 11.8004 16.025 11.8004C16.3417 11.8004 16.6167 11.9171 16.85 12.1504C17.0834 12.3837 17.2 12.6671 17.2 13.0004C17.2 13.3337 17.0834 13.6171 16.85 13.8504C16.6167 14.0837 16.3334 14.2004 16 14.2004ZM12 18.2004C11.6667 18.2004 11.3834 18.0794 11.15 17.8374C10.9167 17.5961 10.8 17.3087 10.8 16.9754C10.8 16.6587 10.9167 16.3837 11.15 16.1504C11.3834 15.9171 11.6667 15.8004 12 15.8004C12.3334 15.8004 12.6167 15.9171 12.85 16.1504C13.0834 16.3837 13.2 16.6671 13.2 17.0004C13.2 17.3171 13.0834 17.5961 12.85 17.8374C12.6167 18.0794 12.3334 18.2004 12 18.2004ZM8.00002 18.2004C7.66669 18.2004 7.38336 18.0794 7.15002 17.8374C6.91669 17.5961 6.80002 17.3087 6.80002 16.9754C6.80002 16.6587 6.91669 16.3837 7.15002 16.1504C7.38336 15.9171 7.66669 15.8004 8.00002 15.8004C8.33336 15.8004 8.61669 15.9171 8.85002 16.1504C9.08336 16.3837 9.20002 16.6671 9.20002 17.0004C9.20002 17.3171 9.08336 17.5961 8.85002 17.8374C8.61669 18.0794 8.33336 18.2004 8.00002 18.2004ZM16 18.2004C15.6834 18.2004 15.4044 18.0794 15.163 17.8374C14.921 17.5961 14.8 17.3087 14.8 16.9754C14.8 16.6587 14.921 16.3837 15.163 16.1504C15.4044 15.9171 15.6917 15.8004 16.025 15.8004C16.3417 15.8004 16.6167 15.9171 16.85 16.1504C17.0834 16.3837 17.2 16.6671 17.2 17.0004C17.2 17.3171 17.0834 17.5961 16.85 17.8374C16.6167 18.0794 16.3334 18.2004 16 18.2004ZM5.30002 22.8504C4.41669 22.8504 3.67069 22.5464 3.06202 21.9384C2.45402 21.3297 2.15002 20.5837 2.15002 19.7004V6.30039C2.15002 5.41706 2.45402 4.67106 3.06202 4.06239C3.67069 3.45439 4.41669 3.15039 5.30002 3.15039H6.00002V2.45039C6.00002 2.10039 6.12936 1.79606 6.38802 1.53739C6.64602 1.27939 6.95002 1.15039 7.30002 1.15039C7.65002 1.15039 7.95002 1.27939 8.20002 1.53739C8.45002 1.79606 8.57502 2.10039 8.57502 2.45039V3.15039H15.425V2.45039C15.425 2.10039 15.554 1.79606 15.812 1.53739C16.0707 1.27939 16.375 1.15039 16.725 1.15039C17.075 1.15039 17.375 1.27939 17.625 1.53739C17.875 1.79606 18 2.10039 18 2.45039V3.15039H18.7C19.5834 3.15039 20.3294 3.45439 20.938 4.06239C21.546 4.67106 21.85 5.41706 21.85 6.30039V19.7004C21.85 20.5837 21.546 21.3297 20.938 21.9384C20.3294 22.5464 19.5834 22.8504 18.7 22.8504H5.30002ZM5.30002 19.7004H18.7V10.0004H5.30002V19.7004Z"
          fill="#0F3A62"
        />
      </svg>
    ),
  },
  {
    label: "Performance",
    key: "performance",
    path: "/okr/performance",
    icon: <MdOutlineHotelClass />,
  },
  {
    label: "Reports",
    key: "reports",
    path: "/okr/reports",
    icon: <MdSummarize />,
  },

  {
    label: "Settings",
    key: "settings",
    path: "/okr/settings",
    icon: <MdSettings />,
  },
];