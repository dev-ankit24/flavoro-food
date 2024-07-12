import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { ItemCart } from './ItemCart';

export const Cart = () => {
  return (
    <>
    <div className='fixed  bg-white p-5 w-full lg:w-[20vw] top-0 right-0 h-full'>
        <div className='flex  my-4 justify-between items-center'> 
            <span className='text-gray-600 font-bold text-xl'>My Order </span>
            <RxCross2 className='text-gray-500 font-bold cursor-pointer border-2 text-xl border-gray-600 rounded-md hover:text-red-600 hover:border-red-600 ' />
        </div>
        <ItemCart/>
        <ItemCart/>
        <ItemCart/>
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gry-500'>Items:</h3>
            <h3 className='font-semibold text-gry-500'>Total Amount:</h3>
            <hr  className='w-[90vw] lg:w-[17vw]  my-2'/>
            <button className='bg-green-500 font-bold text-white py-2 px-3 mb-5 rounded-lg lg:w-[17vw] w-[920] hover:bg-green-600'>Checkout</button>
        </div>
    </div>
    </>
  )
}
