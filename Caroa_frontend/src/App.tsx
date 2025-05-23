import AppRoutes from './router/index.tsx'
import {Navbar} from './components/navbar/Navbar.tsx'
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
