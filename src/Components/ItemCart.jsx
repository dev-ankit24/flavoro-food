import React from 'react'
import { AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { removeToCart } from '../Redux/Slice/CartSlice';
import { useDispatch } from 'react-redux';

export const ItemCart = ( {id,img,price,name,qty })=> {
  let dispatch=useDispatch()
  return (
    <>  
      <div className='flex shadow-md cursor-pointer shadow-gray-300  hover:shadow-blue-300 p-2 gap-2 mt-2 rounded-md'>
          <MdDeleteForever onClick={()=>dispatch(removeToCart({id,price,img,qty}))} className=' absolute right-7 hover:text-red-500 cursor-pointer' />
         <img src={img} alt="" className='w-[40px] h-[40px]  hover:scale-105  transition-all duration-500' />
         <div className='leading-5'>
          <div className="flex text-center">
          <h2 className='font-semibold text-gray-600 '>{name}</h2>
          </div>
          <div className='flex justify-between right-0'>
            <span className='text-green-500 font-bold'>&#8377; {price}</span>
          <div className='flex gap-1 justify-center items-center absolute right-7'>
            <AiOutlineMinus className='border-2 boder-gray-500  text-2xl p-1 rounded-lg hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <AiOutlinePlus  className='border-2 boder-gray-500  text-2xl p-1 rounded-lg hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer' />
          </div>
          </div>
         </div>
      </div>
    </>
  )
}
