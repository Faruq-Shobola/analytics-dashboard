import React from 'react'
import Orders from './Orders'
import Platform from './Platform';
import Chart from "./Chart";
import Stat from './Stat';

const Main = () => {
  return (
    <section className="grid grid-cols-10 gap-5 p-3">
      <div className="col-span-6 p-5 bg-base-100 rounded-lg border border-base-200">
        <Chart />
      </div>
      <div className="col-span-4">
        <Stat />
      </div>
      <div className="col-span-6 bg-base-100 rounded-lg border border-base-200">
        <Orders />
      </div>
      <div className="col-span-4 bg-base-100 rounded-lg border border-base-200">
        <Platform />
      </div>
    </section>
  );
}

export default Main