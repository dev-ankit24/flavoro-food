import React from 'react'
import FoodCard from './FoodCard';
import FoodData from './Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export default function FoodItem() {
  let handleToast= (name)=>toast.success(`Added ${name}`);

  let category=useSelector((state)=>state.category.category)
  let search =useSelector((state)=>state.search.search)

  
  return (  
<>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap gap-10 justify-center    mx-6 my-10'>
        {
          FoodData.filter((foodItem)=>{
            if(category==="All"){
              return foodItem.name.toLowerCase().includes(search.toLowerCase())
            }
            else{
              return category === foodItem.category && foodItem.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map((item,index)=>{
            return(<FoodCard 
              key={index}
              id={item.id} 
              name={item.name} 
              price={item.price} 
              desc={item.desc} 
              img={item.img}
              category={item.category} 
              rating={item.rating}
              handleToast={handleToast}
              />

            )
          })
        }
        
    </div>
</>
  )
}
