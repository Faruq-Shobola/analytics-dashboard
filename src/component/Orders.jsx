import React from "react";
import {
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
  DocumentDownload,
} from "../assets";

const Orders = () => {
  return (
    <section className="overflow-x-auto h-96">
      {/* Heading */}
      <section className="flex justify-between  p-5 pb-2">
        <h5 className="font-medium text-xl capitalize"> last orders</h5>
        <a className="text-base text-green-500 capitalize" href="/">
          see all
        </a>
      </section>
      {/* Orders Table */}
      <section className="p-5 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base capitalize text-gray-400 font-medium p-1 pb-3">
                name
              </th>
              <th className="text-base capitalize text-gray-400 font-medium p-1 pb-3">
                date
              </th>
              <th className="text-base capitalize text-gray-400 font-medium p-1 pb-3">
                amount
              </th>
              <th className="text-base capitalize text-gray-400 font-medium p-1 pb-3">
                status
              </th>
              <th className="text-base capitalize text-gray-400 font-medium p-1 pb-3">
                invoice
              </th>
            </tr>
          </thead>
          <tbody className="border-0">
            {/* row 1 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person6}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 15, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$80,000</td>
              <td className="p-1 py-3 text-base text-green-500 capitalize">
                paid
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer  text-base-content">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person3}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Jaydon Vaccaro</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 15, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$150,000</td>
              <td className="p-1 py-3 text-base text-red-500 capitalize">
                refund
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person2}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Corey Schleifer</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 14, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$87,000</td>
              <td className="p-1 py-3 text-base text-green-500 capitalize">
                paid
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person4}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Cooper Press</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 14, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$100,000</td>
              <td className="p-1 py-3 text-base text-red-500 capitalize">
                refund
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person5}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Phillip Lubin</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 13, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$78,000</td>
              <td className="p-1 py-3 text-base text-green-500 capitalize">
                paid
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 6 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person1}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Thomas wall</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 13 2023</td>
              <td className="p-1 py-3 text-base font-medium">$120,000</td>
              <td className="p-1 py-3 text-base text-red-500 capitalize">
                refund
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
            {/* row 7 */}
            <tr>
              <td className="p-1 py-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img
                        src={Person3}
                        alt="Img"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Gabs Matin</div>
                  </div>
                </div>
              </td>
              <td className="p-1 py-3 text-base text-gray-400">Nov 12, 2023</td>
              <td className="p-1 py-3 text-base font-medium">$58,000</td>
              <td className="p-1 py-3 text-base text-green-500 capitalize">
                paid
              </td>
              <td className="p-1 py-3">
                <div className="flex items-center gap-1 cursor-pointer">
                 <img src={DocumentDownload} alt="Logo" className="" />
                  <p className="text-base capitalize">view</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Orders;
