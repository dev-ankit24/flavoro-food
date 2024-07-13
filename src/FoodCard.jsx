import React from 'react'
import { FaStar } from "react-icons/fa";
import { addToCart } from './Redux/Slice/CartSlice';
import { useDispatch } from 'react-redux';

const FoodCard=({id, name, price, rating,img,desc}) =>{
   const dispatch= useDispatch()
  return (<>
     
     <div className='w-[250px] p-5 bg-gray-200 flex flex-col rounded-lg gap-2 '>
        <img  className='w-auto h-[130px] hover:scale-105  transition-all duration-500  cursor-grab ease-in-out' src={img} alt="" />
        <div className='flex justify-between '>
             <h5 className='font-bold  text-sm'>{name}</h5>
            <span className='text-green-600 font-bold text-sm' >&#8377;{price}</span> 
        </div>

        <p className='text-sm font-normal'>{desc.slice(0,75)}</p>
        <div  className='flex justify-between   '>
            <span className='font-bold justify-center  flex gap-1 items-center '> <FaStar  className=' text-yellow-500'/>{rating}</span>
            <button
             onClick={()=>{
               dispatch(addToCart({id,name,price,rating,qty:1}))
               }} 
               className='p-1 hover:bg-green-600 bg-green-500 text-white font-bold rounded-lg tex-sm ' >Add To Cart</button>
        </div>
     </div>
     {/* {console.log(addToCart)??} */}
    
    
  </>
  )
}
export default FoodCard;
