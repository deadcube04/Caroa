import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Product } from '../pages/Product/Product'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produto/:title" element={<Product />} />
    </Routes>
  )
}

export default AppRoutes
