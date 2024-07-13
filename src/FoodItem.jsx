import React from 'react'
import FoodCard from './FoodCard';
import FoodData from './Data/FoodData';

export default function FoodItem() {
  return (
<>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start  mx-6 my-10'>
        {
            FoodData.map((item , index)=>{
                return( 
                <FoodCard 
                key={index}
                id={item.id} 
                name={item.name} 
                price={item.price} 
                desc={item.desc} 
                img={item.img}
                category={item.category} 
                rating={item.rating}
                />)
            })
        }
        
    </div>
</>
  )
}
