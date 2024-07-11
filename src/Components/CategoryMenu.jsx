import React from 'react'

export default function CategoryMenu() {
  return (
    <>
    <div className="mx-6 mt-10">
    <div>
        <h3 className='text-2xl font-semibold font-serif  '>Find the Best Food</h3>
    </div>
    <div className='flex gap-3  ' >
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>All</button>
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>Lunch</button>
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>Breakfast</button>
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>Diner</button>
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>Snacks</button>
    </div>
    </div>
    </>

  )
}
