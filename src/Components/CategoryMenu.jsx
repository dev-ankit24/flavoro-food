import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData';

export default function CategoryMenu() {
  let [categories, setCategories]= useState([]);
  const listCategories=()=>{
  let findCategories= [...new Set(FoodData.map((food)=>food.category))];
  setCategories(findCategories)
  console.log(categories);
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
        <button className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>
          All</button>
       {categories.map((item,index)=>{
        return(<button key={index} className='text-xl  font-semibold py-2 px-3 bg-gray-300 hover:bg-green-600 hover:text-white  my-4 rounded-lg'>
          {item}</button>
        )
       })}
    </div>
    </div>
    </>

  )
}
