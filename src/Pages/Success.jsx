import React, { useEffect, useState } from 'react'
import {ClipLoader} from "react-spinners"
export default function Success() {
  let [loader, setLoder]= useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoder(false)
    },4000);
  },[])
  return (
   <>
   
    <div className='flex flex-col items-center justify-center h-screen'>
    
     {
      loader?<ClipLoader/>:
      <div>
        <h1 className=' text-bold text-green-800 text-3xl mb-3'>Order Successfully !</h1>
      <h2 className='text-semibold mb-1 text-xl'>Your oder has been Successfully Placed</h2>
        <h3>Thank You for Connecting <bold>Flavora</bold> </h3>
      </div>
     }

    </div>
   </>
  )
}
