import AppRoutes from './router/index.tsx'
import {Navbar} from './components/navbar/Navbar.tsx'
import { Footer } from './components/footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <AppRoutes />
      <Footer />
    </CartProvider>
  )
}

export default App
