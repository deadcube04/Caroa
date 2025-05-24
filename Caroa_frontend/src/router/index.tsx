import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Product } from '../pages/Product/Product'
import { Products } from '../pages/Products/Products'
import { Collections } from '../pages/Collections/Collections'
import { Cart } from '../pages/Cart/Cart'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colecoes" element={<Collections />} />
      <Route path="/produtos" element={<Products />}></Route>
      <Route path="/produto/:title" element={<Product />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes
