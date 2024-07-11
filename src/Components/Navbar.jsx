import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='flex  flex-col lg:flex-row justify-between py-3 mx-6'>
      <div className='lg:flex-col flex-row flex justify-between '>
        <h3 className='text-xl text-gray-600 font-bold py-3'> { new Date().toUTCString().slice(0,16)}</h3>
        <h1 className='text-3xl font-bold py-2 '>Flavoro Foods</h1>
      </div>
      <div>
        <input type="search" name='search' placeholder='Search Here Food' className='border border-gray-400  rounded-lg outline-none py-3 my-2 w-full lg:w-[25vw]' />
      </div>
    </nav>
    </>
  )
}
