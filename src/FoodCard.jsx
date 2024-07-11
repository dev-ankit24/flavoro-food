import React from 'react'

export default function FoodCard() {
  return (<>
     
     <div className='w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2 '>
        <img  className='w-auto h-[130px] hover:scale-105  transition-all duration-500  cursor-grab ease-in-out' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
        <div className='flex justify-between '>
             <h5 className='font-bold  text-sm'>Onion Pizza</h5>
            <span className='text-green-600 font-bold text-sm' >&#8377;150</span>
        </div>
        <p className='text-sm font-normal'>
    A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. 

        </p>
        <div  className='flex justify-between   '>
            <span className='font-bold justify-center  items-center '>4.5</span>
            <button className='p-1 hover:bg-green-600 bg-green-500 text-white font-bold rounded-lg tex-sm'>Add To Cart</button>
        </div>
     </div>
    
    
  </>
  )
}
