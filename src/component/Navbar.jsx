import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Search, Person1, Bell, Calender } from "../assets";

const Navbar = ({ toggleSidebar }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="grid grid-cols-10 p-3 items-center">
      <div className="col-span-5 lg:col-span-4 xl:col-span-5 2xl:col-span-6 flex justify-start md:justify-between items-center px-1 md:px-3 gap-3">
        <div className="block md:hidden flex justify-center items-center rounded border border-base-200 bg-base-100 p-2">
          {/* Hamburger menu icon */}
          <button
            className="rounded bg-base-100 p-2 text-base-content transition hover:text-secondary-content"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <a className="font-medium text-lg lg:text-2xl capitalize" href="/">
          dashboard
        </a>

        {/* Search */}
        <div className="hidden md:flex items-center gap-3 bg-base-100 border border-neutral-content rounded-full p-3 lg:px-6 lg:py-3">
          <img src={Search} alt="Logo" className="w-5 h-5" />
          <input
            type="text"
            className="bg-transparent w-40 xl:w-64 outline-none text-base-content text-lg"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="col-span-5 lg:col-span-6 xl:col-span-5 2xl:col-span-4 flex justify-end items-center gap-3 px-1 md:px-4 lg:gap-6">
        {/* Calender */}
        <div className="hidden md:flex items-center gap-3">
          <img src={Calender} alt="Logo" className="w-5 h-5" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            className="w-36 text-base font-semibold bg-transparent"
          />
        </div>

        {/* Notification */}
        <div className="relative w-10 h-10">
          <img
            src={Bell}
            alt="bell"
            className="border p-2 border-neutral-content rounded-full w-10 h-10"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 lg:gap-4 bg-base-200 border border-neutral-content rounded-full px-2 lg:px-4 py-1 lg:py-2">
          <img src={Person1} alt="avatar" className="w-10 h-10 rounded-full" />
          <div className="hidden lg:block text-right space-y-3">
            <h5 className="font-medium text-lg leading-3">Justin Bergson</h5>
            <p className="text-base text-base-content leading-3">
              Justin@gmail.com
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-1 lg:p-2 text-base-content"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Arrow - Down 2">
                  <g id="Iconly/Light-Outline/Arrow---Down-2">
                    <g id="Arrow---Down-2">
                      <path
                        id="Stroke-1"
                        d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                        fill="#0D062D"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* Avatar Dropdown */}
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li className="py-0.5 text-sm text-base-content">
                <a href="/">Dashboard</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a href="/">Notification</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a href="/">Setting</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a href="/">Message</a>
              </li>
              <li className="py-0.5 text-sm text-base-content">
                <a href="/">Profile</a>
              </li>
              <li className="py-0.5 text-sm text-red-600">
                <a href="/">
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
