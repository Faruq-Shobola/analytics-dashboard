import React from "react";
import { Search, Person1, ArrowDown, Bell, Calender } from "../assets";

const Navbar = () => {
  return (
    <div className="grid grid-cols-10 p-3 items-center">
      <div className="col-span-6 flex justify-between items-center px-3">
        <a className="font-medium text-2xl capitalize" href="/">
          dashboard
        </a>

        {/* Search */}
        <div className="flex items-center gap-3 bg-base-100 border border-base-200 rounded-full px-6 py-3">
          <img src={Search} alt="Logo" className="w-5 h-5" />
          <input
            type="text"
            className="bg-transparent w-64 outline-none text-base-content text-lg"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="col-span-4 flex justify-between items-center px-2">
        {/* Calender */}
        <div className="flex items-center gap-3  px-4 py-2">
          <img src={Calender} alt="Logo" className="w-5 h-5" />
          <p className="text-base font-semibold">November 15, 2023</p>
        </div>

        {/* Notification */}
        <div className="relative w-10 h-10">
          <img
            src={Bell}
            alt="Logo"
            className="border p-2 border-base-200 rounded-full w-10 h-10"
          />
        </div>
        {/* Profile */}
        <div className="flex items-center gap-4 bg-base-200 border border-base-100 rounded-full px-4 py-2">
          <img src={Person1} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="text-right space-y-3">
            <h5 className="font-medium text-lg leading-3">Justin Bergson</h5>
            <p className="text-base text-base-content leading-3">
              Justin@gmail.com
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              <img src={ArrowDown} alt="Logo" className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li className="py-0.5 text-sm text-base-content">
                <a>Dashboard</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a>Notification</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a>Setting</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a>Message</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
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
