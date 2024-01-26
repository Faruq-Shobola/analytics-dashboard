import React, { useState } from "react";
import salesData from "../sales_data.json";
import {
  Bar,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {

  // Get the largest value in sales data
  const getBiggestSales = (data) => {
    const biggestSale = data.reduce((acc, item, idx, arr) => {
      return item.sales > arr[acc].sales ? idx : acc;
    }, 0)
    return biggestSale
    
  }

  const [data, setData] = useState(salesData["monthly"]);
  const [period, setPeriod] = useState("monthly");
  const [biggestSales, setBiggestSales] = useState(getBiggestSales(data))
  const [activeBar, setActiveBar] = useState(biggestSales, 0)

  // Set activeBar to the bar of the highest sales when the mouse hover
  const onMouseOver = (index) => {
    setActiveBar(index);
  };

  // Set activeBar to the bar of the highest sales when the mouse leaves
  const onMouseOut = () => {
    setActiveBar(biggestSales, 0);
  }

  // handle chart option
  const handleChange = (event) => {
    const value = event.target.value;
    setPeriod(value);

    // set data state based on user option
    setData(
      value === "monthly"
        ? salesData["monthly"]
        : value === "weekly"
        ? salesData["weekly"]
        : salesData["yearly"]
    );
  };

  return (
    <div className="overflow-x-auto h-96">
      {/* Heading */}
      <div className="flex justify-between pb-2">
        <h5 className="font-medium text-xl capitalize"> Sales Trends</h5>
        <div className="flex gap-2 items-center pt-1 pr-1">
          <span className="font-medium text-base">Sort by:</span>
          {/* Select field */}
          <select
            onChange={handleChange}
            className="select select-bordered select-sm rounded-full"
            value={period}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly" selected>
              Monthly
            </option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      {/* Bar Chart */}
      <section className="pt-3">
        <ResponsiveContainer width="100%" height={325}>
          <BarChart data={data} barSize={30}>
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="green" />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" height={20} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="lightgreen" barSize={40} onMouseOut={onMouseOut}>
              {
                data.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={index === activeBar ? 'url(#colorUv)' : 'lightblue'}
                    key={`cell-${index}`}
                    onMouseOver={() => onMouseOver(index)}
                  />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Chart;
