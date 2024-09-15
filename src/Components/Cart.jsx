import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ItemCart } from './ItemCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Cart = () => {
  let [activeCart, SetActiveCart] =useState(false)
  let cartItem =useSelector((state)=>state.cart.cart)
  
  let totalQty=cartItem.reduce((totalQty,item)=>totalQty+item.qty, 0)    //  total count qtt
  let totalPrice=cartItem.reduce((totalPrice,item)=>totalPrice+item.qty * item.price,0)

  return (
    <>
    <div className={`fixed  bg-white p-5 w-full  lg:w-[20vw] top-0 right-0 h-full ${activeCart?'translate-x-0':'translate-x-full'} transition-all duration-500 z-50`}>
        <div className='flex  my-4 justify-between items-center'> 
            <span className='text-gray-600 font-bold text-xl'>My Order </span>
            <RxCross2 onClick={()=>SetActiveCart(!activeCart)} className='text-gray-500 font-bold cursor-pointer border-2 text-xl border-gray-600 rounded-md hover:text-red-600 hover:border-red-600 ' />
        </div>
        { 
        cartItem.length?
        cartItem.map((item, index)=>{
          return  <ItemCart key={index}
                      id={item.id}
                      img={item.img}
                      price={item.price}
                      name={item.name}
                      qty={item.qty}
          />
        }):<h4 className='text-xl text-center font-bold text-gray-800'>Your Cart is Empty</h4>}
              
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gry-500'>Items:{totalQty}</h3>
            <h3 className='font-semibold text-gry-500'>Total Amount:{totalPrice}</h3>
            <hr  className='w-[90vw] lg:w-[17vw]  my-2'/>
            <button className='bg-green-500 font-bold text-white py-2 px-3 mb-5 rounded-lg lg:w-[17vw] w-[920] hover:bg-green-600'><Link to='/success'>CheckOut</Link></button>
        </div>
    </div>
        <FaShoppingCart onClick={()=>SetActiveCart(!activeCart)} className={` cursor-pointer fixed bottom-10 right-8  rounded-full shadow-md bg-blue-200 text-5xl  p-3 ${totalQty>0 && "animate-bounce delay-500 transition-all"} `}/>
    </>
  )
}
