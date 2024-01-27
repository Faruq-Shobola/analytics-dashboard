import React from 'react'
import Orders from './Orders'
import Platform from './Platform';
import Chart from "./Chart";
import Stat from './Stat';

const Main = () => {
  return (
    <section className="grid grid-cols-10 gap-5 p-0 md:p-3">
      {/* BarChart */}
      <div className="col-span-10 lg:col-span-10 xl:col-span-6 p-5 bg-base-100 rounded-lg border border-base-200">
        <Chart />
      </div>
      {/* Stat */}
      <div className="col-span-10 lg:col-span-10 xl:col-span-4 ">
        <Stat />
      </div>
      {/* Top Orders */}
      <div className="col-span-10 lg:col-span-6 bg-base-100 rounded-lg border border-base-200">
        <Orders />
      </div>
      {/* Top Platforms */}
      <div className="col-span-10 lg:col-span-4 bg-base-100 rounded-lg border border-base-200">
        <Platform />
      </div>
    </section>
  );
}

export default Main