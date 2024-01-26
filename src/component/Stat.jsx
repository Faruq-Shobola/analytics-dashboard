import React from "react";
import { Cart, Box, Rotate, Coin, Increase, Decrease } from "../assets";

const Stat = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5 h-full">
      {/* Stat-1 */}
      <div className="flex justify-between bg-white rounded-lg border border-gray-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Box}
              alt="Logo"
              className="border p-2 border-gray-200 rounded-full w-10 h-10"
            />
            <div></div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-gray-400">Total Order</div>
          <div className="stat-value font-medium">350</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm">
            <div className="px-3 py-1 bg-green-200 text-success rounded-full flex items-center gap-1">
              <img src={Increase} alt="Logo" className="w-3 h-2" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-2 */}
      <div className="flex justify-between bg-white rounded-lg border border-gray-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Rotate}
              alt="Logo"
              className="border p-2 border-gray-200 rounded-full w-10 h-10"
            />
            <div></div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-gray-400">Total Refund</div>
          <div className="stat-value font-medium">270</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm">
            <div className="px-3 py-1 bg-red-200 text-error rounded-full flex items-center gap-1">
              <img src={Decrease} alt="Logo" className="w-3 h-3" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-3 */}
      <div className="flex justify-between bg-white rounded-lg border border-gray-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Cart}
              alt="Logo"
              className="border p-2 border-gray-200 rounded-full w-10 h-10"
            />
            <div></div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-gray-400">Average Sales</div>
          <div className="stat-value font-medium">1567</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm">
            <div className="px-3 py-1 bg-red-200 text-error rounded-full flex items-center gap-1">
              <img src={Decrease} alt="Logo" className="w-3 h-3" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-4 */}
      <div className="flex justify-between bg-white rounded-lg border border-gray-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Coin}
              alt="Logo"
              className="border p-2 border-gray-200 rounded-full w-10 h-10"
            />
            <div></div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-gray-400">Total Income</div>
          <div className="stat-value font-medium">$350.00</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm">
            <div className="px-3 py-1 bg-green-200 text-success rounded-full flex items-center gap-1">
              <img src={Increase} alt="Logo" className="w-3 h-2" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
