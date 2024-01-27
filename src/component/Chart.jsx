import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState(salesData["monthly"]);
  const [period, setPeriod] = useState("monthly");
  const [biggestSale, setBiggestSale] = useState(0);
  const [activeBar, setActiveBar] = useState(0);
  const [leaveTimeoutId, setLeaveTimeoutId] = useState(null);

  // Get the largest value in sales data
  useEffect(() => {
    const biggestSaleIndex = data.reduce((acc, item, idx, arr) => {
      return item.sales > arr[acc].sales ? idx : acc;
    }, 0);
    setBiggestSale(biggestSaleIndex);
    setActiveBar(biggestSaleIndex);
  }, [data]);

  // Set activeBar to the bar of the highest sales when the mouse hover
  const onMouseOver = (index) => {
    // Clear any existing timeout to prevent it from firing
    if (leaveTimeoutId) {
      clearTimeout(leaveTimeoutId);
      setLeaveTimeoutId(null);
    }
    setActiveBar(index);
  };

  // Set activeBar to the bar of the highest sales when the mouse leaves
  const onMouseOut = () => {
    // Start a new timeout to delay the deactivation
    const timeoutId = setTimeout(() => {
      setActiveBar(biggestSale);
    }, 500);
    setLeaveTimeoutId(timeoutId);
  };

  // handle chart display option(Weekly, MOnthly, Yearly)
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

  // Cleanup the timeout on component unmount
  useEffect(() => {
    return () => {
      if (leaveTimeoutId) {
        clearTimeout(leaveTimeoutId);
      }
    };
  }, [leaveTimeoutId]);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#000",
            padding: "5px 10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <p className="label" style={{ margin: 0 }}>
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
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
          <BarChart data={data} barSize={30} margin={{ left:20 }}>
            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="Green" />
                <stop offset="0.5" stopColor="#34CAA5" />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="name" height={20} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {/* Each bar */}
            <Bar
              dataKey="sales"
              fill="lightgreen"
              barSize={40}
              radius={[25, 25, 0, 0]}
              onMouseOut={onMouseOut}
            >
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeBar ? "url(#colorUv)" : "#15dfee28"}
                  key={`cell-${index}`}
                  onMouseOver={() => onMouseOver(index)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Chart;
