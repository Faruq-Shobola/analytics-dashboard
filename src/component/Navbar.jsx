import React from "react";
import { Search, Person1, ArrowDown, Bell, Calender } from "../assets";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-slate-50 grid grid-cols-10 p-3 items-center">
      <div className="col-span-5 md:col-span-6 flex justify-start md:justify-between items-center px-3 gap-3">
        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <a className="font-medium text-lg md:text-2xl capitalize" href="/">
          dashboard
        </a>

        {/* Search */}
        <div className="hidden md:flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3">
          <img src={Search} alt="Logo" className="w-5 h-5" />
          <input
            type="text"
            className=" w-64 outline-none text-gray-400 text-lg"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="col-span-5 md:col-span-4 flex justify-end md:justify-between items-center gap-3 px-2">
        {/* Calender */}
        <div className="hidden md:flex items-center gap-3  px-4 py-2">
          <img src={Calender} alt="Logo" className="w-5 h-5" />
          <p className="text-base font-semibold">November 15, 2023</p>
        </div>

        {/* Notification */}
        <div className="relative w-10 h-10">
          <img
            src={Bell}
            alt="Logo"
            className="border p-2 border-gray-200 rounded-full w-10 h-10"
          />
          <span className="badge badge-xs badge-info text-right absolute top-0.5 right-0"></span>
        </div>
        {/* Profile */}
        <div className="flex items-center gap-2 md:gap-4 bg-white border border-gray-200 rounded-full px-2 md:px-4 py-1 md:py-2">
          <img src={Person1} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="hidden md:block text-right space-y-3">
            <h5 className="font-medium text-lg leading-3">Justin Bergson</h5>
            <p className="text-base text-gray-500 leading-3">
              Justin@gmail.com
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1 md:p-2">
              <img src={ArrowDown} alt="Logo" className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li className="py-0.5 text-sm text-gray-600">
                <a>Dashboard</a>
              </li>
              <li className="py-0.5 text-sm text-gray-600">
                <a>Notification</a>
              </li>
              <li className="py-0.5 text-sm text-gray-600">
                <a>Setting</a>
              </li>
              <li className="py-0.5 text-sm text-gray-600">
                <a>Message</a>
              </li>
              <li className="py-0.5 text-sm text-gray-600">
                <a>Profile</a>
              </li>
              <li className="py-0.5 text-sm text-red-600">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m4 4H7V8h4"
                    />
                  </svg>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
