import React from 'react'

const Chart = () => {
  return (
    <div className="overflow-x-auto h-96">
      {/* Heading */}
      <div className="flex justify-between pb-2">
        <h5 className="font-medium text-xl capitalize"> Sales Trends</h5>
        <div className="flex gap-2 items-center">
          <span className="font-medium text-base">Sort by:</span>
          <select className="select select-ghost select-sm border border-gray-400 rounded-full">
            <option selected> weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      {/* Bar Chart */}
    </div>
  );
}

export default Chart