import React from 'react'
import Orders from './Orders'

const Main = () => {
  return (
  <section className="grid grid-cols-10 p-3">
    <div className='col-span-6 p-5 bg-white rounded-lg border border-gray-200'>
      <Orders/>
    </div>
  </section>
  )
}

export default Main