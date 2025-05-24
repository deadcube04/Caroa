import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { Product } from '../pages/Product/Product'
import { Products } from '../pages/Products/Products'
import { Collections } from '../pages/Collections/Collections'
import { Cart } from '../pages/Cart/Cart'
import About from '../pages/About/About'
import Collection from '../pages/Collection/Collection'
import OrderHistory from '../pages/OrderHistory/OrderHistory'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colecoes" element={<Collections />} />
      <Route path="/produtos" element={<Products />}></Route>
      <Route path="/produto/:title" element={<Product />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/colecao/:id" element={<Collection />} />
      <Route path="/historico" element={<OrderHistory />} />
    </Routes>
  )
}

export default AppRoutes
