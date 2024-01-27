import React, { useState } from 'react'
import Main from './component/Main'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'

const Dashboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="">
        {/* {isSidebarOpen && */}
          <aside className={`fixed z-50 h-screen top-0 py-5 bg-base-100 border-r border-base-200 transition-all duration-500 ${isSidebarOpen ? 'left-0' : '-left-full md:left-0'}`}>
           <Sidebar />
           <div className="absolute top-5 left-24 z-100 rounded border border-neutral bg-base-100 p-2 flex justify-center items-center">
              <button className="btn transition btn-ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
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
        {/* } */}
          <div className='ml-0 md:!ml-20'>
            <nav className="bg-base-100 top-0 left-0 sticky z-10 border-b border-base-200 shadow-xs shadow-base-secondary">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            </nav>
            <main className="bg-base-200 p-4">
                <Main />
            </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard