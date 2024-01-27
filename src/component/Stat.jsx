import React from "react";
import LineData from "../line_chart_data.json";
import { Cart, Box, Rotate, Coin, Increase, Decrease } from "../assets";
import { Area, AreaChart, YAxis, XAxis, ResponsiveContainer } from "recharts";

const Stat = () => {
  const data1 = LineData["increase"];
  const data2 = LineData["decrease"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 h-full">
      {/* Stat-1 */}
      <div className="flex justify-between bg-base-100 rounded-lg border border-base-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Box}
              alt="Logo"
              className="border p-2 border-base-300 rounded-full w-10 h-10"
            />
            {/* Line chart 1 */}
            <div className="w-32 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data1} margin={{ top: -5 }}>
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide={true} />
                  <YAxis hide={true} />
                  <Area
                    dataKey="value"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-base-content">
            Total Order
          </div>
          <div className="stat-value font-medium">350</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm pt-2">
            <div className="px-3 py-1 bg-green-200 text-success rounded-full flex items-center gap-1">
              <img src={Increase} alt="Logo" className="w-3 h-2" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-2 */}
      <div className="flex justify-between bg-base-100 rounded-lg border border-base-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Rotate}
              alt="Logo"
              className="border p-2 border-base-300 rounded-full w-10 h-10"
            />
            {/* Line chart 2 */}
            <div className="w-32 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data2} margin={{ top: -5 }}>
                  <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FECACA" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FECACA" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide={true} />
                  <YAxis hide={true} />
                  <Area
                    dataKey="value"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#color2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-base-content">
            Total Refund
          </div>
          <div className="stat-value font-medium">270</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm pt-2">
            <div className="px-3 py-1 bg-red-200 text-error rounded-full flex items-center gap-1">
              <img src={Decrease} alt="Logo" className="w-3 h-3" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-3 */}
      <div className="flex justify-between bg-base-100 rounded-lg border border-base-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Cart}
              alt="Logo"
              className="border p-2 border-base-300 rounded-full w-10 h-10"
            />
            {/* Line chart 3 */}
            <div className="w-32 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data2} margin={{ top: -5 }}>
                  <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FECACA" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FECACA" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide={true} />
                  <YAxis hide={true} />
                  <Area
                    dataKey="value"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#color2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-base-content">
            Average Sales
          </div>
          <div className="stat-value font-medium">1567</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm pt-2">
            <div className="px-3 py-1 bg-red-200 text-error rounded-full flex items-center gap-1">
              <img src={Decrease} alt="Logo" className="w-3 h-3" />
              <span>25.3%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
      {/* Stat-4 */}
      <div className="flex justify-between bg-base-100 rounded-lg border border-base-200">
        <div className="stat !w-full">
          {/* icon & chart */}
          <div className="flex justify-between">
            <img
              src={Coin}
              alt="Logo"
              className="border p-2 border-base-300 rounded-full w-10 h-10"
            />
            {/* Line chart 4 */}
            <div className="w-32 h-14">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data1} margin={{ top: -5 }}>
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide={true} />
                  <YAxis hide={true} />
                  <Area
                    dataKey="value"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* stat details */}
          <div className="stat-title text-xl text-base-content">
            Total Income
          </div>
          <div className="stat-value font-medium">$350.00</div>
          <div className="stat-desc flex items-center gap-2 flex-wrap text-sm pt-2">
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
