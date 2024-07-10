
import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Success from './Pages/Success'
import Home from './Pages/Home'
import Error from './Pages/Error'

export default function () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
