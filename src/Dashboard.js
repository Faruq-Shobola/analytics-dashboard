import React, { useState } from 'react'
import Main from './component/Main'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'

const Dashboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="">
          <aside className={`fixed z-20 h-screen top-0 py-5 bg-slate-100 transition-all duration-500 ${isSidebarOpen ? 'left-0' : '-left-full md:left-0'}`}>
           <Sidebar />
           <div className="block md:hidden absolute top-5 left-24 flex justify-center items-center rounded border border-black bg-gray-100 p-2">
              <button className="text-gray-800 transition hover:text-gray-800/75 btn-ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
          </div>
          </aside> 
          <div className='ml-0 md:!ml-20'>
            <nav className="top-0 left-0 sticky z-10">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            </nav>
            <main className="bg-gray-50 p-4">
                <Main />
            </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard