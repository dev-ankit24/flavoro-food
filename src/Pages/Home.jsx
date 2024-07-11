import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../FoodItem'

export default function Home() {
  return (
    <>
        <Navbar/>
        <CategoryMenu/>
        <FoodItem/>
    </>
  )
}
