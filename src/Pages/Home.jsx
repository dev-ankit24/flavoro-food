import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../FoodItem'
import { Cart } from '../Components/Cart'

export default function Home() {
  return (
    <>
        <Navbar/>
        <CategoryMenu/>
        <FoodItem/>
        <Cart/>
    </>
  )
}
