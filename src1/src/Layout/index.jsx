import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./NavBar";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex bg-white h-screen w-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        <div>
          <Header homepage={true} />
        </div>
        <div className="overflow-y-auto">{/* {<Outlet />} */}</div>
      </div>
    </div>
  );
  // return (
  //   <div className=" bg-white h-screen w-screen overflow-hidden">
  //     <nav className="bg-gray-800">
  //       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  //         <div className="relative flex items-center justify-between h-16">
  //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //             {/* Mobile menu button */}
  //             <button
  //               type="button"
  //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  //               aria-controls="mobile-menu"
  //               aria-expanded="false"
  //             >
  //               <span className="sr-only">Open main menu</span>
  //               {/* Icon when menu is closed. */}
  //               {/* Heroicon name: outline/menu */}
  //               <svg
  //                 className="block h-6 w-6"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={2}
  //                   d="M4 6h16M4 12h16M4 18h16"
  //                 />
  //               </svg>
  //               {/* Icon when menu is open. */}
  //               {/* Heroicon name: outline/x */}
  //               <svg
  //                 className="hidden h-6 w-6"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={2}
  //                   d="M6 18L18 6M6 6l12 12"
  //                 />
  //               </svg>
  //             </button>
  //           </div>
  //           <div className="  grid grid-cols-8 items-center justify-items-center w-screen  sm:items-stretch sm:justify-start">
  //             <div className="flex  items-center col-span-2 col-start-1">
  //               <h1 className="text-white">Logo</h1>
  //             </div>
  //             <div className="hidden sm:block sm:ml-6 col-span-6 col-start-3">
  //               <div className="flex space-x-4">
  //                 {/* Add your routes here */}
  //                 <Link
  //                   to="/"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Home
  //                 </Link>
  //                 <Link
  //                   to="/products"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Products
  //                 </Link>
  //                 <Link
  //                   to="/partners"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Partners
  //                 </Link>
  //                 <Link
  //                   to="/aboutus"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   About us
  //                 </Link>
  //                 <Link
  //                   to="/contact"
  //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  //                 >
  //                   Contact
  //                 </Link>
  //               </div>

  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Mobile menu, show/hide based on menu state. */}
  //       <div className="sm:hidden" id="mobile-menu">
  //         <div className="px-2 pt-2 pb-3 space-y-1">
  //           {/* Add your routes here */}
  //           <Link
  //             to="/"
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //           >
  //             Home
  //           </Link>
  //           <Link
  //             to="/about"
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //           >
  //             About
  //           </Link>
  //           <Link
  //             to="/contact"
  //             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  //           >
  //             Contact
  //           </Link>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default Layout;
