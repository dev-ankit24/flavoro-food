import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Slice/CategorySlice';


export default function CategoryMenu() {
  let [categories, setCategories]= useState([]);
  let dispatch =useDispatch()
  let selectedCategory =useSelector((state)=>state.category.category)

  const listCategories=()=>{
  let findCategories= [...new Set(FoodData.map((food)=>food.category))];
  setCategories(findCategories)
  }
  useEffect(()=>{
    listCategories()
  },[])
  return (
    <>
    <div className="mx-6 mt-10">
    <div>
        <h3 className='text-2xl font-semibold font-serif  '>Find the Best Food</h3>
    </div>
    <div className='flex gap-2 lg:gap-3  ' >
      {console.log(selectedCategory)}
        <button
        onClick={()=>dispatch(setCategory("All"))}
        className={`text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg ${ selectedCategory === "All" && "bg-green-600 text-white"}` }>All</button>
       {
       categories.map((item,index)=>{
        return(<button key={index} 
          // select item onClick function
          onClick={()=>dispatch(setCategory(item))}
        className={`text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg ${selectedCategory===item && "bg-green-600 text-white"}`}>
          {item}</button>
        )
       })
       }
    </div>
    </div>
    </>

  )
}
