import React from 'react'

const Chart = () => {
  return (
    <div className="overflow-x-auto h-96">
      {/* Heading */}
      <div className="flex justify-between pb-2">
        <h5 className="font-medium text-xl capitalize"> Sales Trends</h5>
        <div className="flex gap-2 items-center pt-1 pr-1">
          <span className="font-medium text-base">Sort by:</span>
          {/* Select field */}
          <select className="select select-bordered select-sm rounded-full">
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