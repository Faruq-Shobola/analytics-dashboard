import React from 'react'
import {
  logo,
  DashboardIcon,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Light,
  Moon,
  Setting,
  Icon7,
  Icon8,
  Active,
} from "../assets";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col items-center gap-[10px]">
        <img src={Active} alt="Logo" className='absolute right-0 top-20'/>
        <img src={logo} alt="Logo" />
        <img src={DashboardIcon} alt="Logo" />
        <img src={Icon2} alt="Logo" />
        <img src={Icon3} alt="Logo" />
        <img src={Icon4} alt="Logo" />
        <img src={Icon5} alt="Logo" />
        <img src={Icon6} alt="Logo" />
        <div className="theme p-2 bg-white rounded-full space-y-5">
          <img src={Light} alt="Logo" className="w-9" />
          <img src={Moon} alt="Logo" className="w-9" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <img src={Icon7} alt="Logo" />
        <img src={Setting} alt="Logo" />
        <img src={Icon8} alt="Logo" />
      </div>
    </div>
  );
}

export default Sidebar