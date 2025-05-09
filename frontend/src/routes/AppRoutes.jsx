import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'
import List from '../pages/List'
import ListPage from '../pages/ListPage'
import ProductDetail from '../components/products/ProductDetail'


const AppRoutes = () => {
  return (
   <Routes>
    <Route path={"/"} element={<Home/>} />
    <Route path={"/shop"} element={<Shop/>} />
    <Route path={"/cart"} element={<Cart/>} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path={"/list"} element={<ListPage/>} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  )
}

export default AppRoutes