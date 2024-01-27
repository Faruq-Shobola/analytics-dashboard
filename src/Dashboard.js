import React from 'react'
import Main from './component/Main'
import Navbar from './component/Navbar'
// import Sidebar from './component/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className="">
        {/* <aside className="hidden md:block fixed overflow-auto h-screen left-0 top-0 w-20 py-5 bg-slate-100">
          <Sidebar />
        </aside> */}
        <div className='ml-0 md:!ml-20'>
            <nav className="hidden md:block top-0 left-0 sticky z-10">
            <Navbar />
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