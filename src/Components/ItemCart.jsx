import React from 'react'
import { AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
export const ItemCart = () => {
  return (
    <>  
      <div className='flex shadow-md cursor-pointer shadow-gray-300  hover:shadow-blue-300 p-2 gap-2 mt-2 rounded-md'>
         <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" className='w-[40px] h-[40px]  hover:scale-105  transition-all duration-500' />
         <div className=''>
          <div className="flex text-center">
          <h2 className='font-semibold text-gray-600 '>Onian Pizza</h2>
          <MdDeleteForever className=' absolute right-7 hover:text-red-500 cursor-pointer' />
          </div>
          <div className='flex justify-between right-0'>
            <span className='text-green-500 font-bold'>&#8377; 150</span>
          <div className='flex gap-1 justify-center items-center absolute right-7'>
            <AiOutlinePlus  className='border-2 boder-gray-500  text-2xl p-1 rounded-lg hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer' />
            <span>1</span>
            <AiOutlineMinus className='border-2 boder-gray-500  text-2xl p-1 rounded-lg hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer' />
          </div>
          </div>
         </div>
      </div>
    </>
  )
}
