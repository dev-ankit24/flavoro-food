import React from 'react'
import FoodCard from './FoodCard';
import FoodData from './Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';

export default function FoodItem() {
  let handleToast= (name)=>toast.success(`Added ${name}`);
  
  return (  
<>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap gap-10 justify-center    mx-6 my-10'>
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
                handleToast={handleToast}
                />)
            })
        }
        
    </div>
</>
  )
}
