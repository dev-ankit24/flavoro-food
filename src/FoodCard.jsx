import React from 'react'
import { FaStar } from "react-icons/fa";

export default function FoodCard(props) {
  return (<>
     
     <div className='w-[250px] p-5 bg-gray-200 flex flex-col rounded-lg gap-2 '>
        <img  className='w-auto h-[130px] hover:scale-105  transition-all duration-500  cursor-grab ease-in-out' src={props.img} alt="" />
        <div className='flex justify-between '>
             <h5 className='font-bold  text-sm'>{props.name}</h5>
            <span className='text-green-600 font-bold text-sm' >&#8377;{props.price}</span>
        </div>
        <p className='text-sm font-normal'>{props.desc.slice(0,75)}</p>
        <div  className='flex justify-between   '>
            <span className='font-bold justify-center  flex gap-1 items-center '> <FaStar  className=' text-yellow-500'/>{props.rating}</span>
            <button className='p-1 hover:bg-green-600 bg-green-500 text-white font-bold rounded-lg tex-sm '>Add To Cart</button>
        </div>
     </div>
    
    
  </>
  )
}
