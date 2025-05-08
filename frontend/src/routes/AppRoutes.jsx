import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'


const AppRoutes = () => {
  return (
   <Routes>
    <Route path={"/"} element={<Home/>} />
    <Route path={"/shop"} element={<Shop/>} />
    <Route path={"/cart"} element={<Cart/>} />
   
   
   </Routes>
  )
}

export default AppRoutes