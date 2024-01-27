import React, {useState} from 'react'
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col items-center gap-[10px]">
        <img src={Active} alt="Logo" className="absolute right-0 top-20" />
        <img src={logo} alt="Logo" />
        <img src={DashboardIcon} alt="Logo" />
        <img src={Icon2} alt="Logo" />
        <img src={Icon3} alt="Logo" />
        <img src={Icon4} alt="Logo" />
        <img src={Icon5} alt="Logo" />
        <img src={Icon6} alt="Logo" />
        {/* Theme Controller */}
        <div class="relative toggle-container p-2 bg-base-200 rounded-full flex items-center justify-between w-max">
          <input
            id="theme-toggle"
            type="checkbox"
            class="sr-only toggle theme-controller"
            value="dark"
            checked={isDarkMode}
            onChange={handleThemeChange}
          />
          {/* Background that moves based on the theme */}
          <div
            className={`toggle-bg w-10 h-10 absolute left-2 top-2 rounded-full p-1 transition-transform duration-300 ease-in-out ${
              isDarkMode
                ? "translate-y-12 bg-gray-600"
                : "translate-y-0 bg-green-600"
            }`}
          ></div>
          <label
            for="theme-toggle"
            class="flex items-center cursor-pointer flex-col gap-2"
          >
            <div class="toggle-bg z-10 rounded-full p-1 transition-transform duration-300 ease-in-out">
              <img
                src={Light}
                alt="Light Theme"
                className={`w-8 h-8 ${
                  isDarkMode ? "opacity-50" : "opacity-100"
                }`}
              />
            </div>
            <div className="toggle-bg z-10 rounded-full p-1 transition-transform duration-300 ease-in-out">
              <img
                src={Moon}
                alt="Dark Theme"
                className={`w-8 h-8 ${
                  isDarkMode ? "opacity-100" : "opacity-50"
                }`}
              />
            </div>
          </label>
        </div>
      </div>
    // </div>
  );
}

export default Sidebar