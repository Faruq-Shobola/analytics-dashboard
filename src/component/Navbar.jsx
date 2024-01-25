import React from 'react'
import { Search, Person1, ArrowDown, Bell, Calender } from "../assets";

const Navbar = () => {
  return (
    <div className="bg-slate-50 grid grid-cols-10 p-3 items-center">
      <div className="col-span-6 flex justify-between items-center px-3">
        <a className="font-medium text-2xl capitalize" href="/">
          dashboard
        </a>

        {/* Search */}
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3">
          <img src={Search} alt="Logo" className="w-5 h-5" />
          <input
            type="text"
            className=" w-64 outline-none text-gray-400 text-lg"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="col-span-4 flex justify-between items-center px-2">
        {/* Calender */}
        <div className="flex items-center gap-3  px-4 py-2">
          <img src={Calender} alt="Logo" className="w-5 h-5" />
          <p className='text-base font-semibold'>November 15, 2023</p>
        </div>

        {/* Notification */}
        <img
          src={Bell}
          alt="Logo"
          className="border p-2 border-gray-200 rounded-full w-10 h-10"
        />
        {/* Profile */}
        <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-4 py-2">
          <img src={Person1} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="text-right space-y-3">
            <h5 className="font-medium text-lg leading-3">Justin Bergson</h5>
            <p className="text-base text-gray-500 leading-3">Justin@gmail.com</p>
          </div>
          <img src={ArrowDown} alt="Logo" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Navbar