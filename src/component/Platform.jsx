import React from "react";

const Platform = () => {
  return (
    <section className="overflow-auto h-96">
      <section className="flex flex-col">
        {/* Heading */}
        <section className="flex justify-between pb-2">
          <h5 className="font-medium text-xl capitalize"> top platforms</h5>
          <a className="text-base text-green-500 capitalize" href="/">
            see all
          </a>
        </section>
        {/* Platforms Section */}
        <section className="pt-5 flex flex-col gap-4">
          {/* platform 1 */}
          <figure>
            <h5 className="font-medium text-xl capitalize"> Book Bazaar</h5>
            <progress
              className="progress progress-primary w-full"
              value="70"
              max="100"
            ></progress>
            <p className="flex justify-between ">
              <span className="text-lg text-gray-400">$2,500,000</span>
              <span className="text-lg text-gray-400">+15%</span>
            </p>
          </figure>
          {/* platform 2 */}
          <figure>
            <h5 className="font-medium text-xl capitalize">Artisan Aisle</h5>
            <progress
              className="progress progress-info w-full"
              value="50"
              max="100"
            ></progress>
            <p className="flex justify-between ">
              <span className="text-lg text-gray-400">$1,800,000</span>
              <span className="text-lg text-gray-400">+10%</span>
            </p>
          </figure>
          {/* platform 3 */}
          <figure>
            <h5 className="font-medium text-xl capitalize">Toy Troop</h5>
            <progress
              className="progress progress-warning w-full"
              value="30"
              max="100"
            ></progress>
            <p className="flex justify-between ">
              <span className="text-lg text-gray-400">$1,200,000</span>
              <span className="text-lg text-gray-400">+8%</span>
            </p>
          </figure>
          {/* platform 4 */}
          <figure>
            <h5 className="font-medium text-xl capitalize"> XStore</h5>
            <progress
              className="progress progress-secondary w-full"
              value="85"
              max="100"
            ></progress>
            <p className="flex justify-between ">
              <span className="text-lg text-gray-400">$1,000,000</span>
              <span className="text-lg text-gray-400">+5%</span>
            </p>
          </figure>
          {/* platform 5 */}
          <figure>
            <h5 className="font-medium text-xl capitalize">park doen</h5>
            <progress
              className="progress progress-error w-full"
              value="45"
              max="100"
            ></progress>
            <p className="flex justify-between ">
              <span className="text-lg text-gray-400">$800,000</span>
              <span className="text-lg text-gray-400">+10%</span>
            </p>
          </figure>
        </section>
      </section>
    </section>
  );
};

export default Platform;
